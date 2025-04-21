<script setup lang="ts">
const textValue = ref("Hello World");
</script>
<template>
  <div>
    {{ textValue }}
    <FormTextField v-model="textValue" @change="console.log('hello')" />
  </div>
</template>

<style scoped></style>
