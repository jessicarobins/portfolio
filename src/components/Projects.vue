<template>
  <section class="projects">
    <div class="container" id="projects" v-viewport="{onEnter: scrollEnter}">
      <h1 class="center-align">Projects</h1>
      <div class="row">
        <div class="col s12 m4">  
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
          <h5>Common to all projects</h5>
          <div class="filters">
            <div v-for="tag in commonTags" class="filter">
              <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
              <span class="truncate">{{tag.name}}</span>
            </div>
          </div>
        </div>
        <div class="col s12 m8">
          <transition 
            enter-active-class="animated fadeInUp" 
            leave-active-class="animated fadeOutDown" mode="out-in">
            <transition-group 
              name="project-list" 
              tag="div" 
              class="project-list" 
              v-if="filteredProjects.length">
              <div v-for="project in filteredProjects" class="card project" :key="project">
                <div class="card-image" v-if="project.image">
                  <img :src="project.image">
                </div>
                <div class="card-content">
                  <span class="card-title">{{project.name}}</span>
                  <p class="description">{{project.description}}</p>
                  <div class="divider"></div>
                  <h5>Technologies</h5>
                  <div class="tags">
                    <tag v-for="tag in project.tags" :tag="tag"></tag>
                  </div>
                </div>
                <div class="card-action">
                  <md-button class="md-accent" v-for="(url, key) in project.urls" :href="url" target="_blank">
                    {{key}}
                  </md-button>
                </div>
              </div>
            </transition-group>
            <div v-else>
              <h4>No projects meet the selected criteria.</h4>
              <h5><a @click="clear">Clear the filters</a></h5>
            </div>
          </transition>
        </div>
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
        urls: {
          github: 'https://github.com/jessicarobins/portfolio'
        },
        description: `What you're looking at right now! A single-page Vue app 
          that describes my accomplishments.`,
        tags: ['vue', 'postcss', 'd3', 'material design', 'webpack']
      }, {
        name: 'Jessboard',
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
      }],
      common: ['github', 'html5', 'css3', 'javascript', 'trello', 'webpack'],
      checkedTags: []
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.projects {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 36px;
}

.description {
  flex: 1;
  line-height: 1.5;
  font-size: 25px;
  padding: 20px 0 40px 0;
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

.divider {
  margin-top: 15px;
  margin-bottom: 15px;
}

.filters {
  display: flex;
  flex-flow: row wrap;
}

.filter {
  color: #9e9e9e;
  font-size: 20px;
  padding: 10px 20px;
  flex: 1;
  display: flex;
  align-items: center;
}

label {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project {
  transition: all 1s;
}

.project-list-enter, .project-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.project-list-leave-active {
  position: absolute;
}
</style>
