<template>
  <div id="shopboard">
    <ul class="shop" v-for="item in shopboard.shopboardvue">
      <li class="shoprow">
        <h4>{{item.name}}</h4>
        <span class="price">${{item.price}}/每杯</span>
        <button class="shop-btnup" @click="add(item)" v-on:click="show(item,$event)">{{btnup}}</button>
        <button class="shop-btndown notactive" @click="dele(item)" v-on:click="lose(item,$event)">{{btndown}}</button>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  add,
  dele
} from '../vuex/actions';
export default {
  data() {
      return {
        btnup:'+',
        btndown:'-'
        
      }
    },
    vuex: {
      getters:{
        shopboard:state=>state.shopboard
      },
      actions: {
        add,
        dele
      }
    },
   methods:{
    show(item,event){
      if(item.count>0){
        event.target.nextSibling.nextSibling.className="food-btndown active";
      }
    },
     lose(item,event){
      if(item.count<=0){
        event.target.className="food-btndown notactive";
      }
    }
   }


}
</script>
<style>
#shopboard {
  background:url('http://www.pptok.com/wp-content/uploads/2011/06/beijing06.jpg');
  background-size: cover;
  color: black;
}

.shoprow {
  position: relative;
  width: 100%;
  border-top: 1px solid #FCFCFC;
  border-bottom: 1px solid  #FCFCFC;
}

.shop-btnup {
  position: absolute;
  right: 260px;
  top: 20px;
  background-color: #F8F8FF;
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 15px;
  font-size: 22px;
  font-weight: 200;
}
.shop-btnup:focus{
  background-color: #FF8247;
}

.shop-btndown {
  position: absolute;
  right: 200px;
  top: 20px;
  background-color: #F8F8FF;
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 15px;
  font-size: 22px;
  font-weight: 200;
}
.shop-btndown:focus{
  background-color: #FF8247;
}
.shoprow .price {
  position: absolute;
  font-size: 18px;
  top: 30px;
  left: 250px;
}
.active{
  display: block;
}
.notactive{
  display: none;
}
</style>
