import axios from 'axios'
import { Toast } from 'vant'
// 创建axios实例 创建出来的示例
// 避免污染给axios实例
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 5000,
  headers: { platform: 'H5' }
})

// 自定义配置
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 开启loading 禁止背景点击(节流)
  Toast.loading({
    message: '加载中...',
    forbidClick: true, // 禁止背景点击
    loadingType: 'spinner', // 加载图标
    duration: 0 // 不会自动消失
  })

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么(默认axios会多包装一层data,需要响应拦截器处理)
  const res = response.data
  // console.log(res)
  if (res.status !== 200) {
    // 提示 Toast默认是单例模式 后面的toast调用了.会将打一个toast效果覆盖
    // 同时只能存在一个Toast
    Toast(res.message)
    // 抛出错误的promise
    return Promise.reject(res.message)
  } else {
    // 业务核心逻辑
    Toast.clear()
  }
  return res
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 导出实例
export default instance
