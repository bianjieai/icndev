<template>
  <div class="winners_container">
    <banner></banner>
    <div class="winner_content_container">
      <div class="winner_content_container_wrap">
        <div class="winner_content_desc">The Game of NFTs has reached its triumphant conclusion! Throughout the journey,
          participants have demonstrated exceptional skills, determination, and creativity. Well done everyone and
          congratulations to all the deserving winners!
        </div>
        <h2 class="winner_content_title">Interchain Hackathon Winners</h2>
        <div class="winner_content_desc_1">Winners in the Hackathon were selected through a comprehensive evaluation
          process that encompassed various criteria such as adherence to requirements, completeness, innovativeness, and
          additional factors as determined by the track owners.
        </div>
        <div class="winner_content_desc_2">You can find all entries and their details <a href="https://dorahacks.io/hackathon/game-of-nfts" :style="{color:'#9e63ff'}" target="_blank" rel="noreferrer noopener">here</a>.</div>
        <winner-track v-for="(item,index) in winners" :trophy-title="item.title" :list="item.children"> </winner-track>
      </div>
    </div>
    <div class="winners_content">
      <div class="winners_content_wrap">
        <h2 class="winners_title">Incentivized Testing Winners</h2>
        <div class="winners_desc">Thank you for your participation and outstanding contributions in the GoN Incentivized Testing phase! Congratulations to all the winners!
        </div>
        <div class="winners_desc_1">Visit the <a href="https://interchainnfts.dev/gon/scorecard.html"
                                                                        target="_blank" style="color: #9E63FF"
                                                                        rel="noreferrer noopener">scoreboard</a> for detailed scores and rankings.
        </div>
        <h5 class="winners_task_title">Task-Completion Winner</h5>
        <div class="winners_task_desc">
          Congratulations to the top-ranked team of all task competitors! And a round of applause to all competitors for
          their exceptional performance!
        </div>
        <winner-trophy :trophy-title="''" :team-name="'Ark Protocol'"></winner-trophy>
        <h5 class="awards_winners_title">Contribution Awards Winners</h5>
        <div class="awards_winners_desc">
          Teams listed here are selected at the discretion of the jury, based on the quality of their contributions and
          the extent to which they align with the award descriptions.
        </div>
        <winner-trophy v-for="(item) in winnersTeams " :trophy-title="item.title"
                       :team-name="item.name"></winner-trophy>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import WinnerTrophy from "../components/WinnerTrophy";
import WinnerTrack from "../components/WinnerTrack";

