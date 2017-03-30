/**
 * Created by Administrator on 2017/3/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 模块依赖
import listModule from './moduleStore/listModule'
import detailModule from './moduleStore/detailModule.js'
import cartModule from './moduleStore/cartModule.js'

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    list: listModule,
    detail: detailModule,
    cart: cartModule
  }
})
export default store
