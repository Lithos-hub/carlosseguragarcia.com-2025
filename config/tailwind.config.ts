import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#00a6fb",
        secondary: "#0582ca",
        dark1: "#003554",
        dark2: "#242423",
        light1: "#f2f4f3",
        light2: "#cfdbd5",
      },
    },
  },
};
