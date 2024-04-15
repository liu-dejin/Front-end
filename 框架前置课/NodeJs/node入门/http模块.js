const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    //响应头
    res.setHeader('Content-Type', 'text/plain;charset=utf-8')
    //响应体
    res.end('欢迎使用node的http模块')
})
//端口号
server.listen(3000, () => {
    console.log('web服务启动成功了')
})