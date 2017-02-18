import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'views/Hello'
import Task from 'views/Task'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      // TODO: Add main tage
      path: '/',
      name: 'Main',
      component: Hello
    },
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    }
  ]
})
