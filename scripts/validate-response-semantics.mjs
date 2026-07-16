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

const normalize = (value) => String(value || "")
  .replace(/\s+/g, " ")
  .trim();

const normalizeStrict = (value) => normalize(value)
  .toLowerCase()
  .replace(/[“”"'.?!,;:]/g, "");

const addGroup = (map, key, item) => {
  if (!key) return;
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(item.id);
};

const responseGroups = new Map();
const dialogueTailGroups = new Map();
const individualResponses = new Map();
const watchedPhrases = new Map([
  ["May I see your ID?", []],
  ["Let me check your account.", []],
  ["You can do that here.", []]
]);

for (const item of active) {
  const responses = item.recommendedResponses || [];
  const responseKey = responses.map(normalize).join(" || ");
  addGroup(responseGroups, responseKey, item);

  for (const response of responses) {
    addGroup(individualResponses, normalize(response), item);
    for (const [phrase, ids] of watchedPhrases.entries()) {
      if (response.includes(phrase)) ids.push(item.id);
    }
  }

  const dialogue = item.dialogue || [];
  const tail = dialogue.slice(1).map((line) => `${line.speakerRole}:${normalize(line.english)}`).join(" || ");
  addGroup(dialogueTailGroups, tail, item);

  if (dialogue.length && dialogue[0].speakerRole !== item.speakerRole) {
    errors.push(`${item.id}: dialogue first speaker ${dialogue[0].speakerRole} does not match item speaker ${item.speakerRole}`);
  }

  if (responses.some((response) => response.includes("You can do that here."))) {
    errors.push(`${item.id}: contains vague response "You can do that here."`);
  }
}

const repeatedResponseGroups = [...responseGroups.entries()]
  .filter(([, ids]) => ids.length > 1)
  .sort((a, b) => b[1].length - a[1].length);

const repeatedDialogueTails = [...dialogueTailGroups.entries()]
  .filter(([, ids]) => ids.length > 1)
  .sort((a, b) => b[1].length - a[1].length);

const groupsOverThree = repeatedResponseGroups.filter(([, ids]) => ids.length > 3);
const dialogueOverThree = repeatedDialogueTails.filter(([, ids]) => ids.length > 3);

for (const [key, ids] of groupsOverThree) {
  errors.push(`recommendedResponses repeated ${ids.length} times: ${key} (${ids.join(", ")})`);
}

for (const [key, ids] of dialogueOverThree) {
  errors.push(`dialogue tail repeated ${ids.length} times: ${key} (${ids.join(", ")})`);
}

const highFrequencyResponses = [...individualResponses.entries()]
  .filter(([response, ids]) => ids.length > 8 && !["Okay.", "Thank you."].includes(response))
  .sort((a, b) => b[1].length - a[1].length)
  .slice(0, 20)
  .map(([response, ids]) => ({ response, count: ids.length, ids }));

const summary = {
  activeCount: active.length,
  duplicateRecommendedGroups: repeatedResponseGroups.length,
  duplicateRecommendedGroupsOver3: groupsOverThree.length,
  duplicateDialogueTails: repeatedDialogueTails.length,
  duplicateDialogueTailsOver3: dialogueOverThree.length,
  watchedPhraseOccurrences: Object.fromEntries([...watchedPhrases.entries()].map(([phrase, ids]) => [phrase, { count: ids.length, ids }])),
  highFrequencyResponses,
  errors: errors.length
};

console.log(JSON.stringify(summary, null, 2));

if (errors.length) {
  console.error("\nResponse semantic validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
