"use client";

import { useEffect, useState } from "react";

export function UnlockPanel() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setUnlocked(window.localStorage.getItem("kitchen-survival-unlocked") === "true");
  }, []);

  function unlock() {
    window.localStorage.setItem("kitchen-survival-unlocked", "true");
    setUnlocked(true);
  }

  function startFree() {
    document.getElementById("learn-modules")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section className="rounded-[1.5rem] border border-line bg-white p-4 shadow-soft sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black leading-tight text-ink sm:text-2xl">北美餐厅生活与工作生存英语</p>
          <p className="mt-2 text-sm font-bold leading-relaxed text-muted sm:text-base">
            {unlocked ? "完整课程已解锁 · 继续学习" : "390+实用句子 · 50个真实场景"}
          </p>
          <p className="mt-1 text-sm font-semibold text-muted">
            {unlocked ? "你的学习记录会保存在当前浏览器。" : "正常语速＋慢速 · $4.99一次购买"}
          </p>
        </div>
        <div className="flex shrink-0 gap-2 sm:flex-col">
          <button type="button" onClick={startFree} className="flex-1 rounded-2xl bg-brand px-4 py-3 text-sm font-black text-white shadow-soft sm:flex-none">
            免费开始学习
          </button>
          {!unlocked ? (
            <button type="button" onClick={unlock} className="flex-1 rounded-2xl border border-line bg-white px-4 py-3 text-sm font-black text-brand sm:flex-none">
              解锁完整课程
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
