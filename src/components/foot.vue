<template>
  <div id="foot">
    <router-link :to="'/'+a" class="footbtn">结算</router-link>
    <span class="foot-left">含运费：10元</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: "jiesuan"
    }
  }
}
</script>
<style>
#foot {
  position: fixed;
  bottom: 0;
/*  left: 255px;
*/  width: 100%;
  height: 50px;
  box-shadow: 2px 0 0 3px rgba(0, 0, 0, 0.16), 2px 0 0 3px rgba(0, 0, 0, 0.12);
  background: rgba(255, 255, 255, .5);
  z-index: 100;
  font-family: "Microsoft Yahei", sans-serif;
}

.footbtn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: white;
  background-color: #FF4500;
}
.foot-left{
	position: absolute;
	bottom: 0;
	left: 20%;
}
</style>
