<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  inputClass?: {
    type: string;
    default: "";
  };
  wrapperClass?: {
    type: string;
    default: "";
  };
  placeholder?: string;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "change", value: string): void;
}>();

const modelVal = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    emit("update:modelValue", value);
    // emit("change", value);
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
      @keyup.enter="$emit('change', modelVal)"
    />

    <slot name="trailing-icon" />
  </div>
  <div
    class="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8"
  >
    <div class="w-full max-w-sm">
      <div class="mt-1" data-headlessui-state="">
        <label
          class="text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white font-medium"
          id="headlessui-label-:R1d1jttakva:"
          for="headlessui-control-:R11jttakva:"
          data-headlessui-state=""
          >Full name</label
        >
        <!-- <span
          data-slot="control"
          class="relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none has-data-invalid:before:shadow-red-500/10"
        > -->

        <input
          class="relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none has-data-invalid:before:shadow-red-500/10 rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15 dark:[color-scheme:dark]"
          id="headlessui-control-:R11jttakva:"
          data-headlessui-state=""
          :data-disabled="null"
          :disabled="false"
          :data-invalid="true"
          name="full_name"
          v-model="modelVal"
          aria-labelledby="headlessui-label-:R1d1jttakva:"
        />
        <!-- </span> -->
      </div>
    </div>
  </div>

  <div
    class="-mx-6 flex min-w-[300px] items-start justify-center overflow-hidden border-y border-zinc-200 bg-white sm:mx-0 sm:max-w-full sm:rounded-lg sm:border dark:border-white/10 dark:bg-zinc-900 px-6 py-12 sm:px-8"
  >
    <div class="w-full max-w-sm">
      <div
        class="[&amp;>[data-slot=label]+[data-slot=control]]:mt-3 [&amp;>[data-slot=label]+[data-slot=description]]:mt-1 [&amp;>[data-slot=description]+[data-slot=control]]:mt-3 [&amp;>[data-slot=control]+[data-slot=description]]:mt-3 [&amp;>[data-slot=control]+[data-slot=error]]:mt-3 *:data-[slot=label]:font-medium"
        data-headlessui-state=""
      >
        <label
          data-slot="label"
          class="text-base/6 text-zinc-950 select-none data-disabled:opacity-50 sm:text-sm/6 dark:text-white"
          id="headlessui-label-:R1d1jttakva:"
          for="headlessui-control-:R11jttakva:"
          data-headlessui-state=""
          >Full name</label
        ><span
          data-slot="control"
          class="relative block w-full before:absolute before:inset-px before:rounded-[calc(var(--radius-lg)-1px)] before:bg-white before:shadow-sm dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-transparent after:ring-inset sm:focus-within:after:ring-2 sm:focus-within:after:ring-blue-500 has-data-disabled:opacity-50 has-data-disabled:before:bg-zinc-950/5 has-data-disabled:before:shadow-none has-data-invalid:before:shadow-red-500/10"
          ><input
            class="relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-transparent dark:bg-white/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-white/[2.5%] dark:data-hover:data-disabled:border-white/15 dark:[color-scheme:dark]"
            id="headlessui-control-:R11jttakva:"
            data-headlessui-state=""
            :data-invalid="true"
            name="full_name"
            aria-labelledby="headlessui-label-:R1d1jttakva:" /></span
        ><span
          hidden=""
          style="
            position: fixed;
            top: 1px;
            left: 1px;
            width: 1px;
            height: 0;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border-width: 0;
            display: none;
          "
        ></span>
      </div>
    </div>
  </div>
  <div class="m-5">
    <input
      v-model="modelVal"
      name="full_name"
      class="border border-red-600 rounded-md"
    />

    <input
      class="relative block w-full appearance-none rounded-lg px-[calc(--spacing(3.5)-1px)] py-[calc(--spacing(2.5)-1px)] sm:px-[calc(--spacing(3)-1px)] sm:py-[calc(--spacing(1.5)-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-hover:border-zinc-950/20 dark:border-white/10 dark:data-hover:border-white/20 bg-red-300 dark:bg-red-600/5 focus:outline-hidden data-invalid:border-red-500 data-invalid:data-hover:border-red-500 dark:data-invalid:border-red-500 dark:data-invalid:data-hover:border-red-500 data-disabled:border-zinc-950/20 dark:data-disabled:border-white/15 dark:data-disabled:bg-red-500/[2.5%] dark:data-hover:data-disabled:border-white/15 dark:[color-scheme:dark]"
      id="headlessui-control-:R11jttakva:"
      data-headlessui-state=""
      :data-disabled="null"
      :disabled="false"
      :data-invalid="true"
      name="full_name"
      v-model="modelVal"
      aria-labelledby="headlessui-label-:R1d1jttakva:"
    />
  </div>
</template>

<style scoped>
@media (prefers-color-scheme: dark) {
  .my-element {
    background-color: rgb(60, 255, 39);
    color: white;
  }
}
</style>
