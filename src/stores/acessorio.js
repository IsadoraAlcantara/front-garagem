import { ref } from 'vue';
import { defineStore } from 'pinia';

import AcessorioService from "@/service/acessorio";
const acessorioService = new AcessorioService();

export const useAcessorioStore = defineStore('acessorio', () => {
  const acessorios = ref([])

  async function buscarTodosOsAcessorios() {
    categoires.value = await acessorioService.buscarTodosOsAcessorios();
  }

  async function adicionarAcessorio(acessorio) {
    await acessorioService.adicionarAcessorio(acessorio);
    buscarTodosOsAcessorios();
  }

  // PUT - validar qual atributo será mudado
  async function atualizarAcessorio(acessorio_id) {
    acessorios.value = await acessorioService.atualizarAcessorio(acessorio_id);
  }

  async function excluirAcessorio(id) {
    acessorios.value = await acessorioService.excluirAcessorio(id)
  }

  return { acessorios, buscarTodosOsAcessorios, adicionarAcessorio, atualizarAcessorio, excluirAcessorio}
})
