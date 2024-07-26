<script setup>
import LargeHeader from '@/components/templates/large/LargeHeader.vue'
</script>
<template>
  <div id="layout-large">
    <header>
      <LargeHeader />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped>
#layout-large {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'header'
    'main';
  min-height: 100vh;
}

header {
  display: flex;
  widows: 100vw;
  justify-content: center;
  padding: 1.5rem;
  grid-area: header;
}

main {
  min-height: 80%;
  padding: 2rem;
  grid-area: main;
}
</style>
