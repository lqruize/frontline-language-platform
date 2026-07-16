import fs from "node:fs";

const file = "data/courses/kitchen-survival-v1.ts";
const text = fs.readFileSync(file, "utf8");
const marker = "export const kitchenSurvivalCourse = ";
const start = text.indexOf(marker);
const end = text.indexOf("\n} as const satisfies", start);

if (start < 0 || end < 0) {
  throw new Error("Could not find kitchenSurvivalCourse export.");
}

const course = Function("return (" + text.slice(start + marker.length, end + 2) + ")")();
const active = course.items.filter((item) => item.active);
const errors = [];

const expected = {
  libraryCount: 520,
  publishedCount: 238,
  moduleCount: 8,
  scenarioCount: 36,
  freeScenarioCount: 6,
  enrichedPublishedCount: 238,
  variantsCount: 238,
  recommendedResponsesCount: 238,
  vocabularyNotesCount: 238,
  dialogueScenarioCount: 36,
  priceLabel: "$4.99 一次性购买",
  levels: { "Level 1": 156, "Level 2": 70, "Level 3": 12 },
  modules: {
    communication: 20,
    shift_pay: 15,
    food_safety: 30,
    kitchen_cleaning: 37,
    front_counter: 38,
    delivery_complaints: 24,
    emergency_safety: 18,
    daily_life: 56
  },
  freeScenarios: [
    "communication_repeat_confirm",
    "communication_first_day",
    "food_safety_handwashing_gloves",
    "front_counter_general",
    "front_counter_payment_card_cash",
    "delivery_complaints_missing_wrong_order"
  ]
};

