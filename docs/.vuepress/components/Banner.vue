<template>
  <div class="banner_container">
    <div class="banner_content_wrap">
      <div class="banner_content_img">
        <img class="banner_img" src="../public/banner.png" alt="Game of NFTs">
      </div>
      <p class="banner_desc" v-show="showDesc">Game of NFTs (GoN) is a two-phase event with public incentivized testing and a hackathon where you can test the Interchain NFTs and build innovative NFT applications.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props:{
    showDesc: true
  }
}
</script>

<style scoped lang="less">
.banner_container{
  width: 100%;
  background: url("../public/icnft_bg.jpg") no-repeat center center;
  background-size: cover ;
  min-height: 5.68rem;
  .banner_content_wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .banner_content_img{
      width: 2.8rem;
      height: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1.28rem;
      .banner_img{
        width: 3.66rem;
        height: 4rem;
      }

    }
    .banner_desc{
      width: 100%;
      max-width: 8.8rem;
      font-size: 0.21rem;
      font-weight: 400;
      color:  rgba(255,255,255,0.82);
      line-height: 0.34rem;
      letter-spacing: -0.007rem;
      word-break: break-word;
      text-align: center;
      margin-top: 0.4rem;
      @media(max-width: 800px){
        box-sizing: border-box;
        padding: 0 0.16rem;
      }
    }
  }
}
</style>