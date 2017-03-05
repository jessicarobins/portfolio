<template>
  <section>
	 <div class="container" id="interests" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align">Things I Like</h1>
	    <h4>Traveling</h4>
      <h5>
        This is an interactive map (created using d3) of the countries I've been to.
      </h5>
	    <jess-map class="map"></jess-map>
	    <h4>Other things with less interesting visuals</h4>
	    <div class="likes">
  	    <div class="chip" v-for="like in likes">
  	      <span class="emoji">{{like.emoji}}</span>
  	      <span class="truncate">{{like.label}}</span>
        </div>
      </div>
	 </div>
	 <down anchor="#contact" text="say hi!"></down>
  </section>
</template>

<script>

import bus from '../utils/Bus'
import JessMap from './JessMap'
import Down from './DownButton'

export default {
  name: 'hobbies',
  components: {
    Down,
    JessMap
  },
  data() {
    return {
      likes: [{
        label: 'cats',
        emoji: '🐈'
      }, {
        label: 'sushi',
        emoji: '🍣'
      }, {
        label: 'punk music',
        emoji: '🎵'
      }, {
        label: 'botanical gardens',
        emoji: '🌷'
      }, {
        label: 'the color purple',
        emoji: '💜'
      }, {
        label: 'board games',
        emoji: '🎲'
      }, {
        label: 'roller coasters',
        emoji: '🎢'
      }]
    }
  },
  methods: {
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'Interests')
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

.likes {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.chip {
  display: flex;
  font-size: 20px;
  
  .emoji {
    margin-right: 5px;
  }
}
</style>
