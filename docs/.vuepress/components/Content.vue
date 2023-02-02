<template>
  <div class="content_container">
    <div class="content_wrap">
      <p class="content_1">Game of NFTs (GoN) is an event with public incentivized testnets and a hackathon where you can test the Interchain NFTs and build your NFT applications.</p>
      <p class="content_title">Phase 1 Incentivized Testnets: Coming Soon</p>
      <p class="content_2">This is a joint effort brought by the Interchain Foundation, Cosmos Hub, IRISnet, Stargaze, Juno and multiple teams and communities. Now Phase 1 Incentivized Testnets is under intensive preparation, see real-time updates and progress on the <a style="color: #9E63FF" href="https://github.com/bianjieai/gon-testnets" target="_blank" rel="noreferrer noopener">GitHub</a> page.

      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content"
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
    }
    .content_title{
      max-width: 8rem;
      font-size: 0.24rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.29rem;
      margin-bottom: 0.16rem;
      @media(max-width: 800px){
        margin-left: 0.32rem;
        margin-right: 0.32rem;
      }
    }
    .content_2{
      max-width: 8rem;
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      line-height: 0.24rem;
      @media(max-width: 800px){
        margin-left: 0.32rem;
        margin-right: 0.32rem;
      }
    }
  }
}

</style>