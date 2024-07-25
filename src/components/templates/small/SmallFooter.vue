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
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <RouterLink to="/login">
      <i class="mdi mdi-account" />
      Login
    </RouterLink>
  </div>
  <div class="icons">
    <RouterLink to="/">
      <i class="mdi mdi-home-outline" />
      Home
    </RouterLink>
    <RouterLink to="/">
      <i class="mdi mdi-account-circle-outline" />
      Perfil
    </RouterLink>
    <RouterLink to="/veiculos">
      <div class="plus-bt">
        <i class="mdi mdi-plus size-24" />
      </div>
    </RouterLink>
    <RouterLink to="/">
      <i class="mdi mdi-cart-outline" />
      Carrinho
    </RouterLink>

    <div class="hamburger" @click="showMenu = !showMenu">
      <i class="mdi mdi-menu" />
      Menu
    </div>
  </div>
</template>
<style scoped>
.plus-bt {
  background-color: #292d73;
  color: white;
  width: 8vw;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}

#footerMenu {
  position: fixed;
  bottom: 15%;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  width: 20%;
  border-top: #eeeeee 1px solid;
  background-color: white;
  display: block;
  padding: 1rem;
}

#footerMenu a {
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-decoration: none;
  color: #282828;
  font-size: 1rem;
  transition: color 0.3s;
}

.icons {
  display: flex;
  width: 100%;
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
}

.hamburger:hover {
  cursor: pointer;
}
</style>
