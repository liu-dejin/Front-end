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