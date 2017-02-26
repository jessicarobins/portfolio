<template>
  <section class="hello" v-viewport="{onEnter: scrollEnter}" id="hello">
  	  <div class="row">
  	    <div class="col s12 m4 center-align">
  	      <jess></jess>
  	    </div>
  	    <div class="col s12 m8">
          <h1>Hi, I'm Jess!</h1>
          <h4>A full-stack engineer in Washington, DC</h4>
          
        </div>
      </div>
      <down anchor="#truths" text="more about me"></down>
  </section>
</template>

<script>
import Jess from './Jess'
import Down from './DownButton'
import bus from '../utils/Bus'

export default {
  name: 'hello',
  components: {
    Down,
    Jess
  },
  methods: {
    scrollEnter: function() {
      console.log('entering main')
      bus.$emit('scrollEnter', '')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -webkit-linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -moz-linear-gradient(#c9dbe9 0%, #fff 100%);
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about {
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

h1 {
  font-size: 172px;
}

h1, h2 {
  font-weight: 200;
}
</style>
