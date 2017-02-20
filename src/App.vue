<template>
  <div id="app">
    <hello></hello>
    <projects></projects>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Projects from './components/Projects'

export default {
  name: 'app',
  components: {
    Hello,
    Projects
  }
}
</script>

<style>
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
