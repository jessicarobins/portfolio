<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <ul v-for="section in sections" class="left hide-on-med-and-down">
          <li :class="{active: section.active}"><a @click="scrollTo(section.anchor)">{{section.name}}</a></li>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/jessicarobins" target="_blank">
              <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jessica-robins/" target="_blank">
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="http://codepen.io/jrobins/" target="_blank">
              <i class="fa fa-codepen fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import bus from '../utils/Bus'
import * as _ from 'lodash'

export default {
  name: 'navbar',
  data() {
    return {
      sections: [{
        name: 'About Me',
        anchor: '#truths',
        active: false
      }, {
        name: 'Projects',
        anchor: '#projects',
        active: false
      }, {
        name: 'Jobs',
        anchor: '#jobs',
        active: false
      }, {
        name: 'Education',
        anchor: '#education',
        active: false
      }]
    }
  },
  methods: {
    isActive(section) {
      return this.activeSection.length && this.activeSection === section;
    },
    scrollTo: function(anchor) {
      const scrollElement = document.querySelector(anchor)
      this.$SmoothScroll(scrollElement)
    }
  },
  created: function() {
    let sections = this.sections
    bus.$on('scrollEnter', function (data) {
      console.log(sections)
      _.each(sections, section => section.active = false)
      _.find(sections, {name: data}).active = true;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  background-color: transparent;
  box-shadow: none;
  color: inherit;
  font-size: inherit;
  
  ul a {
    color: inherit;
    font-size: inherit;
  }
}
</style>
