<script setup>
defineProps(["label"]);
const model = defineModel();
</script>
<template>
  <span class="input-container">
    <input type="text" :placeholder="label" v-model="model" />
  </span>
</template>
<style scoped>
input {
  padding: 0.8vw;
  border-radius: 5px;
  border: solid #797e8c 1px;
  outline: none;
  width: 15vw;
}
</style>