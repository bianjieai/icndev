<template>
  <div class="table_content">
    <el-table :data="tableData"
              :row-class-name="tableRowClassName"
              :header-row-class-name="'header_style'" empty-text="No Data">
      <el-table-column v-for="(item,index) in columnData"
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
  </div>
</template>

<script>
export default {
  name: "TableList",
  props:{
    tableData:{
      type: Array,
      default:() => []
    },
    columnData:{
      type: Array,
      default:() => []
    }
  },
  methods:{
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
.table_content{
  max-width: 12rem;

}
.header_style {
  .el-table__cell {
    background-color: rgba(137, 65, 255, 0.35) !important;

    .cell {
      font-size: 0.21rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.34rem;
      white-space: nowrap;
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
.el-table__row--striped {
  background: rgba(0, 0, 0, 0.5);
}

.el-table::before {
  height: 0;
}


.header_style {
  .el-table__cell {
    background-color: rgba(137, 65, 255, 0.35) !important;

    .cell {
      font-size: 0.21rem;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 0.34rem;
      white-space: nowrap;
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

.el-table .el-table__cell {
  min-height: 0.8rem;
}

.el-table .cell {
  overflow: visible;
}

</style>