<script setup lang="ts">
const props = defineProps<{
  currentPage: number;
  totalItems: number;
  limit: number;
}>();
</script>
<template>
  <nav
    class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0"
  >
    <div class="-mt-px flex w-0 flex-1">
      <a
        href="#"
        class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="famicons:play-back" class="text-2xl" />
      </a>
      <a
        href="#"
        class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="heroicons:arrow-left-20-solid" class="text-2xl" />
      </a>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <a
        href="#"
        class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >1</a
      >
      <span
        class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500"
        >...</span
      >
    </div>
    <div class="-mt-px flex w-0 flex-1 justify-end">
      <a
        href="#"
        class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="heroicons:arrow-right-20-solid" class="text-2xl" />
      </a>
      <a
        href="#"
        class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      >
        <Icon name="heroicons:chevron-double-right-20-solid" class="text-2xl" />
      </a>
    </div>
  </nav>
</template>
