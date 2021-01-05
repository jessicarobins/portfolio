<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <a @click="toggleSidenav" class="left hamburger hide-on-large-only">
          <i class="material-icons">menu</i>
        </a>

        <ul class="left hide-on-med-and-down">
          <li
            v-for="section in sections"
            v-bind:class="[className(section.name)]"
          >
            <a @click="scrollTo(section.anchor)">{{ section.name }}</a>
          </li>
        </ul>
        <ul class="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/jessicarobins"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa fa-github fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jessica-robins/"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/jessisdotcool"
              rel="noreferrer"
              target="_blank"
            >
              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import bus from '../utils/Bus';
import * as _ from 'lodash';

export default {
  name: 'navbar',
  props: ['sections'],
  data() {
    return {
      activeSection: '',
    };
  },
  methods: {
    className: function (name) {
      return name === this.activeSection ? 'active' : '';
    },
    scrollTo: function (anchor) {
      const scrollElement = document.querySelector(anchor);
      this.$SmoothScroll(scrollElement);
    },
    toggleSidenav() {
      bus.$emit('toggleSidenav');
    },
  },
  created: function () {
    let navbar = this;
    bus.$on('scrollEnter', function (data) {
      navbar.activeSection = data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-fixed {
  position: absolute;
}

nav {
  background-color: transparent;
  box-shadow: none;
  color: inherit;
  font-size: inherit;

  a {
    color: inherit;
    font-size: inherit;
    text-decoration: none !important;

    &.hamburger {
      margin: 0 20px;
    }
  }

  li {
    margin: 0 !important;
  }
}
</style>
