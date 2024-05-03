import { createApp } from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'

//导入持久化插件
import persist from 'pinia-plugin-persistedstate'


const pinia =createPinia() //创建pinia实例
const app = createApp(App)
app.use(pinia.use(persist))  //pinia插件安装配置
app.mount('#app')//视图的挂载
