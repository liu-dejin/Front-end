/**
 * 目标：基于 express 软件包，开发 Web 服务返回资源给客户端
 */

const express = require('express')
const server = express()

//监听get请求
server.get('/', (req, res) => {
    res.send('你好世界')
})

//其他路径设置访问不存在
server.get('*',(req, res)=>{
    // 修改状态码
    res.status(404)
    res.send('您访问的资源不存在')
})

//开启服务,设置监听端口号
server.listen(3000, () => {
    console.log('服务已启动')
})