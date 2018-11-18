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
  padding-left: 2em;
}
label::before {
  content: '';
  width: 2em;
  height: 1em;
  position: absolute;
  top: 0;
  left: 0;
  border: solid 1px black;
  border-radius: 0.5em;
  background-color: black;
}
label::after {
  content: '';
  color: white;
  width: 1em;
  height: 1em;
  position: absolute;
  top: 0;
  left: 0;
  border: solid 1px white;
  border-radius: 100%;
  background-color: white;
  transition: all 300ms 0s ease;
  box-shadow: 1px 1px 2px 0 grey;
}
.checked::after {
  left: 1em;
}
</style>
