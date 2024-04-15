/**
 * 目标：编写 web 服务，监听请求的是 /index.html 路径的时候，返回 dist/index.html 时钟案例页面内容
 * 步骤：
 *  1. 基于 http 模块，创建 Web 服务
 *  2. 使用 req.url 获取请求资源路径，并读取 index.html 里字符串内容返回给请求方
 *  3. 其他路径，暂时返回不存在提示
 *  4. 运行 Web 服务，用浏览器发起请求
 */

const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    if (req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'dist/index.html'), (err, data) => {
            if (err) console.log(err)
            else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data.toString())
            }
        })
    } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end('你访问的资源路径不存在')
    }
})
server.listen(8080, () => {
    console.log('web服务启动了')
})