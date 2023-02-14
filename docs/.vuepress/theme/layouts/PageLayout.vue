<template>
  <div class="page_container">
    <Header></Header>
    <Updates></Updates>
  </div>
</template>

<script>
import Updates from "../../pages/Updates";
import Header from "../../components/Header";
export default {
  name: "PageLayout.vue",
  components: {Header, Updates},
}
</script>

<style lang="less">
@import "../styles/index";
@font-face {
  font-family:Silom;
  src: url("../../public/font/Silom.ttf");
}
@font-face {
  font-family:Inter;
  src: url("../../public/font/Inter_var.ttf");
}
html {
  width: 100%;
  height: 100%;
  font-size: 625% !important;
  font-family: Inter, "PingFang SC Regular","PingFang SC Bold", "serif";
}

body {
  width: 100%;
  height: 100%;
  font-size: 16px !important;
  overflow-y: auto;
  background: rgba(0,0,0,1);
}
.page_container{
  width: 100%;
}
</style>