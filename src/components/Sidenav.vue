<template>
  <md-sidenav class="md-left" ref="sidenav" id="sidenav">
    <md-list>
      <md-list-item
        @click.native="mobileScrollTo(section.anchor)"
        v-for="(section, index) in sections"
        :key="index"
        class="md-inset md-button">
        {{section.name}}
      </md-list-item>
    </md-list>
    <ul class="sidenav-list">
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
  </md-sidenav>
</template>

<script>
import bus from '../utils/Bus'

export default {
  name: 'sidenav',
  props: ['sections'],
  methods: {
    mobileScrollTo: function(anchor) {
      this.$refs.sidenav.close()
      this.scrollTo(anchor)
    },
    scrollTo: function(anchor) {
      const scrollElement = document.querySelector(anchor)
      this.$SmoothScroll(scrollElement)
    },
    toggleSidenav() {
      this.$refs.sidenav.toggle()
    }
  },
  created: function() {
    let sidenav = this;
    bus.$on('toggleSidenav', () => {
      sidenav.toggleSidenav()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.md-sidenav {
  position: fixed;
  z-index: 99999;
}

#sidenav {
  .md-sidenav-content {
    position: fixed;
    top: 0;
    left: 0;

    .md-list {
      margin-top: 50px;
    }
  }

  .sidenav-list {
    display: flex;
    justify-content: center;

    li {
      margin: 15px;
    }
  }
}
</style>
