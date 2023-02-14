<template>
  <div class="channel_container">
    <div class="channel_content">
      <div class="channel_title">Channels</div>
      <div class="channel_content_wrap">
        <div class="channel_discord">
          <a href="https://discord.gg/JCCxrZZaVg" class="discord_link" target="_blank" rel="noreferrer noopener">
            <img class="discord_image" src="../public/Discord.png" alt="">
          </a>
        </div>
        <div class="channel_twitter">
          <a href="https://twitter.com/irisnetwork" class="twitter_link" target="_blank" rel="noreferrer noopener">
            <img class="twitter_image" src="../public/Twitter.png">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Channels"
}
</script>

<style scoped lang="less">
.channel_container {
  width: 100%;
  padding-bottom: 2.07rem;
  margin-top: 0.4rem;
  @media(max-width: 576px){
    margin-top: 0.6rem;
  }
  .channel_content {
    width: 100%;
    max-width: 12rem;
    .channel_title {
      font-size: 0.20rem;
      font-weight: bold;
      color: rgba(255,255,255,0.75);
      line-height: 0.24rem;
      margin-bottom: 0.24rem;
      letter-spacing: -0.007rem;
      @media(max-width: 576px){
        text-align: center;
      }
    }

    .channel_content_wrap {
      font-size: 0.14rem;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 0.18rem;
      display: flex;
      justify-content: flex-start;
      gap: 0.4rem;
      @media(max-width: 576px){
        justify-content: center;
      }
      .channel_discord {
        .discord_link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .discord_image {
            width: 0.38rem;
            height: 0.38rem;
          }

          .discord_label {
            margin-top: 0.08rem;
            font-size: 0.14rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.75);
            line-height: 0.18rem;
            text-align: center;
          }
        }

      }

      .channel_twitter{

        .twitter_link {
          align-items: center;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .twitter_image {
            width: 0.38rem;
            height: 0.38rem;
          }

          .twitter_label {
            margin-top: 0.08rem;
            font-size: 0.14rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.75);
            line-height: 0.18rem;
            text-align: center;
          }
        }
      }
    }
  }
}

</style>