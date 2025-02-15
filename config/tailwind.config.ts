import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#004e98",
        secondary: "#ff6700",
        dark1: "#003554",
        dark2: "#242423",
        light1: "#f2f4f3",
        light2: "#cfdbd5",
      },
    },
  },
};
