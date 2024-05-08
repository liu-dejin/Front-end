const path = require('path')
const fs = require('fs')
//../会抵消 前面的路径
// const pathStr = path.join('/a','/b/c','../','./d','e')
// console.log(pathStr)  //\a\b\d\e  /c被抵消了(../返回上一层抵消掉了)

// fs.readFile(__dirname+'/files/1.txt')  兼容性更好 可以自己增删./
fs.readFile(path.join(__dirname,'/files/1.txt'),'utf8',(err,data)=>{
  if (err) {
    console.log(err.message)
  }
  console.log(data)
})