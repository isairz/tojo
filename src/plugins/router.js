import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'views/Hello'
import Table from 'views/Table'
import Task from 'views/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/task',
      name: 'Task',
      component: Task
    }
  ]
})
