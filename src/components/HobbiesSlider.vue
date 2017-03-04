<template>
  <div class="slider">
    <ul class="slides">
      <li id="map-slider">
        <jess-map></jess-map>
        <div class="caption center-align">
          <h3>Traveling</h3>
          <h5 class="light grey-text text-lighten-3">
            These are all the countries I've been to.
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
        <img src="http://lorempixel.com/580/250/nature/3"> <!-- random image -->
        <div class="caption right-align">
          <h3>Right Aligned Caption</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="http://lorempixel.com/580/250/nature/4"> <!-- random image -->
        <div class="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
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
      catsPhoto: require('../assets/cats.jpg')
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
</style>
