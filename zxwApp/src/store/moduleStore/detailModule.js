/**
 * Created by Administrator on 2017/3/18.
 */
import fetchJsonp from 'fetch-jsonp'

const state = {
  detaile: {}
}
const getters = {
  detaile (state) {
    return state.detaile
  }
}

const actions = {
  getDetaileDataAction (context, params) {
    fetchJsonp('http://datainfo.duapp.com/shopdata/getGoods.php?goodsID=' + params.id, {timeout: 20000})
      .then(res => res.json())
      .then(data => {
        // 发起一个mutation
        context.commit('getDetaileData', data)
      }).catch(err => {
        console.log(err)
      })
  }
}

const mutations = {
  getDetaileData (state, data) {
    state.detaile = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
