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
  height: 4000px;
  background: url("../public/challengescope/banner.png") no-repeat top 0% right 0%,
  url('../public/challengescope/jianbian1.png')no-repeat top 7.1rem left 0%,
  url('../public/challengescope/jianbian2.png')no-repeat top 12.35rem right 0%,
  url('../public/challengescope/jianbian3.png')no-repeat top 32.5rem left 0%,;
  background-size: 9.76rem 8.88rem;
  .challenges_scope_content {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto auto auto;
    .content__default {
      ::v-deep h3{
        color: #fff;
      }
      ::v-deep h1{
        color: #fff;
      }
      ::v-deep h5{
        color: #fff;
      }
      ::v-deep p{
        font-size: 0.21rem;
        font-weight: 400;
        color: rgba(255,255,255,0.82);
        line-height: 0.34rem;
        letter-spacing: -0.007rem;
      }
    }
  }
}
</style>