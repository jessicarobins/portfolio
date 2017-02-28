<template>
  <section>
	  <div class="container" id="hobbies" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align">What I like to do</h1>
	    <div id="map"></div>
  </section>
</template>

<script>
import bus from '../utils/Bus'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import * as _ from 'lodash'

var mapData = require('../assets/world-topo-min.json')

export default {
  name: 'hobbies',
  data() {
    return {
      countries: ['United States', 'Canada', 'Denmark', 'Mexico', 'Sweden', 'Estonia',
        'Latvia', 'Finland', 'Russia', 'United Kingdom', 'Israel', 'France',
        'Spain', 'Bermuda', 'Bahamas']
    }
  },
  methods: {
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'hobbies');
    },
    countryClass: function(country) {
      return ( _.includes(this.countries, country) ? 'country visited' : 'country unvisited')
    }
  },
  mounted: function() {
    const hobbies = this;
    
    const c = document.getElementById('map');
    var width = c.offsetWidth;
    var height = width / 2;
    // var width = 1200,
    //   height = 780;
    
    const svg = d3.select("#map").append("svg")
      .attr("width", width)
      .attr("height", height)
      // .append("g")
      
    const g = svg.append('g')
    
    var projection = d3.geoMercator()
      .translate([(width/2), (height/2)])
      .scale( width / 2 / Math.PI)  
  
    var graticule = d3.geoGraticule();
    var path = d3.geoPath().projection(projection);
    

      
    // var svg = d3.select('svg')
    //   .attr('width', width)
    //   .attr('height', height)

    // var g = svg.append('g')

    //'https://d3js.org/world-50m.v1.json'
    d3.json(mapData, function(error, world) {
    
      var topo = topojson.feature(world, world.objects.countries).features;
    
      var country = g.selectAll(".country").data(topo);
    
      country.enter().insert("path")
        // .attr("class", "country")
        .attr("d", path)
        .attr("id", function(d,i) { return d.id; })
        .attr("title", function(d,i) { return d.properties.name; })
        .attr('class', (d, i) => hobbies.countryClass(d.properties.name))
        // .style("fill", function(d, i) { return d.properties.color; })
    });
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

#map {
  width: 100%;
  height: 100%;
  flex: 1;
}
</style>
