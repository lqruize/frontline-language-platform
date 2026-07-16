"use client";

import { useEffect, useMemo, useState } from "react";
import { CourseItemCard } from "@/components/CourseItemCard";
import { UnlockPanel } from "@/components/UnlockPanel";
import type { KitchenCourseItem, KitchenCourseModule, KitchenModuleId } from "@/data/courses/kitchen-survival-v1";

type LearnCourseProps = {
  items: KitchenCourseItem[];
  modules: KitchenCourseModule[];
  freeScenarioIds: string[];
};

type ScenarioGroup = {
  id: string;
  title: string;
  items: KitchenCourseItem[];
  isFree: boolean;
};

const moduleShortTitles: Record<KitchenModuleId, string> = {
  communication: "基础沟通",
  shift_pay: "排班工资",
  food_safety: "食品卫生",
  kitchen_cleaning: "后厨工作",
  front_counter: "前台收银",
  delivery_complaints: "外卖投诉",
  emergency_safety: "安全急救",
  daily_life: "生活英语",
};

function groupByScenario(items: KitchenCourseItem[]): ScenarioGroup[] {
  const groups = new Map<string, ScenarioGroup>();
  for (const item of items) {
    const existing = groups.get(item.scenarioId);
    if (existing) {
      existing.items.push(item);
      existing.isFree = existing.isFree || item.isFree;
    } else {
      groups.set(item.scenarioId, { id: item.scenarioId, title: item.scenarioTitle, items: [item], isFree: item.isFree });
    }
  }
  return Array.from(groups.values());
}

export function LearnCourse({ items, modules, freeScenarioIds }: LearnCourseProps) {
  const [selectedModule, setSelectedModule] = useState<KitchenModuleId | "全部">("全部");
  const [unlocked, setUnlocked] = useState(false);
  const freeScenarioSet = useMemo(() => new Set(freeScenarioIds), [freeScenarioIds]);

  useEffect(() => {
    setUnlocked(window.localStorage.getItem("kitchen-survival-unlocked") === "true");
    const sync = () => setUnlocked(window.localStorage.getItem("kitchen-survival-unlocked") === "true");
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const activeItems = useMemo(() => items.filter((item) => item.active), [items]);

  const moduleGroups = useMemo(
    () =>
      modules
        .filter((module) => selectedModule === "全部" || module.id === selectedModule)
        .map((module) => {
          const moduleItems = activeItems.filter((item) => item.moduleId === module.id);
          return { module, scenarios: groupByScenario(moduleItems) };
        }),
    [activeItems, modules, selectedModule],
  );

  return (
    <div className="space-y-5">
      <UnlockPanel />

      <div id="learn-modules" className="sticky top-0 z-10 -mx-4 border-b border-line bg-warm/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-3xl sm:border sm:bg-white/85">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <button
            type="button"
            onClick={() => setSelectedModule("全部")}
            className={selectedModule === "全部" ? "rounded-2xl bg-brand px-3 py-3 text-sm font-black text-white" : "rounded-2xl border border-line bg-white px-3 py-3 text-sm font-black text-ink"}
          >
            全部
          </button>
          {modules.map((module) => (
            <button
              key={module.id}
              type="button"
              onClick={() => setSelectedModule(module.id)}
              className={
                selectedModule === module.id
                  ? "rounded-2xl bg-brand px-3 py-3 text-sm font-black text-white"
                  : "rounded-2xl border border-line bg-white px-3 py-3 text-sm font-black text-ink"
              }
            >
              {moduleShortTitles[module.id]}
            </button>
          ))}
        </div>
      </div>

      {!unlocked ? (
        <div className="rounded-[1.5rem] border border-dashed border-brand bg-brandSoft p-5 text-brand">
          <p className="text-lg font-black">付费前可以看完整目录。</p>
          <p className="mt-2 text-sm font-semibold">当前开放 {freeScenarioIds.length} 个免费试听场景；点击“测试购买”后，本机解锁全部 {activeItems.length} 条正式发布内容。</p>
        </div>
      ) : null}

      <div className="space-y-4">
        {moduleGroups.map(({ module, scenarios }, moduleIndex) => (
          <details key={module.id} className="rounded-[1.5rem] border border-line bg-white shadow-soft" open={moduleIndex === 0 || selectedModule !== "全部"}>
            <summary className="cursor-pointer list-none p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-brand">{moduleShortTitles[module.id]}</p>
                  <h2 className="mt-1 text-2xl font-black text-ink">{module.title}</h2>
                  <p className="mt-2 text-base leading-relaxed text-muted">{module.description}</p>
                </div>
                <div className="shrink-0 rounded-2xl bg-warm px-4 py-3 text-right">
                  <p className="text-lg font-black text-ink">{module.publishedCount}</p>
                  <p className="text-xs font-bold text-muted">条</p>
                </div>
              </div>
            </summary>

            <div className="space-y-3 border-t border-line p-4">
              {scenarios.map((scenario) => {
                const locked = !unlocked && !freeScenarioSet.has(scenario.id);
                return (
                  <details key={scenario.id} className="rounded-2xl border border-line bg-warm" open={!locked && scenario.isFree}>
                    <summary className="cursor-pointer list-none p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold text-muted">场景</p>
                          <h3 className="mt-1 text-xl font-black text-ink">{scenario.title}</h3>
                          <p className="mt-1 text-sm font-semibold text-muted">{scenario.items.length} 条内容</p>
                        </div>
                        <span className={locked ? "rounded-full bg-white px-3 py-1 text-xs font-bold text-muted" : "rounded-full bg-brandSoft px-3 py-1 text-xs font-bold text-brand"}>
                          {locked ? "待解锁" : scenario.isFree ? "免费试听" : "已解锁"}
                        </span>
                      </div>
                    </summary>
                    {locked ? (
                      <div className="border-t border-line p-4 text-sm font-semibold text-muted">购买后可打开这个场景的全部句子、场景说明和播放按钮。</div>
                    ) : (
                      <div className="grid gap-3 border-t border-line p-3">
                        {scenario.items.map((item) => (
                          <CourseItemCard key={item.id} item={item} />
                        ))}
                      </div>
                    )}
                  </details>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
