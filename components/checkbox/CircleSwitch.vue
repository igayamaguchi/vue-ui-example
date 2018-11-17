<template>
  <div>
    <label
      :class="checked ? 'checked': 'no-checked'"
      @click.prevent="onCheck">
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
label {
  padding-left: 1rem;
}
label::before {
  content: '';
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0;
  left: 0;
}
label::after {
  content: 'x';
  color: white;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  border: solid 1px black;
}
.checked::before {
  background-color: black;
}
.no-checked::before {
  background-color: white;
}
</style>
