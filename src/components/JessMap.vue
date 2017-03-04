<template>
  <div id="map"></div>
</template>

<script>

import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import * as _ from 'lodash'

var mapData = require('../assets/world-topo-min.json')

export default {
  name: 'jessMap',
  data() {
    return {
      width: 100,
      countries: ['United States', 'Canada', 'Denmark', 'Mexico', 'Sweden', 'Estonia',
        'Latvia', 'Finland', 'Russia', 'United Kingdom', 'Israel', 'France',
        'Spain', 'Bermuda', 'Bahamas']
    }
  },
  methods: {
    countryClass: function(country) {
      return ( _.includes(this.countries, country) ? 'country visited' : 'country unvisited')
    },
    redraw() {
      if (this.width !== this.$el.offsetWidth) {
        this.width = this.$el.offsetWidth
        d3.select('svg').remove();
        this.draw();
      }
    },
    draw() {
      const hobbies = this;
      
      var height = this.width / 2;
      
      const svg = d3.select("#map").append("svg")
        .attr("width", this.width)
        .attr("height", height)
        
      const g = svg.append('g')
      
      var projection = d3.geoMercator()
        .translate([(this.width/2), (height/2)])
        .scale( this.width / 2 / Math.PI)  
    
      var path = d3.geoPath().projection(projection);
  
      //'https://d3js.org/world-50m.v1.json'
      d3.json(mapData, function(error, world) {
      
        var topo = topojson.feature(world, world.objects.countries).features;
      
        var country = g.selectAll(".country").data(topo);
      
        country.enter().insert("path")
          .attr("d", path)
          .attr("id", function(d,i) { return d.id; })
          .attr("title", function(d,i) { return d.properties.name; })
          .attr('class', (d, i) => hobbies.countryClass(d.properties.name))
      });
    }
  },
  created: function() {
    window.addEventListener('load', this.redraw);
    window.addEventListener('resize', _.debounce(this.redraw));
  },
  mounted: function() {
    this.draw();
  }
}
</script>

<style>

.country {
  
  &.visited {
    fill: purple;
  }
  
  &.unvisited {
    fill: black;
  }
  
  &:hover {
    stroke: #fff;
    stroke-width: 1.5px;
  }
}
</style>
