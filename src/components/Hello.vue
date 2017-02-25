<template>
  <section class="hello">
  	<div class="about">
  	  <div class="row">
  	    <div class="col s12 m4">
  	      <jess></jess>
  	    </div>
  	    <div class="col s12 m8">
          <h1>Hi, I'm Jess</h1>
          <h4>A full-stack engineer in Washington, DC</h4>
          <h5 class="center-align">About me: three truths and a lie</h5>
          <div class="facts">
            <div v-for="(fact, index) in facts">
              <transition name="fade" mode="out-in">
                <div 
                  key="`fact${index}`"
                  v-if="fact.active" 
                  @mouseleave="mouseOver(fact)" 
                  class="card-panel fact-reveal fact">
                  <div>
                    <span class="truth">{{fact.truth}}!</span> {{fact.revealText}}
                  </div>
                  <div class="button">
                    <a class="waves-effect waves-light btn" :href="fact.link.anchor">{{fact.link.text}}</a>
                  </div>
                </div>
                <div 
                  key="`fact-reveal-${index}`"
                  v-else
                  @mouseover="mouseOver(fact)">
                  <div class="card-panel fact">{{fact.text}}</div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Jess from './Jess'

export default {
  name: 'hello',
  components: {
    Jess
  },
  data () {
    return {
      facts: [{
        active: false,
        text: 'Javascript is my favorite programming language.',
        truth: 'True',
        revealText: `This should be evident from the several javascript 
          projects I've created, using several frameworks (Vue, Angular, React).`,
        link: {
          text: 'view my projects',
          anchor: '#projects'
        }
      }, {
        active: false,
        text: 'I\'ve visited 10 countries outside the USA.',
        truth: 'False',
        revealText: `I\'ve been to 12. I love to travel. I even have a scratch 
          map to keep track of all the places I've been.`,
        link: {
          text: 'view my hobbies',
          anchor: '#hobbies'
        }
      }, {
        active: false,
        text: 'Before I became a dev, I worked with children.',
        truth: 'True',
        revealText: `I worked with kids for 10 years (since I was 16) before I 
          decided to turn my web-development hobby into a career.`,
        link: {
          text: 'view my jobs',
          anchor: '#career'
        }
      }]
    }
  },
  methods: {
    mouseOver: function(fact){
      fact.active = !fact.active;   
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -webkit-linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -linear-gradient(#c9dbe9 0%, #fff 100%);
	background: -moz-linear-gradient(#c9dbe9 0%, #fff 100%);
}

.about {
  padding: 40px 20px;
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 172px;
  font-family: 'Amatic SC', cursive;
}

h1, h2 {
  font-weight: 200;
}

.truth {
  font-weight: bold;
}

.facts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.fact {
  width: 250px;
  height: 300px;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.button {
  text-align: right;
}
</style>
