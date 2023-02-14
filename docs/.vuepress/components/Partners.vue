<template>
  <div class="partners_container">
    <div class="bg_style"></div>
    <div class="partners_content_wrap">
      <div class="partner_content_title">Partners & Sponsors</div>
      <div class="partner_ecosystem_content">
        <p class="partner_ecosystem_title">Ecosystem Partners</p>
        <ul class="partner_ecosystem_logo_content">
          <li class="partner_ecosystem_item_logo" v-for="(item,index) in ecosystemLogos" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
      </div>
<!--      <div class="partner_institution_content">
        <p class="partner_institution_title">Institution Partners</p>
        <ul class="partner_institution_logo_content">
          <li class="partner_institution_item_logo" v-for="(item,index) in institutionLogos" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
      </div>-->
      <div class="technology_content">
        <p class="technology_title">Technology Initiator</p>
        <ul class="technology_logo_content">
          <li class="technology_item_logo" v-for="(item,index) in technologyLogos" :key="index">
            <img :src="item.img" alt="">
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Partners",
  data() {
    return {
      ecosystemLogos: [
        {
          img: require('../public/partenersLogo/ICF.png'),
        },
        {
          img: require('../public/partenersLogo/COSMOS HUB.png'),
        },
        {
          img: require('../public/partenersLogo/IRISNET.png'),
        },
        {
          img: require('../public/partenersLogo/STARGAZE.png'),
        },
        {
          img: require('../public/partenersLogo/JUNO.png'),
        },
        {
          img: require('../public/partenersLogo/UPTICK.png'),
        },
        {
          img: require('../public/partenersLogo/OMNIFLIX.png'),
        }
      ],
      institutionLogos: [
        {
          img: require('../public/partenersLogo/AWS.png'),
        },
        {
          img: require('../public/partenersLogo/HASHKEY.png'),
        },
        {
          img: require('../public/partenersLogo/IDG.png'),
        }
      ],
      technologyLogos:[
        {
          img: require('../public/partenersLogo/BIANJIE.png'),
        },
      ]
    }
  }
}
</script>

<style scoped lang="less">
.partners_container {
  width: 100%;
  padding-top: 1.28rem;
  background: url("../public/partenersLogo/partner_bg.png") center center ;
  background-size: 100% 100%;
  z-index: 5;
  @media(max-width: 576px){
    padding-top: 0;
  }
  position: relative;
  .bg_style{
    position: absolute;
    width: 16.44rem;
    height: 16.86rem;
    background: url("../public/bg_2.png") no-repeat right bottom;
    z-index: 1;
    bottom: -5rem;
    right: 0;
  }
  .partners_content_wrap {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    position: relative;
    z-index: 3;
    @media(max-width: 1200px){
      box-sizing: border-box;
      padding: 0 0.36rem;
    }
    @media(max-width: 567px){
      box-sizing: border-box;
      padding: 0 0.16rem;
    }
    .partner_content_title {
      font-size: 0.28rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.34rem;
      text-align: center;
      letter-spacing: -0.02rem;
    }

    .partner_ecosystem_content {
      margin-top: 0.56rem;
      @media(max-width: 576px){
        margin-top: 0.48rem;
      }
      .partner_ecosystem_title {
        font-size: 0.2rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.74);
        line-height: 0.24rem;
        text-align: center;
        letter-spacing: -0.007rem;
      }

      .partner_ecosystem_logo_content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.24rem;
        max-width: 10rem;
        margin: 0.24rem auto 0 auto;

        .partner_ecosystem_item_logo {
          width: 2.24rem;
          height: 0.8rem;

          img {
            width: 100%;

          }
        }
      }
    }
    .partner_institution_content{
      margin-top: 0.64rem;
      .partner_institution_title {
        font-size: 0.2rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.74);
        line-height: 0.24rem;
        text-align: center;
      }

      .partner_institution_logo_content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.24rem;
        max-width: 8rem;
        margin: 0.24rem auto 0 auto;

        .partner_institution_item_logo {
          width: 2.24rem;
          height: 0.8rem;

          img {
            width: 100%;

          }
        }
      }
    }
    .technology_content {
      margin-top: 0.64rem;
      padding-bottom: 0.48rem;
      @media(max-width: 576px){
        margin-top: 0.4rem;
        padding-bottom: 0.48rem;
      }
      .technology_title{
        font-size: 0.2rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.74);
        line-height: 0.24rem;
        text-align: center;
      }
      .technology_logo_content {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.24rem;
        max-width: 8rem;
        margin: 0.24rem auto 0 auto;

        .technology_item_logo {
          width: 2.24rem;
          height: 0.8rem;

          img {
            width: 100%;

          }
        }
      }
    }
  }
}
</style>