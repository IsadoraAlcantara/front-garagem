<script setup>
defineProps(['veiculos'])
const model = defineModel();
</script>
<template>
  <ul>
    <li v-for="veiculo in veiculos" :key="veiculo.id">
      <span @click="(veiculo)">
        ({{ veiculo.id }}) - {{ veiculo.ano }} - {{ veiculo.preco }} - {{ veiculo.cor }} -
        {{ veiculo.modelo }} - {{ veiculo.acessorio }}
      </span>
      <button class="bt-delete" @click="$emit('excluir', veiculo.id)">X</button>
    </li>
  </ul>
</template>
<style scoped>
ul {
  padding: 0;
}

li {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  list-style-type: none;
  margin: 1vw;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
}
</style>
