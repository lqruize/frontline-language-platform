import fs from "node:fs";

const file = "data/courses/kitchen-survival-v1.ts";
const text = fs.readFileSync(file, "utf8");
const start = text.indexOf("export const kitchenSurvivalCourse = ");
const end = text.indexOf("\n} as const satisfies", start);
if (start < 0 || end < 0) throw new Error("Could not find kitchenSurvivalCourse export.");
const source = text.slice(start + "export const kitchenSurvivalCourse = ".length, end + 2);
const course = Function("return (" + source + ")")();
const normalize = (value) => String(value || "")
  .toLowerCase()
  .replace(/[“”"'.?!,;:]/g, "")
  .replace(/\s+/g, " ")
  .trim();

const active = course.items.filter((item) => item.active);
const errors = [];
const responseCounts = new Map();
const weakResponseCounts = new Map();
const weakResponses = new Set([
  "Got it.",
  "Okay, I’ll do it now.",
  "Can you show me how?",
  "Thanks for checking.",
  "Let me confirm first.",
  "I’m sorry about that."
]);

for (const item of active) {
  if (!Array.isArray(item.vocabularyNotes) || item.vocabularyNotes.length === 0) {
    errors.push({ id: item.id, type: "missing vocabularyNotes" });
  }
  for (const note of item.vocabularyNotes || []) {
    if (["重点词组", "常用表达", "工作关键词"].includes(note.chinese)) {
      errors.push({ id: item.id, type: "placeholder vocabulary chinese", term: note.term });
    }
    if (note.note === "这句话里的工作关键词。") {
      errors.push({ id: item.id, type: "placeholder vocabulary note", term: note.term });
    }
    if (normalize(note.pronunciation) === normalize(note.term)) {
      errors.push({ id: item.id, type: "pronunciation copies term", term: note.term });
    }
    if (normalize(note.example) === normalize(item.english)) {
      errors.push({ id: item.id, type: "example copies english", term: note.term });
    }
    for (const field of ["term", "chinese", "pronunciation", "note", "example"]) {
      if (!String(note[field] || "").trim()) errors.push({ id: item.id, type: "empty vocabulary field", field });
    }
  }

  if (!Array.isArray(item.variants) || item.variants.length === 0) {
    errors.push({ id: item.id, type: "missing variants" });
  }
  const variantSeen = new Set();
  for (const variant of item.variants || []) {
    const normalized = normalize(variant);
    if (normalized === normalize(item.english)) errors.push({ id: item.id, type: "variant copies english", variant });
    if (variantSeen.has(normalized)) errors.push({ id: item.id, type: "duplicate variant", variant });
    variantSeen.add(normalized);
  }

  if (!Array.isArray(item.recommendedResponses) || item.recommendedResponses.length === 0) {
    errors.push({ id: item.id, type: "missing recommendedResponses" });
  }

  const mechanicalText = JSON.stringify({ variants: item.variants, recommendedResponses: item.recommendedResponses, vocabularyNotes: item.vocabularyNotes, dialogue: (item.dialogue || []).slice(1) });
  const mechanicalPatterns = [
    /the which/i,
    /handling [a-z]+( [a-z]+)?/i,
    /ask about the/i,
    /Should I finish the/i,
    /I will ask before handling/i,
    /I will report the/i,
    /Please i/i,
    /Please the/i,
    /What exactly exactly/i,
    /comes fries/i,
    /sorry Which/i,
    /Where nearest/i,
    /When rent/i,
    /long does/i,
    /directions address/i,
    /looking room/i
  ];
  for (const pattern of mechanicalPatterns) {
    if (pattern.test(mechanicalText)) errors.push({ id: item.id, type: "mechanical generated phrase", pattern: String(pattern) });
  }

  if (Array.isArray(item.dialogue) && item.dialogue.length > 0) {
    const first = item.dialogue[0];
    if (first.speakerRole !== item.speakerRole && first.speakerRole !== item.role) {
      errors.push({ id: item.id, type: "dialogue first speaker mismatch", expected: item.speakerRole || item.role, actual: first.speakerRole });
    }
    if (normalize(first.english) !== normalize(item.english)) {
      errors.push({ id: item.id, type: "dialogue first line does not match core sentence" });
    }
    const second = item.dialogue[1];
    if (second && second.speakerRole === first.speakerRole) {
      errors.push({ id: item.id, type: "dialogue second line uses same role", role: first.speakerRole });
    }
  }

  for (const variant of item.variants || []) {
    const withoutCan = normalize(variant).replace(/^can you /, "").replace(/^could you /, "").replace(/^please /, "");
    const coreWithoutPlease = normalize(item.english).replace(/^please /, "");
    if (withoutCan === coreWithoutPlease) {
      errors.push({ id: item.id, type: "variant only adds polite prefix", variant });
    }
  }

  for (const response of item.recommendedResponses || []) {
    responseCounts.set(response, (responseCounts.get(response) || 0) + 1);
    if (weakResponses.has(response)) weakResponseCounts.set(response, (weakResponseCounts.get(response) || 0) + 1);
  }
}

for (const [response, count] of weakResponseCounts) {
  if (count >= 8) errors.push({ type: "weak response repeated too often", response, count });
}

const scenes = [...new Set(active.map((item) => item.scenarioId))];
for (const scenarioId of scenes) {
  const sceneItems = active.filter((item) => item.scenarioId === scenarioId);
  const hasGoodDialogue = sceneItems.some((item) => {
    if (!Array.isArray(item.dialogue) || item.dialogue.length < 2) return false;
    const roles = new Set(item.dialogue.map((line) => line.speakerRoleZh || line.speakerRole));
    const dialogueText = item.dialogue.map((line) => line.english).join(" ");
    const onlyGotIt = item.dialogue.length <= 2 && /got it|okay/i.test(dialogueText);
    return roles.size >= 2 && !onlyGotIt;
  });
  if (!hasGoodDialogue) errors.push({ scenarioId, type: "missing complete dialogue" });
}

const summary = {
  activeCount: active.length,
  scenarioCount: scenes.length,
  freeScenarioCount: course.freeScenarioIds.length,
  priceLabel: course.priceLabel,
  levelCounts: active.reduce((acc, item) => {
    acc[item.difficulty] = (acc[item.difficulty] || 0) + 1;
    return acc;
  }, {}),
  errors: errors.length,
  repeatedResponses: [...responseCounts.entries()].filter(([, count]) => count >= 12).sort((a, b) => b[1] - a[1])
};

console.log(JSON.stringify(summary, null, 2));
if (errors.length) {
  console.error(JSON.stringify(errors.slice(0, 80), null, 2));
  process.exit(1);
}
