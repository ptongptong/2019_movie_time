<template>
<div class="main">
  <el-tabs type="border-card" stretch="true" v-model="keyword">
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
      <img @click="like" class="love" v-if="movie.isClick==0" :src="love">
      <img @click="like" class="love" v-if="movie.isClick==1" :src="loveActive">
      <div class="abstract">{{movie.introduction}}</div>
    </div>
  </div>
</div>
</template>

<script>
import love from "../assets/thumb1.png"
import loveActive from "../assets/thumb2.png"
import $ from "jquery"

export default {
  name: "vote",
  data(){
    return{
      keyword:'',
      tot:0,
      movies: [],
      love:love,
      loveActive:loveActive,
    }
  },
  watch:{
    keyword(){
      console.log("keyword",this.keyword)
      $.ajax({
        url:baseUrl+"/movieList",
        type:"post",
        data:{
          keyword:this.keyword
        },
        dataType:"JSON",
        xhrFields:{withCredentials:true},
        success:res=>{
          this.movies = res.map( movie => ({
            ...movie,
            poster_url: PREFIX + movie.poster_url,
            "movie_id":movie.movie_id,
            "title":movie.title,
            "score":movie.score,
            "introduction":movie.introduction,
            "isSelected":movie.isClick
          }))
        },
        statusCode:{
          400(){
            console.log("电影类型错误")
          },
          401(){
            // location.href=bbt+encodeURIComponent(location.href);
          },
          410(){
            alert("活动不在进行期间")
          }
        }
    })
    }
  },
  methods:{
    like(){
        $.ajax({
        url:baseUrl+"/like",
        type:"post",
        data:{
          "movie_id":this.movie_id,
          "isSlected":this.isClick
        },
        dataType:"JSON",
        xhrFields:{withCredentials:true},
        success:res=>{
          this.tot=res.selectNum
        },
        statusCode:{
          401(){
            // location.href=bbt+encodeURIComponent(location.href);
          },
          403(){
            alert("投票不能再多了")
          },
          410(){
            alert("活动不在进行期间")
          }
        }
      })
      this.isClick=!this.isClick
   }
 },
 mounted(){
   this.keyword="动画"
 }
 }
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
    font-size: 3.5vw;
    font-weight: 500;
    color: white;
    position: relative;
    width:20%;
}
.main .el-tabs__item.is-active {
    color: white;
    font-size:4.5vw;
}
.main .el-tabs__content {
  display:none;
}
.item{
  position:relative;
  margin-top:6%;
  background: rgb(46,58,88);
  padding-bottom:2vw;
}
.pic{
  position:absolute;
  left:2%; top:-2vh;
  width:33%;
  border:1px solid #A59F59;
}
.m-title{
  position:relative;
  left:40%;margin-top:5vw;
  font-size: 6vw;
  font-family: Microsoft YaHei Regular;
  color: rgba(255,255,255,1);
}
.score{
  position: relative;
  left:40%; margin-top:2vw;
  font-size: 4vh;
  font-family: Microsoft YaHei Regular;
  color: rgba(255,184,64,1);
}
.abstract{
  position:relative;
  width:58%;
  left:40%;margin-top:2vw;
  font-size:3vw;
  font-family: Microsoft YaHei Regular;
  color: rgba(255,255,255,1);
  margin-right:2%;
}
.love{
  width:20%;
  height:20%;
  position:absolute;
  right:0;
  top:0;
}
</style>