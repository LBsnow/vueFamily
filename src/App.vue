<template>
  <div id="app">
    <my-head></my-head>
    <my-nav></my-nav>
    <router-view class="main"></router-view>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myHead from './components/header'
import myNav from './components/nav'
import myFoot from './components/foot'
import store from './vuex/store'

export default {
  name: 'app',
  components: {
    myHead,
    myNav,
    myFoot
  }
}
</script>

<style>
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  #app {
    font-family: "Microsoft Yahei", sans-serif;
  }
  .main {
    position: relative;
    top: 50px;
    width: 100%;
    margin-bottom: 135px;
    padding-left: 248px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 964px) {
    .main {
      padding-left: 0;
    }
  }
</style>
