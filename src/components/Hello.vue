<template>
  <section class="hello">
    <h1>Hi, I'm Jess</h1>
    <h4>A full-stack engineer in Washington, DC</h4>
    <h5>About me: three truths and a lie</h5>
    <div class="facts">
      <div v-for="(fact, index) in facts">
        <transition name="fade" mode="out-in">
          <div 
            key="`fact${index}`"
            v-if="fact.active" 
            @mouseleave="mouseOver(fact)" 
            class="card-panel fact-reveal">
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
            @mouseover="mouseOver(fact)" 
            class="fact">
            {{index+1}}. {{fact.text}}
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
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
    }
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
  background-color: lightblue;
}

h1 {
  font-size: 72px;
}

h1, h2 {
  font-weight: 200;
}

.truth {
  font-weight: bold;
}

.facts {
  max-width: 800px;
}

.fact {
  font-size: 36px;
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
