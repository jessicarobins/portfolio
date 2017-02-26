<template>
  <section class="projects" id="projects">
    <div class="container">
      <h1 class="center-align">Projects</h1>
      <div class="filters">
        <div v-for="tag in tags" class="filter">
          <input type="checkbox" :id="tag.name" />
          <label :for="tag.name">
            <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
            <span>{{tag.name}}</span>
          </label>
        </div>
      </div>
      <div class="project-list">
        <div v-for="project in projects" class="card">
          <div class="card-image">
            <img :src="project.image">
          </div>
          <div class="card-content">
            <span class="card-title">{{project.name}}</span>
            <p class="description">{{project.description}}</p>
            <div class="divider"></div>
            <h6>Technologies</h6>
            <div class="tags">
              <div v-for="tag in project.tags" class="chip">
                <i v-bind:class="['colored', className(tag)]" v-if="className(tag)"></i>
                {{tag}}
              </div>
            </div>
          </div>
          <div class="card-action">
            <a v-for="(url, key) in project.urls" :href="url" target="_blank">
              {{key}}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import * as _ from 'lodash';

export default {
  name: 'projects',
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
        icon: 'devicon-react-original'
      }, {
        name: 'redux'
      }, {
        name: 'bootstrap',
        icon: 'devicon-bootstrap-plain'
      }, {
        name: 'webpack'
      }, {
        name: 'node',
        icon: 'devicon-nodejs-plain'
      }, {
        name: 'mongodb',
        icon: 'devicon-mongodb-plain'
      }, {
        name: 'heroku',
        icon: 'devicon-heroku-original'
      }, {
        name: 'vue'
      }, {
        name: 'material design'
      }, {
        name: 'angular',
        icon: 'devicon-angularjs-plain'
      }, {
        name: 'ruby on rails', 
        icon: 'devicon-rails-plain'
      }, {
        name: 'amazon s3',
        icon: 'devicon-amazonwebservices-original'
      }, {
        name: 'sass',
        icon: 'devicon-sass-original'
      }, {
        name: 'postgres',
        icon: 'devicon-postgresql-plain'
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
      }]
    }
  },
  methods: {
    className: function(iconName) {
      const tag = _.find(this.tags, {name: iconName})
      return (tag ? tag.icon : undefined)
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
  width: 400px;
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

.chip {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

i {
  margin-right: 5px;
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

label {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.filter {
  padding: 20px;
}
</style>
