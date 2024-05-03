// new Vue() => createApp()
// createRouter() createStore()
//确保了组件的独立性
import { createApp } from 'vue'
import App from './App.vue'

//.mount设置挂载点(ID为app的盒子)
createApp(App).mount('#app')
