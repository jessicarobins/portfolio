<template>
  <section class="facts-container">
  	<div class="container">
      <h1 class="center-align">Three truths and a lie</h1>
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
  </section>
</template>

<script>

export default {
  name: 'truths',
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
.facts-container {
  background: linear-gradient(white 0%, #c9dbe9 100%);
	background: -webkit-linear-gradient(white 0%, #c9dbe9 100%);
	background: -linear-gradient(white 0%, #c9dbe9 100%);
	background: -moz-linear-gradient(white 0%, #c9dbe9 100%);
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
