const qs = require('querystring')
const bodyParser = req.on('end', () => {
  //定义中间件具体的业务逻辑
  let str = '' //初始化数据 存储客户端传过来的数据
  req.on('data', (chunk) => {
    str += chunk
  })
  //str存放的是完整请求体数据
  console.log(str)
  //字符串请求数据 解析成对象格式 querystring
  const body = qs.parse(str)
  req.body = body
  next()  //转到下游使用  共用一份req,res
})
module.exports(bodyParser)