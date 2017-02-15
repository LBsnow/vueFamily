<template>
  <div class="title">
    <div class="a">欢</div>
    <div class="b">迎</div>
    <div class="d">来</div>
    <div class="e">到</div>
    <div class="f">金</div>
    <div class="c">葫</div>
    <div class="g">芦</div>
  </div>
</template>
<style>
.title {
  width: 100%;
  height: 100%;
}

.title .a,
.b,
.c,
.d,
.e,
.f,
.g {
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 0 50px;
  font-size: 150px;
    transform: skew(-20deg);

   position: absolute;
  top: 100px;
  /*  box-shadow: 5px 5px 10px grey;
*/
}

.title .a {
  left: 500px;
  animation-name: a;
  animation-duration: 1s;
}

@keyframes a {
  0% {
    opacity: 0;
    transform: translate(-300px) rotate(180deg);

  }
  50% {
    opacity: 0.5;
    transform: rotate(360deg) skew(-30deg);


  }
  100% {
    opacity: 1;
    transform: rotate(360deg) skew(-20deg);

  }
}

.title .b {

  left: 650px;
  animation-name: b;
  animation-duration: 1s;
  animation-iteration-count: normal;
}

@keyframes b {
 0% {
    opacity: 0;
    transform: translate(-300px) rotate(180deg);

  }
  50% {
    opacity: 0.5;
    transform: rotate(360deg) skew(-30deg);


  }
  100% {
    opacity: 1;
    transform: rotate(360deg) skew(-20deg);

  }
}

.title .d {
  left: 800px;
  animation-name: d;
  animation-duration: 1s;
  animation-iteration-count: normal;
}

@keyframes d {
  0% {
    opacity: 0;
    transform: translate(-300px) rotate(180deg);

  }
  50% {
    opacity: 0.5;
    transform: rotate(360deg) skew(-30deg);


  }
  100% {
    opacity: 1;
    transform: rotate(360deg) skew(-20deg);

  }
}

.title .e {
  left: 950px;
  animation-name: e;
  animation-duration: 1s;
  animation-iteration-count: normal;
}

@keyframes e {
  0% {
    opacity: 0;
    transform: translate(-300px) rotate(180deg);

  }
  50% {
    opacity: 0.5;
    transform: rotate(360deg) skew(-30deg);


  }
  100% {
    opacity: 1;
    transform: rotate(360deg) skew(-20deg);

  }
}
.title .f {
  left: 1100px;
  animation-name: f;
  animation-duration: 1s;
  animation-iteration-count: normal;
}

@keyframes f {
  0% {
    opacity: 0;
    transform: translate(-300px) rotate(180deg);

  }
  50% {
    opacity: 0.5;
    transform: rotate(360deg) skew(-30deg);


  }
  100% {
    opacity: 1;
    transform: rotate(360deg) skew(-20deg);

  }
}
.title .c {
  left: 1250px;
  animation-name: c;
  animation-duration: 1s;
  animation-iteration-count: normal;
}

@keyframes c {
  0% {
    opacity: 0;
    transform: translate(-300px) rotate(180deg);

  }
  50% {
    opacity: 0.5;
    transform: rotate(360deg) skew(-30deg);


  }
  100% {
    opacity: 1;
    transform: rotate(360deg) skew(-20deg);

  }
}
.title .g {
  left: 1400px;
  animation-name: g;
    animation-duration:3s;
 animation-iteration-count: normal;

}

@keyframes g {
  0% {
  	left:-10px;
  	top:-100px;
    opacity: 0;
    transform: translate(-300px) rotate(180deg);

  }
  25% {
    opacity: 0.2;
/*    transform: rotate(360deg) skew(-30deg);
*/    top:150px;
    left:900px;

  }
  50%{
   opacity: 0.5;
   top:0;
   left:900px;

  }
  75%{
  	top:-100px;
  	opacity: 0.7;
  	left:1399px;
  }
  100% {
    opacity: 1;
    top:100px;
    transform: rotate(360deg) skew(-20deg);
    left:1400px;

  }
}
</style>
