import Vue from 'vue'
import Router from 'vue-router'

// 路由模块
import Detail from '../components/detail.vue'
import TabList from '../components/tabList.vue'
import Home from '../components/common/home.vue'
import List from '../components/common/list.vue'
import Cart from '../components/common/cart.vue'
import Mine from '../components/common/mine.vue'
import More from '../components/common/more.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tablist',
      name: 'tabList',
      component: TabList,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'list',
          name: 'list',
          component: List
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        },
        {
          path: 'mine',
          name: 'mine',
          component: Mine
        },
        {
          path: 'more',
          name: 'more',
          component: More
        }
      ]
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      redirect: 'tablist/home'
    }
  ]
})
