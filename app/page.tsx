import Link from "next/link";
import { CourseItemCard } from "@/components/CourseItemCard";
import { getFreeItems, getFreeScenarioTitles, getKitchenCourse, getModuleCounts, getPublishedItems, getScenarioCount } from "@/lib/course";

export default function HomePage() {
  const course = getKitchenCourse();
  const counts = getModuleCounts();
  const freeItems = getFreeItems();
  const freeScenarioTitles = getFreeScenarioTitles();
  const publishedItems = getPublishedItems();
  const scenarioCount = getScenarioCount();

  return (
    <main className="min-h-screen bg-warm px-4 py-6 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[2rem] bg-ink px-5 py-8 text-white shadow-soft sm:px-8 sm:py-12">
          <p className="text-sm font-bold text-blue-200">Frontline Language Platform MVP</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">北美餐厅生活与工作生存英语</h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-blue-50">
            先学会在餐厅上班，再顺便解决北美生活中的基本英语。知道别人说什么，也知道自己怎么回答。
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">36</p>
              <p className="text-sm font-bold text-blue-100">真实工作和生活场景</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">220+</p>
              <p className="text-sm font-bold text-blue-100">最常用英语句子</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">听+答</p>
              <p className="text-sm font-bold text-blue-100">别人怎么说，你怎么回</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">3+5</p>
              <p className="text-sm font-bold text-blue-100">听3遍＋跟读5遍</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">$4.99</p>
              <p className="text-sm font-bold text-blue-100">一次性购买</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/learn" className="rounded-2xl bg-brand px-6 py-4 text-lg font-black text-white shadow-soft">
              免费开始学习
            </Link>
            <button type="button" className="rounded-2xl bg-white/10 px-6 py-4 text-lg font-black text-white ring-1 ring-white/25">
              登录功能配置中
            </button>
          </div>
        </div>

        <section className="mt-8 rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
          <p className="text-sm font-bold text-brand">课程结构</p>
          <h2 className="mt-2 text-3xl font-black text-ink">{scenarioCount} 个真实场景，{publishedItems.length} 条核心句</h2>
          <p className="mt-2 text-base leading-relaxed text-muted">
            第一版只保留餐厅上班天天会遇到的高频表达，以及北美生活最基础的 8 个场景；其余素材留在内容库里，后续再审核扩展。
          </p>
        </section>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {course.modules.map((module) => (
            <div key={module.id} className="rounded-3xl border border-line bg-white p-4 shadow-soft">
              <p className="text-base font-black text-ink">{module.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{module.description}</p>
              <p className="mt-3 text-sm font-bold text-brand">{counts[module.id]} 条核心句</p>
            </div>
          ))}
        </div>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-brand">免费试听</p>
              <h2 className="text-3xl font-black text-ink">免费开放 6 个完整场景</h2>
              <p className="mt-2 text-base font-semibold text-muted">{freeScenarioTitles.join("、")}</p>
            </div>
            <Link href="/learn" className="hidden rounded-2xl border border-line bg-white px-5 py-3 font-bold text-brand sm:inline-block">
              进入学习页
            </Link>
          </div>
          <div className="grid gap-4">
            {freeItems.slice(0, 10).map((item) => (
              <CourseItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
