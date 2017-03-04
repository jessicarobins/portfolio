<template>
  <div class="slider">
    <ul class="slides">
      <li id="map-slider">
        <jess-map class="map"></jess-map>
        <div class="caption center-align">
          <h3 class="indigo-text text-darken-4">Traveling</h3>
          <h5 class="light grey-text text-darken-1">
            This is an interactive map (using d3) of all the countries I've been to.
          </h5>
        </div>
      </li>
      <li>
        <img :src="catsPhoto">
        <div class="caption right-align">
          <h3 class="indigo-text text-darken-3">Cats</h3>
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
      interval: 20000,
      catsPhoto: require('../assets/cats.jpg'),
      sushiPhoto: require('../assets/sushi.jpg')
    }
  },
  methods: {
    initSlider(height) {
      this.height = height;
      $(this.$el).slider({height: height, interval: this.interval})
      $(this.$el).slider('next')
      $(this.$el).slider('prev')
      $(this.$el).slider('pause')
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
  
  .map {
    filter: grayscale(.8);
    
    &:hover {
      filter: none;
    }
  }
}

img {
  opacity: 0.6;
  filter: blur(2px) grayscale(.8);
}

li:hover {
  img {
    opacity: 1;
    filter: none;
  }
  
  .caption {
    display: none;
  }
}
</style>
