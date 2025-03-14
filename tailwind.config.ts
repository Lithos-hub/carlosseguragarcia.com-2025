import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#32d8f2",
        secondary: "#eb2941",
        dark1: "#003554",
        dark2: "#242423",
        light1: "#f2f4f3",
        light2: "#cfdbd5",
      },
      fontFamily: {
        lucania: ["Lucania", "sans-serif"],
        exo: ["Exo", "sans-serif"],
        jetbrainsMono: ["JetBrains Mono", "sans-serif"],
        whiteRabbit: ["WhiteRabbit", "sans-serif"],
      },
    },
  },
} satisfies Config;
