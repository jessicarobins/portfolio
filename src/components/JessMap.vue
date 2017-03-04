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
      
      const height = this.width / 2;
      
      const svg = d3.select("#map").append("svg")
        .attr("width", this.width)
        .attr("height", height)
        
      const g = svg.append('g')
      
      const projection = d3.geoMercator()
        .translate([this.width / 1.5, height / .85])
        .scale( this.width / Math.PI)  
    
      const path = d3.geoPath().projection(projection);
      
      const offsetL = this.$el.offsetLeft+10;
      const offsetT = this.$el.offsetTop+10;

      const tooltip = d3.select("#map")
        .append("div")
        .attr("class", "tooltip hidden")

      //'https://d3js.org/world-50m.v1.json'
      d3.json(mapData, function(error, world) {
      
        const topo = topojson.feature(world, world.objects.countries).features;
      
        const country = g.selectAll(".country").data(topo);
      
        country.enter().insert("path")
          .attr("d", path)
          .attr("id", function(d,i) { return d.id; })
          .attr("title", function(d,i) { return d.properties.name; })
          .attr("class", (d, i) => hobbies.countryClass(d.properties.name))
          .on("mouseover", (d, i) => {
            const mouse = d3.mouse(svg.node()).map( d => parseInt(d) )
    
            tooltip.classed("hidden", false)
              .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
              .html(d.properties.name)
          })
          .on("mouseout", () => {
            tooltip.classed("hidden", true)
          })
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

.hidden {
  display: none;
}

div.tooltip {
  color: #222; 
  background: #fff; 
  padding: .5em; 
  text-shadow: #f5f5f5 0 1px 0;
  border-radius: 2px; 
  box-shadow: 0px 0px 2px 0px #a6a6a6; 
  opacity: 0.9; 
  position: absolute;
}
</style>
