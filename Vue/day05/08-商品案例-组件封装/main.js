import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//封装全局指令focus
Vue.directive('focus', {
  //指令所在的dom,被插入页面中触发
  inserted(el) {
    el.focus()
  },
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
