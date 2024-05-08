const express = require('express')
const router = require('./03.router')
const app = express()
app.use('/api',router)
//app.use() 注册全局中间件
app.listen(80, (req, res) => {
  console.log('http://127.0.0.1')
})
