<script setup>
defineProps(['list', 'editar', 'excluir'])
</script>
<template>
  <ul>
    <li v-for="i in list" :key="i.id">
      <span @click="editar(i)">
        ({{ i.id }}) - {{ i.descricao }}
      </span>
      <button class="bt-delete" @click="excluir(i.id)">X</button>
    </li>
  </ul>
</template>
<style scoped>
</style>
