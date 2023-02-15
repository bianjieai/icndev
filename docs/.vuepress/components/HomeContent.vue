<template>
  <div class="content_container">
    <div class="content_wrap">
      <p class="content_1">Game of NFTs (GoN) is an event with public incentivized testnets and a hackathon where you can test the Interchain NFTs and build your NFT applications.</p>
      <p class="content_title">Phase 1 Incentivized Testnets</p>
      <p class="content_registration">【Open for Registration】</p>
      <p class="content_2">The registration for Phase 1 of Game of NFTs - Incentivized Testnets - is now open! 20,000 ATOMs will go to Phase 1 winners. Check out more details on the <a style="color: #9E63FF" href="https://github.com/game-of-nfts/gon-testnets" target="_blank" rel="noreferrer noopener">GitHub</a> page and register now!

      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent"
}
</script>

<style scoped lang="less">
.content_container{
  width: 100%;
  background: rgba(0, 0, 0, 1);
  .content_wrap{
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 0.6rem;
    @media(max-width: 1200px) {
      box-sizing: border-box;
      padding: 0 0.36rem 0.6rem 0.36rem;
    }
    @media(max-width: 576px){
      padding: 0 0.16rem 0.4rem 0.16rem;
    }
    .content_1{
      max-width: 8rem;
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      line-height: 0.24rem;
      margin-bottom: 0.16rem;
      @media(max-width: 800px){
        margin-left: 0.32rem;
        margin-right: 0.32rem;
      }
      @media(max-width: 576px){
        margin-left: 0;
        margin-right: 0;
      }
    }
    .content_title{
      max-width: 8rem;
      font-size: 0.2rem;
      font-weight: normal;
      color: #FCFCFC;
      line-height: 0.24rem;
      @media(max-width: 800px){
        margin-left: 0.32rem;
        margin-right: 0.32rem;
      }
      @media(max-width: 576px){
        font-size: 0.16rem;
      }
    }
    .content_registration{
      margin-top: 0.12rem;
      font-size: 0.32rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.36rem;
      text-shadow: 0 0 0.1rem #9B6FFF;
      margin-bottom: 0.16rem;
      @media(max-width: 576px){
        font-size: 0.24rem;
      }
    }
    .content_2{
      max-width: 8rem;
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      line-height: 0.24rem;
      margin-top: 0.16rem;
      @media(max-width: 800px){
        margin-left: 0.32rem;
        margin-right: 0.32rem;
      }
      @media(max-width: 576px){
        margin-left: 0;
        margin-right: 0;
      }
    }
  }
}

</style>