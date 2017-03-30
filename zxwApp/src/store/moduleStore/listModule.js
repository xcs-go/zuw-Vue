/**
 * Created by Administrator on 2017/3/18.
 */
import fetchJsonp from 'fetch-jsonp'

const state = {
  listData: []
}
// getters 获取到state中的数据的变化，会实时监听computed的变化
const getters = {
  listData (state) {
    return state.listData
  }
}
const mutations = {
  getListData (state, data) {
    console.log('修改数据')
    state.listData = data
  }
}
const actions = {
  getListDataAction (context) {
    fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php', {timeout: 20000})
      .then(res => res.json())
      .then(data => {
        // 数据请求成功，提交一个mutation(突变)
        console.log('数据请求成功')
        console.log(data)
        context.commit('getListData', data)
      }).catch(err => {
        console.log(err)
      })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
