<template>
  <section class="projects">
    <h1>Projects</h1>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      projects: [{
        name: 'everee',
        url: 'http://everee.io',
        description: 'a project that does stuff',
        tags: ['react', 'redux', 'bootstrap', 'node', 'mongodb', 'heroku']
      }, {
        name: 'Jessboard',
        url: 'http://jessicarobins.github.io/jessboard',
        description: 'a soundboard of things I say',
        tags: ['vue', 'material design']
      }, {
        name: 'jessdocs',
        description: 'a test case management tool',
      }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
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
</style>
