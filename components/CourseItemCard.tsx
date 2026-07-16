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
  "Level 1": "Level 1",
  "Level 2": "Level 2",
  "Level 3": "Level 3",
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

function normalizeText(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9' ]/g, "").replace(/\s+/g, " ").trim();
}

function renderSentenceWithNotes(sentence: string, notes: VocabNote[], onSelect: (note: VocabNote) => void) {
  if (!notes.length) return sentence;
  const sorted = [...notes].sort((a, b) => b.term.length - a.term.length);
  const parts: Array<string | { text: string; note: VocabNote }> = [];
  let index = 0;
  const lower = sentence.toLowerCase();

  while (index < sentence.length) {
    const match = sorted.find((note) => lower.startsWith(note.term.toLowerCase(), index));
    if (match) {
      const text = sentence.slice(index, index + match.term.length);
      parts.push({ text, note: match });
      index += match.term.length;
    } else {
      const last = parts[parts.length - 1];
      if (typeof last === "string") parts[parts.length - 1] = last + sentence[index];
      else parts.push(sentence[index]);
      index += 1;
    }
  }

  return parts.map((part, partIndex) => {
    if (typeof part === "string") return <span key={`${part}-${partIndex}`}>{part}</span>;
    return (
      <button
        key={`${part.text}-${partIndex}`}
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onSelect(part.note);
        }}
        className="mx-0.5 rounded-md border-b border-dashed border-brand/45 bg-brandSoft/70 px-1 text-left text-ink decoration-0 transition hover:bg-brandSoft"
      >
        {part.text}
      </button>
    );
  });
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

  useEffect(() => {
    if (!selectedNote) return undefined;
    const close = () => setSelectedNote(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [selectedNote]);

  const visibleNotes = useMemo(() => {
    const normalizedSentence = normalizeText(item.english);
    return item.vocabularyNotes.filter((note) => normalizedSentence.includes(normalizeText(note.term))).slice(0, 3);
  }, [item.english, item.vocabularyNotes]);

  const completed = mastered || (listenCount >= item.listenRepeatCount && speakCount >= item.speakRepeatCount);
  const showImportance = item.reviewRequired || item.safetyLevel === "safety" || item.safetyLevel === "emergency" || item.safetyLevel === "caution";
  const canStartSpeaking = listenCount >= item.listenRepeatCount;
  const canMaster = canStartSpeaking && speakCount >= item.speakRepeatCount;

  async function playOnce(speed: "normal" | "slow") {
    setRunningMode("manual");
    await speak(item.english, speed);
    setRunningMode(null);
  }

  async function listenThreeTimes() {
    setRunningMode("listen");
    for (let i = listenCount; i < item.listenRepeatCount; i += 1) {
      await speak(item.english, "normal");
      const next = i + 1;
      setListenCount(next);
      window.localStorage.setItem(`listen:${item.id}`, String(next));
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
    setRunningMode(null);
  }

  function markSpoken() {
    if (!canStartSpeaking) return;
    const next = Math.min(item.speakRepeatCount, speakCount + 1);
    setSpeakCount(next);
    window.localStorage.setItem(`speak:${item.id}`, String(next));
  }

  function markMastered() {
    if (!canMaster) return;
    setMastered(true);
    window.localStorage.setItem(`mastered:${item.id}`, "true");
  }

  function restart() {
    setListenCount(0);
    setSpeakCount(0);
    setMastered(false);
    window.speechSynthesis?.cancel();
    window.localStorage.removeItem(`mastered:${item.id}`);
    window.localStorage.removeItem(`listen:${item.id}`);
    window.localStorage.removeItem(`speak:${item.id}`);
  }

  return (
    <article className="rounded-[1.35rem] border border-line bg-white p-4 shadow-soft sm:p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-black text-brand">{item.speakerRoleZh}</p>
          <p className="mt-1 text-xs font-bold text-muted">{difficultyLabel[item.difficulty]} · {safetyLabel[item.safetyLevel]}</p>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {item.isFree ? <span className="rounded-full bg-brandSoft px-2.5 py-1 text-xs font-bold text-brand">免费</span> : null}
          {completed ? <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-success">已完成</span> : null}
          {locked ? <span className="rounded-full bg-brandSoft px-2.5 py-1 text-xs font-bold text-brand">待解锁</span> : null}
        </div>
      </div>

      <div className="text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl" onClick={(event) => event.stopPropagation()}>
        {renderSentenceWithNotes(item.english, visibleNotes, setSelectedNote)}
      </div>
      <p className="mt-2 text-lg font-semibold leading-relaxed text-muted">{item.chinese}</p>

      {selectedNote ? (
        <div className="mt-3 rounded-2xl border border-brand/20 bg-white p-4 shadow-soft" onClick={(event) => event.stopPropagation()}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xl font-black text-ink">{selectedNote.term}</p>
              <p className="mt-1 text-base font-bold text-brand">{selectedNote.chinese}</p>
            </div>
            <button type="button" onClick={() => setSelectedNote(null)} className="rounded-full bg-warm px-3 py-1 text-sm font-bold text-muted">关闭</button>
          </div>
          <p className="mt-3 text-base leading-relaxed text-ink">本句中：{selectedNote.note}</p>
          <p className="mt-2 text-base font-semibold text-muted">短例句：{selectedNote.example}</p>
        </div>
      ) : null}

      <div className="mt-4 rounded-2xl bg-warm p-3 text-base leading-relaxed text-ink">
        <p><span className="font-bold">场景：</span>{item.scenario}</p>
        {showImportance ? <p className="mt-2 text-muted"><span className="font-bold text-ink">注意：</span>{item.importance}</p> : null}
      </div>

      <div className="mt-4 rounded-2xl border border-line bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-base font-black text-ink">三步练会</p>
          <button type="button" onClick={restart} className="text-sm font-bold text-muted underline decoration-line underline-offset-4">重新开始</button>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs font-black text-muted">
          <div className={listenCount >= item.listenRepeatCount ? "rounded-xl bg-brandSoft p-2 text-brand" : "rounded-xl bg-warm p-2"}>听 {Math.min(listenCount, item.listenRepeatCount)}/{item.listenRepeatCount}</div>
          <div className={speakCount >= item.speakRepeatCount ? "rounded-xl bg-brandSoft p-2 text-brand" : "rounded-xl bg-warm p-2"}>跟读 {Math.min(speakCount, item.speakRepeatCount)}/{item.speakRepeatCount}</div>
          <div className={completed ? "rounded-xl bg-green-50 p-2 text-success" : "rounded-xl bg-warm p-2"}>会说</div>
        </div>

        <div className="mt-4 grid gap-3">
          <button
            type="button"
            onClick={listenThreeTimes}
            disabled={runningMode === "listen" || listenCount >= item.listenRepeatCount}
            className={!canStartSpeaking ? "rounded-2xl bg-brand px-5 py-4 text-lg font-black text-white shadow-soft disabled:bg-brand/65" : "rounded-2xl bg-warm px-5 py-4 text-base font-bold text-muted"}
          >
            {runningMode === "listen" ? `正在听 ${Math.max(1, listenCount)}/${item.listenRepeatCount}` : listenCount >= item.listenRepeatCount ? "第一步已完成" : "第一步：开始听3遍"}
          </button>

          <button
            type="button"
            onClick={markSpoken}
            disabled={!canStartSpeaking || speakCount >= item.speakRepeatCount}
            className={canStartSpeaking && speakCount < item.speakRepeatCount ? "rounded-2xl bg-brand px-5 py-4 text-lg font-black text-white shadow-soft" : "rounded-2xl bg-warm px-5 py-4 text-base font-bold text-muted"}
          >
            {speakCount >= item.speakRepeatCount ? "第二步已完成" : `第二步：跟读一次 ${Math.min(speakCount, item.speakRepeatCount)}/${item.speakRepeatCount}`}
          </button>

          <button
            type="button"
            onClick={markMastered}
            disabled={!canMaster || mastered}
            className={canMaster && !mastered ? "rounded-2xl bg-success px-5 py-4 text-lg font-black text-white shadow-soft" : "rounded-2xl bg-warm px-5 py-4 text-base font-bold text-muted"}
          >
            {mastered ? "本句已完成" : "第三步：我会说了"}
          </button>
        </div>

        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => playOnce("normal")} className="rounded-xl border border-line bg-white px-3 py-2 text-sm font-bold text-ink">正常播放</button>
          <button type="button" onClick={() => playOnce("slow")} className="rounded-xl border border-line bg-white px-3 py-2 text-sm font-bold text-brand">慢速播放</button>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {item.variants.length ? (
          <section className="rounded-2xl bg-warm p-4">
            <h4 className="text-base font-black text-ink">相近表达</h4>
            <ul className="mt-2 grid gap-2 text-base font-semibold text-muted">
              {item.variants.map((variant) => <li key={variant}>• {variant}</li>)}
            </ul>
          </section>
        ) : null}
        {item.recommendedResponses.length ? (
          <section className="rounded-2xl bg-warm p-4">
            <h4 className="text-base font-black text-ink">可以这样回答</h4>
            <ul className="mt-2 grid gap-2 text-base font-semibold text-muted">
              {item.recommendedResponses.map((response) => <li key={response}>• {response}</li>)}
            </ul>
          </section>
        ) : null}
      </div>

      {item.dialogue.length ? (
        <section className="mt-4 rounded-2xl border border-line bg-white p-4">
          <h4 className="text-base font-black text-ink">小对话</h4>
          <div className="mt-3 grid gap-2">
            {item.dialogue.map((line, index) => (
              <div key={`${line.english}-${index}`} className="rounded-xl bg-warm p-3">
                <p className="text-sm font-bold text-brand">{line.speakerRoleZh}</p>
                <p className="mt-1 text-base font-black text-ink">{line.english}</p>
                <p className="mt-1 text-sm font-semibold text-muted">{line.chinese}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
