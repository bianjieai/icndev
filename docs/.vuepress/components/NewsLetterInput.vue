<template>
  <div class="news_letter_container">
    <div class="news_letter_content">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {EMAIL_REGEXP} from "../constant";
import {serverUri} from "../config/config.json"
export default {
  name: "NewsLetterInput",
  data() {
    return {
      email:''
    }
  },
  methods:{
    submitEmail() {
      if (!EMAIL_REGEXP.test(this.email)){
        this.$message.warning('Please enter a valid email address')
        return
      }
      axios.post(`${serverUri}/api/subscribe/email`,{
        email: this.email
      }).then(res => {
        if(res?.data?.code === 0 && res.data?.message){
            this.$message.success(res.data?.message)
        }else {
          this.$message.error(res.data?.message)
        }

      }).catch(error =>{
        this.$message.error(error)
        console.log(error)
      })
    }
  }

}
</script>

<style scoped lang="less">
.news_letter_container{
  width: 100%;
  background: #000000;
  .news_letter_content{
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 0.6rem;
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
        background: linear-gradient(360deg, #551176 0%, #401783 48%, #000000 100%);
        box-shadow: inset 0 0 0.16rem 0 rgba(243,166,255,0.3);
        border-radius: 0.04rem;
        border: 0.01rem solid rgba(137,65,255,0.75);
        font-size: 0.16rem;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 0.20rem
      }
    }
  }
}
</style>