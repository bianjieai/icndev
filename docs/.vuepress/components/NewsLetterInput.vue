<template>
  <div class="news_letter_container">
    <div class="news_letter_bg_style"></div>
    <div class="news_letter_content_wrap">
      <div class="news_letter_title">Subscribe Now</div>
      <div class="news_letter_input_content">
        <div class="news_letter_input_content_wrap">
          <p class="news_letter_description">Leave your email to be informed about Game of NFTs updates.</p>
          <div class="input_content">
            <el-input v-model="email" placeholder="Please enter your email">
              <i slot="prefix" class="icon_email">
                <img src="../public/email.png" alt="">
              </i>
            </el-input>
          </div>
          <div class="submit_button_content">
            <el-button @click="submitEmail">Subscribe</el-button>
          </div>
          <Channels></Channels>
        </div>
      </div>
    </div>
    <!--    <div class="news_letter_content">
          <div class="news_letter_title">Subscribe Now</div>
          <p class="news_letter_description">Leave your email to be informed about Game of NFTs updates.</p>
          <div class="input_content">
            <el-input v-model="email" placeholder="Please enter your email">
              <i slot="prefix" class="icon_email">
                <img src="../public/email.png" alt="">
              </i>
            </el-input>
          </div>
          <div class="submit_button_content">
            <el-button @click="submitEmail">Subscribe</el-button>
          </div>
        </div>-->
  </div>
</template>

<script>
import axios from "axios";
import {EMAIL_REGEXP} from "../constant";
import {serverUri} from "../config/config.json"
import Channels from "./Channels";

export default {
  name: "NewsLetterInput",
  components: {Channels},

  data() {
    return {
      email: ''
    }
  },
  methods: {
    submitEmail() {
      if (!EMAIL_REGEXP.test(this.email)) {
        this.$message.warning('Please enter a valid email address')
        return
      }
      axios.post(`${serverUri}/api/subscribe/email`, {
        email: this.email
      }).then(res => {
        if (res?.data?.code === 0 && res.data?.message) {
          this.$message.success(res.data?.message)
        } else {
          this.$message.error(res.data?.message)
        }

      }).catch(error => {
        this.$message.error(error)
        console.log(error)
      })
    }
  }

}
</script>

<style scoped lang="less">
.news_letter_container {
  width: 100%;
  background: #000000;
  background: url("../public/newsletter/subscribe_bg.jpg") no-repeat center center / cover;
  position: relative;
  .news_letter_bg_style {
    background: url("../public/judges_bg2.png") no-repeat left bottom;
    width: 4.36rem;
    height: 4.36rem;
    position: absolute;
    right:0;
    bottom:5rem;
    @media(max-width: 576px){
      width: 3rem;
      height: 3rem;
      bottom:0rem;
    }
  }

  .news_letter_content_wrap {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;

    .news_letter_title {
      font-size: 0.28rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.32rem;
      padding-top: 0.8rem;
      text-align: center;
      @media (max-width: 576px) {
        padding-top: 0.48rem;
      }
    }

    .news_letter_input_content {
      display: flex;
      justify-content: flex-end;
      margin-top: 0.72rem;
      @media (max-width: 576px) {
        margin-top: 0.48rem;
        justify-content: center;
      }

      .news_letter_input_content_wrap {
        @media (max-width: 1200px) {
          box-sizing: border-box;
          padding-right: 0.36rem;
        }
        @media (max-width: 576px) {
          padding: 0 0.16rem;
        }

        .news_letter_description {
          font-size: 0.16rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.75);
          line-height: 0.24rem;
          margin-bottom: 0.32rem;
          max-width: 4rem;
          @media (max-width: 576px) {
            text-align: center;
          }
        }

        .input_content {
          margin: 0 auto;
          max-width: 4.4rem;
          @media (max-width: 500px) {
            max-width: 3.2rem;
          }

          /deep/ .el-input {
            .el-input__inner {
              background: transparent;
              border-color: rgba(255, 255, 255, 0.35);
              padding-left: 0;
              text-indent: 0.56rem;
            }

            .el-input__inner::placeholder {
              color: rgba(255, 255, 255, 0.35);
            }

            .el-input__prefix {
              display: flex;
              align-items: center;
              padding: 0 0.14rem;
              background: rgba(137, 65, 255, 0.15);
              left: 0;

              .icon_email {
                width: 0.2rem;
                display: flex;
                align-items: center;

                img {
                  width: 100%;
                }
              }
            }
          }
        }

        .submit_button_content {
          width: 100%;
          max-width: 1.8rem;
          margin-top: 0.16rem;
          @media (max-width: 576px) {
            max-width: none;
            display: flex;
            justify-content: center;
          }

          .el-button {
            width: 100%;
            background: url("../public/button_normal.png") no-repeat center center/cover;
            border-radius: 0.04rem;
            border: 0.01rem solid rgba(137, 65, 255, 0.75);
            font-size: 0.16rem;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 0.20rem;
            @media (max-width: 576px) {
              max-width: 1.8rem;
            }

            &:hover {
              background: url("../public/button_hover.png") no-repeat center center/cover;
            }
          }
        }
      }

    }
  }

  /*.news_letter_content{
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 0.8rem;
    .news_letter_title{
      font-size: 0.20rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.24rem;
      margin-bottom: 0.16rem;
    }
    .news_letter_description{
      font-size: 0.16rem;
      font-weight: 400;
      color: rgba(255,255,255,0.75);
      line-height: 0.24rem;
      margin-bottom: 0.24rem;
      @media(max-width: 800px){
        margin:  0 0.32rem 0.24rem 0.32rem;
      }
    }
    .input_content{
      margin: 0 auto;
      max-width: 4.4rem;
      @media(max-width: 500px){
        max-width: 3.2rem;
      }
      /deep/.el-input{
        .el-input__inner{
          background: transparent;
          border-color: rgba(255, 255, 255, 0.35);
          padding-left: 0;
          text-indent: 0.56rem;
        }
        .el-input__inner::placeholder{
          color: rgba(255, 255, 255, 0.35);
        }
        .el-input__prefix{
          display: flex;
          align-items: center;
          padding:  0 0.14rem;
          background: rgba(137, 65, 255, 0.15);
          left: 0;
          .icon_email{
            width: 0.2rem;
            display: flex;
            align-items: center;
            img{
              width: 100%;
            }
          }
        }
      }
    }
    .submit_button_content{
      width: 100%;
      max-width: 1.8rem;
      margin: 0 auto;
      margin-top: 0.24rem;
      .el-button{
        width: 100%;
        background: url("../public/button_normal.png") no-repeat center center/cover;
        border-radius: 0.04rem;
        border: 0.01rem solid rgba(137,65,255,0.75);
        font-size: 0.16rem;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 0.20rem;
        &:hover{
          background: url("../public/button_hover.png") no-repeat center center/cover;
        }
      }
    }
  }*/
}
</style>