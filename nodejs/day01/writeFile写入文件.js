const fs = require('fs')
// writeFile  文件路径,写入内容,回调函数
fs.writeFile('./files/2.txt', 'abc11d', (err) => {
  // console.log(err)  //如果文件写入成功 err值为null  写入失败返回错误对象
  if (err) {
    console.log('文件写入失败' + err.message)
  } else {
    console.log('文件写入成功')
  }
})
