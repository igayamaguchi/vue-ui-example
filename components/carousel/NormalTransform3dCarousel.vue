<template>
  <div :class="$style.wrap">
    <ul>
      <li
        v-for="(img, index) in imgList"
        :key="index"
        :class="{
          [$style.active]: index === active,
          [$style.inactive]: index !== active,
          [$style.left]: isLeft(index),
          [$style.right]: isRight(index),
      }">
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
  name: 'NormalCarousel',
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
  methods: {
    isLeft(index) {
      if (this.active === 0) {
        return index === this.imgList.length - 1
      }
      return index === this.active - 1
    },
    isRight(index) {
      if (this.active === this.imgList.length - 1) {
        return index === 0
      }
      return index === this.active + 1
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

.slideItem {
  width: 100%;
}

.active {
  display: block;
  transform-style: preserve-3d;
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
