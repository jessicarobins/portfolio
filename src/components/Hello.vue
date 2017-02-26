<template>
  <section class="hello">
  	  <div class="about row">
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

export default {
  name: 'hello',
  components: {
    Down,
    Jess
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

.about {
  padding: 40px 20px 0 20px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
}

h1 {
  font-size: 172px;
}

h1, h2 {
  font-weight: 200;
}
</style>
