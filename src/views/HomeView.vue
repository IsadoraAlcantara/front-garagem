<script setup>
import { onMounted } from 'vue'
import { PassageUser } from '@passageidentity/passage-elements/passage-user'
import { useAuthStore } from '@/stores/auth'
import Button from '../components/ButtonComponent.vue'

const authStore = useAuthStore()

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token')
    const passageUser = new PassageUser(authToken)
    const user = await passageUser.userInfo(authToken)
    if (user) {
      await authStore.setToken(authToken)
    } else {
      authStore.unsetToken()
    }
  } catch (error) {
    authStore.unsetToken()
  }
}

onMounted(() => {
  getUserInfo()
})
</script>

<template>
  <h2>Home</h2>
  <div class="welcome">
    <div class="text">
      <p class="title">Seja bem-vindo!</p>
      <p>Qual é o automóvel dos seus sonhos?</p>
    </div>
  </div>
  <p>Algo a ser mudado</p>
  <div class="links">
    <div class="box">
      Acessórios
      <i class="mdi mdi-radio" />
    </div>
    <div class="box">
      Categorias
      <i class="mdi mdi-car-sports" />
    </div>
    <div class="box">
      Cores
      <i class="mdi mdi-palette-outline" />
    </div>
    <div class="box">Marcas</div>
    <div class="box">
      Modelos
      <i class="mdi mdi-car-convertible" />
    </div>
    <div class="box">
      Veículo
      <i class="mdi mdi-car" />
    </div>
  </div>
</template>
<style scoped>
.welcome {
  width: 85vw;
  height: 30vw;
  border: #0c2240 solid 3px;
  border-radius: 15px;
  padding: 5vw;
}

.text {
  width: 40vw;
}

.welcome .title {
  font-size: 20px;
  font-weight: 600;
}

h2 {
  color: #0c2240;
  display: flex;
}

.links {
  display: grid;
  grid-template-columns: 45vw 45vw;
  top: 20%;
  position: relative;
}

.box {
  background-color: #e4eaf2;
  color: #0c2240;
  margin: 2vw;
  height: 30vw;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
