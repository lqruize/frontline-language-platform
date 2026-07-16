"use client";

import { useEffect } from "react";

export function UnlockSuccess() {
  useEffect(() => {
    window.localStorage.setItem("kitchen-survival-unlocked", "true");
  }, []);

  return <p className="mt-4 rounded-2xl bg-brandSoft p-4 text-base font-bold text-brand">本机浏览器已写入测试解锁状态。</p>;
}
