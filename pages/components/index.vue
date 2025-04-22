<script setup lang="ts">
const textValue = ref("Text field");
</script>
<template>
  <div>
    {{ textValue }}
    <FormTextField
      v-model="textValue"
      @change="console.log('hello')"
      name="name"
    >
      <template #leading-icon>
        <p>abebe beso bela</p>
      </template>
    </FormTextField>
    <FormTextField
      v-model="textValue"
      @change="console.log('hello')"
      name="age"
    >
      <template #leading-icon>
        <div
          class="px-2 bg-gray-200 border-r border-gray-400 h-full flex items-center"
        >
          +251
        </div>
      </template>
      <template #trailing-icon>
        <div class="h-full flex items-center gap-x-2">
          <button
            class="bg-red-100 hover:bg-red-300 flex items-center p-1 rounded-full z-10 cursor-pointer"
          >
            <Icon name="ic:round-close" />
          </button>
          <div
            class="bg-green-300 h-full flex items-center px-2 text-sm font-light gap-x-2"
          >
            <Icon
              name="material-symbols:upload-rounded"
              class="text-xl"
            />Upload
          </div>
        </div>
      </template>
    </FormTextField>
  </div>
</template>

<style scoped>
/* .shadow-right {
  box-shadow: 1px 0 3px 0 rgba(153, 153, 153, 0.3);
} */
</style>
