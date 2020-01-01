<template>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false"
    name="expand"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'ExpandTransition',
  props: {
    duration: {
      type: Number,
      required: false,
      default: 300
    }
  },
  data() {
    return {
      height: 0
    }
  },
  mounted() {
    const { display } = getComputedStyle(this.$el)
    this.$el.style.display = 'block'
    this.height = this.$el.offsetHeight
    this.$el.style.display = display
  },
  methods: {
    beforeEnter(el) {
      this.$el.style.height = 0
      el.style.transition = `height ${this.duration / 1000}s`
    },
    enter(el, done) {
      void el.offsetHeight
      el.style.height = `${this.height}px`
      done()
    },
    leave(el, done) {
      void el.offsetHeight
      el.style.height = 0
      setTimeout(() => {
        done()
      }, this.duration)
    }
  }
}
</script>
