<template>
  <div class="register_container">
    <div class="bg_left_style"></div>
    <div class="register_content">
      <div class="register_title">Phase 1 Incentivized Testing</div>
      <div class="open_for_registration">Open for Evidence Submission</div>
      <div class="register_content_wrap">
        <div class="register_content_left">
          <p>Game of NFTs (GoN) is a two-phase event with public incentivized testing and a hackathon where you can test the Interchain NFTs and build innovative NFT applications.</p>
          <p>The testing phase has kicked off and will continue for the next few weeks. You can find the rules, requirements, and detailed tasks on the <a style="color: #9E63FF"
                                                                                                                                                          href="https://github.com/bianjieai/gon-testnets"
                                                                                                                                                          target="_blank"
                                                                                                                                                          rel="noreferrer noopener">GoN GitHub page</a>. Enjoy your testing and compete for rewards!</p>
        </div>
        <div class="register_content_right">
          <div class="register_content_img_content">
            <img src="../public/register_bg.png" alt="">
            <div class="register_button_content">
              <div class="register_button_label">View Tasks</div>
              <div class="register_sign_up_label">Check out the complete testing rules</div>
              <a href="https://interchainnfts.dev/gon/challengescope.html" rel="noreferrer noopener" class="register_button" target="_blank">Challenge Scope</a>
            </div>
          </div>
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
.register_container {
  width: 100%;
  position: relative;
  z-index: 6;

  .bg_left_style {
    position: absolute;
    top: -2.5rem;
    left: 0;
    z-index: 1;
    width: 11.74rem;
    height: 11.41rem;
    background: url("../public/bg_1.png") no-repeat left bottom;
    @media (max-width: 1200px) {
      background-size: cover;
      width: 4.54rem;
      height: 4rem;
      top: 1rem;
      left: 0;
    }
    @media (max-width: 576px) {
      background-size: cover;
      width: 3.2rem;
      height: 3rem;
      top: 1rem;
      left: 0;
    }
  }

  .register_content {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    z-index: 4;
    position: relative;

    .register_title {
      font-size: 0.38rem;
      font-weight: normal;
      color: #FCFCFC;
      line-height: 0.48rem;
      letter-spacing: -0.02rem;
      @media (max-width: 1200px) {
        text-align: center;
      }
      @media (max-width: 800px) {
        font-size: 0.24rem;
        line-height: 0.32rem;
      }
    }

    .open_for_registration {
      margin-top: 0.16rem;
      font-size: 0.67rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 78px;
      background: linear-gradient(196deg, #FFD6B2 0%, #FFFFFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.05rem;
      @media (max-width: 1200px) {
        text-align: center;
      }
      @media (max-width: 800px) {
        font-size: 0.48rem;
        line-height: 59px;
      }
    }

    .register_content_wrap {
      display: flex;
      position: relative;
      z-index: 16;
      @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;
      }

      .register_content_left {
        width: 100%;
        max-width: 5.9rem;
        margin-top: 0.56rem;
        margin-right: 1.13rem;
        @media (max-width: 1200px) {
          margin-right: 0;
          max-width: 8rem;
        }
        @media (max-width: 800px) {
          box-sizing: border-box;
          padding: 0 0.16rem;
          margin-top: 0.32rem;
        }

        p {
          font-size: 0.21rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.82);
          line-height: 0.34rem;
          letter-spacing: -0.007rem;
        }

        p:first-child {
          margin-bottom: 0.23rem;
        }
      }

      .register_content_right {
        @media(max-width: 1200px){
          margin-top: 0.2rem;
        }
        .register_content_img_content {
          width: 4.75rem;
          height: 3.97rem;
          position: relative;
          @media(max-width: 768px){
            width: 4rem;
          }
          @media(max-width: 576px){
            width: 3.6rem;
            height: 3.97rem;
          }
          img {
            width: 100%;
          }

          .register_button_content {
            position: absolute;
            left: 0.48rem;
            bottom: 0.48rem;
            @media(max-width: 768px){
              bottom: 1rem;
            }
            .register_button_label {
              font-size: 0.28rem;
              font-weight: bold;
              color: #FFFFFF;
              line-height: 0.28rem;
              margin-bottom: 0.12rem;
              @media(max-width: 768px){
                font-size: 0.2rem;
                line-height: 0.24rem;
              }
            }

            .register_sign_up_label {
              font-size: 0.21rem;
              font-weight: 400;
              color: rgba(255, 255, 255, 0.82);
              line-height: 0.34rem;
              letter-spacing: -0.007rem;
              margin-bottom: 0.28rem;
              @media(max-width: 768px){
                font-size: 0.16rem;
                line-height: 0.18rem;
              }
            }

            .register_button {
              width: 1.8rem;
              height: 0.4rem;
              background: url("../public/button_normal.png") no-repeat center center / cover;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              @media (max-width: 576px) {
                margin: 0.16rem auto 0.48rem auto;
              }

              &:hover {
                background: url("../public/button_hover.png") no-repeat center center / cover;
              }
            }
          }
        }
      }
    }
  }
}

/*.join_container{
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
}*/
</style>

