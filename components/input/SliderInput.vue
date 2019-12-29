<template>
  <div>
    <div :class="$style.wrapper">
      <div :class="$style.line"></div>
      <div
        @dragstart="onDrag"
        @mousemove="onMousemove"
        :class="$style.circle"
        :style="circleStyles"
      ></div>
    </div>
    <input v-model="value" type="number" />
  </div>
</template>

<script>
export default {
  name: 'SliderInput',
  data() {
    return {
      value: 100
    }
  },
  computed: {
    circleStyles() {
      return {
        left: `${this.value}%`
      }
    },
    left() {
      return `${this.value}%`
    }
  },
  methods: {
    onDrag(v) {
      console.log(v)
    },
    onMousemove(v) {
      console.log(v)
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
