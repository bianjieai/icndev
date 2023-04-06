<template>
  <div class="page_container">
    <Header :key="new Date().getTime()"></Header>
    <Updates v-if="this.$page.title==='Updates'"></Updates>
    <ChallengeScope  v-if="isShowChallengeScope"></ChallengeScope>
    <ScoreCard v-if="isShowScoreCard"></ScoreCard>
    <Winners v-if="isShowWinners"></Winners>
  </div>
</template>

<script>
import Updates from "../../pages/Updates";
import Header from "../../components/Header";
import ChallengeScope from "../../pages/ChallengeScope";
import ScoreCard from "../../pages/ScoreCard";
import config from "../../config/config.json"
import Winners from "../../pages/Winners";
export default {
  name: "PageLayout.vue",
  components: {Winners, ScoreCard, ChallengeScope, Header, Updates},
  data() {
    return {
       config
    }
  },
  computed: {
    isShowChallengeScope() {
      return this.$page.title==='ChallengesScope'&& new Date().getTime() >= config.releaseTime
    },
    isShowScoreCard() {
      return this.$page.title==='ScoreCard' && new Date().getTime() >= config.releaseTime
    },
    isShowWinners() {
      return this.$page.title==='Winners' && new Date().getTime() >= config.releaseTime
    }
  }
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