// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('materialize-css')

import Vue from 'vue'
import App from './App'

import Viewport from './directives/Viewport'
Vue.directive('viewport', Viewport)

import vueSmoothScroll from 'vue-smoothscroll';
Vue.use(vueSmoothScroll);

require('vue-material/dist/components/mdSnackbar/index.css')
require('vue-material/dist/components/mdSpinner/index.css')
require('vue-material/dist/components/mdButton/index.css')
require('vue-material/dist/components/mdCore/index.css')
require('vue-material/dist/components/mdToolbar/index.css')
import VueMaterial from 'vue-material'
Vue.use(VueMaterial.MdCore)
Vue.use(VueMaterial.MdSnackbar)
Vue.use(VueMaterial.MdSpinner)
Vue.use(VueMaterial.MdButton)
Vue.use(VueMaterial.MdToolbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
