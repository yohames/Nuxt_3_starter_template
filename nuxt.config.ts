// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/apollo",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-headlessui",
    "@nuxt/icon",
  ],
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
});