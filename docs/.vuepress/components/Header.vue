<template>
  <div class="header_container">
    <div class="header_content">
      <span class="header_logo_label">Game of NFTs</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="less">
.header_container{
  width: 100%;
  position: fixed;
  top:0;
  left: 0;
  background: linear-gradient(180deg, #000000 0%, rgba(0,0,0,0) 100%);
  backdrop-filter: blur(2px);
  z-index: 10;
  .header_content{
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    height: 0.28rem;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.28rem;
    padding: 0.26rem 0;
    display: flex;
    align-items: center;
    @media(max-width: 800px){
      margin-left: 0.32rem;
    }
    .header_image{
      width: 0.4rem;
    }
    .header_logo_label{
      margin-left: 0.12rem;
      font-family: Silom;
    }
  }
}
</style>