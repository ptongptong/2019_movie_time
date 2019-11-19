<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted(){
    this.$router.push("vote");
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
}

html,body,#app {
  height:100%;
}
</style>
