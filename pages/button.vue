<template>
  <div>
    <h1>Button</h1>
    <material-button
      text="Button"
      class="material-button"
      @click="onClickMaterialButton"/>
  </div>
</template>

<script>
import MaterialButton from '~/components/button/MaterialButton.vue'

export default {
  name: 'Button',
  components: { MaterialButton },
  methods: {
    onClickMaterialButton() {
      console.log('clicked material button')
    },
  },
}
</script>

<style scoped>
.material-button {
  background-color: white;
}
</style>
