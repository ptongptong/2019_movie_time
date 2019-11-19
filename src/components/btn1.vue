<template>
    <div @click="gotoVote" class="btn btn1">电影投票</div>
</template>

<script>
import circle1 from "../assets/circle1.png"
export default {
  name: 'btn1',
  data(){
    return{
      circle1:circle1
    }
  },
  methods:{
      gotoVote(){
      var _this=this;
      _this.$router.push("vote");
    },
  }
}
</script>

<style scoped>
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
  font-size:4vw;
  color:black;
}
</style>