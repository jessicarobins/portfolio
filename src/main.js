// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

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
require('vue-material/dist/components/mdChips/index.css')
require('vue-material/dist/components/mdInputContainer/index.css')
require('vue-material/dist/components/mdSwitch/index.css')
require('vue-material/dist/components/mdCard/index.css')
import VueMaterial from 'vue-material'
Vue.use(VueMaterial.MdCore)
Vue.use(VueMaterial.MdSnackbar)
Vue.use(VueMaterial.MdSpinner)
Vue.use(VueMaterial.MdButton)
Vue.use(VueMaterial.MdToolbar)
Vue.use(VueMaterial.MdChips)
Vue.use(VueMaterial.MdInputContainer)
Vue.use(VueMaterial.MdSwitch)
Vue.use(VueMaterial.MdCard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
