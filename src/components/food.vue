<template>
  <div id="food">
    <ul class="food">
      <li class="foodrow" v-for="item in food.foodvue">
        <h4>{{item.name}}</h4>
        <span class="price">${{item.price}}/每个</span>
        <button class="food-btnup" @click="add(item)" v-on:click="show(item,$event)">{{btnup}}</button>
        <button class="food-btndown notactive" @click="dele(item)" v-on:click="lose(item,$event)">{{btndown}}</button>
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
        btndown:'-',
      }
    },
    vuex: {
      getters:{
        food:state=>state.food
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
#food {
  background:url('http://pic.58pic.com/58pic/11/68/27/11a58PICIc8.jpg');
  background-size: cover;
  color: black;
}

.foodrow {
  position: relative;
  width: 100%;
  border-top: 1px solid #FCFCFC;
  border-bottom: 2px solid  #FCFCFC;
}
.food-btnup {
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
.food-btnup:focus{
  background-color:#FF8247;
}
.food-btndown {
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
.food-btndown:focus{
  background-color:#FF8247;
}
.foodrow .price{
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
