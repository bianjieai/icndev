<template>
  <div class="header_container">
    <div class="header_content">
      <span class="header_logo_label">Game of NFTs</span>
      <ul class="header_menu_list_content">
        <li class="header_menu_item" v-for="(item,index) in menuList" :key="index"
            :class="item.isActive ? 'active_style' : ''">
          <router-link class="header_item_link" :to="item.href">{{ item.label }}</router-link>
        </li>
      </ul>
      <div class="mobile_menu_list_content">
        <div class="mobile_menu_icon" @click="showMobileMenu">
          <img src="../public/menu.png" alt="">
        </div>
        <ul class="mobile_menu_content" v-show="isShowMobileMenu">
          <li class="mobile_menu_item" v-for="(item,index) in menuList" :key="index"
              :class="item.isActive ? 'active_style' : ''">
            <router-link class="mobile_header_item_link" :to="item.href">{{ item.label }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../config/config.json"
export default {
  name: "Header",
  data() {
    return {
      menuList:[],
      firstMenuList: [
        {
          href: '/gon/',
          label: 'HOME',
          isActive: false
        },
      ],
      lastMenuList: [
        {
          href: '/gon/updates.html',
          label: 'UPDATES',
          isActive: false
        },
      ],
      isShowMobileMenu:false
    }
  },
  mounted() {
    this.menuList= this.firstMenuList?.concat(this.lastMenuList)
    if(new Date().getTime() >= config.releaseTime) {
      this.menuList = [];
      this.menuList = this.firstMenuList.concat([
        {
          href: '/gon/challengescope.html',
          label: 'CHALLENGE SCOPE',
          isActive: false
        },
        {
          href: '/gon/scoreboard.html',
          label: 'SCORE CARD',
          isActive: false
        },
      ]).concat(this.lastMenuList)
    }
    this.menuList.forEach(item => {
      if (item.href === this.$route.path) {
        item.isActive = true
      }
    })
  },
  methods: {
    showMobileMenu(){
      this.isShowMobileMenu = !this.isShowMobileMenu
    }
  }
}
</script>

<style scoped lang="less">
.header_container {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
  backdrop-filter: blur(2px);
  z-index: 90;

  .header_content {
    width: 100%;
    max-width: 12rem;
    margin: 0 auto;
    height: 0.28rem;
    font-size: 0.28rem;
    color: #FFFFFF;
    line-height: 0.28rem;
    padding: 0.26rem 0;
    display: flex;
    align-items: center;
    @media (max-width: 850px) {

      max-width: none;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 0.26rem 0.36rem;
    }
    @media(max-width: 576px){
      padding: 0.26rem 0.16rem;
    }

    .header_image {
      width: 0.4rem;
    }

    .header_logo_label {
      font-family: Silom;
    }

    .header_menu_list_content {
      display: flex;
      gap: 0.6rem;
      margin: 0 0 0 0.75rem;
      @media(max-width: 850px){
        display: none;
      }
      .header_menu_item {
        .header_item_link {
          font-size: 0.16rem;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 0.24rem;
          text-shadow: 0 0 0.06rem #9B6FFF;
        }
      }

      .active_style {
        position: relative;
        &::after{
          position: absolute;
          left: 0;
          bottom: -0.08rem;
          content: '';
          width: 100%;
          height: 0.02rem;
          background: #fff;
          display: inline-block;

        }
      }
    }
    .mobile_menu_list_content{
      display: none;
      position: relative;
      justify-content: flex-end;
      @media(max-width: 850px){
        display: inline-block;
      }
      .mobile_menu_icon{
        width: 0.24rem;
        height: 0.2rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .mobile_menu_content{
        position: absolute;
        right: 0;
        top:0.4rem;
        background: rgba(0,0,0,0.65);
        border-radius: 0.04rem;
        box-sizing: border-box;
        padding: 0.12rem 0;
        width: 2.52rem;
        .mobile_menu_item{
          display: flex;
          align-items: center;
          .mobile_header_item_link{
            font-size: 0.16rem;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 0.2rem;
            padding: 0.12rem  0.24rem;
            display: inline-block;
            flex: 1;

          }
        }
        .active_style{
          border-left: 0.01rem solid #fff;
          background: linear-gradient(90deg, rgba(137,65,255,0.2) 0%, rgba(137,65,255,0.05) 100%);
        }

      }
    }
  }
}
</style>