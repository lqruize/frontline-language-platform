import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "北美餐厅生活与工作生存英语",
  description: "中文用户学习北美餐厅真实工作英语的第一版 MVP。",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563EB",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
