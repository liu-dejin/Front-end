const express = require('express')
const router = express.Router()

//挂载对应路由
//get接口
router.get('/get', (req, res) => {
  //通过req.query获取客户端通过查询字符串 发送到服务器的数据
  const query = req.query
  res.send({
    status: 0, //0表示成功 1表示失败
    msg: 'GET请求成功!', //状态的描述
    data: query
  })
})
//post接口
router.post('/post', (req, res) => {
  //通过req.body获取请求体包含的url-encode格式数据
  const body = req.body
  //通过res.send()方法,向客户端响应结果
  res.send({
    status: 0,
    msg: 'POST请求成功',
    data: body
  })

})
//delete接口
router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'delete请求成功'
  })
})

module.exports = router