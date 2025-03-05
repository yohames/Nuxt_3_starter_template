<script setup lang="ts">
import clientsEnum from "@/utils/apolloClientsEnum";
import character_by_id from "@/graphql/queries/character.gql";

const route = useRoute();
const id = route.params.id;
const variables = {
  id: id,
};

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
  data: character,
  status,
  refresh,
  execute,
} = await asyncQueryFetch({
  query: character_by_id,
  variables: variables,
  clientId: clientsEnum.ClientRickAndMorty,
  options: tempOpt,
});

useSeoMeta({
  title: character.value.character?.name,
  description: `${character.value.character.name} is a ${character.value.character.species} from ${character.value.character.origin.name}`,
  ogTitle: character.value.character.name,
  ogDescription: `${character.value.character.name} is a ${character.value.character.species} from ${character.value.character.origin.name}`,
  ogImage: character.value.character.image,
  ogUrl: `https://nuxt-3-starter-template-gold.vercel.app/seo/${character.value.character.id}`,
  twitterTitle: character.value.character.name,
  twitterDescription: `${character.value.character.name} is a ${character.value.character.species} from ${character.value.character.origin.name}`,
  twitterImage: character.value.character.image,
  twitterCard: "summary",
  twitterSite: "@nuxt_js",
  twitterCreator: "@nuxt_js",
  robots: "index, follow",
  keywords: `${character.value.character.name}, Nuxt 3 SEO.`,
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
  <div class="flex flex-col justify-center items-center">
    <img :src="character.character.image" alt="character.name" class="w-80" />
    <h1 class="text-2xl font-semibold">{{ character.character.name }}</h1>
    <p>Origin: {{ character.character.origin.name }}</p>
    <p>Species: {{ character.character.species }}</p>
  </div>
</template>

<style scoped></style>
