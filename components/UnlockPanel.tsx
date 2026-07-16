"use client";

import Link from "next/link";
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

  return (
    <div className="rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
      <p className="text-sm font-bold text-brand">开发模式占位</p>
      <h2 className="mt-2 text-2xl font-black text-ink">{unlocked ? "完整课程已在本机解锁" : "测试购买解锁完整课程"}</h2>
      <p className="mt-2 text-base leading-relaxed text-muted">
        第一版不接真实 Stripe。点击测试购买会把解锁状态保存在这台电脑或手机的浏览器里。
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={unlock} className="rounded-2xl bg-brand px-5 py-3 text-base font-bold text-white shadow-soft">
          测试购买
        </button>
        <Link href="/success" className="rounded-2xl border border-line bg-white px-5 py-3 text-base font-bold text-brand">
          查看付款成功页
        </Link>
      </div>
    </div>
  );
}
