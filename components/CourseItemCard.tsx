import type { KitchenCourseItem } from "@/data/courses/kitchen-survival-v1";
import { MasteryButton } from "@/components/MasteryButton";
import { SpeechButton } from "@/components/SpeechButton";

type CourseItemCardProps = {
  item: KitchenCourseItem;
  locked?: boolean;
};

const safetyLabel: Record<KitchenCourseItem["safetyLevel"], string> = {
  normal: "常用",
  caution: "注意",
  safety: "安全",
  emergency: "紧急",
};

export function CourseItemCard({ item, locked = false }: CourseItemCardProps) {
  return (
    <article className="rounded-[1.35rem] border border-line bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-brand">{item.roleZh}</p>
          <p className="mt-1 text-xs font-bold text-muted">{item.moduleTitle}</p>
        </div>
        <div className="flex flex-wrap justify-end gap-2">
          {item.isFree ? <span className="rounded-full bg-brandSoft px-3 py-1 text-xs font-bold text-brand">免费试听</span> : null}
          {item.reviewRequired ? <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-danger">需复核</span> : null}
          <span className="rounded-full bg-warm px-3 py-1 text-xs font-bold text-muted">{safetyLabel[item.safetyLevel]}</span>
          {locked ? <span className="rounded-full bg-brandSoft px-3 py-1 text-xs font-bold text-brand">待解锁</span> : null}
        </div>
      </div>

      <p className="text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">{item.english}</p>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-muted">{item.chinese}</p>

      <div className="mt-5 grid gap-3 rounded-2xl bg-warm p-4 text-base leading-relaxed text-ink">
        <p>
          <span className="font-bold">使用场景：</span>
          {item.scenario}
        </p>
        <p>
          <span className="font-bold">为什么重要：</span>
          {item.importance}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <SpeechButton text={item.english} speed="normal" />
        <SpeechButton text={item.english} speed="slow" />
        <MasteryButton itemId={item.id} />
      </div>
    </article>
  );
}
