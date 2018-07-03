<template>
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">
         <button id="addbtn" class="btn btn-block btn-success"><span class="fa fa-plus"></span> 添加</button>
      </h3>
      <div class="box-tools">
        <div class="input-group input-group-sm" style="width: 150px;">
          <input type="text" value="" name="pos_search" class="form-control pull-right" placeholder="搜索">

          <div class="input-group-btn">
            <button type="button" id="possearch" class="btn btn-default"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table class="table table-bordered">
        <tr>
          <th style="width: 10px">#</th>
          <th>公司Logo</th>
          <th>公司名称</th>
          <th>职位名称</th>
          <th>工作地点</th>
          <th>发布时间</th>
          <th>岗位薪资</th>
          <th style="width: 140px">操作</th>
        </tr>
        <template v-if="list.length > 0">
          <tr v-for="(v,i) of list">
            <td>{{i+1}}</td>
            <td><img width="50" height="50" :src="`http://10.9.164.98:3000/uploads/${v.companyLogo}`" alt=""></td>
            <td>{{v.companyName}}</td>
            <td>{{v.positionName}}</td>
            <td>{{v.city}}</td>
            <td>{{v.createTime}}</td>
            <td>{{v.salary}}</td>
            <td>
              <button class="btn btn-sm btn-primary pos-edit" :posid="v._id"><span class="fa fa-edit"></span> 修改</button>
              <button class="btn btn-sm btn-danger pos-remove" :posid="v._id" :filename="v.companyLogo"><span class="fa fa-remove"></span> 删除</button>
            </td>
          </tr>
        </template>
        <tr v-else>
          <td colspan="8">暂无记录。</td>
        </tr>
      </table>
    </div>
    <!-- /.box-body -->
    <div class="box-footer clearfix">
      <ul class="pagination pagination-sm no-margin pull-right">
        <li>
          <router-link :to="{ name: 'positionlist', params: { start: startFirst, count}}">&laquo;</router-link>
        </li>
        <!-- {{each pages}} -->
        <li :class="getCurrentPage(i)" v-for="(n,i) of getPageCount">
          <router-link :to="{ name: 'positionlist', params: { start: i * count, count}}">{{n}}</router-link>
        </li>
        <!-- {{/each}} -->
        <li>
          <router-link :to="{ name: 'positionlist', params: { start: startLast, count}}">&raquo;</router-link>
        </li>
      </ul>
    </div>
  </div>
  <!-- /.box -->

</template>
<script>
import userModel from '../models/user'
import positionModel from '../models/position'
const wsCache = new WebStorageCache()

const token = wsCache.get('token')
export default {
  name: "PositionList",
  data: () => ({
    list: [],
    total: 0,
    count: 10
  }),
  async beforeRouteEnter (to, from, next) {
    let result = await userModel.isSignin(token)
    if (result.ret) {
      next()
    } else {
      alert('请求受限！')
    }
  },
  async mounted() {
    let result = await positionModel.list({start: 0, count: this.count, token})
    this.list = result.data.result
    this.total = result.data.total
  },
  async beforeRouteUpdate (to, from, next) {
    const {start, count} = to.params
    let result = await positionModel.list({start, count, token})
    this.list = result.data.result
    this.total = result.data.total
    next()
  },
  methods: {
    getCurrentPage(i) {
      let currentPage = this.$route.params.start / this.count
      return currentPage == i ? 'active' : ''
    }
  },
  computed: {
    getPageCount() {
      return Math.ceil(this.total / this.count)
    },
    startFirst() {
      let currentPage = this.$route.params.start / this.count
      let pageCount = this.getPageCount
      if (currentPage == 0) {
        return 0
      } else {
        return (currentPage - 1) * this.count
      }
    },
    startLast() {
      let currentPage = this.$route.params.start / this.count
      let pageCount = this.getPageCount
      if (currentPage + 1 == pageCount) {
        return (pageCount - 1) * this.count
      } else {
        return (currentPage + 1) * this.count
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
