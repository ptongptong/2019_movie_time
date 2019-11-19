<template>
  <div class="item">
    <img class="pic" :src="imgUrl">
    <div class="intro">
      <div class="title">{{title}}</div>
      <div class="score">{{score}}</div>
      <img @click="like" class="love" v-if="isClick==0" :src="love">
      <img @click="like" class="love" v-if="isClick==1" :src="loveActive">
      <div class="abstract">{{introduction}}</div>
    </div>
  </div>
</template>

<script>
import a from "../assets/1.jpg"
import love from "../assets/thumb1.jpg"
import loveActive from "../assets/thumb2.jpg"
export default {
  name: 'movie',
  data(){
    return{
      movielist:[],
      title:[],
      socre:[],
      imgUrl:[],
      introduction:[],
      love:love,
      loveActive:loveActive,
    }
  },
  methods:{
    like:function(){
      this.isClick=!this.isClick
    }
  },
  mounted(){
    $.ajax({
      url:baseUrl+"/movielist",
      type:"post",
      data:{
        keyword,
      },
      xhrFields:{withCredentials:true},
      success:res=>{
        let i=0;
        this.movielist=res.map(item=>{

        })
      }
    })
  }
}
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
}
.item{
  position:relative;
  margin-top:6%;
  background: rgb(46,58,88);
}
.pic{
  position:absolute;
  left:2%; top:-2vh;
  width:33%;
  border:1px solid #A59F59;
}
.title{
  position:relative;
  left:40%;top:1vh;
  font-size: 5vh;
  font-family: Microsoft YaHei Regular;
  color: rgba(255,255,255,1);
}
.score{
  position: relative;
  left:40%; top:1vh;
  font-size: 4vh;
  font-family: Microsoft YaHei Regular;
  color: rgba(255,184,64,1);
}
.abstract{
  position:relative;
  width:58%;
  left:40%;top:2vh;
  font-size:3vw;
  font-family: Microsoft YaHei Regular;
  color: rgba(255,255,255,1);
  margin-right:2%;
}
.love{
  position:absolute;
  right:0;
  top:0;
}
</style>
