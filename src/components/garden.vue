<template>
  <div id="garden">
    <ul class="garden" v-for="item in garden.gardenvue">
      <li class="gardenrow">
        <h4>{{item.name}}</h4>
        <span class="price">${{item.price}}/每杯</span>
        <button class="garden-btnup" @click="add(item)" v-on:click="show(item,$event)">{{btnup}}</button>
        <button class="garden-btndown notactive" @click="dele(item)" v-on:click="lose(item,$event)">{{btndown}}</button>
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
        garden:state=>state.garden
      },
      actions: {
        add,
        dele
      }
    },
   methods:{
    show(item,event){
      if(item.count>0){
        event.target.nextSibling.nextSibling.className="garden-btndown active";
      }
    },
     lose(item,event){
      if(item.count<=0){
        event.target.className="garden-btndown notactive";
      }
    }
   }


}
</script>
<style>
#garden {
  background:url('http://pic.58pic.com/58pic/13/85/91/93758PIChEg_1024.jpg');
  background-size: cover;
  color: balck;
}

.garden {
  position: relative;
  border-top: 1px solid #FCFCFC;
  border-bottom: 1px solid  #FCFCFC;
}

.garden-btnup {
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
.garden-btnup:focus{
  background-color: #FF8247;
}
.garden-btndown {
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
.garden-btndown:focus{
  background-color: #FF8247;
}

.gardenrow .price {
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
