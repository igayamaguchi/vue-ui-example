<template>
  <div>
    <h1>Drug</h1>
    <button @click="test">test</button>
    <div>x: {{ x }}</div>
    <div>y: {{ y }}</div>
    <div>xBeforeDrag: {{ xBeforeDrag }}</div>
    <div>yBeforeDrag: {{ yBeforeDrag }}</div>
    <div
      ref="rect"
      :class="$style.card"
      :style="{ position: 'relative', left: `${x}px`, top: `${y}px` }"
      @dragstart="handleDragstart"
      @dragend="handleDragend"
      draggable="true"
    >
      contents
    </div>
  </div>
</template>

<script>
export default {
  name: 'Drug',
  data() {
    return {
      x: 0,
      y: 0,
      xBeforeDrag: 0,
      yBeforeDrag: 0
    }
  },
  mounted() {
    // window.addEventListener('mousemove', event => {
    //   console.log(event)
    // })
    const { top, left } = this.$refs.rect.getBoundingClientRect()
    this.xBeforeDrag = left
    this.yBeforeDrag = top
  },
  methods: {
    test() {
      this.x = 10
      this.y = 10
    },
    // handleDrag(event) {
    //   // console.log(event)
    //   // console.log('drag')
    //   console.log(event.screenY, event.clientY, event.y)
    //   console.log(event)
    //   // this.x = event.screenX
    //   // this.y = event.screenY
    //   this.x = event.clientX
    //   this.y = event.clientY
    //   // this.x = event.x - this.xBeforeDrag
    //   // this.y = event.y - this.yBeforeDrag
    // },
    handleDragstart(event) {
      // console.log('drag start')
      // console.log(event)
      // this.xBeforeDrag = event.x
      // this.yBeforeDrag = event.y
    },
    handleDragend(event) {
      // console.log('drag end')
      // console.log(event)
      // console.log(event.clientY)
      this.x = event.clientX
      this.y = event.clientY
      this.xBeforeDrag = this.x
      this.yBeforeDrag = this.y
    }
  }
}
</script>

<style module>
.card {
  width: 320px;
  height: 200px;
  background-color: #ff4500;
}
.card:drop {
  background-color: wheat;
}
</style>
