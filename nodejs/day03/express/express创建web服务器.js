const express = require('express')
//创建web服务器
const app = express()
//监听get和post请求
app.get('/user',(req,res)=>{
  //响应对象
  res.send({name:'zs',age:17,gender:'男'})
})
app.post('/user',(req,res)=>{
  //响应字符串
  res.send('post请求成功')
})
app.get('/',(req,res)=>{
  //获取客户端发来的查询参数  默认是一个空对象
  console.log(req.query)
  res.send(req.query)
})
app.get('/user/:id/:username',(req,res)=>{
  //req.params是动态匹配到的url参数 默认是一个空对象
  //冒号后面的名称是对象的属性名
  console.log(req.params)
  res.send(req.params)
})

app.listen(80,()=>{
  console.log('express已经启动 http://127.0.0.1')
})
