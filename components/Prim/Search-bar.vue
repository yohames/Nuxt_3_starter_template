<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  inputClass?: string;
  wrapperClass?: string;
  placeholder?: string;
}>();
const emit = defineEmits<{
  (e: "update", value: string): void;
  (e: "change"): void;
}>();

const modelVal = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emit("update", value);
  },
});
</script>
<template>
  <div :class="wrapperClass">
    <slot name="leading-icon" />
    <input
      type="text"
      :placeholder="placeholder"
      class="outline-none"
      :class="inputClass"
      v-model="modelVal"
      @keyup.enter="$emit('change')"
    />

    <slot name="trailing-icon" />
  </div>
</template>

<style scoped></style>
