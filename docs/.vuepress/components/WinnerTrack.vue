<template>
  <div class="winner_track_container">
    <h5 class="winner_track_title">{{trophyTitle}}</h5>
    <div class="winner_track_content" v-for="(item,index) in list">
      <div class="winner_track_wrap">
        <div class="trophy_content">
          <img class="cup_img" :src="item.img" alt="">
          <div class="team_name">
            <div class="ranking">{{item.label}}</>
            <a class="href_name" :href="item.href" target="_blank" rel="noreferrer noopener">{{item.value}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "WinnerTrack",
  props: {
    trophyTitle:{
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: []
    }
  }
}
</script>

<style scoped>
.winner_track_container{
  .winner_track_title{
    text-align: center;
    font-size: 0.16rem;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 0.24rem;
    margin: 1rem 0 0.32rem 0;
  }
  .winner_track_title:first-child{
    margin-top: 0.48rem;
  }
  .winner_track_content{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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
    .winner_track_wrap{
      display: flex;
      .trophy_content{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 0.6rem 0;
        @media(max-width: 768px){
          padding-bottom: 0.52rem;
        }
        .cup_img{
          height: 0.48rem;
          width: auto;
          margin-right: 0.16rem;
        }
        .team_name {
          font-size: 28px;
          .ranking{
            font-size: 0.16rem;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 0.24rem;
          }
          .href_name{
            font-size: 0.28rem;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 0.36rem;
            margin-left: 0.52rem;
            &:hover{
              color: #9E63FF;
            }
          }
        }
      }
    }
  }
}
</style>