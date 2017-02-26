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
            <td class="blurb">{{job.blurb}}</td>
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
        blurb: 'TBA',
        tags: ['jquery', 'java', 'agile', 'github'],
        tech: true
      }, {
        name: 'Kit Check',
        title: 'QA Engineer',
        dates: 'June 2015 to February 2017',
        location: 'Washington, DC',
        tags: ['angular', 'ruby on rails', 'circle ci', 'buildkite ci', 
          'protractor', 'jasmine', 'github'],
        blurb: `
          - Completed frontend and backend components for small features and 
          internally-used tools. This involved creating components, controllers, 
          services, templates, and stylesheets using AngularJS, HTML, and SASS 
          on the frontend, as well as creating and modifying endpoints, models, 
          forms, and unit tests for the Ruby on Rails backend.
          - Identified, documented, debugged, and fixed bugs in backend and 
          frontend code.
          - Wrote and maintained automated test suite using Protractor and 
          Jasmine, with data seeded using Ruby on Rails, that ran in Circle CI 
          on every developer branch pushed to Git.
          - Negotiated with product, project managers, and other engineers on 
          the feasibility, design, and implication of features.
          - Designed a process and format for test plan creation and test case 
          documentation in order to provide visibility into which cases are 
          automated and which cases needed to be automated.
          - Trained junior team members on the QA processes for both manual 
          testing and automation.`,
        tech: true
      }, {
        name: 'Sungard Availability Services',
        title: 'Junior QA Engineer',
        dates: 'March 2014 to June 2015',
        location: 'Annapolis, MD',
        tags: ['java', 'selenium webdriver', 'bitbucket'],
        blurb: `
          - Generated a comprehensive suite of manual and automated tests 
          for several web-based applications.
          - Ran automated tests on an automation server, which used Jenkins 
          to regularly run a set of Selenium WebDriver regression scripts. 
          - Created a standardized Google Sheets template used by the QA team 
          to write test plans for new features.`,
        tech: true
      }]
    }
  },
  computed: {
    
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
  }
  
  .name {
    width: 25%;
  }
  
  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
