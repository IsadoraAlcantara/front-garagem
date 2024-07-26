<script setup>
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

@media screen and (max-width: 768px) {
  button {
    padding: 1.7vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2vw 0;
  }
}
</style>
