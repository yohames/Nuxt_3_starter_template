<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "dropdown-right-top",
  },
});

const colorMode = useColorMode();
const currentStyle = toRef(props, "type");

const availableThemes = [
  {
    key: "light",
    text: "Light",
  },
  {
    key: "dark",
    text: "Dark",
  },
  {
    key: "system",
    text: "System",
  },
];
</script>

<template>
  <div class="flex items-center">
    <ClientOnly>
      <HeadlessListbox
        v-if="currentStyle === 'dropdown-right-top'"
        v-model="colorMode.preference"
        as="div"
        class="relative flex items-center"
      >
        <HeadlessListboxLabel class="sr-only">Theme</HeadlessListboxLabel>
        <HeadlessListboxButton type="template">
          <button
            class="dark:text-gray-400 text-gray-600 flex items-center p-2 hover:bg-primary/20 dark:hover:bg-gray-100/30 rounded-full duration-300"
          >
            <span class="flex justify-center items-center dark:hidden">
              <Icon
                :name="colorMode.value == 'light' ? 'uil:sun' : 'uil:moon'"
                class="shrink-0 text-2xl transition-all duration-300"
                :class="
                  colorMode.value == 'light'
                    ? 'text-primaryLite'
                    : 'text-gray-400'
                "
              />
            </span>
            <span class="justify-center items-center hidden dark:flex">
              <Icon
                name="uil:moon"
                class="shrink-0 text-2xl transition-all text-gray-400"
              />
            </span>
          </button>
        </HeadlessListboxButton>
        <HeadlessListboxOptions
          class="p-1 absolute z-50 origin-top-right top-full right-0 outline-none bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm text-gray-700 font-semibold dark:bg-gray-800 dark:ring-0 dark:highlight-white/5 dark:text-gray-300"
        >
          <HeadlessListboxOption
            v-for="theme in availableThemes"
            :key="theme.key"
            :value="theme.key"
            :class="{
              'py-2 px-2 flex items-center cursor-pointer': true,
              'text-primary bg-gray-100 dark:bg-gray-600/30':
                colorMode.preference === theme.key,
              'hover:bg-gray-50 dark:hover:bg-gray-700/30':
                colorMode.preference !== theme.key,
            }"
          >
            <span class="text-sm mr-2 flex items-center">
              <Icon
                class="text-2xl"
                v-if="theme.key === 'light'"
                name="uil:sun"
              />
              <Icon
                class="text-2xl"
                v-else-if="theme.key === 'dark'"
                name="uil:moon"
              />
              <Icon
                class="text-2xl"
                v-else-if="theme.key === 'system'"
                name="uil:laptop"
              />
            </span>
            {{ theme.text }}
          </HeadlessListboxOption>
        </HeadlessListboxOptions>
      </HeadlessListbox>
      <select
        v-if="currentStyle === 'select-box'"
        v-model="colorMode.preference"
        class="w-full px-2 pr-3 py-1 outline-none rounded border bg-transparent text-gray-700 dark:text-gray-300 border-gray-900/10 dark:border-gray-50/[0.2]"
      >
        <option
          v-for="theme in availableThemes"
          :key="theme.key"
          :value="theme.key"
        >
          {{ theme.text }}
        </option>
      </select>
    </ClientOnly>
  </div>
</template>
