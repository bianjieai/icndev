<template>
  <div class="container" @click.stop="removeTableLightStyle">
    <Banner></Banner>
    <div class="update_time_wrap">
      <div class="input_search_content">
        <el-input placeholder="Search by team name"
                  v-model="inputValue"
                  clearable
                  @keydown.native="inputValueChange">
          <el-button slot="append" icon="iconfont icon-sousuo" @click.stop="clickSearch"></el-button>
        </el-input>
        <div class="waring_content" :style="{visibility:isShowWaring?'visible' : 'hidden'}">
          <span class="el-icon-warning">
            no data found
          </span>
        </div>
      </div>
      <div class="update_time_content">
        <img class="update_time_icon" src="../public/scoreCard/update.png" alt="">
        <span class="update_time_label">Last updated</span>
        <span class="update_time_value">{{ updateTime }}</span>
      </div>
    </div>
    <score-card-table ref="tableList" @updateTime="getUpdateTime" @showWaring="showWaring"></score-card-table>
    <contribution-awards></contribution-awards>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import ScoreCardTable from "../components/ScoreCardTable";
import dayjs from 'dayjs'
import ContributionAwards from "../components/ContributionAwards";

export default {
  name: "ScoreCard",
  components: {ContributionAwards, ScoreCardTable, Banner},
  data() {
    return {
      updateTime: '',
      inputValue: '',
      isKeyDown: true,
      isShowWaring: false,
      isSearch: false,
      waringTimer: null,
      keyDownTimer: null,
      clickTimer: null
    }
  },
  methods: {
    removeTableLightStyle(){
      this.isSearch = false;
      this.$refs.tableList.removeLightStyle()
    },
    showWaring() {
      this.isShowWaring = true;
      clearTimeout(this.waringTimer);
      this.waringTimer = setTimeout(() => {
        this.isShowWaring = false
      }, 3000)
    },
    getUpdateTime(time) {
      if (time) {
        this.updateTime = dayjs(time * 1000).format('DD/MM/YYYY');
      }
    },
    inputValueChange(v) {
      if (!this.isSearch && v?.keyCode === 13) {
        this.$refs.tableList.getRankData(1, 15, this.inputValue?.toString()?.trim())
        this.isSearch = false;
        clearTimeout(this.keyDownTimer);
        this.keyDownTimer = setTimeout(() => {
          this.isSearch = true
        }, 1000)
      }
    },
    clickSearch() {
      if (!this.isSearch) {
        this.$refs.tableList.getRankData(1, 15, this.inputValue?.toString()?.trim())
        this.isSearch = true
        clearTimeout(this.clickTimer);
        this.clickTimer = setTimeout(() => {
          this.isSearch = false
        }, 1000)
      }
    },

  }
}
</script>

<style scoped lang="less">
.container {
  .update_time_wrap {
    width: 100%;
    display: flex;
    justify-content: space-between;
    max-width: 12rem;
    margin: 0.24rem auto 0 auto;
    @media (max-width: 1200px) {
      box-sizing: border-box;
      padding: 0 0.36rem;
    }
    @media(max-width: 768px){
      flex-direction: column-reverse;
      gap: 0.16rem;
    }
    @media (max-width: 576px) {
      box-sizing: border-box;
      padding: 0 0.16rem;
    }

    .input_search_content {
      display: flex;
      align-items: center;
      flex: 1;
      max-width: 5.07rem;
      @media(max-width: 768px){
        flex-direction: column;
        gap: 0.08rem;
        align-items: flex-start;
      }
      .waring_content {
        white-space: nowrap;
        padding: 0.04rem 0.08rem;
        background: rgba(247, 181, 0, 0.15);
        margin-left: 0.08rem;
        border-radius: 0.04rem;
        @media(max-width: 768px){
          margin-left: 0;
        }
        .el-icon-warning {
          color: rgba(250, 100, 0, 1)
        }
      }

      ::v-deep .el-input {
        .el-input__inner {
          background: rgba(0, 0, 0, 0.65);
          border-right: none;
          border-color: rgba(255, 255, 255, 0.35);
          color: #fff;
        }
        .el-input__inner::placeholder{
          color: ;
        }
        .el-input-group__append {
          background: #1B0F3B;
          border-color: rgba(255, 255, 255, 0.35);
          border-left: none;

          .el-button {
            padding: 0.08rem 0.12rem;
            i{
              color:#7E3AE3;
            }
          }
        }

        .el-input__suffix {
          .el-input__icon {
            color: #7E3AE3;
          }
        }
      }
    }

    .update_time_content {
      display: flex;
      align-items: center;
      max-width: 12rem;

      .update_time_icon {
        width: 0.2rem;
        height: 0.2rem;

      }

      .update_time_label {
        font-size: 0.16rem;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.82);
        line-height: 0.34rem;
        letter-spacing: -0.0053rem;
        margin-left: 0.08rem;
      }

      .update_time_value {
        font-size: 0.16rem;
        font-weight: normal;
        color: #FFFFFF;
        line-height: 0.34rem;
        margin-left: 0.08rem;
      }
    }
  }
}
</style>