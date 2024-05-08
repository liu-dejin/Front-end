const http = require('http')
//创建web实例
const server = http.createServer()
//绑定request事件 监听客户端的请求
server.on('request',(req,res)=>{
  console.log('someone visit our webserver')
})
server.listen('2002',()=>{
  console.log('server running at http://127.0.0.1:2002')
})