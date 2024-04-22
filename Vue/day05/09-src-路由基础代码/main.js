import Vue from 'vue'
import App from './App.vue'

/* 
路由的使用步骤 5+2
下载vue-route
引入
安装注册Vue.use
创建路由对象
注入到new Vue 建立关联

2个核心步骤
1.建组件,配规则
2.准备导航链接,配置路由出口(匹配组件展示的位置)
*/
import Find from './views/Find'
import My from './views/My'
import Friend from './views/Friend'

import VueRouter from 'vue-router'

Vue.use(VueRouter) //vue-route插件初始化

//创建路由对象
const router = new VueRouter({
  //路由规则  一条路由对象  {path:路径,component:组件}
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ],
})

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router, //注入到new Vue 建立关联
}).$mount('#app')
