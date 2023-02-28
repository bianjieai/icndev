<template>
  <div class="challenges_scope_contain">
    <div class="challenges_scope_content">
      <Content/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChallengeScope"
}
</script>

<style scoped lang="less">
.challenges_scope_contain {
  width: 100%;
  background: url("../public/challengescope/banner.png") no-repeat top 0% right 0%,
  url('../public/challengescope/jianbian1.png')no-repeat top 7.1rem left 0%,
  url('../public/challengescope/jianbian2.png')no-repeat top 12.35rem right 0%,
  url('../public/challengescope/jianbian3.png')no-repeat top 32.5rem left 0%,;
  @media(max-width: 968px){
    background: url("../public/challengescope/banner.png") no-repeat top 0% left 0%,
    url('../public/challengescope/jianbian1.png')no-repeat top 7.1rem left 0%,
    url('../public/challengescope/jianbian2.png')no-repeat top 12.35rem right 0%,
    url('../public/challengescope/jianbian3.png')no-repeat top 32.5rem left 0%,;
  }
  background-size: 9.76rem 8.88rem;
  .challenges_scope_content {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto auto auto;
    .content__default {
      padding: 1.4rem 0;
      color: rgba(255,255,255,0.5);
      @media(max-width: 1200px){
        padding: 1.4rem 0.2rem;
      }
      ::v-deep h3{
        color: #fff;
        font-size: 0.28rem;
        font-weight: bold;
        line-height: 0.36rem;
        letter-spacing: -0.016rem;
      }
      ::v-deep h1{
        color: #fff;
        font-size: 0.9rem;
        letter-spacing: -0.0672rem;
        line-height: 1.1rem;
        margin: 0;
        @media(max-width: 768px){
          font-size: 0.56rem;
          line-height: 0.72rem;
          letter-spacing: -0.0418rem;
        }
      }
      ::v-deep h2{
        color: #fff;
        font-size: 0.38rem;
        font-weight: bold;
        line-height: 0.48rem;
        letter-spacing: -0.027rem;
      }
      ::v-deep h5{
        color: #fff;
        font-size: 0.21rem;
        font-weight: normal;
        line-height: 0.34rem;
        letter-spacing: -0.007rem;
      }
      ::v-deep h6{
        color: #fff;
      }
      ::v-deep h4{
        color: #fff;
      }
      ::v-deep p{
        font-size: 0.21rem;
        font-weight: 400;
        color: rgba(255,255,255,0.5);
        line-height: 0.34rem;
        letter-spacing: -0.007rem;
        b{
          font-size: 0.21rem;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 0.34rem;
        }
      }
      ::v-deep pre{
        font-size: 0.21rem;
        font-weight: 400;
        color: rgba(255,255,255,0.5);
        line-height: 0.34rem;
        letter-spacing: -0.007rem;
        font-family: Inter;
        code{
          font-family: Inter;
        }
      }
      ::v-deep li{
        color: rgba(255,255,255,0.5);
      }

    }
  }
}
</style>