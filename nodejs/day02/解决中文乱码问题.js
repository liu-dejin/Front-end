const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
  res.setHeader('Content-Type','text/html;charset=utf-8')
  //定义一个中文内容
  const str = `您请求的url地址是${req.url},method类型为${req.method}`
  // 响应给客户端
  res.end(str)
})
server.listen(80, () => {
  console.log('server running at http://127.0.0.1')
})
