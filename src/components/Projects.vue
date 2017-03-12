<template>
  <section class="projects">
    <div id="projects" class="container" v-viewport="{onEnter: scrollEnter}">
      <h1 class="center-align md-display-4">Projects</h1>
      <div class="row">
        <div class="col s12">  
          <h5>Filter by tech</h5>
          <div class="filters">
            <div v-for="tag in tags" class="filter">
              <input type="checkbox" :id="tag.name" :value="tag.name" v-model="checkedTags" />
              <label :for="tag.name">
                <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
                <span class="truncate">{{tag.name}}</span>
              </label>
            </div>
          </div>
          <h5>Common to most projects</h5>
          <div class="filters">
            <div v-for="tag in commonTags" class="filter">
              <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
              <span class="truncate">{{tag.name}}</span>
            </div>
          </div>
        </div>
      </div>
        <transition-group 
          name="project-list" 
          tag="div" 
          class="project-list grid"
          ref="grid"
          v-show="filteredProjects.length">
          <div class="grid-sizer" key="sizer"></div>
          <div class="gutter-sizer" key="gutter"></div>
          <md-card v-for="project in filteredProjects" class="project grid-item" :key="project">
            
            <md-card-media-cover md-text-scrim v-if="project.image">
              <md-card-media>
                <img :src="project.image">
              </md-card-media>
              <md-card-area>
                <md-card-header>
                  <h3 class="md-title">{{project.name}}</h3>
                  <div class="md-subhead">{{project.subtitle}}</div>
                </md-card-header>
              </md-card-area>
            </md-card-media-cover>
            <md-card-header v-else>
              <h3 class="md-title">{{project.name}}</h3>
              <div class="md-subhead">{{project.subtitle}}</div>
            </md-card-header>
                
            <md-card-actions>
              <md-button class="md-accent" v-for="(url, key) in project.urls" :href="url" target="_blank">
                {{key}}
              </md-button>
            </md-card-actions>
            
            <md-card-area md-inset>
              <md-card-content>
                <p class="description">{{project.description}}</p>
              </md-card-content>
            </md-card-area>
            
            <md-card-content>
              <h5>Technologies</h5>
              <div class="tags">
                <tag v-for="tag in project.tags" :tag="tag"></tag>
              </div>
            </md-card-content>
            
          </md-card>
        </transition-group>
        <div v-show="!filteredProjects.length">
          <h4>No projects meet the selected criteria.</h4>
          <h5><a @click="clear">Clear the filters</a></h5>
        </div>
    </div>
    <down anchor="#jobs" text="see my work history"></down>
  </section>
</template>

<script>
import * as _ from 'lodash'

import bus from '../utils/Bus'
import Down from './DownButton'
import Tag from './Tag'
import TechTagService from '../services/TechTagService'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

