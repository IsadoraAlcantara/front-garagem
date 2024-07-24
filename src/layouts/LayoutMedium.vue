<script setup>
import MediumHeader from '@/components/templates/medium/MediumHeader.vue'
</script>

<template>
  <div id="layout-medium">
    <header>
      <MediumHeader />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped>
#layout-medium {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'main';
  min-height: 100vh;
}

header {
  display: flex;
  widows: 100vw;
  justify-content: flex-end;
  padding: 1.5rem;
  grid-area: header;
}

main {
  min-height: 80%;
  padding: 2rem;
  grid-area: main;
}
</style>
<style scoped>
#layout-medium {
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto 1fr auto;
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
