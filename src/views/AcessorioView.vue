<script setup>
import { ref, reactive, onMounted } from 'vue'
import AcessoriosApi from '@/api/acessorios'

import Button from '../components/ButtonComponent.vue'
import InputText from '@/components/InputTextComponent.vue';
import LineDescricao from '@/components/LineComponents/LineDescricaoComponent.vue'

const acessoriosApi = new AcessoriosApi()

const defaultAcessorio = { id: null, descricao: '' }
const acessorios = ref([])
const acessorio = reactive({ ...defaultAcessorio })

onMounted(async () => {
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios()
})

function limpar() {
  Object.assign(acessorio, { ...defaultAcessorio })
}

async function salvar() {
  if (acessorio.id) {
    await acessoriosApi.atualizarAcessorio(acessorio)
  } else {
    await acessoriosApi.adicionarAcessorio(acessorio)
  }
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios()
  limpar()
}

function editar(acessorio_para_editar) {
  Object.assign(acessorio, acessorio_para_editar)
}

async function excluir(id) {
  await acessoriosApi.excluirAcessorio(id)
  acessorios.value = await acessoriosApi.buscarTodosOsAcessorios()
  limpar()
}
</script>

<template>
  <div class="main">
    <h1>Acessório</h1>
    <div class="container">
      <div class="form">
        <InputText v-model="acessorio.descricao" label="Descrição" />
        <Button @salvar="salvar()" @limpar="limpar()" />
      </div>
      <LineDescricao :list="acessorios" :editar="editar" :excluir="excluir" />
    </div>
  </div>
</template>
<style scoped>
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
