// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", "@pinia/nuxt", "nuxt-aos"],
  css: ["~/assets/css/main.css"],
  ui: {
    colorMode: false,
  },
  aos: {
    duration: 1000,
    once: true,
  },
});
