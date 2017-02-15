<template>
  <div id="nav-list">
    <ul class="nav-left">
      <li class="nav-item" v-for="(item, index) in items">
        <router-link :to="'/' + item.ad" class="item">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{
          name: '销售详情',
          ad: 'sale/foo/bor'
        }, {
          name: '招牌系列',
          ad: 'shopboard'
        }, {
          name: '柠檬果园',
          ad: 'garden'
        }, {
          name: '鲜榨系列',
          ad: 'fresh'
        }, {
          name: '醇香美味',
          ad: 'mellow'
        }, {
          name: '美食小吃',
          ad: 'food'
        }, {
          name: '金葫芦',
          ad: 'tea'
        },

      ]
    };
  }
}
</script>
<style scoped>
#nav-list {
  position: fixed;
  top: 50px;
  bottom: 0;
  left: 0;
  padding: 20px 40px;
  line-height: 40px;
  background-color:   #D1EEEE;
  overflow-y: auto;
  z-index: 115;
  font-size: 22px;
}

.nav-left {
  width: 135px;
  font-family: "Microsoft Yahei", sans-serif;
}

.nav-item a {
  size: 20px;
  color: #b2b2b2;
}

.nav-left .nav-item a:hover {
  /* color: rgba(255, 255, 255, 0.8); */
  color:  #8B3626;
}

.nav-left a.router-link-active {
  /* color: rgba(255, 255, 255, 0.9); */
  color:  #FF7256;
}
.nav-left  .item{
  font-size: 24px;
  color:  #668B8B;
}
@media screen and (max-width: 964px) {
  #nav-list {
    position: relative;
    width: 100%;
    padding: 5px 20px;
    box-sizing: border-box;
    line-height: 20px;
  }
  .nav-left {
    width: 100%;
  }
  .nav-left .nav-item {
    display: inline-block;
    margin: 5px 0;
    padding: 0 8px;
    border-right: solid 1px #b2b2b2;
  }
  .nav-item:last-child {
    border-right: none;
  }
}
</style>
