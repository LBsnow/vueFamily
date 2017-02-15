<template>
  <div id="jin">
    <ul class="jin" v-for="item in jin.jinvue">
      <li class="jinrow">
        <h4>{{item.name}}</h4>
        <span class="price">${{item.price}}/每瓶</span>
        <button class="jin-btnup" @click="add(item)" v-on:click="show(item,$event)">{{btnup}}</button>
        <button class="jin-btndown notactive" @click="dele(item)" v-on:click="lose(item,$event)">{{btndown}}</button>
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
        jin:state=>state.jin
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
#jin {
  background:url('http://pic27.photophoto.cn/20130622/0008020271913884_b.jpg');
  background-size: cover;
  color: black;
}

.jinrow {
  position: relative;
  width: 100%;
  border-top: 1px solid #FCFCFC;
  border-bottom: 1px solid  #FCFCFC;
}

.jin-btnup {
  position: absolute;
  right: 260px;
  top: 20px;
  background-color: #F8F8FF;
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 15px;
  font-size: 22px;
  font-weight: 400;
}
.jin-btnup:focus{
  background-color: #FF8247;
}

.jin-btndown {
  position: absolute;
  right: 200px;
  top: 20px;
  background-color: #F8F8FF;
  width: 30px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 15px;
  font-size: 22px;
  font-weight: 400;
}
.jin-btndown:focus{
  background-color: #FF8247;
}
.jinrow .price {
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
