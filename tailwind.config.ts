import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: { DEFAULT: "var(--primary)", foreground: "#fff" },
      },
      borderRadius: { lg: ".75rem", md: ".5rem" },
    },
  },
  plugins: [],
} satisfies Config;
