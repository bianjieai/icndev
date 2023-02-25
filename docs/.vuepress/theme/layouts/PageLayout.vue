<template>
  <div class="page_container">
    <Header :key="new Date().getTime()"></Header>
    <Updates v-if="this.$page.title==='Updates'"></Updates>
    <ChanlengeScope v-if="this.$page.title==='ChallengesScope'&& new Date().getTime() >= 1677650400000"></ChanlengeScope>
    <ScoreCard v-if="this.$page.title==='ScoreCard'&& new Date().getTime() >= 1677650400000"></ScoreCard>
  </div>
</template>

<script>
import Updates from "../../pages/Updates";
import Header from "../../components/Header";
import ChanlengeScope from "../../pages/ChallengeScope";
import ScoreCard from "../../pages/ScoreCard";
export default {
  name: "PageLayout.vue",
  components: {ScoreCard, ChanlengeScope, Header, Updates},
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