import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // VueRouter插件初始化

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    //重定向path:'a路径',redirect:'/路径'
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/search/:words?', component: Search },
  ],
})

export default router
