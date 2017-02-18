<template>
  <nav class="panel">
    <p class="panel-heading">
      Repositories
    </p>
    <div class="panel-block">
      <p class="control has-icon">
        <input class="input is-small" type="text" placeholder="Search">
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
      <button class="button is-primary is-outlined">
        Add Task
      </button>
    </div>

    <a class="panel-block" v-for="item in data">
      <span class="panel-icon">
        <i class="fa fa-book"></i>
      </span>
      <div class="row-left">
        {{ item.title }}
      </div>
      <div class="row-right">
        <span class="is-date">
          {{ item.due | moment("ll") }}
        </span>
      </div>
    </a>

    <div class="panel-block">
      <button class="button is-primary is-outlined is-fullwidth">
        Reset all filters
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => ([])
    }
  }
}
</script>

<style lang="sass">
.panel-block
  .row-left
    align-items: center
    display: flex
    flex: 1 1000 auto
    height: 100%
    justify-content: flex-start
    margin-left: -30px
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
