const express = require('express')
const app =express()

//express.static 托管静态资源   先后依此渲染
app.use('/abc',express.static('./file'))  //挂载路径前缀
app.use(express.static('./clock'))

app.listen(80,()=>{
  console.log('服务已启动 http://127.0.0.1')
})