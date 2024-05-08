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
  console.log('全局中间件的简化形式')
  next()
})

app.get('/',(req,res)=>{
  console.log('调用了 / 路由')
  res.send('home page')
})
app.get('/user',(req,res)=>{
  console.log('调用了 /user 路由')
  res.send('user page')
})

app.listen(80,()=>{
  console.log('http://127.0.0.1')
})