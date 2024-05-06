import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant-ui
import '@/utils/vant-ui'
import '@/style/common.less'

// import { Toast } from 'vant'
// Toast('你好')

/* 全部导入
import Vant from 'vant'
import 'vant/lib/index.css'
// 插件初始化,内部会将所有组件导入注册
Vue.use(Vant) */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
