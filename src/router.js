import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Home from './views/Home.vue'
import PositionList from './views/PositionList.vue'
import AddAndUpdate from './views/AddAndUpdate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'positionlist',
          redirect: '/positionlist/0/10'
        },
        {
          path: 'positionlist/:start/:count',
          name: 'positionlist',
          component: PositionList
        },
        {
          path: 'addandupdate',
          name: 'addandupdate',
          component: AddAndUpdate
        }
      ]
    }
  ]
})
