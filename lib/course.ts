import { kitchenSurvivalCourse, type KitchenCourseItem, type KitchenModuleId } from "@/data/courses/kitchen-survival-v1";

export function getKitchenCourse() {
  return kitchenSurvivalCourse;
}

export function getPublishedItems(): KitchenCourseItem[] {
  return kitchenSurvivalCourse.items.filter((item) => item.active);
}

export function getFreeItems(): KitchenCourseItem[] {
  return getPublishedItems().filter((item) => item.isFree);
}

export function getItemsByModule(moduleId: KitchenModuleId): KitchenCourseItem[] {
  return getPublishedItems().filter((item) => item.moduleId === moduleId);
}

export function getModuleCounts(): Record<KitchenModuleId, number> {
  return kitchenSurvivalCourse.modules.reduce(
    (counts, module) => ({ ...counts, [module.id]: getItemsByModule(module.id).length }),
    {} as Record<KitchenModuleId, number>,
  );
}

export function getScenarioCount(): number {
  return new Set(getPublishedItems().map((item) => item.scenarioId)).size;
}

export function getFreeScenarioTitles(): string[] {
  const seen = new Set<string>();
  return getFreeItems()
    .filter((item) => {
      if (seen.has(item.scenarioId)) return false;
      seen.add(item.scenarioId);
      return true;
    })
    .map((item) => item.scenarioTitle);
}
