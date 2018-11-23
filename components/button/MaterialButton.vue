<template>
  <button @click="onClick">text</button>
</template>

<script>
export default {
  name: 'MaterialButton',
  props: {
    text: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
button {
  min-width: 88px;
  border: 0;
  box-shadow: 5px 5px #7f828b;
  user-select: none;
}
button:active {
  background-color: black;
}
</style>
