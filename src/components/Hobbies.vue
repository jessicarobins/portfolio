<template>
  <section>
	 <div class="container" id="hobbies" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align">What I like to do</h1>
	    <hobbies-slider></hobbies-slider>
	 </div>
	 <down anchor="#contact" text="say hi!"></down>
  </section>
</template>

<script>

import bus from '../utils/Bus'
import HobbiesSlider from './HobbiesSlider'
import Down from './DownButton'

export default {
  name: 'hobbies',
  components: {
    Down,
    HobbiesSlider
  },
  methods: {
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'Hobbies')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-color: white;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
