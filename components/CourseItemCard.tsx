"use client";

import { useEffect, useMemo, useState } from "react";
import type { KitchenCourseItem } from "@/data/courses/kitchen-survival-v1";

type CourseItemCardProps = {
  item: KitchenCourseItem;
  locked?: boolean;
};

type VocabNote = KitchenCourseItem["vocabularyNotes"][number];

const safetyLabel: Record<KitchenCourseItem["safetyLevel"], string> = {
  normal: "常用",
  caution: "注意",
  safety: "安全",
  emergency: "紧急",
};

const difficultyLabel: Record<KitchenCourseItem["difficulty"], string> = {
  "Level 1": "Level 1 必须先学",
  "Level 2": "Level 2 简单完整",
  "Level 3": "Level 3 复杂处理",
};

function speak(text: string, speed: "normal" | "slow") {
  return new Promise<void>((resolve) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("当前浏览器暂不支持语音播放。真人音频接入前，这里先使用浏览器语音占位。");
      resolve();
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = speed === "slow" ? 0.72 : 0.95;
    utterance.pitch = 1;
    utterance.onend = () => resolve();
    utterance.onerror = () => resolve();
    window.speechSynthesis.speak(utterance);
  });
}

function normalizeToken(token: string) {
  return token.toLowerCase().replace(/[^a-z']/g, "");
}

export function CourseItemCard({ item, locked = false }: CourseItemCardProps) {
  const [listenCount, setListenCount] = useState(0);
  const [speakCount, setSpeakCount] = useState(0);
  const [runningMode, setRunningMode] = useState<"listen" | "manual" | null>(null);
  const [mastered, setMastered] = useState(false);
  const [selectedNote, setSelectedNote] = useState<VocabNote | null>(null);

  useEffect(() => {
    setMastered(window.localStorage.getItem(`mastered:${item.id}`) === "true");
    setListenCount(Number(window.localStorage.getItem(`listen:${item.id}`) || 0));
    setSpeakCount(Number(window.localStorage.getItem(`speak:${item.id}`) || 0));
  }, [item.id]);

  const noteByToken = useMemo(() => {
    const map = new Map<string, VocabNote>();
    for (const note of item.vocabularyNotes) {
      for (const part of note.term.split(/\s+/)) map.set(normalizeToken(part), note);
    }
    return map;
  }, [item.vocabularyNotes]);

  const completed = mastered || (listenCount >= item.listenRepeatCount && speakCount >= item.speakRepeatCount);

  async function playOnce(speed: "normal" | "slow") {
    setRunningMode("manual");
    await speak(item.english, speed);
    setRunningMode(null);
  }

  async function listenThreeTimes() {
    setRunningMode("listen");
    for (let i = listenCount; i < item.listenRepeatCount; i += 1) {
      const next = i + 1;
      setListenCount(next);
      window.localStorage.setItem(`listen:${item.id}`, String(next));
      await speak(item.english, "normal");
      await new Promise((resolve) => setTimeout(resolve, 450));
    }
    setRunningMode(null);
  }

  function markSpoken() {
    const next = Math.min(item.speakRepeatCount, speakCount + 1);
    setSpeakCount(next);
    window.localStorage.setItem(`speak:${item.id}`, String(next));
  }

  function markMastered() {
    setMastered(true);
    setListenCount(item.listenRepeatCount);
    setSpeakCount(item.speakRepeatCount);
    window.localStorage.setItem(`mastered:${item.id}`, "true");
    window.localStorage.setItem(`listen:${item.id}`, String(item.listenRepeatCount));
    window.localStorage.setItem(`speak:${item.id}`, String(item.speakRepeatCount));
  }

  function restart() {
    setListenCount(0);
    setSpeakCount(0);
    setMastered(false);
    window.localStorage.removeItem(`mastered:${item.id}`);
    window.localStorage.removeItem(`listen:${item.id}`);
    window.localStorage.removeItem(`speak:${item.id}`);
  }

  return (
    <article className="rounded-[1.35rem] border border-line bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-brand">{item.speakerRoleZh}</p>
          <p className="mt-1 text-xs font-bold text-muted">{item.moduleTitle}</p>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {item.isFree ? <span className="rounded-full bg-brandSoft px-3 py-1 text-xs font-bold text-brand">免费试听</span> : null}
          <span className="rounded-full bg-warm px-3 py-1 text-xs font-bold text-muted">{difficultyLabel[item.difficulty]}</span>
          <span className="rounded-full bg-warm px-3 py-1 text-xs font-bold text-muted">{safetyLabel[item.safetyLevel]}</span>
          {completed ? <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-success">本句已完成</span> : null}
          {locked ? <span className="rounded-full bg-brandSoft px-3 py-1 text-xs font-bold text-brand">待解锁</span> : null}
        </div>
      </div>

      <div className="text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">
        {item.english.split(/(\s+)/).map((part, index) => {
          const note = noteByToken.get(normalizeToken(part));
          if (!note || /^\s+$/.test(part)) return <span key={`${part}-${index}`}>{part}</span>;
          return (
            <button key={`${part}-${index}`} type="button" onClick={() => setSelectedNote(note)} className="rounded-md text-left text-brand underline decoration-brand/30 underline-offset-4">
              {part}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-muted">{item.chinese}</p>

      {selectedNote ? (
        <div className="mt-4 rounded-2xl border border-brand/20 bg-brandSoft p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xl font-black text-ink">{selectedNote.term}</p>
              <p className="mt-1 text-base font-bold text-brand">{selectedNote.chinese} · {selectedNote.pronunciation}</p>
            </div>
            <button type="button" onClick={() => setSelectedNote(null)} className="rounded-full bg-white px-3 py-1 text-sm font-bold text-muted">关闭</button>
          </div>
          <p className="mt-3 text-base leading-relaxed text-ink">在本句中：{selectedNote.note}</p>
          <p className="mt-2 text-base font-semibold text-muted">例句：{selectedNote.example}</p>
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 rounded-2xl bg-warm p-4 text-base leading-relaxed text-ink">
        <p><span className="font-bold">使用场景：</span>{item.scenario}</p>
        <p><span className="font-bold">为什么重要：</span>{item.importance}</p>
      </div>

      <div className="mt-5 rounded-2xl border border-line bg-white p-4">
        <p className="text-base font-black text-ink">学习流程</p>
        <div className="mt-3 grid gap-2 text-sm font-bold text-muted sm:grid-cols-2">
          <p>听力 {Math.min(listenCount, item.listenRepeatCount)}/{item.listenRepeatCount}</p>
          <p>跟读 {Math.min(speakCount, item.speakRepeatCount)}/{item.speakRepeatCount}</p>
        </div>
        <ol className="mt-3 grid gap-1 text-sm leading-relaxed text-muted">
          <li>1. 先听正常语速 3 遍。</li>
          <li>2. 看着英文跟读 2 遍。</li>
          <li>3. 不看英文再跟读 3 遍。</li>
          <li>4. 最后点击“我会说了”。</li>
        </ol>
        <div className="mt-4 flex flex-wrap gap-3">
          <button type="button" onClick={() => playOnce("normal")} className="rounded-2xl bg-brand px-5 py-3 text-base font-bold text-white shadow-soft active:scale-[0.99]">
            {runningMode === "manual" ? "播放中" : "正常播放"}
          </button>
          <button type="button" onClick={() => playOnce("slow")} className="rounded-2xl border border-line bg-white px-5 py-3 text-base font-bold text-brand active:scale-[0.99]">慢速播放</button>
          <button type="button" onClick={listenThreeTimes} disabled={runningMode === "listen" || listenCount >= item.listenRepeatCount} className="rounded-2xl bg-ink px-5 py-3 text-base font-bold text-white disabled:bg-muted">
            {runningMode === "listen" ? `听力 ${listenCount}/${item.listenRepeatCount}` : "听3遍"}
          </button>
          <button type="button" onClick={markSpoken} disabled={speakCount >= item.speakRepeatCount} className="rounded-2xl bg-brandSoft px-5 py-3 text-base font-bold text-brand disabled:text-muted">我跟读了一遍</button>
          <button type="button" onClick={restart} className="rounded-2xl border border-line bg-white px-5 py-3 text-base font-bold text-ink">重新开始</button>
          <button type="button" onClick={markMastered} className="rounded-2xl bg-success px-5 py-3 text-base font-bold text-white">我会说了</button>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <section className="rounded-2xl bg-warm p-4">
          <h4 className="text-base font-black text-ink">相近表达</h4>
          <ul className="mt-3 grid gap-2 text-base font-semibold text-muted">
            {item.variants.map((variant) => <li key={variant}>• {variant}</li>)}
          </ul>
        </section>
        <section className="rounded-2xl bg-warm p-4">
          <h4 className="text-base font-black text-ink">可以这样回答</h4>
          <ul className="mt-3 grid gap-2 text-base font-semibold text-muted">
            {item.recommendedResponses.map((response) => <li key={response}>• {response}</li>)}
          </ul>
        </section>
      </div>

      <section className="mt-5 rounded-2xl border border-line bg-white p-4">
        <h4 className="text-base font-black text-ink">小对话</h4>
        <div className="mt-3 grid gap-3">
          {item.dialogue.map((line, index) => (
            <div key={`${line.english}-${index}`} className="rounded-xl bg-warm p-3">
              <p className="text-sm font-bold text-brand">{line.speakerRoleZh}</p>
              <p className="mt-1 text-base font-black text-ink">{line.english}</p>
              <p className="mt-1 text-sm font-semibold text-muted">{line.chinese}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
