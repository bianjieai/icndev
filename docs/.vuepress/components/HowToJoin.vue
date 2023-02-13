<template>
  <div class="join_container">
    <div class="join_content_wrap">
      <div class="join_image_content">
        <div class="join_title_content">
          <span class="join_title">Register Now</span>
          <span class="join_title_label">Fill out the form to sign up!</span>
          <a href="" class="register_button" target="_blank" rel="noreferrer noopener">
            <span>Register</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HowToJoin"
}
</script>

<style scoped lang="less">
  .join_container{
    width: 100%;
    padding-bottom: 0.4rem;
    @media(max-width: 576px){
      padding-bottom: 0.48rem;
    }
    .join_content_wrap{
      max-width: 12rem;
      width: 100%;
      margin: 0 auto;
      @media(max-width: 1200px){
        box-sizing: border-box;
        padding: 0 0.36rem;
      }

      .join_image_content{
        width: 100%;
        max-width: 8rem;
        height: 3.43rem;
        margin: 0 auto;
        position: relative;
        background: url("../public/Join_bg.png") no-repeat center center / cover;
        @media(max-width: 576px){
          height: 5.15rem;
          background: url("../public/Join_bg.png") no-repeat left 5% center / cover;
          display: flex;
          justify-content: center;
        }
        .join_title_content{
          position: absolute;
          right: 1.2rem;
          top: 1.04rem;
          display: flex;
          flex-direction: column;
          @media(max-width: 576px){
            position: absolute;
            left: 1.2rem;
            bottom: 0;
            top: auto;
            justify-content: center;

          }
          .join_title{
            font-size: 0.24rem;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 0.28rem;
            margin-bottom: 0.16rem;
            @media(max-width: 576px){
              text-align: center;
            }
          }
          .join_title_label{
            font-size: 0.2rem;
            font-weight: 400;
            color: rgba(255,255,255,0.74);
            line-height: 0.24rem;
            @media(max-width: 576px){
              text-align: center;
            }
          }
          .register_button{
            margin-top: 0.32rem;
            width: 1.8rem;
            height: 0.4rem;
            background: url("../public/button_normal.png") no-repeat center center / cover;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            @media(max-width: 576px){
              margin: 0.16rem auto 0.48rem auto;
            }
            &:hover{
              background: url("../public/button_hover.png") no-repeat center center / cover;
            }
          }
        }
        img{
          width: 100%;
        }
      }
    }
  }
</style>

