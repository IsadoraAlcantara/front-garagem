<script setup>
import { ref, reactive, onMounted } from 'vue'
import VeiculosApi from '@/api/veiculos'
import CoresApi from '@/api/cores'
import ModelosApi from '@/api/modelos'
import AcessoriosApi from '@/api/acessorios'

import Button from '../components/ButtonComponent.vue'
// import BtSave from "../components/BtSaveComponent.vue"
import InputText from '../components/InputTextComponent.vue'
import InputNumber from '../components/InputNumberComponent.vue'
import Line from '@/components/LineComponent.vue'
import Select from '../components/SelectComponent.vue'

const veiculosApi = new VeiculosApi()
const coresApi = new CoresApi()
const modelosApi = new ModelosApi()
const acessoriosApi = new AcessoriosApi()

const defaultVeiculos = { id: null, ano: '', preco: '', acessorio: '', modelo: '', cor: '' }
const veiculos = ref([])
const cores = ref([])
const modelos = ref([])
const acessorios = ref([])
const veiculo = reactive({ ...defaultVeiculos })

onMounted(async () => {
  veiculos.value = await veiculosApi.buscarTodosOsVeiculos()
  cores.value = await coresApi.buscarTodasAsCores()
  modelos.value = await modelosApi.buscarTodosOsModelos()
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios()
})

function limpar() {
  Object.assign(veiculo, { ...defaultVeiculos })
}
async function salvar() {
  if (veiculo.id) {
    await veiculosApi.atualizarVeiculo(veiculo)
  } else {
    await veiculosApi.adicionarVeiculo(veiculo)
  }
  veiculos.value = await veiculosApi.buscarTodosOsVeiculos()
  limpar()
}

function editar(veiculo_para_editar) {
  Object.assign(veiculo, veiculo_para_editar)
}

async function excluir(id) {
  await veiculosApi.excluirVeiculos(id)
  veiculos.value = await veiculosApi.buscarTodosOsVeiculos()
  limpar()
}
</script>

<template>
  <div class="main">
    <h1>Veículos</h1>
    <div class="container-select">
      <div class="form">
        <InputNumber v-model="veiculo.ano" label="ano" />
        <InputNumber v-model="veiculo.preco" label="preço" />
        <!-- <select v-model="veiculo.cor" name="cores" id="cores">
          <option value="" disabled selected>cor</option>
          <option :value="cor.id" v-for="cor in cores" :key="cor.id">
            {{ cor.nome }}
          </option>
        </select> -->
        <Select v-model="veiculo.cor" label="cores" :list="cores" />
        <!-- <select v-model="veiculo.modelo" name="modelos" id="modelos">
          <option value="" disabled selected>modelo</option>
          <option :value="modelo.id" v-for="modelo in modelos" :key="modelo.id">
            {{ modelo.nome }}
          </option>
        </select>
        <select v-model="veiculo.acessorio" name="acessorios" id="acessorios">
          <option value="" disabled selected>acessorio</option>
          <option :value="acessorio.id" v-for="acessorio in acessorios" :key="acessorio.id">
            {{ acessorio.descricao }}
          </option>
        </select> -->
        <Select v-model="veiculo.modelo" label="modelos" :list="modelos" />
        <Select v-model="veiculo.acessorio" label="acessorios" :list="acessorios" />
        <Button @salvar="salvar()" @limpar="limpar()" />
      </div>
      <Line :veiculos="veiculos" />
    </div>
  </div>
</template>

<style>
</style>
