<template>
  <section id="jobs" v-viewport="{onEnter: scrollEnter, onExit: scrollExit}">
    <div class="container">
      <h1 class="center-align">Jobs</h1>
      <h5>Filter by tech</h5>
      <div class="filters">
        <div v-for="tag in tags" class="filter">
          <input type="checkbox" :id="checkboxId(tag)" :value="tag.name" v-model="checkedTags" />
          <label :for="checkboxId(tag)">
            <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
            <span>{{tag.name}}</span>
          </label>
        </div>
      </div>
      <transition 
        enter-active-class="animated fadeInUp" 
        leave-active-class="animated fadeOutDown" mode="out-in">
        <table v-if="filteredJobs.length">
          <thead>
            <tr>
              <th data-field="name">Name</th>
              <th data-field="description">Responsibilities</th>
              <th data-field="tech">Tech</th>
            </tr>
          </thead>
          <transition-group 
            name="job-list" 
            tag="tbody" 
            class="job-list">
            <tr v-for="job in filteredJobs" class="job" :key="job">
              <td class="name">
                <h4>{{job.title}}</h4> 
                <h5>{{job.name}}</h5>
                {{job.dates}}
              </td>
              <td class="blurb">
                <ul v-if="job.blurb.length">
                  <li v-for="bullet in job.blurb">
                    {{bullet}}
                  </li>
                </ul>
                <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
                  <ul v-if="job.more.length && job.showMore">
                    <li v-for="bullet in job.more">
                      {{bullet}}
                    </li>
                  </ul>
                </transition>
                <a @click="toggleShowMore(job)" v-if="job.more.length">
                  Show {{job.showMore ? 'less' : 'more'}}
                </a>
              </td>
              <td class="tags">
                <tag v-for="tag in job.tags" :tag="tag"></tag>
              </td>
            </tr>
          </transition-group>
        </table>
        <div v-else class="no-jobs">
          <h4>No jobs meet the search criteria!</h4>
          <h5><a @click="clearFilters">Clear the filters</a></h5>
        </div>
      </transition>
    </div>
    <down anchor="#education" text="where I went to school"></down>
  </section>
</template>

<script>
import Down from './DownButton'
import Tag from './Tag'
import TechTagService from '../services/TechTagService'
import Viewport from '../directives/Viewport'

import * as _ from 'lodash'

export default {
  name: 'jobs',
  directives: {viewport: Viewport},
  components: {
    Down,
    Tag
  },
  data () {
    return {
      jobs: [{
        name: 'Washington Post',
        title: 'Frontend Engineer',
        dates: 'February 2017 to Present',
        location: 'Washington, DC',
        blurb: ['TBD'],
        more: [],
        showMore: false,
        tags: ['jquery', 'java', 'agile', 'github'],
        tech: true
      }, {
        name: 'Kit Check',
        title: 'QA Engineer',
        dates: 'June 2015 to February 2017',
        location: 'Washington, DC',
        tags: ['angular', 'ruby on rails', 'circle ci', 'buildkite ci', 
          'protractor', 'jasmine', 'github', 'agile'],
        blurb: [
          `Completed frontend and backend components for both client-facing features  
          and internally-used tools using Angular and Ruby on Rails.`,
          `Identified, documented, debugged, and fixed bugs in frontend and 
          backend code.`,
          `Wrote and maintained automated test suite using Protractor and 
          Jasmine, with data seeded using Ruby on Rails.`
        ],
        more: [
          `Negotiated with product, project managers, and other engineers on 
          the feasibility, design, and implication of features.`,
          `Designed a process and format for test plan creation and test case 
          documentation in order to provide visibility into which cases are 
          automated and which cases needed to be automated.`,
          `Trained junior team members on the QA processes for both manual 
          testing and automation.`
        ],
        showMore: false,
        tech: true
      }, {
        name: 'Sungard Availability Services',
        title: 'Junior QA Engineer',
        dates: 'March 2014 to June 2015',
        location: 'Annapolis, MD',
        tags: ['java', 'selenium webdriver', 'bitbucket'],
        blurb: [
          `Generated a comprehensive suite of manual and automated tests 
          for several web-based applications.`
        ],
        more: [
          `Ran automated tests on an automation server, which used Jenkins 
          to regularly run a set of Selenium WebDriver regression scripts.`,
          `Created a standardized Google Sheets template used by the QA team 
          to write test plans for new features.`
        ],
        showMore: false,
        tech: true
      }],
      checkedTags: []
    }
  },
  computed: {
    tags: function() {
      return TechTagService.getTagsFromObjects(this.jobs)
    },
    filteredJobs: function() {
      return this.jobs.filter( (job) => {
        return _.intersection(job.tags, this.checkedTags).length >= this.checkedTags.length
      })
    }
  },
  methods: {
    toggleShowMore: function(job) {
      job.showMore = !job.showMore;
    },
    checkboxId: function(tag) {
      return `jobs-${tag.name}`
    },
    clearFilters: function() {
      this.checkedTags = [];
    },
    scrollEnter: function() {
      console.log('scroll has entered')
    },
    scrollExit: function() {
      console.log('scroll has exited')
    }
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

.no-jobs {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

table {
  font-size: 20px;
  width: 100%;
}

.blurb {
  width: 50%;
  line-height: 1.5;
}

.name {
  width: 25%;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.filter {
  color: #9e9e9e;
  font-size: 20px;
  padding: 10px 20px;
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

.job {
  transition: all 1s;
}

.job-list-enter, .job-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.job-list-leave-active {
  position: absolute;
}
</style>
