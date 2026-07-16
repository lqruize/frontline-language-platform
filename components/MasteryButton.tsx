"use client";

import { useEffect, useState } from "react";

type MasteryButtonProps = {
  itemId: string;
};

export function MasteryButton({ itemId }: MasteryButtonProps) {
  const [mastered, setMastered] = useState(false);

  useEffect(() => {
    setMastered(window.localStorage.getItem(`mastered:${itemId}`) === "true");
  }, [itemId]);

  function toggleMastered() {
    const next = !mastered;
    setMastered(next);
    window.localStorage.setItem(`mastered:${itemId}`, String(next));
  }

  return (
    <button
      type="button"
      onClick={toggleMastered}
      className={
        mastered
          ? "rounded-2xl bg-success px-5 py-3 text-base font-bold text-white active:scale-[0.99]"
          : "rounded-2xl border border-line bg-white px-5 py-3 text-base font-bold text-ink active:scale-[0.99]"
      }
    >
      {mastered ? "已掌握" : "我已掌握"}
    </button>
  );
}
