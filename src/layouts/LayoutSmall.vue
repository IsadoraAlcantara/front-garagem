<script setup>
import SmallHeader from '@/components/templates/small/SmallHeader.vue'
import SmallFooter from '@/components/templates/small/SmallFooter.vue'
</script>

<template>
  <div id="layout-small">
    <header>
      <SmallHeader />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <SmallFooter />
    </footer>
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
  padding: 1.7rem;
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

footer {
  border-top: #eeeeee 1px solid;
  box-shadow: 0 0 10px 0 #eeeeee;
  padding: 1rem;
  margin-top: auto;
  background-color: #0c2240;
  position: fixed;
  left: 50%;
  translate: -50% 0;
  bottom: 2%;
  width: 80%;
  color: white;
  text-align: center;
  z-index: 10;
  border-radius: 50px;
}
</style>
