<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <ul v-for="(section, key) in sections" class="left hide-on-med-and-down">
          <li><a @click="scrollTo(section)">{{key}}</a></li>
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

export default {
  name: 'navbar',
  data() {
    return {
      sections: {
        'About Me': '#truths',
        'Projects': '#projects',
        'Jobs': '#jobs',
        'Education': '#education'
      }
    }
  },
  methods: {
    scrollTo: function(anchor) {
      const scrollElement = document.querySelector(anchor)
      this.$SmoothScroll(scrollElement)
    }
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
