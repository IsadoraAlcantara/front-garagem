<script setup>
import { ref, reactive, onMounted } from 'vue'
import VeiculosApi from '@/api/veiculos'
import CoresApi from '@/api/cores'
import ModelosApi from '@/api/modelos'
import AcessoriosApi from '@/api/acessorios'

import Button from '../components/ButtonComponent.vue'
import InputNumber from '../components/InputNumberComponent.vue'
import LineVeiculos from '@/components/LineComponents/LineVeiculosComponent.vue'
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
  await veiculosApi.excluirVeiculo(id)
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
        <!-- <Select v-model="veiculo.cor" label="cores" :list="cores" /> -->
        <select v-model="veiculo.cor" name="cores" id="cores">
          <option :value="cor.id" v-for="cor in cores" :key="cor.id">
            {{ cor.nome }}
          </option>
        </select>
        <!-- <Select v-model="veiculo.modelo" label="modelos" :list="modelos" /> -->
        <select v-model="veiculo.modelo" name="modelos" id="modelos">
          <option :value="modelo.id" v-for="modelo in modelos" :key="modelo.id">
            {{ modelo.nome }}
          </option>
        </select>
        <!-- <Select v-model="veiculo.acessorio" label="acessorios" :list="acessorios" /> -->
        <select v-model="veiculo.acessorio" name="acessorios" id="acessorios">
          <option :value="acessorio.id" v-for="acessorio in acessorios" :key="acessorio.id">
            {{ acessorio.descricao }}
          </option>
        </select>
        <Button class="button" @salvar="salvar()" @limpar="limpar()" />
      </div>
      <LineVeiculos :list="veiculos" :editar="editar" :excluir="excluir" />
    </div>
  </div>
</template>
<style>
.container-select {
  display: flex;
  flex-direction: column;
  padding: 1vw;
  background-color: white;
  min-width: 40vw;
  min-height: 30vw;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form select {
  height: 2.6vw;
  width: 5vw;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  .container-select {
    min-height: 70vw;
    min-width: 85vw;
  }

  ul {
    margin-top: 12vw;
  }

  select {
    width: 14vw !important;
    height: 6vw !important;
    background-color: white;
  }

  .form {
    display: grid;
    grid-template-columns: 20vw 20vw 14vw 14vw 14vw;
  }
}
</style>
