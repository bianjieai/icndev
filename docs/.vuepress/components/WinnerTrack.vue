<template>
  <div class="winner_track_container">
    <h5 class="winner_track_title">{{trophyTitle}}</h5>
    <div class="winner_track_content" v-for="(item,index) in list" :key="index">
      <div class="winner_track_wrap">
        <div class="trophy_content">
          <img class="cup_img" :src="item.img" alt="">
          <div class="team_name">
            <div class="ranking" :style="{width: item.label ? `0.9rem` : '0'}">{{item.label}}</div>
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

<style scoped lang="less">
.winner_track_container{
  .winner_track_title{
    text-align: center;
    font-size: 0.16rem;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 0.24rem;
    margin: 1rem 0 0.32rem 0;
    @media(max-width: 768px){
      padding: 0 0.2rem;
    }
  }

  .winner_track_content{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: url("../public/winner_trophy_bg.png") no-repeat center center;
    background-size: cover;
    @media(max-width: 768px){
      margin-bottom: 0.08rem;
    }
    @media(max-width: 500px){
      background-size: 120%;
    }
    .winner_track_wrap{
      display: flex;
      @media(max-width: 400px){
        width: 100%;
      }
      .trophy_content{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: 0.6rem 0;
        @media(max-width: 768px){
          padding: 0.46rem 0.2rem;
        }
        .cup_img{
          height: 0.48rem;
          width: auto;
          margin-right: 0.16rem;
        }
        .team_name {
          font-size: 28px;
          display: flex;
          align-items: center;
          .ranking{
            width: 0.9rem;
            font-size: 0.16rem;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 0.24rem;
            white-space: nowrap;
          }
          .href_name{
            font-size: 0.28rem;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 0.36rem;
            margin-left: 0.52rem;
            @media(max-width: 768px){
              max-width: 1.7rem;
              font-size: 0.21rem;
              line-height: 0.28rem;
              margin-left: 0.24rem;
            }
            &:hover{
              color: #9E63FF;
            }
          }
        }
      }
    }
  }
  .winner_track_content:last-child{
    margin-bottom: 0.6rem;
  }
}
.winner_track_container:first-child{
  .winner_track_title{
    margin-top: 0.48rem;
  }
}
</style>