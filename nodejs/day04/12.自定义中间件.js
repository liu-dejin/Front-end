//解析 提交到服务器的表单数据
//导入express模块
const express = require('express')

const qs = require('querystring')
//创建express服务器实例
const app = express()

//解析表单数据的中间件
app.use((req, res, next) => {
  //定义中间件具体的业务逻辑
  let str = '' //初始化数据 存储客户端传过来的数据
  req.on('data', (chunk) => {
    str += chunk
  })
  req.on('end', () => {
    //str存放的是完整请求体数据
    console.log(str)
    //字符串请求数据 解析成对象格式 querystring
    const body = qs.parse(str)
    req.body = body
    next()  //转到下游使用  共用一份req,res
  })

})

app.post('/user', (req, res) => {
  res.send(req.body)
})

//调用app.listen()方法
app.listen(80, () => {
  console.log('http://127.0.0.1')
})
