<template>
  <div class="score_card_table">
    <vue-scroll :ops="scrollBarConfig" >
      <el-table :data="rankData"
                :row-class-name="tableRowClassName"
                :header-row-class-name="'header_style'">
        <el-table-column v-for="(item,index) in columnData"
                         :prop="item.prop"
                         :label="item.label"
                         :min-width="item.width" >
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
    <div class="pagination_content" v-show="rankData.length">
      <el-pagination :total="rankDataTotal":current-page="page" :page-size="size" layout="slot" @current-change="changePage">
        <button class="first_button_content" @click="toFirstPage">
          <img v-show="page !== 1" class="first_page_img" src="../public/scoreCard/firstpage_icon.png" alt="">
          <img v-show="page===1" class="first_page_disabled_img" src="../public/scoreCard/firstpagedisabled.png">
        </button>
      </el-pagination>
      <el-pagination :total="rankDataTotal" :current-page="page" :page-size="size" layout="prev,pager, next,slot" @current-change="changePage">
        <button class="last_button_content" @click="toLastPage">
          <img v-show="this.page !== lastPageNumber" class="last_page_img" src="../public/scoreCard/lastpage_icon.png" alt="">
          <img v-show="this.page === lastPageNumber" class="last_page_disabled_img" src="../public/scoreCard/lastpagedisabled.png" alt="">
        </button>
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {serverUri} from "../config/config.json";
export default {
  name: "ScoreCardTable",
  data() {
    return {
      rankData:[],
      scrollBarConfig :{
        detectResize:false,
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
      columnData: [
        {
          prop: 'rank',
          label: 'Rank',
          width: '14%'
        },
        {
          prop: 'team_name',
          label: 'Team Name',
          width: '25%'
        },
        {
          prop: 'task_completed',
          label: 'Task Completed',
          width: '39%'
        },
        {
          prop: 'final_score',
          label: 'Final Score ',
          width: '15%'
        }
      ],
      rankDataTotal:0,
      size:20,
      page:1,
      lastPageNumber: 1,
    }
  },
  created() {
    this.getRankData(this.page,this.size)
  },
  methods:{
    tableRowClassName({row, rowIndex}){
      if(rowIndex % 2) {
        return 'stripe_style'
      }
      return ''
    },
    toLastPage() {
      this.page=this.lastPageNumber;
      this.getRankData(this.page,this.size)
    },
    toFirstPage(){
      this.page = 1
      this.getRankData(this.page,this.size)
    },
    changePage(e){
      this.page=e
      this.getRankData(this.page,this.size)
    },
    getRankData(page=1,size=20) {
      this.$axios?.get(`${serverUri}/api/subscribe/challenge-score?page=${page}&size=${size}`).then(res => {
        if (res?.data?.code === 0 && res.data?.data) {
          this.$emit('updateTime',res.data.data.update_time)
          this.rankDataTotal = res.data.total ;
          this.lastPageNumber = Math.ceil(this.rankDataTotal / this.size)
          this.rankData = res.data.data.score_rank;
        }

      }).catch(error => {
        this.$message.error(error)
        console.log(error)
      })
    }
  }
}
</script>

<style lang="less">

.score_card_table {
  width: 100%;
  max-width: 12rem;
  margin: 0.16rem auto auto auto;
  padding-bottom: 1.2rem;
  @media(max-width: 1200px){
    box-sizing: border-box;
    padding: 0 0.36rem;
  }
  @media(max-width: 576px){
    box-sizing: border-box;
    padding: 0 0.16rem;
  }
  .pagination_content {
    width: 100%;
    max-width: 12rem;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.36rem;

    .el-pagination {
      display: flex;
      align-items: center;
      .first_button_content{
        display: flex;
        align-items: center;
        padding: 0;
        min-width: 0.14rem;
        .first_page_img{
          width: 0.14rem;
          height: 0.14rem;
        }
        .first_page_disabled_img{
          width: 0.14rem;
          height: 0.14rem;
        }
      }
      .last_button_content{
        display: flex;
        align-items: center;
        padding: 0 0 0 0.06rem;
        min-width: 0.14rem;
        .last_page_img{
          width: 0.14rem;
          height: 0.14rem;
        }
        .last_page_disabled_img{
          width: 0.14rem;
          height: 0.14rem;
        }
      }
      .btn-prev {
        background-color: transparent !important;
        padding-right: 0.0rem;
        color: rgba(255, 255, 255, 1);
        i{
          font-size: 0.16rem !important;
        }
      }
      .btn-prev:disabled{
        color: rgba(255, 255, 255, 0.35);
      }

      .btn-next {
        font-size: 0.16rem !important;
        background-color: transparent !important;
        color: rgba(255, 255, 255, 1);
        padding-left: 0.06rem;
        i{
          font-size: 0.16rem !important;
        }
      }
      .btn-next:disabled{
        color: rgba(255, 255, 255, 0.35);
      }

      .el-pager {
        li {
          padding: 0;
          margin: 0 0.06rem;
          min-width: 0.24rem;
          font-size: 0.16rem;
          background-color: transparent !important;
          color: rgba(255,255,255,0.5);
          font-weight: lighter;
        }
        .active{
          font-weight: bold;
          color: #fff !important;
        }
      }
    }
  }
}
.el-table__row--striped{
  background: rgba(0,0,0,0.5);
}
.el-table::before {
  height: 0;
}
.el-table .stripe_style {
  background:rgba(137, 65, 255, 0.2) !important;
}
.header_style {
  .el-table__cell {
    background-color: rgba(137, 65, 255, 0.35) !important;

    .cell {
      font-size: 0.21rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.34rem;

    }
  }

  .el-table__cell:nth-child(1) {
    padding-left: 5%;

    .cell {
      white-space: nowrap;
    }
  }

  .el-table__cell:nth-child(4) {
    .cell {
      white-space: nowrap;
      padding-right: 0.24rem !important;
    }
  }
}

.el-table tr {
  background-color: transparent !important;
}

.el-table {
  background-color: transparent !important;
}

.el-table td.el-table__cell, .el-table th.el-table__cell.is-leaf {
  border-bottom: none;

}

.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgba(0, 0, 0, 0) !important;
}

.el-table .el-table__cell:first-child {
  padding-left: 0.5rem;
}
.el-table .el-table__cell{
  min-height: 0.8rem;
}

.el-table .cell {
  overflow: visible;
}

.content_container {
  display: flex;
  align-items: center;
  position: relative;
  color: rgba(255,255,255,0.82);
  letter-spacing: -0.0053rem;
  font-size: 0.16rem;
  .ellipsis_style{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .rank_first_img {
    position: absolute;
    width: 0.2rem;
    height: 0.2rem;
    left: -0.2rem;
  }
}
</style>