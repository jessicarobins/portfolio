<template>
  <div class="slider">
    <ul class="slides">
      <li id="map-slider">
        <jess-map></jess-map>
        <div class="caption center-align">
          <h3>Traveling</h3>
          <h5 class="light grey-text text-lighten-3">
            This is an interactive map (using d3) of all the countries I've been to.
          </h5>
        </div>
      </li>
      <li>
        <img :src="catsPhoto">
        <div class="caption right-align">
          <h3>Cats</h3>
          <h5 class="light grey-text text-lighten-3">
            These are my cats, Thor and Loki.
          </h5>
        </div>
      </li>
      <li>
        <img :src="sushiPhoto">
        <div class="caption left-align">
          <h3>Going out to eat</h3>
          <h5 class="light grey-text text-lighten-3">
            But especially sushi.
          </h5>
        </div>
      </li>
      <li>
        <img :src="gamesPhoto">
        <div class="caption center-align">
          <h3>Board games</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import * as _ from 'lodash'

import JessMap from './JessMap'
import bus from '../utils/Bus'

export default {
  name: 'hobbiesSlider',
  components: {
    JessMap
  },
  data() {
    return {
      height: 400,
      interval: 10000,
      catsPhoto: require('../assets/cats.jpg'),
      gamesPhoto: require('../assets/games.jpg'),
      sushiPhoto: require('../assets/sushi.jpg')
    }
  },
  methods: {
    initSlider(height) {
      this.height = height;
      $(this.$el).slider({height: height, interval: this.interval})
      $(this.$el).slider('next')
    }
  },
  created: function() {
    const HobbiesSlider = this;
    bus.$on('mapHeightChange', 
      _.debounce(HobbiesSlider.initSlider, 1000, {
        leading: false,
        trailing: true
      })
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map-slider {
  overflow: inherit;
}

img {
  opacity: 0.8;
  filter: blur(2px);
}
</style>
