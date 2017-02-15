<template>
  <div id="sale">
    <div class="sale">
      <ul class="s-sale" v-for="item in obj">
        <li class="s-head">
          <router-link :to="'/sale/foo/'+item.ad">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <router-view class="mainofsale"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: [{
          name: '招牌系列',
          ad: 'bor'
        }, {
          name: '柠檬果园',
          ad: 'gar'
        }, {
          name: '鲜榨系列',
          ad: 'fre'
        }, {
          name: '醇香美味',
          ad: 'mel'
        }, {
          name: '美食小吃',
          ad: 'fo'
        }, {
          name: '金葫芦',
          ad: 't'
        },

      ]
    }
  },
}
</script>
<style>
#id {
  width: 100%;
  height: 45px;
  line-height: 45px;
  position: fixed;
  top: 50px;
  left: 200px;
}
.s-sale{
  display: inline-block;
  padding-left: 68px;

}
.sale {
  background-color: #030303;
}

.s-head {
  display: inline-block;
  border: 2px solid #FFFAFA;
  width: 110px;
  font-size: 24px;
  margin: 0 10px;
  text-align: center;
}
.s-head a{
    color: white;
}
.s-head a:hover{
  color:#EEAD0E;
}
.s-head a.router-link-active{
  color:red;
}
.appear {
  width: 100%;
}

.mainofsale {
  width: 100%;
  margin: 10px;
}

</style>
