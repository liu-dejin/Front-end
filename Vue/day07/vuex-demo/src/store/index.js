// 放vuex的核心代码
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

// 插件安装
Vue.use(Vuex)

// 创建仓库
const store = new Vuex.Store({
  // 严格模式(有利于初学者检测代码) 上线时不需要开启
  strict: true,
  // 1.通过state提供数据,所有组件均可共享数据
  state: {
    title: '大标题',
    count: 18,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 2.定义mutations 提供修改数据的方法
  mutations: {
    // 所有的mutations,第一个参数 都是state
    // addCount (state) {
    //   state.count += 1
    // },
    // addFive (state) {
    //   state.count += 5
    // },
    // changeTitle (state) {
    //   state.title = '小标题'
    // }

    // 传参进来  提交载荷 有且只有一个这样的参数,如果有多个参数要传，可以传递对象
    addCount (state, obj) {
      state.count += obj.count
    },
    subCount (state, n) {
      state.count -= n
    },
    changeTitle (state, newTitle) {
      state.title = newTitle
    },
    changeCount (state, newCount) {
      state.count = newCount
    }
  },
  // 3.actions处理异步
  // 不能直接操作仓库,还是需要使用commit
  actions: {
    // context上下文.(此处当成仓库)
    // context.commit('mutation名字',额外参数)
    changeCountAction (context, num) {
      // settimeout模拟异步,以后大部分时间是发请求
      setTimeout(() => {
        context.commit('changeCount', num)
      }, 1000)
    }
  },
  // 4.getters类似于计算属性
  getters: {
    // 形参的第一个参数是state,
    // 必须有返回值 返回值就是getters的值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }

  },
  // modeles 模块
  modules: {
    user,
    setting
  }
})

export default store
