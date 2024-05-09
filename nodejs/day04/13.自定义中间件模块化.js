//解析 提交到服务器的表单数据
//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//导入封装的中间件
const customBodyParser = require('./custom-body-parser')
//注册封装的中间件
app.use(customBodyParser)

app.post('/user', (req, res) => {
  res.send(req.body)
})

//调用app.listen()方法
app.listen(80, () => {
  console.log('http://127.0.0.1')
})
