<template>
  <section>
	 <div class="container" id="interests" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align md-display-4">Things I Like</h1>
	    <h4>Traveling</h4>
      <h5>
        This is an interactive map (created using d3) of the countries I've been to.
      </h5>
	    <jess-map class="map"></jess-map>
	    <h5>I mostly just created this section in order to mess around with d3,
	      but here are some other things I like (with less interesting visuals)</h5>
	    <div class="likes">
  	    <md-chip v-for="(like, index) in likes" :key="index">
  	      <span class="emoji">{{like.emoji}}</span>
  	      <span class="truncate">{{like.label}}</span>
        </md-chip>
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
        label: 'maps',
        emoji: '🗺️'
      }, {
        label: 'yoga',
        emoji: '🧘🏻'
      }, {
        label: 'swing dancing',
        emoji: '💃🏻'
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

.md-chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  line-height: 30px;
  margin: 5px 5px 0 0;

  .emoji {
    margin-right: 5px;
  }
}
</style>
