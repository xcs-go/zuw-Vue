/**
 * Created by Administrator on 2017/3/19.
 */
import fetchJsonp from 'fetch-jsonp'
const state = {
  cartList: []
}

const getters = {
  cartList (state) {
    console.log(111111)
    console.log(state.cartList)
    return state.cartList
  }
}

const mutations = {
  getCartList (state, data) {
    state.cartList = data
  }
}

const actions = {
  showCartAction (context, params) {
    // 发起请求
    fetchJsonp('http://datainfo.duapp.com/shopdata/getCar.php?userID=' + params.userID, {timeout: 20000})
      .then(res => res.json())
      .then(data => {
        context.commit('getCartList', data)
      }).catch(err => {
        console.log(err)
      })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
