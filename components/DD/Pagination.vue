<script setup lang="ts">
const route = useRoute();
const props = defineProps<{
  currentPage: {
    type: number;
    default: 0;
  };
  totalPages: {
    type: number;
    default: 0;
  };
  limit: {
    type: number;
    default: 0;
  };
}>();

const prevPage = computed(() => {
  return !route.query.currentPage || route.query.currentPage == 1
    ? 1
    : +route.query.currentPage - 1;
});
const nextPage = computed(() => {
  return route.query.currentPage == props.totalPages
    ? props.totalPages
    : !route.query.currentPage
    ? 2
    : +route.query.currentPage + 1;
});
</script>
<template>
  <nav
    class="flex items-center justify-between border-t border-gray-200 px-4 gap-x-5 sm:px-0"
  >
    <div class="-mt-px flex w-0 flex-1">
      <NuxtLink
        :to="{
          query: { currentPage: 1 },
        }"
        class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="foundation:previous" class="text-2xl" />
      </NuxtLink>
      <NuxtLink
        :to="{
          query: {
            currentPage: prevPage,
          },
        }"
        class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="flowbite:caret-left-solid" class="text-2xl" />
      </NuxtLink>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <NuxtLink
        v-for="i in totalPages"
        :to="{
          query: {
            currentPage: i,
          },
        }"
        :key="i"
        class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >{{ i }}</NuxtLink
      >
      <span
        class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
        >...</span
      >
    </div>
    <div class="-mt-px flex w-0 flex-1 justify-end">
      <NuxtLink
        :to="{
          query: {
            currentPage: nextPage,
          },
        }"
        class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="flowbite:caret-right-solid" class="text-2xl" />
      </NuxtLink>
      <NuxtLink
        :to="{
          query: { currentPage: totalPages },
        }"
        :disabled="currentPage == totalPages"
        class="disabled:cursor-not-allowed inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="foundation:next" class="text-2xl" />
      </NuxtLink>
    </div>
  </nav>
</template>
