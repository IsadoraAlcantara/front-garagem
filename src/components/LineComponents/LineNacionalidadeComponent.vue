<script setup>
defineProps(['list', 'editar', 'excluir'])
</script>
<template>
  <ul>
    <li v-for="i in list" :key="i.id">
      <span @click="editar(i)">
        ({{ i.id }}) - {{ i.nome }} - {{ i.nacionalidade }}
      </span>
      <button class="bt-delete" @click="excluir(i.id)">X</button>
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
