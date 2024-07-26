<script setup>
import { ref, reactive, onMounted } from 'vue'
import CoresApi from '@/api/cores'

import Button from '../components/ButtonComponent.vue'
import InputText from '@/components/InputTextComponent.vue';
import LineNome from '@/components/LineComponents/LineNomeComponent.vue'

const coresApi = new CoresApi()

const defaultCor = { id: null, nome: '' }
const cores = ref([])
const cor = reactive({ ...defaultCor })

onMounted(async () => {
  cores.value = await coresApi.buscarTodasAsCores()
})

function limpar() {
  Object.assign(cor, { ...defaultCor })
}

async function salvar() {
  if (cor.id) {
    await coresApi.atualizarCor(cor)
  } else {
    await coresApi.adicionarCor(cor)
  }
  cores.value = await coresApi.buscarTodasAsCores()
  limpar()
}

function editar(cor_para_editar) {
  Object.assign(cor, cor_para_editar)
}

async function excluir(id) {
  await coresApi.excluirCor(id)
  cores.value = await coresApi.buscarTodasAsCores()
  limpar()
}
</script>

<template>
  <div class="main">
    <h1>Cor</h1>
    <div class="container">
    <div class="form">
      <InputText v-model="cor.nome" label="Nome" />
      <Button @salvar="salvar()" @limpar="limpar()" />
    </div>
    <LineNome :list="cores" :editar="editar" :excluir="excluir" />
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
