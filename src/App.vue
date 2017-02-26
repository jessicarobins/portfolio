<template>
  <div id="app">
    <navbar></navbar>
    <hello></hello>
    <truths></truths>
    <projects></projects>
    <jobs></jobs>
    <education></education>
    <contact></contact>
  </div>
</template>

<script>
import Contact from './components/Contact'
import Education from './components/Education'
import Hello from './components/Hello'
import Jobs from './components/Jobs'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Truths from './components/Truths'

export default {
  name: 'app',
  components: {
    Contact,
    Education,
    Hello,
    Jobs,
    Navbar,
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
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

body {
  margin: 0;
  font-size: 20px;
  overflow-x: hidden;
}

#app {
  font-family: 'Open Sans Condensed', sans-serif;
  color: #2c3e50;
  background-color: #c9dbe9;
}

h1 {
  font-family: 'Amatic SC', cursive;
}

section {
  min-height: 100vh;
  &:not(:last-of-type) {
    min-height: calc(100vh + 400px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

section:not(:last-of-type)::after {
  content: '';
  width: 100%;
  height: 400px;
}

a {
  cursor: pointer;
}

.colored {
  margin-right: 5px;
}
</style>
