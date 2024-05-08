const http = require('http')
const fs  = require('fs')
const path = require('path')

const server = http.createServer()
server.on('request',(req,res)=>{
  //获取到客户端请求的url地址
  const url = req.url
  // clock/index.html
  // clock/index.css
  // clock/index.js
  //映射
  let fpath = ''
  if(url==='/'){
    fpath=path.join(__dirname,'./clock/index.html')
  }else{
    fpath=path.join(__dirname,'./clock',url)
  }
  // const fpath = path.join(__dirname,url)
  //中文乱码解决  但此处不能写会导致css失效
  // res.setHeader('Content-Type','text/html;charset=utf-8')

  //读取文章内容
  fs.readFile(fpath,'utf8',(err,data)=>{
    if(err) return res.end('404 notFound')
      res.end(data)
  })

})
server.listen(80,()=>{
  console.log('server running http://127.0.0.1')
})