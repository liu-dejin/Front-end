//不使用app.ues()定义的中间件  局部生效的中间件
//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//定义中间件函数
const mw1 = (req,res,next)=>{
  console.log('调用了第一个局部生效的中间件')
  next()
}
const mw2 = (req,res,next)=>{
  console.log('调用了第二个局部生效的中间件')
  next()
}
//创建路由  局部生效
//多个中间件 1,2 和[1,2]完全等价
// app.get('/',mw1,mw2,(req,res)=>{
//   res.send('home Page')
// })
app.get('/',[mw1,mw2],(req,res)=>{
  res.send('home Page')
})
app.get('/user',(req,res)=>{
  res.send('User page')
})

//调用app.listen()方法
app.listen(80,() => {
 console.log('http://127.0.0.1')
})

/* 
中间件的五个注意事项 
1.一定要在路由之前注册中间件
2.客户端发来的请求可以连续调用多个中间件
3.不要忘记next()
4.为了防止代码逻辑混淆 next()之后就不要写额外的代码了
5.连续调用多个中间件,他们之间是共享req,res对象的
*/