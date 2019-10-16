<template>
  <div id="map"></div>
</template>

<script>

import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import * as _ from 'lodash'

const mapData = require('../assets/world-topo-min.json')
import bus from '../utils/Bus'

export default {
  name: 'jessMap',
  data() {
    return {
      width: 100,
      countries: ['United States', 'Canada', 'Denmark', 'Mexico', 'Sweden', 'Estonia',
        'Latvia', 'Finland', 'Russia', 'United Kingdom', 'Israel', 'France',
        'Spain', 'Bermuda', 'Bahamas', 'Netherlands', 'Belgium', 'Cuba', 'Montenegro', 
        'Italy', 'Greece', 'Haiti', 'Puerto Rico']
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

      const height = this.width / 2

      bus.$emit('mapHeightChange', height)

      const svg = d3.select("#map").append("svg")
        .attr("width", this.width)
        .attr("height", height)

      const g = svg.append('g')

      const projection = d3.geoMercator()
        .translate([this.width / 1.5, height / .85])
        .scale( this.width / Math.PI)

      const path = d3.geoPath().projection(projection);



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
          .attr("class", (d, i) => hobbies.countryClass(d.properties.name))
          .on("mouseover", (d, i) => {

            const mouse = d3.mouse(svg.node())
            const offsetL = hobbies.$el.offsetLeft+20 + mouse[0]
            const offsetT = hobbies.$el.offsetTop + mouse[1]

            tooltip.classed("hidden", false)
              .classed("animated fadeIn", true)
              .attr("style", "left:"+offsetL+"px;top:"+offsetT+"px")
              .html(d.properties.name)
          })
          .on("mouseout", () => {
            tooltip.classed("hidden", true)
          })

        const legendX = hobbies.width / 3;
        const legendY = height/1.2;
        const circleRadius = 10;
        const legendItemWidth = 100;

        const legend = svg.append('g')
          .attr("class","legend")
	        .attr("transform",`translate(${legendX}, ${legendY})`)

        legend.selectAll('circle')
          .data(['visited', 'unvisited'])
          .enter()
          .append("circle")
    	    .attr("cx", circleRadius)
    	    .attr("cy", circleRadius)
    	    .attr("r", circleRadius)
    	    .attr("transform",(d, i) => `translate(${i*legendItemWidth}, ${-2*circleRadius})`)
    	    .attr("class", (d) => `legend-item ${d}`)

    	  legend.selectAll('text')
          .data(['visited', 'unvisited'])
          .enter()
          .append("text")
    	    .text(d => d)
    	    .attr("transform",(d, i) => `translate(${(i*legendItemWidth) + 3*circleRadius},-3)`)
    	    .attr("class", (d) => `legend-item-text ${d}`)
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

$unvisited-color: #9e9e9e;
$unvisited-color-hover: #424242;
$visited-color: #3f51b5;
$visited-color-hover: #283593;
$map-background-color: #c9dbe9;
$map-border-width: 4px;

#map {
  svg {
    background-color: $map-background-color;
    border: $map-border-width solid black;
    position: relative;
  }
}

.country {

  &.visited {
    fill: $visited-color;

     &:hover {
      fill: $visited-color-hover;
    }
  }

  &.unvisited {
    fill: $unvisited-color;

    &:hover {
      fill: $unvisited-color-hover;
    }
  }

  &:hover {
    stroke: #fff;
    stroke-width: 1.5px;
  }
}

.legend {
  .legend-item {
    &.visited {
      fill: $visited-color;
      stroke: $visited-color-hover;
    }

    &.unvisited {
      fill: $unvisited-color;
      stroke: $unvisited-color-hover;
    }
  }

  .legend-item-text {
    font-style: normal;

    &.visited {
      fill: $visited-color-hover;
    }

    &.unvisited {
      fill: $unvisited-color-hover;
    }
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
  z-index: 999;
}
</style>
