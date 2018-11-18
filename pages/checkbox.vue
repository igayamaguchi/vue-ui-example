<template>
  <div>
    <h1>Checkbox</h1>
    <circle-switch
      :checked="onOff"
      description="CircleSwitch"
      class="circle-switch"
      @check="circleSwitch"/>
  </div>
</template>

<script>
import CircleSwitch from '~/components/checkbox/CircleSwitch.vue'

export default {
  name: 'Checkbox',
  components: { CircleSwitch },
  data() {
    return {
      onOff: false
    }
  },
  methods: {
    circleSwitch(value) {
      this.onOff = value
    }
  }
}
</script>

<style scoped>
div {
  margin: 5px;
}
.circle-switch {
  font-size: 30px;
}
</style>
