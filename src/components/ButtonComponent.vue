<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['salvar, limpar']);
</script>
<template>
  <button @click="$emit('salvar')">Salvar</button>
  <button @click="$emit('limpar')">Limpar</button>
</template>
<style scoped>
button {
  background-color: #292d73;
  color: white;
  border: none;
  padding: 0.6vw;
  border-radius: 5px;
}
</style>
