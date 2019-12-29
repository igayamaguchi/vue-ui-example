<template>
  <div :class="$style.wrap">
    <ul ref="listWrap">
      <li v-for="(img, index) in imgList" :key="index">
        <img :src="img" />
      </li>
    </ul>
    <div :class="$style.prev" @click="prev">&lt;</div>
    <div :class="$style.next" @click="next">&gt;</div>
  </div>
</template>

<script>
const IMG_WIDTH = 300

export default {
  name: 'ScrollSnapCarousel',
  props: {
    displayCount: {
      type: Number,
      default: 1
    },
    imgList: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      initialWidth: IMG_WIDTH,
      addWidth: 0,
      active: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.active = Math.floor(this.$refs.listWrap.scrollLeft / IMG_WIDTH)
    }, 100)
  },
  methods: {
    prev() {
      if (this.active === 0) return
      this.active--
      this.scroll()
    },
    next() {
      if (this.active === this.imgList.length - 1) return
      this.active++
      this.scroll()
    },
    scroll() {
      // GOOD
      this.$refs.listWrap.scrollTo({
        behavior: 'smooth',
        left: this.active * IMG_WIDTH
      })

      // NO GOOD because disable snap
      // this.$refs.listWrap.scrollLeft = this.active * IMG_WIDTH
    }
  }
}
</script>

<style scoped>
ul {
  width: 300px;
  height: 200px;
  /*overflow: hidden;*/
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  display: flex;
  list-style: none;
}

li {
  width: 300px;
  min-width: 300px;
  height: 200px;
  flex-shrink: 0;
  scroll-snap-align: center;
}
</style>
<style module>
.wrap {
  position: relative;
  width: 300px;
}

.prev,
.next {
  display: none;
  position: absolute;
  top: 0;
  width: 40px;
  height: 100%;
  background-color: gray;
  opacity: 0.5;
  user-select: none;
  cursor: pointer;
  font-size: 35px;
}

/*.wrap:hover .prev,*/
/*.wrap:hover .next {*/
.prev,
.next {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms 0s ease;
}

.prev {
  left: 0;
}

.next {
  right: 0;
}
</style>
