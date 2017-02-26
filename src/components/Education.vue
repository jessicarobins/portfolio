<template>
  <section id="education" v-viewport="{onEnter: scrollEnter}">
	  <div class="container">
	    <h1 class="center-align">Education</h1>
	    <div class="schools">
  	    <div v-for="school in schools">
  	      <div class="name-and-dates">
  	        <h2>{{school.name}}</h2>,
  	        <h5>{{school.dates}}</h5>
  	      </div>
  	      <h4>{{school.degree}}</h4>
  	      <h5>{{school.text}}</h5>
  	    </div>
	    </div>
    </div>
    <down anchor="#hobbies" text="what I do for fun"></down>
  </section>
</template>

<script>
import Down from './DownButton'
import bus from '../utils/Bus'

export default {
  name: 'education',
  components: {
    Down
  },
  data() {
    return {
      schools: [{
        name: 'Carnegie Mellon University',
        dates: 'August 2005 to May 2009',
        degree: 'Bachelor of Science in Mathematics and Psychology',
        text: 'Honors Thesis: The Impact of Stereotypes on the Memory of Preschool Children'
      }]
    }
  },
  methods: {
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'Education');
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

.schools {
  flex: 1;
  display: flex;
  align-items: center;
  
  .name-and-dates {
    h2 {
      margin: 0;
    }
    
    h5 {
      margin: 0 0 0 10px;
    }
  }
}

.name-and-dates {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
</style>
