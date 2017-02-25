<template>
  <div class="jess"></div>
</template>

<script>

export default {
  name: 'jess'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -webkit-linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -moz-linear-gradient(#c9dbe9 0%, #fff 100%);
}

.about {
  z-index: 100;
  text-align: center;
}

h1 {
  font-size: 172px;
  font-family: 'Amatic SC', cursive;
}

h1, h2 {
  font-weight: 200;
}

.truth {
  font-weight: bold;
}

.facts {
  max-width: 800px;
}

.fact {
  font-size: 36px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.button {
  text-align: right;
}
</style>
