<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    modelValue: string;
    inputClass?: string;
    wrapperClass?: string;
    placeholder?: string;
  }>(),
  {
    modelValue: "",
    inputClass: "default-input",
    wrapperClass: "m-5",
    placeholder: "",
  }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "change", value: string): void;
}>();

const modelVal = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emit("update:modelValue", value);
  },
});

const leadingIconWidth = ref(0);
const trailingIconWidth = ref(0);
const leadingIconSlot = ref<HTMLElement | null>(null);
const trailingIconSlot = ref<HTMLElement | null>(null);

const updateSlotWidth = () => {
  leadingIconSlot.value
    ? (leadingIconWidth.value = leadingIconSlot.value.offsetWidth + 5)
    : (leadingIconWidth.value = 0);

  trailingIconSlot.value
    ? (trailingIconWidth.value = trailingIconSlot.value.offsetWidth + 5)
    : (trailingIconWidth.value = 0);
};

onMounted(() => {
  updateSlotWidth();
});
</script>

<template>
  <div :class="wrapperClass">
    <label
      data-slot="label"
      class="text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white font-medium"
      :for="name"
      >Full name</label
    >
    <div class="relative rounded-lg overflow-clip">
      <div
        ref="leadingIconSlot"
        class="absolute inset-y-0 left-0 h-full w-fit flex items-center"
      >
        <slot name="leading-icon" />
      </div>
      <div
        ref="trailingIconSlot"
        class="absolute inset-y-0 right-0 h-full w-fit flex items-center"
      >
        <slot name="trailing-icon" />
      </div>
      <input
        :class="[inputClass]"
        :style="{
          paddingLeft: `${leadingIconWidth}px`,
          paddingRight: `${trailingIconWidth}px`,
        }"
        :id="name"
        data-headlessui-state=""
        :data-invalid="true"
        :name="name"
        aria-labelledby="headlessui-label-:R1d1jttakva:"
        :placeholder="placeholder"
        v-model="modelVal"
        @change="$emit('change', modelVal)"
      />
    </div>
  </div>
</template>

<style scoped></style>
