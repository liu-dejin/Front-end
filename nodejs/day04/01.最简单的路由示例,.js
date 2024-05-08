const express = require('express')
const app = express()
// 挂载路由
app.get('/',(req,res)=>{
  res.send('hello')
})
app.post('/',(req,res)=>{
  res.send('PostRequst')
})
app.listen(80,()=>{
  console.log('server running to http://127.0.0.1')
})