<template>
  <div
    :class="$style.wrap"
    :style="wrapStyle">
    <ul>
      <li
        v-for="(img, index) in imgList"
        :key="index"
        :style="listStyle(index)">
        <img
          :src="img"
        >
      </li>
    </ul>
    <div
      :class="$style.prev"
      @click="prev">&lt;
    </div>
    <div
      :class="$style.next"
      @click="next">&gt;
    </div>
  </div>
</template>

<script>
export default {
  name: 'NormalTransform3dCarousel',
  inject: ['carousel'],
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
      initialWidth: 300,
      addWidth: 0,
      active: 0
    }
  },
  computed: {
    wrapStyle() {
      return { width: this.initialWidth * this.displayCount + 'px' }
    },
    rightStyle() {
      return {
        display: 'block',
        transform: `translateX(${100 * this.displayCount}%)`
      }
    }
  },
  methods: {
    calculatePosition(index) {
      if (index === this.active) {
        return 0
      }

      if (index < this.displayCount && index >= this.active) {
        return index - this.active
      }

      const notEnoughCount =
        this.displayCount - (this.imgList.length - this.active)

      if (notEnoughCount > 0) {
        if (index < notEnoughCount && index < this.displayCount) {
          return index + this.displayCount - notEnoughCount
        }
      }

      if (this.active > 1 && index - this.active < -1) {
        return index + this.imgList.length - this.active
      }

      if (index === this.imgList.length - 1 && this.active === 0) {
        return -1
      }
      return index - this.active
    },
    listStyle(index) {
      return {
        display: 'block',
        transform: `translateX(${this.calculatePosition(index) * 100}%)`
      }
    },
    prev() {
      if (this.active === 0) {
        this.active = this.imgList.length - 1
      } else {
        this.active -= 1
      }
    },
    next() {
      if (this.active >= this.imgList.length - 1) {
        this.active = 0
      } else {
        this.active += 1
      }
    },
    left(index) {
      const left = index * this.displayCount * this.initialWidth - this.addWidth
      return `${left}px`
    }
  }
}
</script>

<style scoped>
ul {
  height: 100%;
  list-style: none;
  overflow: hidden;
  position: relative;
}

li {
  position: absolute;
  transition: 2s;
}

li > img {
  width: 300px;
}
</style>
<style module>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
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

.wrap:hover .prev,
.wrap:hover .next {
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

.active {
  display: block;
  transform: translate3d(0, 0, 0);
}

.inactive {
  display: none;
  transform: translateX(100%);
}

.left {
  display: block;
  transform: translateX(-100%);
}

.right {
  display: block;
  transform: translateX(100%);
}
</style>
