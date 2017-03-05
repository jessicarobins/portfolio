<template>
  <section>
    <div class="container" id="jobs" v-viewport="{onEnter: scrollEnter}">
      <h1 class="center-align">Career</h1>
      <div class="switch">
        <label>
          All Jobs
          <input type="checkbox" v-model="showOnlyTech">
          <span class="lever"></span>
          Only Tech Jobs
        </label>
      </div>
      <h5>Filter by tech</h5>
      <div class="filters">
        <div v-for="tag in tags" class="filter">
          <input type="checkbox" :id="checkboxId(tag)" :value="tag.name" v-model="checkedTags" />
          <label :for="checkboxId(tag)">
            <i v-bind:class="['colored', tag.icon]" v-if="tag.icon"></i>
            <span class="truncate">{{tag.name}}</span>
          </label>
        </div>
      </div>
      <transition 
        enter-active-class="animated fadeInUp" 
        leave-active-class="animated fadeOutDown" mode="out-in">
        <transition-group 
          v-if="filteredJobs.length"
          name="job-list" 
          tag="div" 
          class="job-list">
          <div v-for="(job, index) in filteredJobs" class="job" :key="job">
            <div class="name">
              <h4 class="title">{{job.title}}</h4> 
              <h5 class="org">{{job.name}}</h5>
              <span class="dates">{{job.dates}}</span>
            </div>
            <div class="row">
              <div class="tags col s12 m4 push-m8">
                <tag v-for="tag in job.tags" :tag="tag"></tag>
              </div>
              <div class="blurb col s12 m8 pull-m4">
                <ul class="fa-ul" v-if="job.blurb.length">
                  <li v-for="bullet in job.blurb">
                    <i class="fa-li fa fa-code-fork"></i>
                    {{bullet}}
                  </li>
                </ul>
                <transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
                  <ul class="fa-ul" v-if="job.more.length && job.showMore">
                    <li v-for="bullet in job.more">
                      <i class="fa-li fa fa-code-fork"></i>
                      {{bullet}}
                    </li>
                  </ul>
                </transition>
                <a @click="toggleShowMore(job)" v-if="job.more.length">
                  Show {{job.showMore ? 'less' : 'more'}}
                </a>
              </div>
            </div>
            <div class="divider" v-if="index !== filteredJobs.length-1"></div>
          </div>
        </transition-group>
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
import bus from '../utils/Bus'

import * as _ from 'lodash'

export default {
  name: 'jobs',
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
        tags: ['jquery', 'java', 'gulp', 'sass', 'agile', 'github'],
        tech: true
      }, {
        name: 'Kit Check',
        title: 'QA Engineer',
        dates: 'June 2015 to February 2017',
        location: 'Washington, DC',
        tags: ['angular', 'ruby on rails', 'sass', 'circle ci', 'buildkite ci', 
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
          `Generated a comprehensive suite of automated tests 
          for several web-based applications using Java and
          Selenium Webdriver.`
        ],
        more: [
          `Ran nightly builds of the automation suite on a continuous 
          integration server, Jenkins.`,
          `Created a standardized Google Sheets template used by the QA team 
          to write test plans for new features.`
        ],
        showMore: false,
        tech: true
      }, {
        name: 'Learning Together, LLC',
        title: 'Applied Behavior Analysis Therapist',
        dates: 'January 2012 to March 2014',
        location: 'Washington, DC',
        tags: [],
        blurb: [
          `Created and implemented research-based interventions for children 
          with autism.`,
          `Collected and graphed data in order to monitor each child’s 
          progress, analyze the efficacy of current programs, and troubleshoot 
          problems with existing interventions.`
        ],
        more: [
          `Collaborated with caregivers and related service providers to 
          create and modify goals and interventions based on data collected.`,
          `Wrote reports based on collected data in order to inform both 
          caregivers and insurance providers of each child’s progress.`
        ],
        showMore: false,
        tech: false
      }, {
        name: 'DC Public Schools',
        title: 'Special Education Aide',
        dates: 'September 2010 to August 2012',
        location: 'Washington, DC',
        tags: ['objective-c'],
        blurb: [
          `Collaborated with a special education teacher to instruct students 
          in Autism Pre-Kindergarten and Kindergarten classrooms.`,
          `Created an iPhone application using Objective-C to facilitate 
          gathering data for assessments.`
        ],
        more: [
          `Administered assessments, such as GOLD and the VB-MAPP.`,
          `Assisted the teacher with the development and execution of IEPs 
          and ABA programs.`
        ],
        showMore: false,
        tech: false
      }],
      showOnlyTech: true,
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
      }).filter( job => {
        return !this.showOnlyTech || job.tech
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
      bus.$emit('scrollEnter', 'Career')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  background-color: white;
}

.container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.divider {
  margin: 40px 0;
}

.no-jobs {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.blurb {
  line-height: 1.5;
}

.name {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  
  .org {
    flex: 1;
  }
  
  .title {
    margin-right: 20px;
  }
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 20px 0;
}

.filter {
  color: #9e9e9e;
  font-size: 20px;
  padding: 10px 20px;
}

.filters {
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 40px;
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
