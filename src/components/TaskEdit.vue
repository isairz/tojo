<template>
  <article class="task-item tile is-parent">
    <div class="tile is-child box">
      <button class="delete touchable close" @click="$emit('closeTask')"></button>
      <div class="block">
        <label class="label">Title</label>
        <p class="control">
          <input type="text" placeholder="Text input" class="input" :value="item.title">
        </p>
        <label class="label">Username</label>
        <p class="control has-icon has-icon-right">
          <input type="text" placeholder="Text input" value="bulma" class="input is-success">
          <i class="fa fa-check"></i>
          <span class="help is-success">This username is available</span>
        </p>
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
          <input type="text" placeholder="Email input" value="hello@" class="input is-danger">
          <i class="fa fa-warning"></i>
          <span class="help is-danger">This email is invalid</span>
        </p>
        <label class="label">Subject</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
              <option >With options</option>
            </select>
          </span>
        </p>
        <label class="label">Message</label>
        <p class="control">
          <textarea placeholder="Textarea" class="textarea"></textarea>
        </p>
        <p class="control">
          <label class="checkbox"><input type="checkbox">
            Remember me
          </label>
        </p>
        <p class="control">
          <label class="radio"><input type="radio" name="question">
            Yes
          </label>
          <label class="radio"><input type="radio" name="question">
            No
          </label>
        </p>
        <p class="control">
          <button class="button is-primary">Submit</button>
          <button class="button is-link" @click="$emit('closeTask')">Cancel</button>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="sass">
.task-item
  position: relative
  max-width: 700px
  min-width: 400px
  flex: 5500 1 600px
  .close
    position: absolute
    top: 20px
    right: 20px
</style>
