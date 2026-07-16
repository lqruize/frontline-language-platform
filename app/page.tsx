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
            听懂厨房、前台、外卖、清洁和生活场景真实英语，敢开口确认，少做错事，第一天上班不慌。
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">8</p>
              <p className="text-sm font-bold text-blue-100">大模块</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">40+</p>
              <p className="text-sm font-bold text-blue-100">真实场景</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">350+</p>
              <p className="text-sm font-bold text-blue-100">实用句子</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">2速</p>
              <p className="text-sm font-bold text-blue-100">正常和慢速音频</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/20">
              <p className="text-3xl font-black">$4.99</p>
              <p className="text-sm font-bold text-blue-100">一次性购买</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/learn" className="rounded-2xl bg-brand px-6 py-4 text-lg font-black text-white shadow-soft">
              免费试听 {course.stats.freeScenarioCount} 个场景
            </Link>
            <button type="button" className="rounded-2xl bg-white/10 px-6 py-4 text-lg font-black text-white ring-1 ring-white/25">
              登录功能配置中
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {course.modules.map((module) => (
            <div key={module.id} className="rounded-3xl border border-line bg-white p-4 shadow-soft">
              <p className="text-base font-black text-ink">{module.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{module.description}</p>
              <p className="mt-3 text-sm font-bold text-brand">{counts[module.id]} 条正式发布</p>
            </div>
          ))}
        </div>

        <section className="mt-8 rounded-[1.5rem] border border-line bg-white p-5 shadow-soft">
          <p className="text-sm font-bold text-brand">课程规模</p>
          <h2 className="mt-2 text-3xl font-black text-ink">{publishedItems.length} 条正式内容，{scenarioCount} 个折叠场景</h2>
          <p className="mt-2 text-base leading-relaxed text-muted">
            完整素材库已整理到 {course.stats.libraryCount} 条，第一版先发布最适合销售验证的 {course.stats.publishedCount} 条；其余内容留作后续审核扩展。
          </p>
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-brand">免费试听</p>
              <h2 className="text-3xl font-black text-ink">每个大分类至少开放一个试听场景</h2>
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
