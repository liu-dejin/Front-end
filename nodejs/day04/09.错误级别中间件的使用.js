//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//定义路由
app.get('/',(req,res)=>{
  //人为制造错误
  throw new Error('服务器内部错误')
  res.send('Home page')
})
//错误级别中间件,防止程序崩溃
//错误中间件 一定要注册到所有路由之后
app.use((err,req,res,next)=>{
  console.log('发生了错误'+err.message)
  res.send('Error' + err.message)
})

//调用app.listen()方法
app.listen(80,() => {
 console.log('http://127.0.0.1')
})