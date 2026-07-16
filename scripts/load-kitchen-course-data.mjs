import fs from "node:fs";
import path from "node:path";

export const kitchenModuleIds = [
  "communication",
  "shift_pay",
  "food_safety",
  "kitchen_cleaning",
  "front_counter",
  "delivery_complaints",
  "emergency_safety",
  "daily_life"
];

const courseFile = "data/courses/kitchen-survival-v1.ts";
const moduleDir = "data/courses/kitchen-survival-v1";

function parseCourseSource(allKitchenSurvivalItems) {
  const text = fs.readFileSync(courseFile, "utf8");
  const marker = "export const kitchenSurvivalCourse = ";
  const start = text.indexOf(marker);
  const end = text.indexOf("\n} as const satisfies", start);

  if (start < 0 || end < 0) {
    throw new Error("Could not find kitchenSurvivalCourse export.");
  }

  return Function("allKitchenSurvivalItems", "return (" + text.slice(start + marker.length, end + 2) + ")")(allKitchenSurvivalItems);
}

export function loadKitchenItems() {
  const splitFilesExist = kitchenModuleIds.every((moduleId) => fs.existsSync(path.join(moduleDir, `${moduleId}.json`)));
  if (splitFilesExist) {
    return kitchenModuleIds.flatMap((moduleId) => {
      const file = path.join(moduleDir, `${moduleId}.json`);
      return JSON.parse(fs.readFileSync(file, "utf8"));
    });
  }

  return parseCourseSource(undefined).items;
}

export function loadKitchenCourse() {
  const items = loadKitchenItems();
  const course = parseCourseSource(items);
  return {
    ...course,
    items
  };
}
