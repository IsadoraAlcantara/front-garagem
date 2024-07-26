<script setup>
import { ref, reactive, onMounted } from 'vue'
import CategoriasApi from '@/api/categorias'

import Button from '../components/ButtonComponent.vue'
import InputText from '@/components/InputTextComponent.vue';
import LineDescricao from '@/components/LineComponents/LineDescricaoComponent.vue'

const categoriasApi = new CategoriasApi()

const defaultCategoria = { id: null, descricao: '' }
const categorias = ref([])
const categoria = reactive({ ...defaultCategoria })

onMounted(async () => {
  categorias.value = await categoriasApi.buscarTodasAsCategorias()
})

function limpar() {
  Object.assign(categoria, { ...defaultCategoria })
}

async function salvar() {
  if (categoria.id) {
    await categoriasApi.atualizarCategoria(categoria)
  } else {
    await categoriasApi.adicionarCategoria(categoria)
  }
  categorias.value = await categoriasApi.buscarTodasAsCategorias()
  limpar()
}

function editar(categoria_para_editar) {
  Object.assign(categoria, categoria_para_editar)
}

async function excluir(id) {
  await categoriasApi.excluirCategoria(id)
  categorias.value = await categoriasApi.buscarTodasAsCategorias()
  limpar()
}
</script>

<template>
  <div class="main">
    <h1>Categoria</h1>
    <div class="container">
      <div class="form">
        <InputText v-model="categoria.descricao" label="Descrição" />
        <Button @salvar="salvar()" @limpar="limpar()" />
      </div>
      <LineDescricao :list="categorias" :editar="editar" :excluir="excluir" />
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  padding: 1vw;
  background-color: white;
  width: 30vw;
  min-height: 30vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
