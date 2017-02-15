<template>
  <div id="fresh">
    <ul class="fresh" v-for="item in fresh.freshvue">
      <li class="freshrow">
        <h4>{{item.name}}</h4>
        <span class="price">${{item.price}}/每杯</span>
        <button class="fresh-btnup" @click="add(item);show(item,$event)">{{btnup}}</button>
        <button class="fresh-btndown notactive" @click="dele(item);lose(item,$event)">{{btndown}}</button>
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
        fresh:state=>state.fresh
      },
      actions: {
        add,
        dele
      }
    },
   methods:{
    show(item,event){
      if(item.count>0){
        event.target.nextSibling.nextSibling.className="fresh-btndown active";
      }
    },
     lose(item,event){
      if(item.count<=0){
        event.target.className="fresh-btndown notactive";
      }
    }
   }


}
</script>
<style>
#fresh {
  background:url('http://pic.58pic.com/00/94/40/58bOOOPICa8.jpg');
  background-size: cover;
  color: black;
}

.freshrow {
  position: relative;
  width: 100%;
  border-top: 1px solid #FCFCFC;
  border-bottom: 1px solid  #FCFCFC;
}

.fresh-btnup {
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
.fresh-btnup:focus{
  background-color: #FF8247;
}
.fresh-btndown {
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
.fresh-btndown:focus{
  background-color: #FF8247;
}

.freshrow .price {
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
