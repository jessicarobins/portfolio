<template>
  <section class="hello">
    <h1>Hi, I'm Jess</h1>
    <h2>A full-stack engineer in Washington, DC</h2>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightblue;
}

h1 {
  font-size: 72px;
}

h1, h2 {
  font-weight: 200;
}
</style>
