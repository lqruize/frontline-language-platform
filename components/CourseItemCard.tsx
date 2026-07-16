import type { KitchenCourseItem } from "@/data/courses/kitchen-survival-v1";
import { MasteryButton } from "@/components/MasteryButton";
import { SpeechButton } from "@/components/SpeechButton";

type CourseItemCardProps = {
  item: KitchenCourseItem;
  locked?: boolean;
};

export function CourseItemCard({ item, locked = false }: CourseItemCardProps) {
  return (
    <article className="rounded-[1.35rem] border border-line bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold text-brand">{item.category}</p>
          {item.free ? <p className="mt-1 text-xs font-bold text-success">免费试听</p> : null}
        </div>
        {locked ? <span className="rounded-full bg-brandSoft px-3 py-1 text-xs font-bold text-brand">待解锁</span> : null}
      </div>

      <p className="text-2xl font-black leading-tight tracking-tight text-ink sm:text-3xl">{item.english}</p>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-muted">{item.chinese}</p>

      <div className="mt-5 grid gap-3 rounded-2xl bg-warm p-4 text-base leading-relaxed text-ink">
        <p>
          <span className="font-bold">使用场景：</span>
          {item.scene}
        </p>
        <p>
          <span className="font-bold">为什么重要：</span>
          {item.whyItMatters}
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