export default {
  name: "Winners",
  components: {WinnerTrack, WinnerTrophy, Banner},
  data() {
    return {
      winners:[
        {
          title: 'Amazon Web Services Cloud Innovation Program Special Award',
          children:[
            {
              label:'',
              value: 'Lendlord',
              img: require('../public/cup.png'),
              href:'https://dorahacks.io/buidl/6448'
            },
          ]
        },
        {
          title: 'Cosmos Hub Track Winners',
          children:[
            {
              label:'1st Place',
              value: 'NFTokenizer',
              img:require('../public/1st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6484'
            },
            {
              label:'2nd Place',
              value: 'CosmoSwap',
              img:require('../public/2st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6516'
            },
            {
              label:'3rd Place',
              value: 'Lendlord',
              img:require('../public/3st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6448'
            },
          ]
        },
        {
          title: 'IRISHUB Track Winners',
          children:[
            {
              label:'1st Place',
              value: 'Lendlord',
              img:require('../public/1st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6448'
            },
            {
              label:'2nd Place',
              value: 'NFT Vault',
              img:require('../public/2st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/5437'
            },
            {
              label:'3rd Place',
              value: 'UniCard',
              img:require('../public/3st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6424'
            },
          ]
        },
        {
          title: 'Stargaze Track Winners',
          children:[
            {
              label:'1st Place',
              value: 'Gravity Bridge ERC721',
              img:require('../public/1st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6483'
            },
            {
              label:'2nd Place',
              value: 'ICS721 transfers with taxes and incentives',
              img:require('../public/2st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6497'
            },
            {
              label:'3rd Place',
              value: 'Astral - Interchain NFTs',
              img:require('../public/3st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6528'
            },
          ]
        },
        {
          title: 'OmniFlix Track Winners',
          children:[
            {
              label:'1st Place',
              value: 'Gravity Bridge ERC721',
              img:require('../public/1st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6483'
            },
            {
              label:'2nd Place',
              value: 'NFT-CLI',
              img:require('../public/2st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6485'
            },
            {
              label:'3rd Place',
              value: 'NFT Vault',
              img:require('../public/3st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/5437'
            },
            {
              label:'Bonus Prize',
              value: 'CrowdControl ChainWars',
              img:require('../public/bonusprize_icon.png'),
              href:'https://dorahacks.io/buidl/6399'
            },
          ]
        },
        {
          title: 'Uptick Track Winners',
          children:[
            {
              label:'1st Place',
              value: 'Interchain Marketplace',
              img:require('../public/1st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6427'
            },
            {
              label:'2nd Place',
              value: 'CreditWise',
              img:require('../public/2st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6426'
            },
            {
              label:'3rd Place',
              value: 'UniCard',
              img:require('../public/3st_Place_icon.png'),
              href:'https://dorahacks.io/buidl/6424'
            },
            {
              label:'4th Place',
              value: 'ICScan',
              img:require('../public/normalprize_icon.png'),
              href:'https://dorahacks.io/buidl/6425'
            },
            {
              label:'5th Place',
              value: 'CrowdControl ChainWars',
              img:require('../public/normalprize_icon.png'),
              href:'https://dorahacks.io/buidl/6399'
            },
            {
              label:'6th Place',
              value: 'NFT-CLI',
              img:require('../public/normalprize_icon.png'),
              href:'https://dorahacks.io/buidl/6485'
            },
            {
              label:'7th Place',
              value: 'Uptick Inter Collection',
              img:require('../public/normalprize_icon.png'),
              href:'https://dorahacks.io/buidl/6393'
            },
          ]
        },
      ],
      winnersTeams: [
        {
          title: 'Best Auditor',
          name: 'Disperze'
        },
        {
          title: 'Public Good Awards',
          name: 'Ark Protocol, Ping.Pub'
        },
        {
          title: 'Community Star',
          name: 'EmpowerChain'
        },
        {
          title: 'Best Promoter',
          name: 'Ark Protocol'
        },
        {
          title: 'Bug Hunters',
          name: 'Disperze, mccallofthewild, Ark Protocol, EmpowerChain, SLS'
        },
        {
          title: 'Best NFT Memes',
          name: 'danku_zone w/ DAIC'
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">
.winners_container {
  width: 100%;
  .winner_content_container{
    width: 100%;
    max-width: 19.2rem;
    margin: 0 auto;
    padding-bottom: 1rem;
    .winner_content_container_wrap{
      color: #fff;
      width: 100%;
      max-width: 9rem;
      margin: 0 auto;
      .winner_content_desc{
        font-size: 0.24rem;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 0.4rem;
        @media(max-width: 900px){
          padding: 0 0.2rem;
        }
      }
      .winner_content_title{
        margin-top: 0.6rem;
        font-size: 0.38rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.48rem;
        @media(max-width: 900px){
          padding: 0 0.2rem;
        }
      }
      .winner_content_desc_1{
        margin-top: 0.24rem;
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255,255,255,0.75);
        line-height: 0.24rem;
        @media(max-width: 900px){
          padding: 0 0.2rem;
        }
      }
      .winner_content_desc_2{
        margin-top: 0.24rem;
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255,255,255,0.75);
        line-height: 0.24rem;
        @media(max-width: 900px){
          padding: 0 0.2rem;
        }
      }
    }
  }
  .winners_content {
    width: 100%;
    max-width: 19.2rem;
    margin: 0 auto;
    padding-bottom: 1rem;
    background: url("../public/winners_bg.png") no-repeat center center;
    background-size: cover;

    .winners_content_wrap {
      color: #fff;
      width: 100%;
      max-width: 9rem;
      margin: 0 auto;

      @media (max-width: 900px) {
        box-sizing: border-box;
        padding: 0 0.2rem;
      }

      .winners_title {
        font-size: 0.38rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.48rem;
        letter-spacing: -0.027rem;
        margin-bottom: 0.24rem;
      }

      .winners_desc {
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.75);
        line-height: 0.24rem;
        margin-bottom: 0.16rem;
      }

      .winners_desc_1 {
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.75);
        line-height: 0.24rem;
        margin-bottom: 0.48rem;
        @media (max-width: 768px) {
          margin-bottom: 0.4rem;
        }
      }

      .winners_task_title {
        font-size: 0.16rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.24rem;
        margin-bottom: 0.16rem;
      }

      .winners_task_desc {
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.75);
        line-height: 0.24rem;
        margin-bottom: 0.4rem;
      }

      .awards_winners_title {
        font-size: 0.16rem;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 0.24rem;
        margin-bottom: 0.16rem;
      }

      .awards_winners_desc {
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.75);
        line-height: 0.24rem;
        margin-bottom: 0.4rem;
      }
    }
  }
}
</style>