<template>
  <div>
    <h1>Carousel</h1>
    <normal-carousel :img-list="forNormalCarousel"/>
  </div>
</template>

<script>
import NormalCarousel from '~/components/carousel/NormalCarousel'

export default {
  name: 'Carousel',
  provide: {
    carousel: this
  },
  components: { NormalCarousel },
  data() {
    return {
      forNormalCarousel: [
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200',
        'https://via.placeholder.com/300x200'
      ]
    }
  }
}
</script>

<style scoped>
</style>
