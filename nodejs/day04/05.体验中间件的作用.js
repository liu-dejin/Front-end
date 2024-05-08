const express = require ('express')
const app = express()
//中间件就是一个函数
/* //定义了一个简单的中间件
const mw = (req,res,next)=>{
  console.log('这是一个中间件函数')
  //流转,转交给下一个中间件或路由
  next()
}

//将mw注册为mw全局生效的中间件
app.use(mw) */
app.use((req,res,next)=>{
  //获取请求到达服务器的时间
  const time = Date.now()
  //为req对象挂载自定义属性 把时间共享给后面所有路由
  req.startTime = time
  next()
})

app.get('/',(req,res)=>{
  console.log('调用了 / 路由')
  res.send('home page'+req.startTime)
})
app.get('/user',(req,res)=>{
  console.log('调用了 /user 路由')
  res.send('user page'+req.startTime)
})

app.listen(80,()=>{
  console.log('http://127.0.0.1')
})