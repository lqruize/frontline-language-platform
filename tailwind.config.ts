import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        muted: "#667085",
        line: "#D8DEE8",
        brand: "#2563EB",
        brandSoft: "#EAF2FF",
        warm: "#F7F8FA",
        success: "#22A06B",
        danger: "#D92D20",
      },
      boxShadow: {
        soft: "0 10px 28px rgba(16, 24, 40, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
