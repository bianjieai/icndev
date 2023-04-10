<template>
  <div class="winners_container">
    <banner></banner>
    <div class="winners_content">
      <div class="winners_content_wrap">
        <h2 class="winners_title">Incentivized Testing Winners</h2>
        <div class="winners_desc">Thank you for your participation and outstanding contributions in the Game of NFTs Incentivized Testing phase! After careful evaluation by the jury, we're excited to announce the winners!</div>
        <div class="winners_desc_1">The prize pool will be allocated <a href="https://medium.com/p/c4ce529b4922#278d" target="_blank" style="color: #9E63FF" rel="noreferrer noopener">according to the points scored by each participant</a>. For detailed scores and rankings, please visit the <a href="https://interchainnfts.dev/gon/scorecard.html" target="_blank" style="color: #9E63FF" rel="noreferrer noopener">scoreboard</a>.</div>
        <h5 class="winners_task_title">Task-Completion Winner</h5>
        <div class="winners_task_desc">
          Congratulations to the top-ranked team of all task competitors! And a round of applause to all competitors for their exceptional performance!
        </div>
        <winner-trophy :trophy-title="''" :team-name="'EmpowerChain'"></winner-trophy>
        <h5 class="awards_winners_title">Contribution Awards Winners</h5>
        <div class="awards_winners_desc">
          Teams listed here are selected at the discretion of the jury, based on the quality of their contributions and the extent to which they align with the award descriptions.
        </div>
        <winner-trophy v-for="(item) in winnersTeams " :trophy-title="item.title" :team-name="item.name"></winner-trophy>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import WinnerTrophy from "../components/WinnerTrophy";
export default {
  name: "Winners",
  components: {WinnerTrophy, Banner},
  data() {
    return {
      winnersTeams: [
        {
          title:'Best Auditor',
          name: 'Disperze'
        },
        {
          title:'Public Good Awards',
          name: 'Ark Protocol, Ping.Pub'
        },
        {
          title:'Community Star',
          name: 'EmpowerChain'
        },
        {
          title:'Best Promoter',
          name: 'Ark Protocol'
        },
        {
          title:'Bug Hunters',
          name: 'Disperze, mccallofthewild, Ark Protocol, EmpowerChain, SLS'
        },
        {
          title:'Best NFT Memes',
          name: 'danku_zone w/ DAIC'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.winners_container{
  width: 100%;
  .winners_content{
    width: 100%;
    max-width: 19.2rem;
    margin: 0 auto;
    padding-bottom: 1rem;
    background: url("../public/winners_bg.png") no-repeat center center;
    background-size: cover;
    .winners_content_wrap{
      color: #fff;
      width: 100%;
      max-width: 9rem;
      margin: 0 auto;

      @media(max-width: 900px){
        box-sizing: border-box;
        padding: 0 0.2rem;
      }
      .winners_title{
        font-size: 0.38rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.48rem;
        letter-spacing: -0.027rem;
        margin-bottom: 0.24rem;
      }
      .winners_desc{
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255,255,255,0.75);
        line-height: 0.24rem;
        margin-bottom: 0.16rem;
      }
      .winners_desc_1{
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255,255,255,0.75);
        line-height: 0.24rem;
        margin-bottom: 0.48rem;
        @media(max-width: 768px){
          margin-bottom: 0.4rem;
        }
      }
      .winners_task_title{
        font-size: 0.16rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.24rem;
        margin-bottom: 0.16rem;
      }
      .winners_task_desc{
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255,255,255,0.75);
        line-height: 0.24rem;
        margin-bottom: 0.4rem;
      }
      .awards_winners_title{
        font-size: 0.16rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.24rem;
        margin-bottom: 0.16rem;
      }
      .awards_winners_desc{
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255,255,255,0.75);
        line-height: 0.24rem;
        margin-bottom: 0.4rem;
      }
    }
  }
}
</style>