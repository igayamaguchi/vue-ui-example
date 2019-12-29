<template>
  <div>
    <h1>Card</h1>
    <article>
      <img v-if="image" :src="image" />
      <h1 v-if="title">{{ title }}</h1>
      <slot :item="item" />
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    image: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    article: {
      type: Object,
      required: false,
      default: null
    }
  },
  computed: {
    item() {
      // console.log(this.$style.body)
      return {
        body: this.article.body,
        style: [this.$style.body]
      }
    }
  }
}
</script>

<style scoped>
article {
  width: 300px;
  border: solid 1px gray;
}

img {
  width: 100%;
}
</style>

<style module>
.body {
  background-color: red;
}
</style>
