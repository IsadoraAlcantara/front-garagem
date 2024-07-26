<script setup>
import { ref, reactive, onMounted } from 'vue'
import ModelosApi from '@/api/modelos'
import MarcasApi from '@/api/marcas'
import CategoriasApi from '@/api/categorias'

import Button from '../components/ButtonComponent.vue'
import InputText from '@/components/InputTextComponent.vue';
import LineModelos from '@/components/LineModelosComponent.vue';
// import Select from "../components/SelectComponent.vue"

const modelosApi = new ModelosApi()
const marcasApi = new MarcasApi()
const categoriasApi = new CategoriasApi()

const defaultModelo = { id: null, nome: '', marca: '', categoria: '' }
const modelos = ref([])
const marcas = ref([])
const categorias = ref([])
const modelo = reactive({ ...defaultModelo })

onMounted(async () => {
  modelos.value = await modelosApi.buscarTodosOsModelos()
  marcas.value = await marcasApi.buscarTodasAsMarcas()
  categorias.value = await categoriasApi.buscarTodasAsCategorias()
})

function limpar() {
  Object.assign(modelo, { ...defaultModelo })
}

async function salvar() {
  if (modelo.id) {
    await modelosApi.atualizarModelo(modelo)
  } else {
    await modelosApi.adicionarModelo(modelo)
  }
  modelos.value = await modelosApi.buscarTodosOsModelos()
  limpar()
}

function editar(modelo_para_editar) {
  Object.assign(modelo, modelo_para_editar)
}

async function excluir(id) {
  await modelosApi.excluirModelo(id)
  modelos.value = await modelosApi.buscarTodosOsModelos()
  limpar()
}
</script>

<template>
  <div class="main">
    <h1>Modelo</h1>
    <div class="container-select">
      <div class="form">
        <InputText v-model="modelo.nome" label="Nome" />
        <select v-model="modelo.marca" name="marcas" id="marcas">
          <option :value="marca.id" v-for="marca in marcas" :key="marca.id">
            {{ marca.nome }}
          </option>
        </select>
        <!-- <Select v-model="modelo.marca" label="marcas" :list="marcas" /> -->
        <select v-model="modelo.categoria" name="categorias" id="categorias">
          <option :value="categoria.id" v-for="categoria in categorias" :key="categoria.id">
            {{ categoria.descricao }}
          </option>
        </select>
        <Button @salvar="salvar" @limpar="limpar" />
      </div>
      <LineModelos :list="modelos" :editar="editar" :excluir="excluir" />
    </div>
  </div>
</template>

<style></style>
