<template>
  <section>
	  <div class="container" id="hobbies" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align">What I like to do</h1>
  </section>
</template>

<script>
import bus from '../utils/Bus'

export default {
  name: 'hobbies',
  data() {
    return {
    }
  },
  methods: {
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'hobbies');
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
