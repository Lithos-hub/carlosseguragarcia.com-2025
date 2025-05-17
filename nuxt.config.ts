import glsl from "vite-plugin-glsl";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@pinia/nuxt", "@nuxt/ui", "@tresjs/nuxt", "@vueuse/nuxt"],

  tres: {
    devtools: true,
  },

  devtools: { enabled: true },

  colorMode: {
    preference: "system",
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },

  vite: {
    plugins: [glsl()],
  },
});
