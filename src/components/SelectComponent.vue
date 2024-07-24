<script setup>
defineProps(['label', 'list'])
</script>
<template>
  <select  name="cores" id="cores">
    <option value="" disabled selected>{{ label }}</option>
    <option :value="i.id" v-for="i in list" :key="i.id">
      {{ i?.nome? i?.nome: i?.descricao }}
    </option>
  </select>
</template>
<style scoped>
select {
  border-radius: 5px;
  width: 5vw;
}

select:invalid {
  color: gray;
}
</style>
