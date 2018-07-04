<template>
  <div class="box box-info">
    <div class="box-header with-border">
      <h3 class="box-title">职位编辑</h3>
    </div>
    <!-- /.box-header -->
    <!-- form start -->
    <form class="form-horizontal" id="form" :action="action" method="post" enctype="multipart/form-data">
      <div class="box-body">
        <div class="form-group">
          <label for="companyLogo" class="col-sm-2 control-label">公司Logo</label>

          <div class="col-sm-10">
            <img v-if="from == 'update'" :src="`http://10.9.164.98:3000/uploads/${pos.companyLogo}`" width="50" height="50" alt="" />
            <input type="file" class="form-control" name="companyLogo" id="companyLogo" placeholder="请选择公司logo图片">
          </div>
        </div>
        <div class="form-group">
          <label for="companyName" class="col-sm-2 control-label">公司名称</label>

          <div class="col-sm-10">
            <input type="text" v-model="pos.companyName" class="form-control" name="companyName" id="companyName" placeholder="请输入公司名称">
          </div>
        </div>
        <div class="form-group">
          <label for="positionName" class="col-sm-2 control-label">职位名称</label>

          <div class="col-sm-10">
            <input type="text" v-model="pos.positionName" class="form-control" name="positionName" id="positionName" placeholder="请输入职位名称">
          </div>
        </div>
        <div class="form-group">
          <label for="city" class="col-sm-2 control-label">工作地点</label>

          <div class="col-sm-10">
            <input type="text" v-model="pos.city" class="form-control" name="city" id="city" placeholder="请输入工作地点">
          </div>
        </div>
        <div class="form-group">
          <label for="salary" class="col-sm-2 control-label">岗位薪资</label>

          <div class="col-sm-10">
            <input type="text" v-model="pos.salary" class="form-control" name="salary" id="salary" placeholder="请输入岗位薪资">
          </div>
        </div>
        <div class="form-group">
          <label for="type" class="col-sm-2 control-label">工作性质</label>

          <div class="col-sm-10">
            <input type="text" v-model="pos.type" class="form-control" name="type" id="type" placeholder="请输入工作性质">
          </div>
        </div>
        <div class="form-group">
          <label for="experience" class="col-sm-2 control-label">工作经验</label>

          <div class="col-sm-10">
            <input type="text" v-model="pos.experience" class="form-control" name="experience" id="experience" placeholder="请输入工作经验">
          </div>
        </div>
        <div class="form-group">
          <label for="degree" class="col-sm-2 control-label">学历要求</label>

          <div class="col-sm-10">
            <input type="text" v-model="pos.degree" class="form-control" name="degree" id="degree" placeholder="请输入学历要求">
          </div>
        </div>
        <div class="form-group">
          <label for="description" class="col-sm-2 control-label">职位描述</label>

          <div class="col-sm-10">
            <textarea rows="6" cols="80" name="description" class="form-control" id="description" placeholder="请输入职位描述">{{pos.description}}</textarea>
          </div>
        </div>
      </div>
      <!-- /.box-body -->
      <div class="box-footer">
        <button type="button" @click="handleBackClick" class="btn btn-default">返回</button>
        <button type="button" @click="handleSubmitClick" class="btn btn-info pull-right">提交</button>
      </div>
      <!-- /.box-footer -->
      <input type="hidden" name="filename" v-model="pos.companyLogo">
      <input type="hidden" name="id" v-model="pos._id">
    </form>
  </div>
</template>
<script>
import positionModel from '../models/position'
export default {
  name: "AddAndUpdate",
  data: () => ({
    from: '',
    action: '',
    pos: {}
  }),
  methods: {
    handleBackClick() {
      this.$router.back()
    },
    handleSubmitClick() {
      let {from, id} = this.$route.query

      // 提交表单
      let options = {
        success : (result, status) => {
          if (result.ret) {
            if (from == 'add') {
              this.$router.push({
                name: 'positionlist',
                params: {
                  start: 0,
                  count: this.count
                },
                query: {
                  q: ''
                }
              })
            } else {
              this.$router.back()
            }
          } else {
            alert('出错了~')
          }
        },
        resetForm : true,
        dataType : "json"
      }
      $("#form").ajaxSubmit(options)
    }
  },
  async beforeMount() {
    let {from, id} = this.$route.query
    this.action = from == 'add' ? '/api/position' : '/api/position/update'

    if (from == 'update') {
      let result = await positionModel.findById(id)
      this.pos = result.data
    }
    this.from = this.$route.query.from
  }
}
</script>
<style lang="scss" scoped>
</style>
