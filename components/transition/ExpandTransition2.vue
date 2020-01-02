<template>
  <transition name="expand">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'ExpandTransition2'
}
</script>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: height 0.5s;
}
.expand-enter,
.expand-leave-to {
  height: 0;
}
</style>
