<template>
  <div id="mellow">
    <ul class="mellow" v-for="item in mellow.mellowvue">
      <li class="mellowrow">
        <h4>{{item.name}}</h4>
        <span class="price">${{item.price}}/每杯</span>
        <button class="mellow-btnup" @click="add(item)" v-on:click="show(item,$event)">{{btnup}}</button>
        <button class="mellow-btndown notactive" @click="dele(item)" v-on:click="lose(item,$event)">{{btndown}}</button>
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
        mellow:state=>state.mellow
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
#mellow {
  background:url('http://img3.redocn.com/tupian/20160201/qiaokelisejianbianmohubeijingsucai_5847265.jpg');
  background-size: cover;
  color: black;
}

.mellowrow {
  position: relative;
  width: 100%;
  border-top: 1px solid #FCFCFC;
  border-bottom: 1px solid  #FCFCFC;
}

.mellow-btnup {
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
.mellow-btnup:focus{
  background-color: #FF8247;
}

.mellow-btndown {
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
.mellow-btndown:focus{
  background-color: #FF8247;
}
.mellowrow .price {
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
