<template>
  <section class="truths">
  	<div class="container" id="truths" v-viewport="{onEnter: scrollEnter}">
      <h1 class="center-align">three truths and a lie</h1>
      <h4 class="center-align">mouseover or tap a card to view the details</h4>
      <div class="facts">
        <div v-for="(fact, index) in facts">
          <transition enter-active-class="animated flipInY" leave-active-class="animated flipOutY" mode="out-in">
            <div 
              :key="fact.id"
              v-if="fact.id === activeFactId" 
              @mouseleave="mouseOut()" 
              class="card-panel fact-reveal fact">
              <div class="fact-text">
                <h5>
                  <span class="truth">{{fact.truth}}!</span> {{fact.revealText}}
                </h5>
                <div class="button">
                  <a class="waves-effect waves-light btn" @click="scroll(fact.link.anchor)">{{fact.link.text}}</a>
                </div>
              </div>
            </div>
            <div 
              key="`fact-reveal-${index}`"
              v-else
              @mouseover="mouseOver(fact)">
              <h3 class="card-panel fact">{{fact.text}}</h3>
            </div>
          </transition>
        </div>
      </div>
    </div>
    <down anchor="#projects" text="check out my projects"></down>
  </section>
</template>

<script>
import Down from './DownButton'
import bus from '../utils/Bus'

export default {
  name: 'truths',
  components: {
    Down
  },
  data () {
    return {
      facts: [{
        active: false,
        id: 1,
        text: 'Javascript is my favorite programming language.',
        truth: 'True',
        revealText: `This should be evident from the several javascript 
          projects I've created, using several frameworks.`,
        link: {
          text: 'view projects',
          anchor: '#projects'
        }
      }, {
        active: false,
        id: 2,
        text: 'I\'ve visited 10 countries outside the USA.',
        truth: 'False',
        revealText: `I\'ve been to 12. I love to travel. I even have a scratch 
          map to keep track of all the places I've been.`,
        link: {
          text: 'view hobbies',
          anchor: '#hobbies'
        }
      }, {
        active: false,
        id: 3,
        text: 'Before I became a dev, I worked with children.',
        truth: 'True',
        revealText: `I worked with kids for 10 years before I 
          decided to turn my web-development hobby into a career.`,
        link: {
          text: 'view jobs',
          anchor: '#jobs'
        }
      }, {
        active: false,
        id: 4,
        text: 'I majored in math.',
        truth: 'True',
        revealText: `I graduated in 2009 with a math and psychology double major 
          from Carnegie Mellon University.`,
        link: {
          text: 'view education',
          anchor: '#education'
        }
      }],
      activeFactId: null
    }
  },
  methods: {
    mouseOver: function(fact) {
      this.activeFactId = fact.id;
    },
    mouseOut: function() {
      this.activeFactId = null;
    },
    scroll: function(anchor) {
      const scrollElement = document.querySelector(anchor)
      this.$SmoothScroll(scrollElement)
    },
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'About Me');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.truths {
  background: linear-gradient(white 0%, #c9dbe9 100%);
	background: -webkit-linear-gradient(white 0%, #c9dbe9 100%);
	background: -linear-gradient(white 0%, #c9dbe9 100%);
	background: -moz-linear-gradient(white 0%, #c9dbe9 100%);
	justify-content: flex-start;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.button {
  text-align: right;
}

h5 {
  line-height: 1.5;
}
</style>
