import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'
import ArticleDetail from '@/views/ArticleDetail'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/article',
      //children 嵌套子路由
      children: [
        {
          path: '/Article',
          component: Article,
        },
        {
          path: '/Collect',
          component: Collect,
        },
        {
          path: '/like',
          component: Like,
        },
        {
          path: '/User',
          component: User,
        },
      ],
    },
    {
      path: '/detail/:id',
      component: ArticleDetail,
    },
  ],
})

export default router
