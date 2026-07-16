import Link from "next/link";
import { UnlockSuccess } from "@/components/UnlockSuccess";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-warm px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[2rem] border border-line bg-white p-6 shadow-soft sm:p-8">
        <p className="text-sm font-bold text-success">测试付款成功</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-ink">完整课程已在本机解锁</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          这里是开发模式占位页，没有连接真实 Stripe，也没有收取费用。后续接入 Stripe 后，这个页面会由真实付款结果控制。
        </p>
        <UnlockSuccess />
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/learn" className="rounded-2xl bg-brand px-6 py-4 text-lg font-black text-white shadow-soft">
            去学习完整课程
          </Link>
          <Link href="/" className="rounded-2xl border border-line bg-white px-6 py-4 text-lg font-black text-brand">
            返回首页
          </Link>
        </div>
      </div>
    </main>
  );
}