const normalize = (value) => String(value || "")
  .toLowerCase()
  .replace(/[“”"'.?!,;:]/g, "")
  .replace(/\s+/g, " ")
  .trim();

const addError = (item, field, reason) => {
  errors.push({
    id: item?.id || null,
    moduleId: item?.moduleId || null,
    field,
    reason
  });
};

const countBy = (items, key) => items.reduce((acc, item) => {
  acc[item[key]] = (acc[item[key]] || 0) + 1;
  return acc;
}, {});

const scenarioIds = new Set(active.map((item) => item.scenarioId));
const moduleIds = new Set(active.map((item) => item.moduleId));
const levelCounts = countBy(active, "difficulty");
const moduleCounts = countBy(active, "moduleId");
const ids = new Map();
const duplicateIds = [];

for (const item of course.items) {
  ids.set(item.id, (ids.get(item.id) || 0) + 1);
}
for (const [id, count] of ids.entries()) {
  if (count > 1) duplicateIds.push(id);
}

if (course.items.length !== expected.libraryCount) addError(null, "libraryCount", `expected ${expected.libraryCount}, got ${course.items.length}`);
if (active.length !== expected.publishedCount) addError(null, "publishedCount", `expected ${expected.publishedCount}, got ${active.length}`);
if (moduleIds.size !== expected.moduleCount) addError(null, "moduleCount", `expected ${expected.moduleCount}, got ${moduleIds.size}`);
if (scenarioIds.size !== expected.scenarioCount) addError(null, "scenarioCount", `expected ${expected.scenarioCount}, got ${scenarioIds.size}`);
if (course.freeScenarioIds.length !== expected.freeScenarioCount) addError(null, "freeScenarioCount", `expected ${expected.freeScenarioCount}, got ${course.freeScenarioIds.length}`);
if (course.stats?.enrichedPublishedCount !== expected.enrichedPublishedCount) addError(null, "enrichedPublishedCount", `expected ${expected.enrichedPublishedCount}, got ${course.stats?.enrichedPublishedCount}`);
if (course.priceLabel !== expected.priceLabel) addError(null, "priceLabel", `expected ${expected.priceLabel}, got ${course.priceLabel}`);
if (duplicateIds.length) addError(null, "id", `duplicate ids: ${duplicateIds.join(", ")}`);

for (const [level, count] of Object.entries(expected.levels)) {
  if ((levelCounts[level] || 0) !== count) addError(null, "difficulty", `${level} expected ${count}, got ${levelCounts[level] || 0}`);
}

for (const [moduleId, count] of Object.entries(expected.modules)) {
  if ((moduleCounts[moduleId] || 0) !== count) addError(null, "moduleId", `${moduleId} expected ${count}, got ${moduleCounts[moduleId] || 0}`);
}

const actualFree = [...course.freeScenarioIds].sort();
const expectedFree = [...expected.freeScenarios].sort();
if (JSON.stringify(actualFree) !== JSON.stringify(expectedFree)) {
  addError(null, "freeScenarioIds", `expected ${expectedFree.join(", ")}, got ${actualFree.join(", ")}`);
}

const forbiddenTexts = [
  "重点词组",
  "工作关键词",
  "常用表达",
  "这句话里的工作关键词",
  "This one order",
  "This item order",
  "This one item",
  "This item item",
  "What exactly flavor",
  "Please your order",
  "Is this there anything",
  "Thank for",
  "need to get to speak",
  "have to get to speak",
  "get to call in sick",
  "What exactly time"
];

let variantsCount = 0;
let recommendedResponsesCount = 0;
let vocabularyNotesCount = 0;

for (const item of active) {
  const requiredFields = ["english", "chinese", "scenario", "role", "roleZh", "speakerRole", "speakerRoleZh", "difficulty", "safetyLevel", "audioNormal", "audioSlow"];
  for (const field of requiredFields) {
    if (!String(item[field] ?? "").trim()) addError(item, field, "required field is empty");
  }

  if (!Array.isArray(item.variants) || item.variants.length === 0) addError(item, "variants", "missing variants");
  if (!Array.isArray(item.recommendedResponses) || item.recommendedResponses.length === 0) addError(item, "recommendedResponses", "missing recommendedResponses");
  if (!Array.isArray(item.dialogue) || item.dialogue.length < 2) addError(item, "dialogue", "dialogue must have at least two lines");
  if (!Array.isArray(item.vocabularyNotes) || item.vocabularyNotes.length === 0) addError(item, "vocabularyNotes", "missing vocabularyNotes");

  if (item.variants?.length) variantsCount++;
  if (item.recommendedResponses?.length) recommendedResponsesCount++;
  if (item.vocabularyNotes?.length) vocabularyNotesCount++;

  const blob = JSON.stringify(item);
  for (const forbidden of forbiddenTexts) {
    if (blob.includes(forbidden)) addError(item, "forbiddenText", `contains ${forbidden}`);
  }

  const core = normalize(item.english);
  const seenVariants = new Set();
  for (const variant of item.variants || []) {
    const v = normalize(variant);
    if (v === core) addError(item, "variants", `variant duplicates core: ${variant}`);
    if (seenVariants.has(v)) addError(item, "variants", `duplicate variant: ${variant}`);
    seenVariants.add(v);
    if (normalize(variant).replace(/^please /, "") === core.replace(/^please /, "")) {
      addError(item, "variants", `variant only adds please: ${variant}`);
    }
  }

  if (item.dialogue?.length) {
    const first = item.dialogue[0];
    if (first.speakerRole !== item.speakerRole) addError(item, "dialogue", `first role ${first.speakerRole} does not match ${item.speakerRole}`);
    if (normalize(first.english) !== core) addError(item, "dialogue", "first line does not match core english");
    if (item.dialogue[1] && item.dialogue[1].speakerRole === first.speakerRole) addError(item, "dialogue", "first response uses the same role");
  }

  for (const note of item.vocabularyNotes || []) {
    for (const field of ["term", "chinese", "pronunciation", "note", "example"]) {
      if (!String(note[field] || "").trim()) addError(item, "vocabularyNotes", `empty ${field}`);
    }
    if (normalize(note.pronunciation) === normalize(note.term)) addError(item, "vocabularyNotes", `pronunciation copies term: ${note.term}`);
    if (normalize(note.example) === core) addError(item, "vocabularyNotes", `example copies core: ${note.term}`);
  }

  if (item.audioNormal !== `/audio/en-US/${item.id}-normal.mp3`) addError(item, "audioNormal", "audio path does not match item id");
  if (item.audioSlow !== `/audio/en-US/${item.id}-slow.mp3`) addError(item, "audioSlow", "audio path does not match item id");
}

if (variantsCount !== expected.variantsCount) addError(null, "variantsCount", `expected ${expected.variantsCount}, got ${variantsCount}`);
if (recommendedResponsesCount !== expected.recommendedResponsesCount) addError(null, "recommendedResponsesCount", `expected ${expected.recommendedResponsesCount}, got ${recommendedResponsesCount}`);
if (vocabularyNotesCount !== expected.vocabularyNotesCount) addError(null, "vocabularyNotesCount", `expected ${expected.vocabularyNotesCount}, got ${vocabularyNotesCount}`);

const dialogueScenarioCount = [...scenarioIds].filter((scenarioId) =>
  active.some((item) => item.scenarioId === scenarioId && Array.isArray(item.dialogue) && item.dialogue.length >= 2)
).length;
if (dialogueScenarioCount !== expected.dialogueScenarioCount) {
  addError(null, "dialogueScenarioCount", `expected ${expected.dialogueScenarioCount}, got ${dialogueScenarioCount}`);
}

const summary = {
  libraryCount: course.items.length,
  publishedCount: active.length,
  moduleCount: moduleIds.size,
  scenarioCount: scenarioIds.size,
  freeScenarioCount: course.freeScenarioIds.length,
  enrichedPublishedCount: course.stats?.enrichedPublishedCount,
  levelCounts,
  moduleCounts,
  variantsCount,
  recommendedResponsesCount,
  dialogueScenarioCount,
  vocabularyNotesCount,
  errors: errors.length
};

console.log(JSON.stringify(summary, null, 2));
if (errors.length) {
  console.error(JSON.stringify(errors.slice(0, 120), null, 2));
  process.exit(1);
}
