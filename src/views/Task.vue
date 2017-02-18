<template>
  <TaskList :data="tasks"></TaskList>
</template>

<script>
import TaskList from '../components/TaskList'

export default {
  components: {
    TaskList
  },
  data () {
    return {
      tasks: [
        {
          title: 'Quest1',
          due: new Date()
        },
        {
          title: 'Quest2',
          due: new Date()
        },
        {
          title: 'Quest3',
          due: new Date()
        },
        {
          title: 'Quest4',
          due: new Date()
        }
      ]
    }
  }
}
</script>
