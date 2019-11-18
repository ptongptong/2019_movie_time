<template>
  <div class="item">
  <img class="pic" :src="a"></img>
  <div class="intro">
    <span class="title">哪吒</span>
    <div class="abstract">
    <p>本应是灵珠英雄的哪吒却成了混世大魔王，这调皮捣蛋顽劣不堪的哪吒却徒有一颗做英雄的心。然而面对众人对哪吒的误解和即将来临的天雷的降临，哪吒是否命中注定会立地成魔，他将何去何从</p>
    </div>
  </div>
</div>
</template>

<script>
import a from "../assets/1.jpg"
export default {
  name: 'movie',
  props: {
    
    // msg: String
  },
  data(){
    return{
      a:a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; 
}
.pic{
  width:40%;
  height:30vh;
}
.title{
  font-weight:700;
}
.abstract{
  font-size:30rpx;
}
</style>
