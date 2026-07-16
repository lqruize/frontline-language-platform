"use client";

import { useState } from "react";

type SpeechButtonProps = {
  text: string;
  speed: "normal" | "slow";
};

export function SpeechButton({ text, speed }: SpeechButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  function play() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("当前浏览器暂不支持语音播放。真人音频接入前，这里先使用浏览器语音占位。");
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = speed === "slow" ? 0.72 : 0.95;
    utterance.pitch = 1;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <button
      type="button"
      onClick={play}
      className={
        speed === "normal"
          ? "rounded-2xl bg-brand px-5 py-3 text-base font-bold text-white shadow-soft active:scale-[0.99]"
          : "rounded-2xl border border-line bg-white px-5 py-3 text-base font-bold text-brand active:scale-[0.99]"
      }
    >
      {speaking ? "播放中" : speed === "normal" ? "正常速度" : "慢速播放"}
    </button>
  );
}
