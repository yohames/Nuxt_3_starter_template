<script setup lang="ts">
import { useDebounceFn } from "@vueuse/core";
import clientsEnum from "@/utils/apolloClientsEnum";
import characters_query from "@/graphql/queries/characters.gql";

// Data fetching
// const tempOpt = {
//   server: true,
//   default: () => [
//     {
//       name: "Rick Sanchez",
//       image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//       status: "Alive",
//       species: "Human",
//       gender: "Male",
//       origin: {
//         name: "Earth (C-137)",
//       },
//       location: {
//         name: "Citadel of Ricks",
//         dimension: "unknown",
//       },
//     },
//   ],
// };

const currentPage = ref(1);
const totalItems = ref(30);
const limit = ref(10);
const search = ref("");

const variables = computed(() => {
  return {
    page: currentPage.value,
    filter: {
      name: search.value,
    },
  };
});

let tempSearch = ref("");
const debouncedFn = useDebounceFn(
  () => {
    search.value = tempSearch.value;
    execute();
  },
  1000,
  { maxWait: 5000 }
);
function onSearch(value: string) {
  tempSearch.value = value;
  debouncedFn();
}

function onSubmit() {
  search.value = tempSearch.value;
  debouncedFn();
}

function audioSearch() {
  console.log("audio search");
}
function imageSearch() {
  console.log("image search");
}

const {
  data: characters,
  status,
  refresh,
  execute,
} = await asyncQueryFetch({
  query: characters_query,
  variables,
  clientId: clientsEnum.ClientRickAndMorty,
  options: { server: true },
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
    {{ status }}
    <div>
      <div class="my-10 mx-auto max-w-[95vw] sm:max-w-[50vw]">
        <PrimSearchBar
          v-model="search"
          input-class="flex-1 placeholder-gray-300 text-gray-600"
          @update="onSearch"
          @change="onSubmit"
          wrapper-class="flex items-center border p-2 focus-within:border-green-500 transition duration-300 bg-white border-green-500 rounded-full overflow-hidden"
          placeholder="Search characters"
        >
          <template #leading-icon>
            <span class="flex items-center pr-3">
              <Icon
                name="material-symbols:search"
                class="text-2xl text-green-500 pr-2"
              />
            </span>
          </template>
          <template #trailing-icon>
            <div class="flex gap-x-3 items-center">
              <button class="flex items-center" @click="audioSearch">
                <Icon name="bi:mic" class="text-lg text-green-500" />
              </button>
              <button class="flex items-center" @click="imageSearch">
                <Icon
                  name="fluent:camera-add-20-regular"
                  class="text-xl text-green-500"
                />
              </button>
            </div>
          </template>
        </PrimSearchBar>
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
              class="group bg-white rounded-lg shadow-lg overflow-hidden border-2 border-transparent hover:border-gray-200 duration-200"
            >
              <img
                :src="character.image"
                :alt="character.name"
                class="aspect-square w-full rounded-t-lg bg-gray-200 object-cover scale-105 group-hover:scale-100 duration-300 xl:aspect-[7/8]"
              />
              <div class="p-4">
                <h3 class="mt-1 text-lg font-semibold text-gray-900">
                  {{ character.name }}
                </h3>
                <p class="mt-1 text-sm text-gray-700">
                  Species: {{ character.species }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <NavPagination
          :currentPage="currentPage"
          :totalItems="totalItems"
          :limit="limit"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
