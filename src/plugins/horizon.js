import Vue from 'vue'
import Horizon from 'vue-horizon'

Vue.use(Horizon, {
  host: '127.0.0.1:8181',
  models: ['tasks']
})
