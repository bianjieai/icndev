<template>
  <div class="winner_trophy_content">
    <h5 class="winner_trophy_title">{{trophyTitle}}</h5>
    <div class="trophy_content">
      <img class="cup_img" src="../public/cup.png" alt="">
      <div class="team_name">{{teamName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WinnerTrophy",
  props: {
    trophyTitle:{
      type: String,
      default: ''
    },
    teamName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
  .winner_trophy_content{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //background: radial-gradient(ellipse, rgba(104, 59, 19, 0.65) 0%, rgba(104, 59, 19, 0.85) 0%, rgba(0, 0, 0, 0.85) 65%);
    background: url("../public/winner_trophy_bg.png") no-repeat center center;
    background-size: cover;
    margin-bottom: 0.6rem;
    @media(max-width: 768px){
      margin-bottom: 0.48rem;
    }
    @media(max-width: 500px){
      //background: url("../public/winner_trophy_bg.png") no-repeat center center;
      background-size: 120%;
    }
    .winner_trophy_title{
      font-size: 0.16rem;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 0.24rem;
      height: 0.48rem;
    }
    .trophy_content{
      display: flex;
      align-items: center;
      padding-bottom: 0.6rem;
      @media(max-width: 768px){
        padding-bottom: 0.52rem;
      }
      .cup_img{
        height: 0.42rem;
        width: auto;
        margin-right: 0.16rem;
      }
      .team_name {
        font-weight: 600;
        font-size: 28px;
      }
    }
  }
</style>