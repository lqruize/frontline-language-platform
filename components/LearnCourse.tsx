"use client";

import { useEffect, useMemo, useState } from "react";
import { CourseItemCard } from "@/components/CourseItemCard";
import { UnlockPanel } from "@/components/UnlockPanel";
import type { CourseCategory, KitchenCourseItem } from "@/data/courses/kitchen-survival-v1";

type LearnCourseProps = {
  items: KitchenCourseItem[];
  categories: CourseCategory[];
};

export function LearnCourse({ items, categories }: LearnCourseProps) {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory | "全部">("全部");
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(window.localStorage.getItem("kitchen-survival-unlocked") === "true");
    const sync = () => setUnlocked(window.localStorage.getItem("kitchen-survival-unlocked") === "true");
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const visibleItems = useMemo(() => {
    const filtered = selectedCategory === "全部" ? items : items.filter((item) => item.category === selectedCategory);
    return unlocked ? filtered : filtered.filter((item) => item.free);
  }, [items, selectedCategory, unlocked]);

  return (
    <div className="space-y-5">
      <UnlockPanel />

      <div className="sticky top-0 z-10 -mx-4 border-b border-line bg-warm/90 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-3xl sm:border sm:bg-white/80">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {["全部", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category as CourseCategory | "全部")}
              className={
                selectedCategory === category
                  ? "shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-bold text-white"
                  : "shrink-0 rounded-full border border-line bg-white px-4 py-2 text-sm font-bold text-ink"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        {visibleItems.map((item) => (
          <CourseItemCard key={item.id} item={item} locked={!unlocked && !item.free} />
        ))}
      </div>

      {!unlocked ? (
        <div className="rounded-[1.5rem] border border-dashed border-brand bg-brandSoft p-5 text-center text-brand">
          <p className="text-lg font-black">当前显示 5 个免费试听场景。</p>
          <p className="mt-2 text-sm font-semibold">点击“测试购买”后，可以在本机查看全部课程内容。</p>
        </div>
      ) : null}
    </div>
  );
}
