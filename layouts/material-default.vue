<template>
  <div>
    <md-toolbar>
      <router-link
        class="md-title"
        to="/">Top
      </router-link>
    </md-toolbar>
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'

export default {
  name: 'MaterialDefault',
}
</script>

<style scoped>
</style>
