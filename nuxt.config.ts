// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss"],
  devtools: { enabled: true },

  routeRules: {
    "/": {
      redirect: "/hero",
    },
  },

  tailwindcss: {
    configPath: "~/config/tailwind.config.ts",
  },

  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
});
