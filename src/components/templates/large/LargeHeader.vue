<script setup>
import { onMounted } from 'vue'
import { PassageUser } from '@passageidentity/passage-elements/passage-user'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
</script>
<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link to="/categorias">Categorias</router-link>
    <router-link to="/acessorios">Acessórios</router-link>
    <router-link to="/cores">Cores</router-link>
    <router-link to="/marcas">Marcas</router-link>
    <router-link to="/modelos">Modelos</router-link>
    <router-link to="/veiculos">Veículos</router-link>
    <div v-if="authStore.loggedIn">
      <router-link to="/logout">Logout</router-link>
      {{ authStore.user.email }}
    </div>
    <router-link v-else to="/login">Login</router-link>
  </nav>
</template>
<style scoped>
nav {
  display: flex;
  gap: 2vw;
  justify-content: center;
}

a:hover {
  color: #181b59;
}

a {
  text-decoration: none;
  transition: 0.4s;
  color: #797e8c;
}
</style>