export default {
  name: 'projects',
  components: {
    Down,
    Tag
  },
  data () {
    return {
      projects: [{
        name: 'everee',
        subtitle: 'November 2016 to present',
        urls: {
          'open project': 'http://everee.io',
          github: 'https://github.com/jessicarobins/det'
        },
        description: `A single-page app that creates a bucket list based on 
          queries to the Wolfram Alpha API. The bucket list items are crowd-sourced, 
          so that when items get added to one person's list, the same items get added 
          for everyone else who has that list.`,
        tags: ['react', 'redux', 'bootstrap', 'webpack', 'node', 'mongodb', 'heroku', 'sass'],
        image: require('../assets/everee.png')
      }, {
        name: 'portfolio',
        subtitle: 'February 2017 to present',
        urls: {
          github: 'https://github.com/jessicarobins/portfolio'
        },
        description: `What you're looking at right now! A single-page Vue app 
          that describes my accomplishments.`,
        tags: ['vue', 'postcss', 'd3', 'material design', 'webpack']
      }, {
        name: 'Jessboard',
        subtitle: 'February 2017',
        urls: {
          'open project': 'https://jessicarobins.github.io/jessboard',
          github: 'https://github.com/jessicarobins/jessboard'
        },
        description: `As a parting gift to Kit Check, I built a soundboard of 
          the things I was known to say on a regular basis.`,
        tags: ['vue', 'webpack'],
        image: require('../assets/jessboard.png')
      },{
        name: 'ddescribe',
        subtitle: 'February 2017',
        urls: {
          'open project': 'https://jessicarobins.github.io/formatter',
          github: 'https://github.com/jessicarobins/formatter'
        },
        description: `ddescribe takes test cases written with indentation to signify 
          the parent/child relationship and formats them according to several 
          unit/e2e test frameworks.`,
        tags: ['vue', 'material design', 'webpack'],
        image: require('../assets/ddescribe.png')
      }, {
        name: 'jessdocs',
        subtitle: 'February 2016 to September 2016',
        description: `A single-page app that organizes test cases into a taggable, 
          filterable tree structure. While the majority of the frontend is built using 
          AngularJS, I used some React components to optimize page load time.`,
        urls: {
          'open project': 'http://jessdocs.io',
          'github (backend)': 'https://github.com/jessicarobins/jd-api',
          'github (frontend)': 'https://github.com/jessicarobins/jd-ui'
          
        },
        tags: ['angular', 'webpack', 'ruby on rails', 'material design', 
          'heroku', 'amazon s3', 'sass', 'react', 'postgres'],
        image: require('../assets/jessdocs.png')
      }, {
        name: 'Escape from the Aliens in Outer Space',
        subtitle: 'November 2014 to March 2015',
        description: `An android companion app for the board game Escape from 
          the Aliens in Outer Space. It replaces the pencil and paper 
          component of tracking player movement on a hexagonal grid.`,
        urls: {
          'github': 'https://github.com/jessicarobins/escapegame'
        },
        tags: ['java', 'android sdk']
      }],
      common: ['github', 'html5', 'css3', 'javascript', 'trello', 'webpack'],
      checkedTags: [],
      msnry: null
    }
  },
  methods: {
    clear: function() {
      this.checkedTags = [];
    },
    scrollEnter: function() {		
      bus.$emit('scrollEnter', 'Projects')
    }
  },
  computed: {
    tags: function() {
      return TechTagService.getTagsFromObjects(this.projects)
    },
    commonTags: function() {
      return TechTagService.getTagsByNames(this.common)
    },
    filteredProjects: function() {
      return this.projects.filter( (project) => {
        return _.intersection(project.tags, this.checkedTags).length >= this.checkedTags.length
      })
    }
  },
  updated() {
    const Projects = this;
    const grid = this.$refs.grid
    if (grid) {
      this.$nextTick(() => {
        Projects.msnry.reloadItems()
        imagesLoaded(grid.$el, () => {
          Projects.msnry.layout();
        })
      })
    }
  },
  mounted() {
    const el = this.$refs.grid.$el
    const Projects = this;
    
    this.msnry = new Masonry(el, {
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      percentPosition: true
    })
    
    imagesLoaded(el, () => {
      Projects.msnry.layout();
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#projects {
  min-height: 100vh;
}

.grid-sizer,
.project {
  width: 100%;
}

.gutter-sizer {
  width: 0%
}

@media screen and (min-width: 992px) and (max-width: 1200px) {
  .grid-sizer,
  .project {
    width: 48%;
  }
  
  .gutter-sizer {
    width: 1%;
  }
}

@media screen and (min-width: 1200px) {
  .grid-sizer,
  .project {
    width: 32%;
  }
  
  .gutter-sizer {
    width: 1%;
  }
}

.project {
  margin: 10px 0;
  
  .md-card-actions {
    display: flex;
    flex-flow: row wrap;
  }
  
  .md-title {
    font-size: 48px;
    line-height: 50px;
  }
}



.description {
  flex: 1;
  line-height: 1.5;
  font-size: 20px;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

img {
  width: auto;
  height: auto;
}

.filters {
  display: flex;
  flex-flow: row wrap;
}

.filter {
  color: #9e9e9e;
  font-size: 20px;
  line-height: 25px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

label {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}


</style>
