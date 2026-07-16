import Link from "next/link";
import { CourseItemCard } from "@/components/CourseItemCard";
import { getCategoryCounts, getFreeItems, getKitchenCourse } from "@/lib/course";

export default function HomePage() {
  const course = getKitchenCourse();
  const counts = getCategoryCounts();
  const freeItems = getFreeItems();

  return (
    <main className="min-h-screen bg-warm px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] bg-ink px-5 py-8 text-white shadow-soft sm:px-8 sm:py-12">
          <p className="text-sm font-bold text-blue-200">Frontline Language Platform MVP</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">北美餐厅生活与工作生存英语</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-blue-50">
            听懂厨房和前台真实指令，敢开口确认，少做错事，第一天上班不慌。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/learn" className="rounded-2xl bg-brand px-6 py-4 text-lg font-black text-white shadow-soft">
              免费试听 5 个场景
            </Link>
            <button type="button" className="rounded-2xl bg-white/10 px-6 py-4 text-lg font-black text-white ring-1 ring-white/25">
              登录功能配置中
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {course.categories.map((category) => (
            <div key={category} className="rounded-3xl border border-line bg-white p-4 shadow-soft">
              <p className="text-base font-black text-ink">{category}</p>
              <p className="mt-2 text-sm font-semibold text-muted">{counts[category]} 条</p>
            </div>
          ))}
        </div>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-brand">免费试听</p>
              <h2 className="text-3xl font-black text-ink">先学最容易马上用到的 5 句</h2>
            </div>
            <Link href="/learn" className="hidden rounded-2xl border border-line bg-white px-5 py-3 font-bold text-brand sm:inline-block">
              进入学习页
            </Link>
          </div>
          <div className="grid gap-4">
            {freeItems.map((item) => (
              <CourseItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
