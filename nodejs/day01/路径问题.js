const fs = require('fs')

// fs.readFile('./files/1.txt','utf8',(err,data)=>{
//   // ./ ../ 以执行node命令的路径拼接 故而出错
//   //使用完整的文件存放路径解决
//   if (err) {
//     console.log('文章读取失败'+err.message)
//   }else{
//     console.log('读取成功'+data)
//   }
// })

//移植性差,不利于维护
// fs.readFile('D:\\place_on_file\\Code\\前端学习\\nodejs\\ay01\\files\\1.txt','utf8',(err,data)=>{
//   // ./ ../ 以执行node命令的路径拼接 故而出错
//   //使用完整的文件存放路径解决
//   if (err) {
//     console.log('文章读取失败'+err.message)
//   }else{
//     console.log('读取成功'+data)
//   }
// })

//dir_name表示当前文件所处的目录
console.log(__dirname)  //d:\place_on_file\Code\前端学习\nodejs\day01
fs.readFile(__dirname+'/files/1.txt','utf8',(err,data)=>{
  // ./ ../ 以执行node命令的路径拼接 故而出错
  //使用完整的文件存放路径解决
  if (err) {
    console.log('文章读取失败!'+err.message)
  }else{
    console.log('读取成功!'+data)
  }
})