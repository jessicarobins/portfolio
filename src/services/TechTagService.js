import Vue from 'vue'
import * as _ from 'lodash'

export default {
  
  getTagByName(tagName) {
    return _.find(this.tags(), {name: tagName}) || {name: tagName}
  },
  
  getTagsFromObjects(objArray) {
    const tArray = _.chain(objArray)
          .flatMap('tags')
          .uniq()
          .value()
    return this.getTagsByNames(tArray)
  },
  
  getTagsByNames(tArray) {
    return this.tags().filter( t => _.includes(tArray, t.name))
  },
  
  tags() {
    return [{
        name: 'react',
        icon: 'devicon-react-original',
      }, {
        name: 'redux',
      }, {
        name: 'bootstrap',
        icon: 'devicon-bootstrap-plain',
      }, {
        name: 'webpack',
      }, {
        name: 'node',
        icon: 'devicon-nodejs-plain',
      }, {
        name: 'mongodb',
        icon: 'devicon-mongodb-plain',
      }, {
        name: 'heroku',
        icon: 'devicon-heroku-original',
      }, {
        name: 'vue',
      }, {
        name: 'material design',
      }, {
        name: 'angular',
        icon: 'devicon-angularjs-plain',
      }, {
        name: 'ruby on rails', 
        icon: 'devicon-rails-plain',
      }, {
        name: 'amazon s3',
        icon: 'devicon-amazonwebservices-original',
      }, {
        name: 'sass',
        icon: 'devicon-sass-original',
      }, {
        name: 'postgres',
        icon: 'devicon-postgresql-plain',
      }, {
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
      }, {
        name: 'jquery',
        icon: 'devicon-jquery-plain'
      }, {
        name: 'bitbucket',
        icon: 'devicon-bitbucket-plain'
      }, {
        name: 'java',
        icon: 'devicon-java-plain'
      }, {
        name: 'circle ci'
      }, {
        name: 'buildkite ci'
      }, {
        name: 'protractor'
      }, {
        name: 'jasmine'
      }, {
        name: 'selenium webdriver'
      }, {
        name: 'agile'
      }, {
        name: 'postcss'
      }, {
        name: 'd3',
        icon: 'devicon-d3js-plain'
      }, {
        name: 'gulp',
        icon: 'devicon-gulp-plain'
      }, {
        name: 'objective-c',
        icon: 'devicon-c-plain'
      }, {
        name: 'android sdk',
        icon: 'devicon-android-plain'
      }]
  },
  
  getClassName(iconName) {
    const tag = _.find(this.tags(), {name: iconName})
    
    return (tag ? tag.icon : undefined)
  },
}