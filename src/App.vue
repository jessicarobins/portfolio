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
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.css');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css');
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans+Condensed:300');

body {
  margin: 0;
}

#app {
  font-family: 'Open Sans Condensed', sans-serif;
  color: #2c3e50;
}
</style>
