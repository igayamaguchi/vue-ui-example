<template>
  <div>
    <h1>Input</h1>
    <h2>Slider Input</h2>
    <slider-input :class="$style.sliderInputWrapper" />
  </div>
</template>

<script>
import SliderInput from '@/components/input/SliderInput.vue'
export default {
  name: 'Input',
  components: { SliderInput }
}
</script>

<style module>
.sliderInputWrapper {
  width: 200px;
}
</style>
