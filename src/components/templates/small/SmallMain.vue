<script setup></script>
<template>
  <h2>Home</h2>
  <div class="welcome">
    <div class="text">
      <p class="title">Seja bem-vindo!</p>
      <p>Qual é o automóvel dos seus sonhos?</p>
    </div>
    <img src="https://i.ibb.co/qk8Xb3x/oficina-invertida.jpg" alt="">
  </div>
  <div class="search">
    <i class="mdi mdi-magnify mdi-24px" />
    <input type="text" placeholder="Pesquisar" />
  </div>
  <p class="title-2">Coisas de carro</p>
  <div class="links">
    <Router-link to="/acessorios" class="box">
      <i class="mdi mdi-radio mdi-24px" />
      <p>Acessórios</p>
    </Router-link>
    <Router-link to="/categorias" class="box">
      <i class="mdi mdi-book mdi-24px" />
      <p>Categorias</p>
    </Router-link>
    <Router-link to="cores" class="box">
      <i class="mdi mdi-palette-outline mdi-24px" />
      <p>Cores</p>
    </Router-link>
    <Router-link to="/marcas" class="box">
      <i class="mdi mdi-alpha-r-circle-outline mdi-24px" />
      <p>Marcas</p>
    </Router-link>
    <Router-link to="/modelos" class="box">
      <i class="mdi mdi-car-convertible mdi-24px" />
      <p>Modelos</p>
    </Router-link>
    <Router-link to="/veiuclos" class="box">
      <i class="mdi mdi-car mdi-24px" />
      <p>Veículo</p>
    </Router-link>
  </div>
</template>
<style scoped>
.search {
  background-color: #d0d4da;
  width: 85vw;
  height: 9vw;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-top: 5vw;
  padding: 0 2vw;
}

.search i {
  color: grey;
}

.search input {
  background-color: transparent;
  border: none;
  color: #0c2240;
  font-size: 16px;
  margin: 2vw;
  outline: none;
}

.title-2 {
  align-self: flex-start;
  margin: 2vw 0;
  font-size: 18px;
  color: #0c2240;
  font-weight: 600;
}

h2 {
  align-self: flex-start;
  font-weight: bold;
  font-size: 28px;
}

i {
  color: white;
}
.box p {
  font-size: 18px;
  color: white;
}

.welcome {
  position: relative;
  width: 85vw;
  height: 30vw;
  border: #0c2240 solid 3px;
  border-radius: 20px;
  padding: 5vw;
  display: flex;
}

.welcome img {
  width: 200px;
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
  background-color: #a7bdd9;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #0c2240;
  margin: 2vw;
  height: 30vw;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
