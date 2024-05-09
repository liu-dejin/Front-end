//导入express模块
const express = require('express')

//创建express服务器实例
const app = express()

//导入解析数据的中间件
const parser = require('body-parser')
//全局注册中间件
app.use(parser.urlencoded({extended:false}))
//app.user(express.urlencoded({extended:false})) //与内部的一致

app.post('/user',(req,res)=>{
res.send('ok')
//没有配置任何解析表单数据的中间件 req.body默认等于undefined
console.log(req.body)
})

//调用app.listen()方法
app.listen(80,() => {
 console.log('http://127.0.0.1')
})