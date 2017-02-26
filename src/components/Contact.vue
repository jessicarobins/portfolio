<template>
  <section>
	  <div class="container" id="contact" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align">Contact Me</h1>
	    for now just <a href="mailto:jessrrobins@gmail.com" target="_blank">send me an email</a>
  </section>
</template>

<script>
import bus from '../utils/Bus'

export default {
  name: 'education',
  data() {
    return {
    }
  },
  methods: {
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'Contact');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
