const http = require('http')
const server = http.createServer()
//req是请求对象 和客户端相关的对象和属性
server.on('request',(req,res)=>{
  //req.url是 客户端请求的地址
  const url = req.url
  //req.method是客户端请求的method类型
  const method =  req.method
  const str = `your request url is ${url},and request method is ${method}`
  console.log(str)
  //调用res.end 响应数据
  res.end(str)
})
server.listen(8082,()=>{
  console.log('server running at http://127.0.0.1:8082')
})