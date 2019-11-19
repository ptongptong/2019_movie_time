<template>
<div class="main">
  <el-tabs type="card" v-model="keyword">
      <el-tab-pane label="动画" name="动画" ></el-tab-pane>
      <el-tab-pane label="国风" name="国风"></el-tab-pane>
      <el-tab-pane label="科幻" name="科幻" ></el-tab-pane>
      <el-tab-pane label="剧情" name="剧情"></el-tab-pane>
      <el-tab-pane label="惊悚" name="惊悚" ></el-tab-pane>
  </el-tabs>
  <div class="item" v-for="movie in movies" :key="movie.movie_id">
    <img class="pic" :src="movie.poster_url">
    <div class="intro">
      <div class="m-title">{{movie.title}}</div>
      <div class="score">{{movie.score}}</div>
      <img @click="like" class="love" v-if="isClick==0" :src="love">
      <img @click="like" class="love" v-if="isClick==1" :src="loveActive">
      <div class="abstract">{{movie.introduction}}</div>
    </div>
  </div>
</div>
</template>

<script>
import love from "../assets/thumb1.jpg"
import loveActive from "../assets/thumb2.jpg"
import $ from "jquery"

const bbt = "https://hemc.100steps.net/2017/wechat/Home/Index/index?state=";
const PREFIX = "" 
const baseUrl="http://111.230.183.100:5000";

export default {
  name: "vote",
  data(){
    return{
      keyword:'动画',
      tot:0,
      movies: [],
      love:love,
      loveActive:loveActive,
    }
  },
  watch:{
    keyword(){
      this.console.log("keyword",this.keyword)
      $.ajax({
        url:baseUrl+"/movieList",
        type:"post",
        data:{
          keyword:this.keyword
        },
        xhrFields:{withCredentials:true},
        success:res=>{
          this.movies = res.map( movie => ({
            ...movie,
            poster_url: PREFIX + movie.poster_url
          }))
        },
        statusCode:{
          400:()=>{
            this.console.log("电影类型错误")
          },
          401:()=>{
            location.href=bbt+encodeURIComponent(location.href);
          },
          410:()=>{
            alert("活动不在进行期间")
          }
        }
    })
    }
  },
  methods:{
    like:function(){
      if (this.isClick==true) {this.tot++}
       else {this.tot--}
      this.isClick=!this.isClick
    }
  },
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  background-color: #273453;
}
.main .el-tabs__item {
    padding: 0 20px;
    height: 40px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: white;
    position: relative;
}
.main .el-tabs__item.is-active {
    color: red;
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
.m-title{
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