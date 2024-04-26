// user模块
const state = {
  userInfo: {
    name: 'njj',
    age: 18
  },
  score: 80
}
const mutations = {
  setUser (state, newUserInfo) {
    state.userInfo = newUserInfo
  }
}
const actions = {
  setUserSecond (context, newUserInfo) {
    setTimeout(() => {
      context.commit('setUser', newUserInfo)
    }, 1000)
  }
}
const getters = {
  UpperCaseName (state) {
    // 分模块后,state指代子模块的state
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
