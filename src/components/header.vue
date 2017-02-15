<template>
  <header class="top-container">
    <div class="top-bar clearfix">
      <div class="topbar-nav">
        <ul class="nav-wrap">
          <li class="nav">金葫芦外卖</li>
        </ul>
      </div>
      <div class="topbar-info">
        <span>已点餐数：<i class="count">{{count}}</i></span>
        <span>总计：<i class="pricesum">{{pricesum}}</i></span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  vuex: {
    getters: {
      count: state => state.countsum,pricesum:state=>state.pricesum

    }
  }
  }
  
</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .top-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    background-color: #fff;
    z-index: 100;
    font-family: "Microsoft Yahei", sans-serif;
  }
  .topbar-nav {
    display: inline-block;
    float: left;
    height: 50px;
    margin-left: 40px;
    line-height: 50px;
    overflow: hidden;
  }
  .nav {
    font-size: 30px;
    font-weight: 900;
  }
  .topbar-info {
    position: absolute;
    top: 0;
    right: 180px;
    height: 50px;
    line-height: 50px;
  }
  .topbar-info span {
    color: #919191;
    padding:0 10px;
    margin:0 10px;
  }
 
  .top-container .top-bar .count,.pricesum{
    color: red;
  }
  @media screen and (max-width: 500px) {
    .topbar-nav {
      margin-left: 25px;
    }
    .nav {
      font-size: 15px;
    }
    .topbar-info {
      right: 25px;
    }
    button {
      font-size: 15px;
    }
  }
</style>
</style>
