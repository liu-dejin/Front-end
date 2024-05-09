// express.static 快速托管静态资源的内置中间件，例如：HTML 文件、图片、CSS 样式等（无兼容性）
// express.json 解析 JSON 格式的请求体数据（有兼容性，仅在4.16.0+ 版本中可用）
// express.urlencoded 解析 URL-encoded 格式的请求体数据（有兼容性，仅在4.16.0+ 版本中可用）
//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//除了错误级别的中间件 必须在路由之前配置
//express.json 解析表单中的json格式数据
app.use(express.json())
//express.urlencoded  解析表单中url-encoded格式的数据
app.use(express.urlencoded({extended:false}))

app.post('/user',(req,res)=>{
  //req.body接受 客户端传过来的请求
  //默认不配置解析表单数据的中间件 req.body默认是undefined
  console.log(req.body)
  res.send('ok')
})
app.post('/book',(req,res)=>{
  // 可以通过req.body来获取JSON表单数据和url-encode格式的数据
  console.log(req.body)
  res.send('ok')
})
//调用app.listen()方法
app.listen(80,() => {
 console.log('http://127.0.0.1')
})