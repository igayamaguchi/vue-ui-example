<template>
  <div :class="$style.wrap">
    <h1>Carousel</h1>
    <normal-carousel
      :display-count="1"
      :img-list="forNormalCarousel"/>
    <div style="width: 300px; height: 200px">
      <normal-transform3d-carousel
        :display-count="5"
        :img-list="forNormalCarousel"/>
    </div>
  </div>
</template>

<script>
import NormalCarousel from '~/components/carousel/NormalCarousel'
import NormalTransform3dCarousel from '~/components/carousel/NormalTransform3dCarousel.vue'

export default {
  name: 'Carousel',
  provide: {
    carousel: this
  },
  components: { NormalCarousel, NormalTransform3dCarousel },
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
