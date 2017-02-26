<template>
  <section id="jobs">
    <div class="container">
    <h1 class="center-align">Jobs</h1>
      <table>
        <thead>
          <tr>
            <th data-field="name">Name</th>
            <th data-field="description">Responsibilities</th>
            <th data-field="tech">Tech</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs">
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
        </tbody>
      </table>
    </div>
    <down anchor="#hobbies" text="what I do for fun"></down>
  </section>
</template>

<script>
import Down from './DownButton'
import Tag from './Tag'
import TechTagService from '../services/TechTagService'

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
      }]
    }
  },
  methods: {
    toggleShowMore: function(job) {
      job.showMore = !job.showMore;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  
</style>
