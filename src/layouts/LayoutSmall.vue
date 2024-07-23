<script setup>
import SmallHeader from '@/components/templates/small/SmallHeader.vue'
</script>

<template>
  <div id="layout-small">
    <header>
      <SmallHeader />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>
<style scoped>
#layout-small {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: #eeeeee 2px solid;
  background-color: white;

  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 5%;
}

main {
  margin-top: 5%;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 4rem;
  padding-top: 1.5rem;
  position: relative;
}
</style>
