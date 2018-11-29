<template>
  <div>
    <h1>Search</h1>
    <form action="">
      <dl>
        <dt>キーワード</dt>
        <dd>
          <label>
            <input
              type="text"
              name="keyword">
          </label>
        </dd>
        <dt>チェックイン</dt>
        <dd>
          <label>
            <input
              type="text"
              name="checkin">
          </label>
        </dd>
        <dt>チェックアウト</dt>
        <dd><label>
          <input
            type="text"
            name="checkout">
        </label></dd>
        <dt>大人</dt>
        <dd>
          <label>
            <input
              type="text"
              name="adult">
          </label>
        </dd>
        <dt>子供</dt>
        <dd>
          <label>
            <input
              type="text"
              name="child">
          </label>
        </dd>
        <dt>最低価格</dt>
        <dd>
          <label>
            <input
              type="text"
              name="minimum">
          </label>
        </dd>
      </dl>
      <input type="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      keyword: '',
      checkin: '',
      checkout: '',
      adult: '',
      child: '',
      minimum: ''
    }
  }
}
</script>

<style scoped>
</style>
