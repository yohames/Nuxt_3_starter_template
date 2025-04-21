import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],

  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/apollo",
    "@nuxtjs/color-mode",
    "nuxt-headlessui",
    "@nuxt/icon",
    "@vueuse/nuxt",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  routeRules: {
    "/seo/**": { ssr: true },
    "/**": { ssr: false },
  },
  apollo: {
    clients: {
      default: "./apollo/default.ts",
      client_rickandmorty: "./apollo/client_rickandmorty.ts",
      client_countries: "./apollo/client_countries.ts",
    },
  },
  headlessui: {
    prefix: "Headless",
  },
  colorMode: {
    preference: "system",
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
});
