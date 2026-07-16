import Link from "next/link";
import { LearnCourse } from "@/components/LearnCourse";
import { getKitchenCourse, getPublishedItems, getScenarioCount } from "@/lib/course";

export default function LearnPage() {
  const course = getKitchenCourse();
  const publishedItems = getPublishedItems();
  const scenarioCount = getScenarioCount();

  return (
    <main className="min-h-screen bg-warm px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-5 flex items-start justify-between gap-4">
          <div>
            <Link href="/" className="text-sm font-bold text-brand">
              返回首页
            </Link>
            <h1 className="mt-2 text-3xl font-black leading-tight text-ink sm:text-5xl">{course.title}</h1>
            <p className="mt-2 text-base font-semibold text-muted">
              {course.modules.length} 大模块 · {scenarioCount} 个真实场景 · {publishedItems.length}+ 实用句子 · {course.priceLabel}
            </p>
          </div>
        </header>
        <LearnCourse items={course.items} modules={course.modules} freeScenarioIds={course.freeScenarioIds} />
      </div>
    </main>
  );
}
