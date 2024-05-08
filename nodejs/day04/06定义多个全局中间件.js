const express = require('express')
const app = express()
//定义的先后顺序依次调用
//第一个全局中间件
app.use((req,res,next)=>{
  console.log('调用了第一个中间件')
  next()
})
//第二个中间件
app.use((req,res,next)=>{
  console.log('调用了第二个中间件')
  next()
})
//路由
app.get('/user',(req,res)=>{
  console.log('user page')
})
app.listen(80,()=>{
  console.log('running to http://127.0.0.1')
})