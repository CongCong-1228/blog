import type { Config } from "tailwindcss";

export default {
  darkMode: ["selector", "[data-theme='dark']"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        header: {
          bg: "var(--header-bg)",
          text: "var(--header-text)",
          bottom: "var(--header-bottom-color)",
        },
        blog: {
          link: "var(--blog-link-color)",
        },
      },
      height: {
        header: "var(--header-height)",
      },
    },
  },
  plugins: [],
} satisfies Config;
