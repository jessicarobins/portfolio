<template>
  <div id="app">
    <navbar :sections="sections"></navbar>
    <hello></hello>
    <truths></truths>
    <projects></projects>
    <jobs></jobs>
    <education></education>
    <hobbies></hobbies>
    <contact></contact>
    <sidenav :sections="sections"></sidenav>
  </div>
</template>

<script>
import Contact from './components/Contact'
import Education from './components/Education'
import Hello from './components/Hello'
import Hobbies from './components/Hobbies'
import Jobs from './components/Jobs'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Truths from './components/Truths'

export default {
  name: 'app',
  components: {
    Contact,
    Education,
    Hello,
    Hobbies,
    Jobs,
    Navbar,
    Projects,
    Sidenav,
    Truths
  },
  data() {
    return {
      sections: [{
        name: 'About Me',
        anchor: '#truths',
      }, {
        name: 'Projects',
        anchor: '#projects',
      }, {
        name: 'Career',
        anchor: '#jobs',
      }, {
        name: 'Education',
        anchor: '#education',
      }, {
        name: 'Interests',
        anchor: '#interests'
      }, {
        name: 'Contact',
        anchor: '#contact'
      }]
    }
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.css');
@import url('https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css');
@import url('https://fonts.googleapis.com/css?family=Amatic+SC|Open+Sans+Condensed:300|Material+Icons');
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

$zig-zag: #e91e63;

body {
  margin: 0;
  overflow-x: hidden;
}

#app {
  font-family: 'Open Sans Condensed', sans-serif;
  color: #2c3e50;
  background-color: white;
  font-size: 20px !important;

  .md-button, .md-switch-label {
    font-size: 20px;
  }

  @media screen and (max-width: 992px) {
    font-size: 40px !important;

    .md-button, .md-switch-label {
      font-size: 40px;
    }

    .md-button {
      min-height: 40px;
      min-width: 40px;
      padding: 20px;
    }
  }
}

h1 {
  font-family: 'Amatic SC', cursive;
}

section {
  min-height: calc(100vh + 400px);
  &:first-of-type, &:last-of-type {
    min-height: calc(100vh + 200px);
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

section:not(:last-of-type)::after, section:not(:first-of-type)::before {
  content: '';
  width: 100%;
  height: 200px;

  background:
    linear-gradient(135deg, white 25%, transparent 25%) -100px 0,
    linear-gradient(225deg, white 25%, transparent 25%) -100px 0,
    linear-gradient(315deg, white 25%, transparent 25%),
    linear-gradient(45deg, white 25%, transparent 25%);
  background-size: 200px 200px;
  background-repeat: repeat round;
  background-color: $zig-zag;
}

a {
  cursor: pointer;
}

.colored {
  margin-right: 5px;
}

.md-chip-container {
  display: flex;
  align-items: center;
}
</style>
