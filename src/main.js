// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './plugins/router'
import horizon from './plugins/horizon'

Vue.use(require('vue-moment'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  horizon,
  template: '<App/>',
  components: { App }
})
