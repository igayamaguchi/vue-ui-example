<template>
  <div>
    <label @click.prevent="onCheck">
      <span v-if="description">{{ description }}</span>
      <input
        :checked="checked"
        type="checkbox">
    </label>
  </div>
</template>

<script>
export default {
  name: 'CircleSwitch',
  props: {
    checked: {
      required: true,
      type: Boolean
    },
    description: {
      required: false,
      type: String,
      default: ''
    }
  },
  methods: {
    onCheck() {
      this.$emit('check', !this.checked)
    }
  }
}
</script>

<style scoped>
div {
  position: relative;
}
input {
  opacity: 0;
}
label::before {
  content: '';
  background-color: black;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
