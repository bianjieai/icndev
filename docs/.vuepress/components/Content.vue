<template>
  <div class="content_container">
    <div class="content_wrap">
      <p class="content_1">Game of NFTs (GoN) is an event with public incentivized testnets and a hackathon where you can test the Interchain NFTs and build your NFT applications.</p>
      <p class="content_title">Expected Time：Q1 2023</p>
      <p class="content_2">This is a joint effort supported by many teams, including the Interchain Foundation, IRISnet, Stargaze and Gravity Bridge. And your participation is important to help the creation of the Game of NFTs. Share your ideas on GitHub or Discord!</p>
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
    }
    .content_title{
      max-width: 8rem;
      font-size: 0.24rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.29rem;
      margin-bottom: 0.16rem;
    }
    .content_2{
      max-width: 8rem;
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      line-height: 0.24rem;
    }
  }
}

</style>