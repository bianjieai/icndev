<template>
  <div class="judges_container">
    <div class="judges_content_wrap">
      <div class="judges_bg_style"></div>
      <div class="judges_content_title">Judges & Mentors</div>
      <ul class="judges_list_content">
        <li class="judges_item" v-for="(item , index) in judges" :key="index">
          <div class="judges_item_content" :style="{background: `url(${item.img}) no-repeat center center/cover`}">
            <div class="judges_bg"></div>
            <div class="judges_description">
              <div class="judges_name">{{item.name}}</div>
              <div class="judges_post">{{item.post}}</div>
            </div>

            <div class="judges_bg_mask"></div>
          </div>
        </li>
        <li class="judges_item">
          <div class="judges_item_content">
            <div class="judges_bg"></div>
            <div class="judges_description">
              <div class="judges_name">...</div>
              <div class="judges_post"></div>
            </div>

            <div class="judges_bg_mask"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Judges",
  data() {
    return {
      judges:[
        {
          img:require('../public/judges/SusannahEvans.jpg'),
          name:'Susannah Evans',
          post:'IBC Product Lead, Interchain'
        },
        {
          img:require('../public/judges/HaifengXi.jpg'),
          name:'Haifeng Xi',
          post:'CTO, Bianjie'
        },
        {
          img:require('../public/judges/ShaneVitarana.jpg'),
          name:'Shane Vitarana',
          post:'Co-founder, Stargaze'
        },
        {
          img:require('../public/judges/JakeHartnell.png'),
          name:'Jake Hartnell',
          post:'Co-founder, ' +
            'Juno/DAO DAO'
        },
        {
          img:require('../public/judges/BrianXin.jpg'),
          name:'Brian Xin',
          post:'Founder, Uptick Network'
        },
        {
          img:require('../public/judges/DayakarReddy.png'),
          name:'Dayakar Reddy',
          post:'Founder, OmniFlix Network'
        },
        {
          img:require('../public/judges/SijieHan.png'),
          name:'Sijie Han',
          post:'Solution Architect, AWS'
        },
        {
          img:require('../public/judges/0xUncleLee.Lalaland.png'),
          name:'0xUncleLee.Lalaland',
          post:'Startup Ecosystem Evangelist, AWS'
        },
        {
          img:require('../public/judges/JeffreyHu.jpg'),
          name:'Jeffrey Hu',
          post:'Tech Lead, HashKey Capital'
        },
        {
          img:require('../public/judges/Johanna.jpg'),
          name:'Johanna',
          post:'Associate, IDG Capital'
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.judges_container {
  width: 100%;
  position: relative;
  z-index: 6;
  .judges_bg_style{
    background: url("../public/judges_bg.png") no-repeat center center;
    position: absolute;
    left: -3rem;
    top: 0;
    z-index: 1;
    width: 2.06rem;
    height: 3.72rem;
  }
  .judges_content_wrap {
    width: 100%;
    max-width: 8rem;
    margin: 0.8rem auto;
    position: relative;
    z-index: 3;
    @media(max-width: 800px){
      box-sizing: border-box;
      padding: 0 0.36rem;
    }
    @media(max-width: 576px){
      padding: 0 0.16rem;
      margin: 0.32rem auto;
    }
    .judges_content_title {
      font-size: 0.28rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.32rem;
      text-align: center;
      margin-bottom: 0.54rem;
      letter-spacing: -0.02rem;
      @media(max-width: 576px){
        font-size: 0.24rem;
        line-height: 0.28rem;
        margin-bottom: 0.48rem;
      }
    }

    .judges_list_content {
      display: flex;
      gap: 0.48rem;
      flex-wrap: wrap;
      justify-content: center;
      @media(max-width: 576px){
        gap: 0.16rem;
      }
      .judges_item {
        border: 0.01rem solid rgba(255,255,255,0.1);
        .judges_item_content{
          width: 1.52rem;
          height: 2.48rem;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          position: relative;
          overflow: hidden;
          border-radius: 0.04rem;
          .judges_description{
            color: #fff;
            z-index: 4;
            position: relative;
            margin: 1.44rem 0.16rem 0 0.16rem;
            .judges_name{
              font-size: 0.2rem;
              font-weight: 600;
              color: #FFFFFF;
              line-height: 0.24rem;
              word-wrap: break-word;
            }
            .judges_post{
              margin-top: 0.08rem;
              font-size: 0.13rem;
              font-weight: 400;
              color: rgba(255,255,255,0.75);
              line-height: 0.16rem;
            }
          }
          .judges_bg_mask{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: linear-gradient(180deg, rgba(33,10,66,0.1) 0%, #200D42 100%);
            z-index: 2;
          }
          .judges_bg {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 2rem;
            position: absolute;
            left: 50%;
            top: -1.1rem;
            transform: translateX(-50%);
            background: transparent;
            z-index: 3;
            border: 1.3rem solid #151515;

          }
          &:hover {
            .judges_bg{
              animation: borderfind 0.3s ease-in-out forwards;
            }
          }
        }
      }
      .judges_item:last-child{
        .judges_item_content{
          background:  url('../public/judges/comingsoon.png') no-repeat center center/cover;
        }
        .judges_description{
          .judges_name{
            text-align: center;
          }
        }
        &:hover {
          .judges_bg{
            animation: none;
          }
        }
      }

    }
  }

  @keyframes borderfind {
      0% {
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 2rem;
        top: -1.1rem;
        border-width: 1.3rem;
      }

      100% {
        width: 4rem;
        height: 4rem;
        border-radius: 3rem;
        top: -1.22rem;
        border: 0.01rem
      }
  }
}
</style>