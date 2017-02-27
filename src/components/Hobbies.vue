<template>
  <section>
	  <div class="container" id="hobbies" v-viewport="{onEnter: scrollEnter}">
	    <h1 class="center-align">What I like to do</h1>
	    <div id="map"><svg width="960" height="960"></svg></div>
  </section>
</template>

<script>
import bus from '../utils/Bus'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'

// var mapData = require('../assets/world-topo-min.json')

export default {
  name: 'hobbies',
  data() {
    return {
    }
  },
  methods: {
    scrollEnter: function() {
      bus.$emit('scrollEnter', 'hobbies');
    }
  },
  mounted: function() {
    
    var width = 1200,
      height = 780;
    
    var projection = d3.geoMercator()
      .translate([(width/2), (height/2)])
      .scale( width / 1.5 / Math.PI);
  
    var graticule = d3.geoGraticule();
    var path = d3.geoPath().projection(projection);

    var svg = d3.select("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g");

    var g = svg.append("g")


    d3.json('https://d3js.org/world-50m.v1.json', function(error, world) {
    
      var topo = topojson.feature(world, world.objects.countries).features;
    
      var country = g.selectAll(".country").data(topo);
    
      country.enter().insert("path")
        .attr("class", "country")
        .attr("d", path)
        .attr("id", function(d,i) { return d.id; })
        .attr("title", function(d,i) { return d.properties.name; })
        .style("fill", function(d, i) { return d.properties.color; })
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

.country:hover {
  stroke: #fff;
  stroke-width: 1.5px;
}
</style>
