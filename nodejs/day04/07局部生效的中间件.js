//不使用app.ues()定义的中间件  局部生效的中间件
//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//定义中间件函数
const mw1 = (req,res,next)=>{
  console.log('调用了中间件响应的路由')
  next()
}
//创建路由  mw1局部生效
app.get('/',mw1,(req,res)=>{
  res.send('home Page')
})
app.get('/user',(req,res)=>{
  res.send('User page')
})

//调用app.listen()方法
app.listen(80,() => {
 console.log('http://127.0.0.1')
})

