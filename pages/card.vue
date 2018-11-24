<template>
  <div>
    <h1>Card</h1>
    <article>
      <img
        src="https://via.placeholder.com/300x200"
        alt="placeholder">
      <h1>タイトル</h1>
      <p>テキスト</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Card'
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
