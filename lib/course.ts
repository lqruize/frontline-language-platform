import { kitchenSurvivalCourse, type CourseCategory, type KitchenCourseItem } from "@/data/courses/kitchen-survival-v1";

export function getKitchenCourse() {
  return kitchenSurvivalCourse;
}

export function getFreeItems(): KitchenCourseItem[] {
  return kitchenSurvivalCourse.items.filter((item) => item.free);
}

export function getItemsByCategory(category: CourseCategory): KitchenCourseItem[] {
  return kitchenSurvivalCourse.items.filter((item) => item.category === category);
}

export function getCategoryCounts(): Record<CourseCategory, number> {
  return kitchenSurvivalCourse.categories.reduce(
    (counts, category) => ({ ...counts, [category]: getItemsByCategory(category).length }),
    {} as Record<CourseCategory, number>,
  );
}
