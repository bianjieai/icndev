<template>
  <div class="banner_container">
    <div class="banner_content_wrap">
      <div class="banner_content_img">
        <img class="banner_img" src="../public/banner.png">
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
      margin-top: 1.28rem;
      .banner_img{
        width: 3.66rem;
        height: 4rem;
      }
    }
  }
}
</style>