<template>
  <div>
    <div :class="$style.wrapper">
      <div ref="line" :class="$style.line"></div>
      <div
        ref="circle"
        @dragstart="onDragstart"
        @dragenter="onDragenter"
        @dragover="onDragover"
        @dragleave="onDragleave"
        @drop="onDrop"
        @dragend="onDragend"
        @mousedown="onMousedown"
        @mouseup="onMouseup"
        @mousemove="onMousemove"
        :class="$style.circle"
        :style="circleStyles"
        draggable="false"
      ></div>
    </div>
    <input v-model="value" type="number" />
    <transition name="range">
      <input v-model="value" type="range" max="10" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SliderInput',
  data() {
    return {
      left: 0,
      lineWidth: 0,
      value: 0,
      maxValue: 100,
      ready: false
    }
  },
  computed: {
    circleStyles() {
      return {
        left: `${this.value}%`
      }
    }
  },
  mounted() {
    this.left = this.$refs.line.getBoundingClientRect().left
    this.lineWidth = this.$refs.line.clientWidth
  },
  methods: {
    onDragstart(e) {
      console.log('onDragstart')
      this.ready = true
    },
    onDragenter(e) {
      console.log('onDragenter')
    },
    onDragover(e) {
      console.log('onDragover')
      if (!this.ready) return
      this.value = ((e.x - this.left) / this.lineWidth) * this.maxValue
    },
    onDragleave(e) {
      console.log('onDragleave')
    },
    onDrop(e) {
      console.log('onDrop')
    },
    onDragend(e) {
      console.log('onDragend')
      this.ready = false
    },
    onMousemove(e) {
      console.log('onMousemove')
    },
    onMousedown(e) {
      console.log('onMousedown')
    },
    onMouseup(e) {
      console.log('onMouseup')
    }
  }
}
</script>

<style module>
.wrapper {
  position: relative;
}

.line {
  width: 100%;
  height: 10px;
  background-color: #7f828b;
  margin: 10px;
}

.circle {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 2px 0 #7f828b;
  border-radius: 100%;
}
</style>
<style scoped>
.range-enter-active,
.range-leave-active {
  transition: all 1s;
}
.range-enter, .range-leave-to /* .fade-leave-active below version 2.1.8 */ {
}
</style>
