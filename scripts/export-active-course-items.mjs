import fs from "node:fs";
import path from "node:path";

const courseFile = "data/courses/kitchen-survival-v1.ts";
const moduleDir = "data/courses/kitchen-survival-v1";
const reportFile = "reports/active-course-items.json";
const moduleIds = [
  "communication",
  "shift_pay",
  "food_safety",
  "kitchen_cleaning",
  "front_counter",
  "delivery_complaints",
  "emergency_safety",
  "daily_life"
];

function parseCourseFromSource() {
  const text = fs.readFileSync(courseFile, "utf8");
  const marker = "export const kitchenSurvivalCourse = ";
  const start = text.indexOf(marker);
  const end = text.indexOf("\n} as const satisfies", start);

  if (start < 0 || end < 0) {
    throw new Error("Could not find kitchenSurvivalCourse export.");
  }

  return Function("return (" + text.slice(start + marker.length, end + 2) + ")")();
}

function loadItems() {
  const jsonFilesExist = moduleIds.every((moduleId) => fs.existsSync(path.join(moduleDir, `${moduleId}.json`)));
  if (!jsonFilesExist) return parseCourseFromSource().items;

  return moduleIds.flatMap((moduleId) => {
    const file = path.join(moduleDir, `${moduleId}.json`);
    return JSON.parse(fs.readFileSync(file, "utf8"));
  });
}

const activeItems = loadItems()
  .filter((item) => item.active)
  .map((item) => ({
    id: item.id,
    moduleId: item.moduleId,
    scenarioId: item.scenarioId,
    english: item.english,
    chinese: item.chinese,
    speakerRole: item.speakerRole,
    variants: item.variants,
    recommendedResponses: item.recommendedResponses,
    dialogue: item.dialogue,
    vocabularyNotes: item.vocabularyNotes
  }));

fs.mkdirSync(path.dirname(reportFile), { recursive: true });
fs.writeFileSync(reportFile, `${JSON.stringify(activeItems, null, 2)}\n`);
console.log(`Exported ${activeItems.length} active course items to ${reportFile}`);
