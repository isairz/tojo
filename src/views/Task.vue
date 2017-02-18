<template>
  <div class="view-wrap tile is-ancestor">
    <div class="view-gutter"></div>
    <TaskList @editTask="editTask"></TaskList>
    <TaskEdit v-if="selected" :item="selected" @closeTask="closeTask"></TaskEdit>
    <div class="view-gutter"></div>
  </div>
</template>

<script>
import TaskList from '../components/TaskList'
import TaskEdit from '../components/TaskEdit'

export default {
  components: {
    TaskList,
    TaskEdit
  },
  data () {
    return {
      selected: null
    }
  },
  methods: {
    editTask (item) {
      this.selected = item
    },
    closeTask () {
      this.selected = null
    }
  }
}
</script>

<style lang="sass">
.view-wrap
  display: flex

.view-gutter
  flex: 1 0 20px
</style>
