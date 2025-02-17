// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@pinia/nuxt", "@nuxt/ui"],
  devtools: { enabled: true },

  routeRules: {
    "/": {
      redirect: "/hero",
    },
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
