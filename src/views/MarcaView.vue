<script setup>
import { ref, reactive, onMounted } from 'vue'
import MarcasApi from '@/api/marcas'
const marcasApi = new MarcasApi()

import Button from '../components/ButtonComponent.vue'
import InputText from '@/components/InputTextComponent.vue'
import LineNacionalidade from '@/components/LineComponents/LineNacionalidadeComponent.vue'

const defaultMarca = { id: null, nome: '', nacionalidade: '' }
const marcas = ref([])
const marca = reactive({ ...defaultMarca })

onMounted(async () => {
  marcas.value = await marcasApi.buscarTodasAsMarcas()
})

function limpar() {
  Object.assign(marca, { ...defaultMarca })
}

async function salvar() {
  if (marca.id) {
    await marcasApi.atualizarMarca(marca)
  } else {
    await marcasApi.adicionarMarca(marca)
  }
  marcas.value = await marcasApi.buscarTodasAsMarcas()
  limpar()
}

function editar(marca_para_editar) {
  Object.assign(marca, marca_para_editar)
}

async function excluir(id) {
  await marcasApi.excluirMarca(id)
  marcas.value = await marcasApi.buscarTodasAsMarcas()
  limpar()
}
</script>

<template>
  <div class="main">
    <h1>Marca</h1>
    <div class="container-select">
      <div class="form">
        <InputText v-model="marca.nome" label="Nome" />
        <InputText v-model="marca.nacionalidade" label="Nacionalidade" />
        <Button @salvar="salvar()" @limpar="limpar()" />
      </div>
      <LineNacionalidade :list="marcas" :editar="editar" :excluir="excluir" />
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 768px) {
  .container-select {
    min-height: 70vw;
    min-width: 85vw;
  }

  ul {
    margin-top: 6vw;
  }

  select {
    width: 14vw !important;
    height: 6vw !important;
    background-color: white;
  }

  .form {
    display: grid;
    grid-template-columns: 20vw 20vw 20vw 20vw;
  }
}
</style>
