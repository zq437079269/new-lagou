<template>
  <div class="wrapper">

    <!-- Main Header -->
    <lagou-header></lagou-header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="../assets/images/user2-160x160.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>Alexander Pierce</p>
            <!-- Status -->
            <a href="#"><i class="fa fa-circle text-success"></i> 在线</a>
          </div>
        </div>

        <!-- search form (Optional) -->
        <form action="#" method="get" class="sidebar-form">
          <div class="input-group">
            <input type="text" name="q" class="form-control" placeholder="搜索...">
                <span class="input-group-btn">
                  <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                  </button>
                </span>
          </div>
        </form>
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
          <li class="header">导航菜单</li>
          <!-- Optionally, you can add icons to the links -->

          <router-link tag="li" active-class='active' :to="{name: 'home'}">
            <a href="#"><i class="fa fa-link"></i> <span>首页</span></a>
          </router-link>

          <router-link tag="li" active-class='active' :to="{path: '/positionlist'}">
            <a href="#"><i class="fa fa-link"></i> <span>职位管理</span></a>
          </router-link>

          <li class="treeview">
            <a href="#"><i class="fa fa-link"></i> <span>我的管理</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
              </span>
            </a>
            <ul class="treeview-menu">
              <li><a href="#">投递管理</a></li>
              <li><a href="#">面试管理</a></li>
              <li><a href="#">邀约管理</a></li>
              <li><a href="#">收藏管理</a></li>
            </ul>
          </li>
        </ul>
        <!-- /.sidebar-menu -->
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <bread-crumb :title="title" :subtitle="subtitle"></bread-crumb>

      <!-- Main content -->
      <section><router-view></router-view></section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="pull-right hidden-xs">
        拉勾网管理系统V1.0
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2018 <a href="#">千锋GP6</a>.</strong> All rights reserved.
    </footer>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane active" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">近期活动</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript::;">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon 的生日</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading"> 任务进度</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript::;">
                <h4 class="control-sidebar-subheading">
                   自定义模板设计
                  <span class="pull-right-container">
                    <span class="label label-danger pull-right">70%</span>
                  </span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->
        <!--  统计信息选项卡内容 -->
        <div class="tab-pane" id="control-sidebar-stats-tab"> 统计信息选项卡内容</div>
        <!-- /.tab-pane -->
        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">常规设置项</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                报告面板用法
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
               常规设置选项的相关信息
              </p>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>

</template>
<script>
import LagouHeader from './Header.vue'
import BreadCrumb from './BreadCrumb.vue'
export default {
  name: "Index",
  data: () => ({
    title: '',
    subtitle: ''
  }),
  components: {
    LagouHeader,
    BreadCrumb
  },
  mounted() {
    this.changeBreadCramb()
  },
  updated() {
    this.changeBreadCramb()
  },
  methods: {
    changeBreadCramb() {
      // const match = {
      //   '/home': ['首页', '欢迎信息'],
      //   '/position': ['职位管理', '列表'],
      //   '/position_search': ['职位管理', '列表'],
      //   '/position_save': ['职位管理', '添加'],
      //   '/position_update': ['职位管理', '编辑']
      // }
      let path = this.$route.path
      switch (path) {
        case '/home':
          this.title = '首页',
          this.subtitle = '欢迎信息'
          break;
        case '/positionlist':
          this.title = '职位管理',
          this.subtitle = '列表'
          break;
        default:
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
