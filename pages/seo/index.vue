<script setup lang="ts">
import clientsEnum from "@/utils/apolloClientsEnum";
import characters_query from "@/graphql/queries/characters.gql";

const variables = {
  limit: 5,
};
const items = ref([]);
const tempOpt = {
  server: true,
  default: () => [
    {
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      status: "Alive",
      species: "Human",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
      },
      location: {
        name: "Citadel of Ricks",
        dimension: "unknown",
      },
    },
  ],
};

const {
  data: characters,
  status,
  refresh,
  execute,
} = await asyncQueryFetch({
  query: characters_query,
  variables: variables,
  clientId: clientsEnum.ClientRickAndMorty,
  options: tempOpt,
});

useSeoMeta({
  title: "Rick and Morty SEO",
  description: "This page shows SEO implementation in Nuxt 3",
  ogTitle: "Rick and Morty SEO",
  ogDescription: "This page shows SEO implementation in Nuxt 3",
  ogImage: "/images/rick_and_morty_wallpaper.jpg",
  ogUrl: "https://nuxt-3-starter-template-gold.vercel.app/seo",
  twitterTitle: "Rick and Morty SEO",
  twitterDescription: "This page shows SEO implementation in Nuxt 3",
  twitterImage: "/images/rick_and_morty_wallpaper.jpg",
  twitterCard: "summary_large_image",
  twitterSite: "@nuxt_js",
  twitterCreator: "@nuxt_js",
  robots: "index, follow",
  keywords: "Rick and Morty, SEO, Nuxt 3",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});



</script>
<template>
  <div class="relative">
    <span class="absolute inset-0 -z-10">
      <img
        src="/images/rick_and_morty_wallpaper.jpg"
        alt="wallpaper"
        class="object-cover sticky top-0"
      />
    </span>
    <div class="flex justify-center py-10">
      <img
        src="/images/Rick-and-Morty.png"
        alt="Rick and Morty"
        class="w-1/2"
      />
    </div>

    <div>
      <div class="my-10 mx-auto max-w-[95vw] sm:max-w-[50vw]">
        <div
          class="flex items-center border focus-within:border-green-500 transition duration-300 pr-3 py-3 gap-2 bg-white border-green-500 rounded-full overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search for products"
            class="w-full h-full pl-4 text-gray-600 outline-none placeholder-gray-300 text-sm"
          />
          <Icon name="mdi:search" class="text-2xl text-green-500 shrink-0" />
        </div>
      </div>
      <div
        class="bg-[linear-gradient(180deg,rgba(0,36,12,0)_0%,rgba(255,255,255,0.9)_21%,rgba(255,255,255,0.9)_100%)]"
      >
        <div
          class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
        >
          <h2 class="sr-only">Characters</h2>

          <div
            class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          >
            <NuxtLink
              :to="{ name: 'seo-id', params: { id: character.id } }"
              v-for="character in characters.characters.results"
              :key="character.id"
              class="group"
            >
              <img
                :src="character.image"
                :alt="character.name"
                class="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 class="mt-1 text-lg font-medium text-gray-900">
                {{ character.name }}
              </h3>
              <p class="mt-1 text-sm text-gray-700">
                Species: {{ character.species }}
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
