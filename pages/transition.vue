<template>
  <div>
    <h1>Transition</h1>
    <div>
      <button @click="expand = !expand">Expand</button>
      <expand-transition>
        <div v-show="expand" :class="$style.expandBox"></div>
      </expand-transition>
    </div>
  </div>
</template>

<script>
import ExpandTransition from '@/components/transition/ExpandTransition.vue'
export default {
  name: 'Transition',
  components: { ExpandTransition },
  data() {
    return { expand: false }
  }
}
</script>

<style module>
.expandBox {
  width: 300px;
  height: 200px;
  border: solid 1px var(--black);
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
}
</style>
