<template>
  <div class="awards_container">
    <div class="awards_title">Contribution Awards</div>
    <div class="table_content">
      <vue-scroll :ops="scrollBarConfig" :key="'awardTable'">
        <el-table :data="awardTableData"
                  :row-class-name="tableRowClassName"
                  :header-row-class-name="'header_style'">
          <el-table-column v-for="(item,index) in awardColumn"
                           :prop="item.prop"
                           :label="item.label"
                           :min-width="item.width">
            <template slot-scope="scope">
              <div class="content_container">
                <!--              <img class="rank_first_img" v-show="item.label==='Rank' && scope.row[item.prop] == 1"
                                   src="../public/scoreCard/star.png" alt="">-->
                <span :class="item.label === 'Team Name'? 'ellipsis_style' : ''">{{ scope.row[item.prop] }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </vue-scroll>
    </div>
  </div>
</template>

<script>
import {serverUri} from "../config/config.json";
import {scrollConfig} from "../constant";
export default {
  name: "ContributionAwards",
  data() {
    return {
      scrollBarConfig: {
        detectResize: false,
        rail: {
          opacity: 1,
          background: 'rgba(137, 65, 255, 0.34)',
          size: '6px',
        },
        bar: {
          keepShow: true,
          size: '6px',
          minSize: 0.1,
          background: 'rgba(137, 65, 255, 1)',
        },
        vuescroll: {
          wheelScrollDuration: 0,
          wheelDirectionReverse: false,
          locking: true,
          checkShifKey: true,
        },
      },
      awardTableData: [],
      awardColumn: [
        // {
        //   prop: 'rank',
        //   label: 'Rank',
        //   width: '168'
        // },
        {
          prop: 'team_name',
          label: 'Team Name',
          width: '300'
        },
        {
          prop: 'task_completed',
          label: 'Task Completed',
          width: '468'
        },
        {
          prop: 'final_score',
          label: 'Final Score ',
          width: '180'
        }
      ],
    }
  },
  mounted() {
    this.getContributionAwardsData()
  },
  methods: {
    getContributionAwardsData() {
      const url = `${serverUri}/api/subscribe/special-awards`
      this.$axios.get(url).then((res) => {
        if (res?.data?.code === 0 && res.data?.data?.score_rank?.length) {
          this.awardTableData = res.data.data.score_rank;
        }
      })
    },
    tableRowClassName({row, rowIndex}) {
      const classNameArr = []
      if (rowIndex % 2) {
        classNameArr.push('stripe_style')
      }
      return classNameArr
    }
  }
}
</script>

<style scoped lang="less">
.awards_container {
  width: 100%;
  max-width: 12rem;
  margin: 0.76rem auto 0 auto;
  padding-bottom: 1.2rem;

  @media (max-width: 1200px) {
    box-sizing: border-box;
    padding: 0 0.36rem 1.2rem;
  }
  @media (max-width: 576px) {
    box-sizing: border-box;
    padding: 0 0.16rem 0.6rem;
  }

  .awards_title {
    font-size: 0.28rem;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 0.36rem;
    margin-bottom: 0.24rem;
  }
  ::v-deep .table_content{
    .__vuescroll {
      .__panel {
        scrollbar-width: none;
        -ms-overflow-style: none;
        scrollbar-color: transparent transparent !important;
        scrollbar-track-color: transparent !important;
        -ms-scrollbar-track-color: transparent !important;

        &::-webkit-scrollbar {
          width: 0 !important;
        }
      }
    }
  }
}
</style>