<script setup>
import { ref } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'

const showMenu = ref(false)

onBeforeRouteUpdate(() => {
  showMenu.value = false
})
</script>
<template>
  <div id="footerMenu" :style="{ display: showMenu ? 'block' : 'none' }">
    <RouterLink to="/acessorios">
      <i class="mdi mdi-radio" />
      Acessórios
    </RouterLink>
    <RouterLink to="/categorias">
      <i class="mdi mdi-car-sports" />
      Categorias
    </RouterLink>
    <RouterLink to="/cores">
      <i class="mdi mdi-palette-outline" />
      Cores
    </RouterLink>
    <RouterLink to="/marcas">
      <i class="mdi mdi-alpha-r-circle-outline" />
      Marcas
    </RouterLink>
    <RouterLink to="/modelos">
      <i class="mdi mdi-car-convertible" />
      Modelos
    </RouterLink>
    <RouterLink to="/veiculos">
      <i class="mdi mdi-car" />
      Veículos
    </RouterLink>
  </div>
  <div class="icons">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline mdi-36px" />
    </RouterLink>
    <RouterLink to="/login">
      <i class="mdi mdi-account-circle-outline mdi-36px" />
    </RouterLink>
    <RouterLink to="/veiculos">
      <div class="plus-bt">
        <i class="mdi mdi-plus mdi-24px" />
      </div>
    </RouterLink>
    <RouterLink to="/">
      <i class="mdi mdi-cart-outline mdi-36px" />
    </RouterLink>
    <div class="hamburger" @click="showMenu = !showMenu">
      <i class="mdi mdi-menu mdi-36px" />
    </div>
  </div>
</template>
<style scoped>
.plus-bt {
  background-color: #143259;
  color: #e4eaf2;
  width: 8vw;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}

#footerMenu {
  position: fixed;
  bottom: 100%;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 35%;
  border-top: #eeeeee 1px solid;
  background-color: #0c2240;
  display: block;
  padding: 1rem;
  border-radius: 8px;
}

#footerMenu a {
  display: flex;
  width: 100%;
  text-decoration: none;
  color: #e4eaf2;
  font-size: 1rem;
  transition: color 0.3s;
  gap: 2vw;
}

.icons {
  display: flex;
  width: 100%;
  height: 8vw;
  align-items: center;
  justify-content: space-between;
}

.icons a,
.icons .hamburger {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #282828;
  font-size: 1rem;
  transition: color 0.3s;
  color: #e4eaf2;
}

.hamburger:hover {
  cursor: pointer;
}
</style>
