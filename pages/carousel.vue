<template>
  <div :class="$style.wrap">
    <h1>Carousel</h1>
    <normal-carousel :display-count="1" :img-list="forNormalCarousel" />
    <div style="width: 300px; height: 200px">
      <normal-transform3d-carousel
        :display-count="5"
        :img-list="forNormalCarousel"
      />
    </div>
    <!--    <div style="width: 300px; height: 200px">-->
    <scroll-snap-carousel :display-count="5" :img-list="forNormalCarousel" />
    <!--    </div>-->
    <div class="slider-wrapper">
      <div class="slider">
        <div v-for="img in forNormalCarousel" :key="img" class="unit">
          <p class="img"><img :src="img" /></p>
          <p class="caption">キャプションです。</p>
        </div>
        <!-- /.unit -->
      </div>
      <!-- /.slider -->
    </div>
    <!-- /.slider-wrapper -->
    <slot-carousel class="slot-carousel">
      <div v-for="(img, index) in forNormalCarousel" :key="index">
        <img :src="img" />
      </div>
    </slot-carousel>
  </div>
</template>

<script>
import SlotCarousel from '../components/carousel/SlotCarousel/SlotCarousel.vue'
import NormalCarousel from '~/components/carousel/NormalCarousel'
import NormalTransform3dCarousel from '~/components/carousel/NormalTransform3dCarousel.vue'
import ScrollSnapCarousel from '~/components/carousel/ScrollSnapCarousel.vue'

export default {
  name: 'Carousel',
  provide: {
    carousel: this
  },
  components: {
    SlotCarousel,
    NormalCarousel,
    NormalTransform3dCarousel,
    ScrollSnapCarousel
  },
  data() {
    return {
      forNormalCarousel: [
        '/image/first300x200.png',
        '/image/second300x200.png',
        '/image/third300x200.png',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200'
      ]
    }
  }
}
</script>

<style module>
.wrap {
  margin: 200px;
}
</style>
<style scoped>
.slider-wrapper {
  width: 600px;
  padding: 5px;
  overflow-x: auto;
  overflow-y: hidden;
  background: #ccc;
}

.slider {
  width: 850px;
  -webkit-overflow-scrolling: touch;
}

.slider > * {
  -webkit-transform: translateZ(0px);
}

.slider-wrapper::-webkit-scrollbar {
  display: none;
  height: 0 !important;
}

.unit {
  float: left;
  width: 150px;
  margin: 0 0 0 5px;
  border: 1px solid #dddddd;
  background: #efefef;
}

.unit:first-child {
  margin: 0;
}

.unit .img {
  text-align: center;
}
.slot-carousel {
  width: 600px;
}
</style>
