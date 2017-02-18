<template>
  <div class="task-list panel tile is-parent">
    <nav class="panel tile is-child">
      <p class="panel-heading">
        Task
      </p>
      <div class="panel-block">
        <p class="control has-icon">
          <input class="input" type="text" placeholder="Search">
          <span class="icon is-small">
            <i class="fa fa-search"></i>
          </span>
        </p>
      </div>
      <p class="panel-tabs">
        <a class="is-active">All</a>
        <a>Public</a>
        <a>Private</a>
        <a>Sources</a>
        <a>Forks</a>
      </p>

      <div class="panel-block">
        <button class="button is-primary is-outlined" @click="$emit('editTask', {})">
          Add Task
        </button>
      </div>

      <a class="panel-block" v-for="item in data" @click="$emit('editTask', item)">
        <div class="row-left">
          <span class="panel-icon">
            <i class="fa fa-book"></i>
          </span>
          {{ item.title }}
        </div>
        <div class="row-right">
          <span class="is-date">
            {{ item.due | moment("ll") }}
          </span>
        </div>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  // FIXME: get
  props: {
    find: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  mounted () {
    const tasks = (Object.keys(this.find).length === 0) ? this.$$tasks : this.$$tasks.findAll(this.find)
    tasks.watch().subscribe(data => {
      this.data = data
    })
  },
  data () {
    return {
      data: []
    }
  }
}
</script>

<style lang="sass">
.task-list
  max-width: 700px
  min-width: 400px
  flex: 5500 1 400px

.panel-block
  .row-left
    align-items: center
    display: flex
    flex: 1 1000 auto
    height: 100%
    justify-content: flex-start
    min-width: 1px
    position: relative
    width: 100%
  .row-right
    align-items: center
    display: flex
    flex: 0 1 auto
    height: 100%
    justify-content: flex-end
    max-width: 75%
    overflow: hidden

.is-date
  color: #ed4f55
</style>
