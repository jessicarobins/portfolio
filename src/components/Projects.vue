<template>
  <section class="projects" id="projects">
    <div class="container">
      <h1 class="center-align">Projects</h1>
      <div class="row">
        <div class="col s12 m4">  
          <h5>Filter by tech</h5>
          <div class="filters">
            <div v-for="tag in tags" class="filter">
              <input type="checkbox" :id="tag.name" v-model="tag.checked" />
              <label :for="tag.name">
                <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
                <span>{{tag.name}}</span>
              </label>
            </div>
          </div>
          <h5>Common to all projects</h5>
          <div class="filters">
            <div v-for="tag in commonTags" class="filter">
              <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
              <span>{{tag.name}}</span>
            </div>
          </div>
        </div>
        <div class="col s12 m8">
          <transition-group name="project-list" tag="div" class="project-list">
            <div v-for="project in filteredProjects" class="card project" :key="project">
              <div class="card-image">
                <img :src="project.image">
              </div>
              <div class="card-content">
                <span class="card-title">{{project.name}}</span>
                <p class="description">{{project.description}}</p>
                <div class="divider"></div>
                <h6>Technologies</h6>
                <div class="tags">
                  <tag v-for="tag in project.tags" :tag="tag"></tag>
                </div>
              </div>
              <div class="card-action">
                <a v-for="(url, key) in project.urls" :href="url" target="_blank">
                  {{key}}
                </a>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
    <down anchor="#jobs" text="see my work history"></down>
  </section>
</template>

<script>
import * as _ from 'lodash'

import Down from './DownButton'
import Tag from './Tag'

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
          view: 'http://everee.io',
          github: 'https://github.com/jessicarobins/det'
        },
        description: `A single-page app that creates a bucket list based on 
          queries to the Wolfram Alpha API. The bucket list items are crowd-sourced, 
          so that when items get added to one person's list, the same items get added 
          for everyone else who has that list.`,
        tags: ['react', 'redux', 'bootstrap', 'webpack', 'node', 'mongodb', 'heroku', 'sass'],
        image: require('../assets/everee.png')
      }, {
        name: 'Jessboard',
        urls: {
          view: 'https://jessicarobins.github.io/jessboard',
          github: 'https://github.com/jessicarobins/jessboard'
        },
        description: `As a parting gift to Kit Check, I built a soundboard of 
          the things I was known to say on a regular basis.`,
        tags: ['vue', 'webpack'],
        image: require('../assets/jessboard.png')
      }, {
        name: 'ddescribe',
        urls: {
          view: 'https://jessicarobins.github.io/formatter',
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
          view: 'http://jessdocs.io',
          'github (backend)': 'https://github.com/jessicarobins/jd-api',
          'github (frontend)': 'https://github.com/jessicarobins/jd-ui'
          
        },
        tags: ['angular', 'webpack', 'ruby on rails', 'material design', 
          'heroku', 'amazon s3', 'sass', 'react', 'postgres'],
        image: require('../assets/jessdocs.png')
      }],
      tags: [{
        name: 'react',
        icon: 'devicon-react-original',
        checked: false
      }, {
        name: 'redux',
        checked: false
      }, {
        name: 'bootstrap',
        icon: 'devicon-bootstrap-plain',
        checked: false
      }, {
        name: 'webpack',
        checked: false
      }, {
        name: 'node',
        icon: 'devicon-nodejs-plain',
        checked: false
      }, {
        name: 'mongodb',
        icon: 'devicon-mongodb-plain',
        checked: false
      }, {
        name: 'heroku',
        icon: 'devicon-heroku-original',
        checked: false
      }, {
        name: 'vue',
        checked: false
      }, {
        name: 'material design',
        checked: false
      }, {
        name: 'angular',
        icon: 'devicon-angularjs-plain',
        checked: false
      }, {
        name: 'ruby on rails', 
        icon: 'devicon-rails-plain',
        checked: false
      }, {
        name: 'amazon s3',
        icon: 'devicon-amazonwebservices-original',
        checked: false
      }, {
        name: 'sass',
        icon: 'devicon-sass-original',
        checked: false
      }, {
        name: 'postgres',
        icon: 'devicon-postgresql-plain',
        checked: false
      }],
      commonTags: [{
        name: 'github',
        icon: 'devicon-github-plain'
      }, {
        name: 'html5',
        icon: 'devicon-html5-plain'
      }, {
        name: 'css3',
        icon: 'devicon-css3-plain'
      }, {
        name: 'javascript',
        icon: 'devicon-javascript-plain'
      }, {
        name: 'trello',
        icon: 'devicon-trello-plain'
      }]
    }
  },
  computed: {
    filteredProjects: function() {
      return this.projects.filter( (project) => {
        const checkedTech = this.tags.filter( tag => tag.checked ).map( tag => tag.name )
        return _.intersection(project.tags, checkedTech).length >= checkedTech.length
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

i {
  margin-right: 5px;
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
