<template>
  <div class="updates_container">
    <div class="updates_banner">
      <div class="updates_banner_content_wrap">
        <div class="update_banner_label_content">
          <span class="updates_banner_label_title">Game of NFTs</span>
          <span class="updates_banner_label_sub_title">UPDATES</span>
        </div>
      </div>
    </div>
    <div class="updates_list_content" >
      <a class="update_list_content_wrap" target="_blank" :href="item.href" v-for="(item,index) in updateList" :key="index" rel="noreferrer noopener">
        <div class="update_list_wrap">
          <div class="list_item_title">{{item.title}}</div>
          <div class="list_item_description">{{item.desc}}</div>
          <div class="list_item_time">{{item.time}}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Updates",
  computed:{
        updateList() {
          console.log(this.$page.frontmatter.updateList)
          return this.$page.frontmatter.updateList

        }
  }
}
</script>

<style scoped lang="less">

.updates_container{
  width: 100%;
  .updates_banner{
    width: 100%;
    height: 6rem;
    background: url("../public/updates/update_bg.jpg") no-repeat center center/ cover;
    .updates_banner_content_wrap{
      width: 100%;
      height: 6rem;
      max-width: 12rem;
      margin: 0 auto;
      position: relative;
      @media(max-width: 768px){
        position: static;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .update_banner_label_content{
        position: absolute;
        top: 2.34rem;
        right: 2.78rem;
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        @media(max-width: 768px){
          position: static;
        }
        .updates_banner_label_title{
          font-size: 0.24rem;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 0.24rem;
          text-shadow: 0 0 0.06rem #9B6FFF;
          margin-bottom: 0.16rem;
        }
        .updates_banner_label_sub_title{
          font-size: 0.48rem;
          font-weight: normal;
          color: #FFFFFF;
          line-height: 0.48rem;
          text-shadow: 0 0 0.06rem #9B6FFF;
        }
      }
    }
  }
  .updates_list_content{
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;
    max-width: 8.76rem;
    margin: 0 auto;
    padding-bottom: 1.66rem;
    .update_list_content_wrap{
      box-sizing: border-box;
      padding: 0.16rem;
      &:hover{
        background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%);
      }
      .update_list_wrap{
        border-left: 0.01rem solid #fff;
        .list_item_title{
          font-size: 0.24rem;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 0.28rem;
          border-left: 0.02rem solid #fff;
          padding-left: 0.43rem;
        }
        .list_item_description{
          padding-left: 0.43rem;
          font-size: 0.16rem;
          font-weight: 400;
          color: rgba(255,255,255,0.75);
          line-height: 0.24rem;
          margin:0.16rem 0;
        }
        .list_item_time{
          font-size: 0.14rem;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          line-height: 0.18rem;
          padding-left: 0.43rem;
        }
      }
    }
  }
}

</style>