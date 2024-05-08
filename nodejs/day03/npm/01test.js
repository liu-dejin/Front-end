//导入格式化时间的模块
const TIME = require('./formatDate')
const dt = new Date()
const newDt = TIME.dateFormat(dt)
console.log(newDt)