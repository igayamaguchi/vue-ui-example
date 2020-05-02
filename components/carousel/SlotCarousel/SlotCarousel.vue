<template>
  <div :class="$style.wrapper">
    <div ref="viewport" :class="$style.viewport">
      <ul
        ref="content"
        :class="$style.content"
        :style="`transform: translateX(-${x}px)`"
      >
        <slot></slot>
      </ul>
    </div>
    <div v-if="canPrev" @click="prev" :class="$style.prev">&lt;</div>
    <div v-if="canNext" @click="next" :class="$style.next">&gt;</div>
  </div>
</template>

<script>
export default {
  name: 'SlotCarousel',
  data() {
    return {
      page: 1,
      maxPage: 0,
      width: 0
    }
  },
  computed: {
    x() {
      return (this.page - 1) * 600
    },
    canPrev() {
      return this.page > 1
    },
    canNext() {
      return this.page < this.maxPage
    }
  },
  mounted() {
    this.maxPage = Math.ceil(
      this.$refs.content.scrollWidth / this.$refs.viewport.clientWidth
    )
  },
  methods: {
    prev() {
      if (this.canPrev) {
        this.page -= 1
      }
    },
    next() {
      if (this.canNext) {
        this.page += 1
      }
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
<style module>
.wrapper {
  display: inline-block;
  position: relative;
}
.viewport {
  overflow: hidden;
}
.content {
  display: flex;
  transition: all 0.4s ease;
}
.prev {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  cursor: pointer;
}
.next {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(100%, -50%);
  cursor: pointer;
}
</style>
