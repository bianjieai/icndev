<template>
  <div class="container">
    <Header></Header>
    <main class="main_container">
      <Banner></Banner>
      <Content></Content>
      <news-letter-input></news-letter-input>
      <Channels></Channels>
    </main>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import NewsLetterInput from "../../components/NewsLetterInput.vue";
import Banner from "../../components/Banner.vue";
import Content from "../../components/Content.vue";
import Channels from "../../components/Channels.vue";
export default {
  name: "Layout",
  components:{
    Channels,
    Content,
    Banner,
    NewsLetterInput,
    Header
  }
}
</script>

<style lang="less">
@import "../styles/index";
@font-face {
  font-family:Regular;
  src: url("../../public/Inter-Regular-9.otf");
}
@font-face {
  font-family:Silom;
  src: url("../../public/Silom.ttf");
}
html {
  width: 100%;
  height: 100%;
  font-size: 625% !important;
  font-family: Regular, "PingFang SC Regular","PingFang SC Bold", "serif";
}

body {
  width: 100%;
  height: 100%;
  font-size: 16px !important;
  overflow-y: auto;
  background: rgba(0,0,0,1);
}
.el-message{
  background: rgba(0,0,0,0.8);
  border-color: rgba(255,255,255,0.35);
}
.container{
  .main_container{
    width: 100%;
    height: 100%;
    background: var(--bgColor);
    .main_content{
      flex: 1;
      width: 100%;
      max-width: 12rem;
      margin: 0 auto;
    }
  }
}
</style>