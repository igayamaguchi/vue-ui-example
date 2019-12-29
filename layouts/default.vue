<template>
  <div>
    <default-header />
    <sidebar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import DefaultHeader from './components/DefaultHeader.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: { Sidebar, DefaultHeader }
}
</script>

<style>
/*https://qiita.com/RinoTsuka/items/b30e03ce10aa38ac2a10*/
@font-face {
  font-family: 'Original Yu Gothic';
  src: local('Yu Gothic Medium');
  font-weight: 100;
}
@font-face {
  font-family: 'Original Yu Gothic';
  src: local('Yu Gothic Medium');
  font-weight: 200;
}
@font-face {
  font-family: 'Original Yu Gothic';
  src: local('Yu Gothic Medium');
  font-weight: 300;
}
@font-face {
  font-family: 'Original Yu Gothic';
  src: local('Yu Gothic Medium');
  font-weight: 400;
}
@font-face {
  font-family: 'Original Yu Gothic';
  src: local('Yu Gothic Bold');
  font-weight: bold;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Hiragino Sans', 'Noto Sans CJK JP', 'Original Yu Gothic', 'Yu Gothic',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Sans Emoji';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
main {
  margin: 60px 0 0 300px;
  padding: 15px 0 0 25px;
}

a {
  text-decoration: none;
}
a:visited {
  color: #000;
}
</style>
