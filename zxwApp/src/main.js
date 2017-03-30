// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

// 项目UI插件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 静态资源文件（rem文件/样式重置表文件）
import rem from '../static/script/rem.js'
import restCss from '../static/style/reset.css'

// 全局使用相关资源
Vue.use(rem)
Vue.use(restCss)
Vue.use(MintUI)
/* var store = new Vuex.Store() */

// 定义一个观察者，用来处理组件之间的通信
/* let Event = new Vue()
console.log(13234235)
console.log(Event) */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
