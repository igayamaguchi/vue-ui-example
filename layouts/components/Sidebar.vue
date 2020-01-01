<template>
  <nav>
    <h1>sidebar</h1>
    <router-link to="/">Top</router-link>
    <router-link to="checkbox">Checkbox</router-link>
    <router-link to="button">Button</router-link>
    <router-link to="card">Card</router-link>
    <router-link to="carousel">Carousel</router-link>
    <router-link to="search">Search</router-link>
    <router-link to="drug">Drug</router-link>
    <router-link to="input">Input</router-link>
    <router-link to="transition">Transition</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
nav {
  position: fixed;
  top: 60px;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  border-right: solid 1px var(--black);
  padding-left: 16px;
}
a {
  display: block;
}
</style>
