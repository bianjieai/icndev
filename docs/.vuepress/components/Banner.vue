<template>
  <div class="banner_container">
    <div class="banner_content_wrap">
      <div class="banner_content_img">
        <span class="banner_label">
          Game of NFTs
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner"
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
    .banner_content_img{
      width: 2.8rem;
      height: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("../public/logo_bg.png") no-repeat center center;
      background-size: cover;
      margin-top: 1.28rem;
      .banner_label{
        font-size: 0.4rem;
        color: #FFFFFF;
        line-height: 0.61rem;
        text-shadow: 0 0 0.25rem #000000;
        font-family: Silom;
        white-space: nowrap;
      }
    }
  }
}
</style>