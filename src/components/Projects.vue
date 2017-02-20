<template>
  <section class="projects">
    <h1>Projects</h1>
    <div class="project-list">
      <div v-for="project in projects" class="card">
        <div class="card-image">
          <img :src="project.image">
        </div>
        <div class="card-content">
          <span class="card-title">{{project.name}}</span>
          <p>{{project.description}}</p>
          <div class="tags">
            <div v-for="tag in project.tags" class="chip">
              <i class="devicon-angularjs-plain colored"></i>
              {{tag}}
            </div>
          </div>
        </div>
        <div class="card-action">
          <a :href="project.url" target="_blank">Go</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'projects',
  data () {
    return {
      projects: [{
        name: 'everee',
        url: 'http://everee.io',
        description: 'a project that does stuff',
        tags: ['react', 'redux', 'bootstrap', 'webpack', 'node', 'mongodb', 'heroku'],
        image: require('../assets/everee.png')
      }, {
        name: 'Jessboard',
        url: 'https://jessicarobins.github.io/jessboard',
        description: 'a soundboard of things I say',
        tags: ['vue', 'webpack'],
        image: require('../assets/jessboard.png')
      }, {
        name: 'ddescribe',
        url: 'https://jessicarobins.github.io/formatter',
        description: 'a test case formatter',
        tags: ['vue', 'material design', 'webpack'],
        image: require('../assets/ddescribe.png')
      }, {
        name: 'jessdocs',
        description: 'a test case management tool',
        url: 'http://jessdocs.io',
        tags: ['angular', 'webpack', 'ruby on rails', 'material design', 'heroku', 'amazon s3'],
        image: require('../assets/jessdocs.png')
      }]
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
}

h1 {
  font-size: 72px;
}

.card {
  width: 400px;
  margin: 20px;
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

img {
  width: auto;
  height: auto;
}
</style>
