<template>
  <div class="update_container">
    <Banner></Banner>
    <div class="update_time_wrap">
      <div class="update_time_content">
        <img class="update_time_icon" src="../public/scoreCard/update.png" alt="">
        <span class="update_time_label">Last updated</span>
        <span class="update_time_value">{{ updateTime }}</span>
      </div>
    </div>
    <score-card-table @updateTime="getUpdateTime"> </score-card-table>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import ScoreCardTable from "../components/ScoreCardTable";
import dayjs from 'dayjs'
export default {
  name: "ScoreCard",
  components: {ScoreCardTable, Banner},
  data() {
    return {
      updateTime:''
    }
  },
  methods:{
    getUpdateTime(time){
      if(time){
        this.updateTime = dayjs().format('DD/MM/YYYY');
      }
    }
  }
}
</script>

<style scoped lang="less">
.update_container {
  .update_time_wrap {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    max-width: 12rem;
    margin:0 auto;
    @media(max-width: 1200px){
      box-sizing: border-box;
      padding: 0 0.36rem;
    }
    @media(max-width: 576px){
      box-sizing: border-box;
      padding: 0 0.16rem;
    }
    .update_time_content {
      display: flex;
      align-items: center;
      max-width: 12rem;
      .update_time_icon {
        width: 0.2rem;
        height: 0.2rem;

      }

      .update_time_label {
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.82);
        line-height: 0.34rem;
        letter-spacing: -0.0053rem;
        margin-left: 0.08rem;
      }

      .update_time_value {
        font-size: 0.16rem;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 0.34rem;
        margin-left: 0.08rem;
      }
    }
  }
}
</style>