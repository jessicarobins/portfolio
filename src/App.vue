<template>
  <div id="app">
    <hello></hello>
    <truths></truths>
    <projects></projects>
    <jobs></jobs>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Jobs from './components/Jobs'
import Projects from './components/Projects'
import Truths from './components/Truths'

export default {
  name: 'app',
  components: {
    Hello,
    Jobs,
    Projects,
    Truths
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.css');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css');
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans+Condensed:300|Material+Icons');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');

body {
  margin: 0;
}

#app {
  font-family: 'Open Sans Condensed', sans-serif;
  color: #2c3e50;
}

h1 {
  font-family: 'Amatic SC', cursive;
}

section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

a {
  cursor: pointer;
}
</style>
