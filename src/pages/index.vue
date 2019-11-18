<template>
<div class="main">
  <div class="logo">
    <img :src="title" class="title">
    <img :src="shadow" class="shadow">
     <img :src="cloud" class="cloud">
  </div>
  <div @click="gotoVote" class="btn btn1">电影投票</div>
  <div class="btn btn2">电影对对碰</div>
  <div class="btn btn3">电影猜猜看</div>
  <div @click="gotoBottle" class="corner">
    <img :src="star" class="star"/>
    <div class="font1">我的许愿瓶</div>
  </div>
</div>
</template>

<script>
import star from "../assets/star.png"
import title from "../assets/title.png"
import shadow from "../assets/shadow.png"
import cloud from "../assets/cloud.png"
import circle1 from "../assets/circle1.png"
import circle2 from "../assets/circle2.png"
export default {
  name: "index",
  data(){
    return{
      star:star,
      title:title,
      shadow:shadow,
      cloud:cloud,
      circle1:circle1,
      circle2:circle2
    }
  },
  methods:{
    gotoBottle(){
      var _this=this;
      _this.$router.push("bottle");
    },
      gotoVote(){
      var _this=this;
      _this.$router.push("vote");
    },
  }
};
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  background-color: #273453;
}
*{
 font-family: STFangsong Regular;
}
.main{
  position:relative;
  width:100%;
  height:100%;
}
.logo{
  position:relative;
  top:10%;
  height:40%;
}
.title{
  position:absolute;
  left:20%; top:0;
  width:60%;
}
.shadow{
  position:absolute;
  left:17%; top:18%;
  width:66%;
}
.cloud{
  position:absolute;
  right:0;bottom:-30%;
  width:50%;
}
.corner{
  position:absolute;
  bottom:2%; right:2%;
  text-align:center;
}
.star{
  width:12vw;
}
.font1{
  font-size: 4vw;
  color: rgba(255,255,255,1);
}
.btn{
  position:absolute;
  top:70%;
  height:20vw; width:20vw;
  text-align: center;
  background-size:100% 100%;
  line-height:20vw;
}
.btn1{
  left:10%;
  background-image:url("../assets/circle1.png");
  font-size:5vw;
  color:black;
}
.btn2{
  left:40%;
  background-image:url("../assets/circle2.png");
  font-size:4vw;
  color: rgba(255,255,255,1);
}
.btn3{
  left:70%;
  background-image:url("../assets/circle2.png");
  font-size:4vw;
  color: rgba(255,255,255,1);
}
</style>