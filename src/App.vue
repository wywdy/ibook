<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>


<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
*{
  padding: 0;
  margin: 0;
}
.el-header{
  padding: 0 !important;
  height: 210px !important;
}
.el-main{
  padding: 0 !important;
}


</style>
<script>
  import TopBar from "./components/TopBar";
  import MyHeader from "./components/MyHeader";
  import MyFooter from "./components/MyFooter";
  export default {
    components: {MyFooter, MyHeader, TopBar}
  }
</script>