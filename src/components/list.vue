<template>
  <div id="list">
  <div class="list-head">
  <span class="product">商品信息</span>
  <span class="product-count">商品数量</span>
  <span class="product-price">商品价格</span>
  <span class="product-edit">编辑</span>
  </div>
    <ul class="list">
      <li v-for="item in list" class="listrow">
        <input type="checkbox" id="listbtn" v-model='item.itemChecked' @change="updataList"></input>
        <span>{{item.name}}</span>
        <span class="itemcount">{{item.count}}</span>
        <span class="itemprice">{{"$"+item.price}}</span>
        <span class="itemedit" @click="listdele(item)">删除</span>
      </li>
    </ul>
    <div id="listcheck">
     <input type="checkbox" id="all" v-model='allChecked'>
      <label for="all">全选</label>
      <div class="sum">总金额：{{pricesum}}元</div>
    </div>
  </div>
</template>
<script>
import {updataList,listdele} from "../vuex/actions.js"
export default {
  data() {
      return {
        allChecked: false
      }
    },
    vuex: {
      getters: {
        list: state => state.list,pricesum:state=>state.pricesum
      },
      actions:{
        updataList,
        listdele
      }
    },
    watch: {
      allChecked: function(value) {
        this.list.forEach(function(item) {
          item.itemChecked = value
        })
        return value;
      }

    }
}
</script>
<style>
#list {
  width: 100%;
}
.list-head{
  width:100%;
  height: 50px;
  line-height: 50px;
  background-color: #707070;
  color: white;
  font-size: 22px;
}
.list-head .product{
  margin: 0 15% 0 15%;
}
.list-head .product-count{
  margin:0 10% 0 0;
}
.list-head .product-price{
  margin:0 10% 0 0;
}
.list-head .product-edit{
  margin:0 10% 0 0;
}

#listbtn {
  width: 25px;
  height: 25px;
}

.listrow {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  font-weight: 400;
  border-bottom: 2px dotted grey;
}

#listcheck {
  font-size: 25px;
  margin: 5px 30px;
}

#all {
  width: 30px;
  height: 30px;
}

#listsum {
  height: 50px;
  font-size: 28px;
  font-weight: bold;
  margin: 5px 30px;
}
.itemprice{
  position: absolute;
  left:72%;
}
.itemcount{
  position: absolute;
  left:51%;
}
.itemedit{
  position: absolute;
  left:85%;
  color:red;
  cursor:pointer;
}
.sum{
  color:red;
  font-family:"微软雅黑";
  font-size: 26px;
  font-weight: 400;
}
</style>
