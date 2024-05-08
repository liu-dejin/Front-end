//导入fs模块
const fs = require('fs')
//调用fs.readFile方法读取文件内容
fs.readFile('./files/1.txt','utf8',function(err,data){
  //打印失败的结果
  if(err){
    console.log('读取失败'+err.message)  //失败err对象 此时data为undefined
    return
  }else{
    //打印成功的结果
    console.log('文件读取成功,内容为'+data)
  }
})