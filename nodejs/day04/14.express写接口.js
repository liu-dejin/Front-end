//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//配置解析表单数据的中间件
app.use(express.urlencoded({ extends: false }))

//cors之前配置JSONP接口
app.get('/api/jsonp', (req, res) => {
  //得到一个函数
  const funcName = req.query.callback
  //准备数据
  const data = { name: 'zs', age: 18 }
  //拼接一个函数的调用
  const scriptStr = `${funcName}(${JSON.stringify(data)})`
  //响应给客户端
  res.send(scriptStr)
})

//一定要在路由之前,配置cors 解决跨域
const cors = require('cors')
app.use(cors())

//导入路由模块
const router = require('./apiRouter')
//路由模块注册到app上
app.use('/api', router)

//调用app.listen()方法
app.listen(80, () => {
  console.log('Express server running at http://127.0.0.1')
})