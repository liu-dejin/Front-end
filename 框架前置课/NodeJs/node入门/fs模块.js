//导入fs模块
const fs = require('fs')
//写入文件
fs.writeFile('./test.txt', 'hello,nodejs', (err) => {
    if (err) console.log(err)
    else console.log('写入成功')
})
//读取文件内容
fs.readFile('./test.txt', (err, data) => {
    if (err) console.log(err)
    //data是buffer16进制数据流对象
    else console.log(data.toString())
})