<template>
  <header>
    <div :class="$style.wrapper">
      <h1 :class="$style.top">
        <router-link to="/">TOP</router-link>
      </h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/*@import 'assets/css/colors.css';*/

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  border-bottom: solid 1px var(--black);
  padding: 3px;
  display: flex;
  align-items: center;
}
h1 {
  display: inline-block;
}
</style>
<style module>
.wrapper {
  display: flex;
  padding-left: 16px;
}
</style>
