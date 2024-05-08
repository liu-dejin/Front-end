const fs = require('fs')
fs.readFile('./成绩.txt','utf8',(err,data)=>{
if (err) {
  console.log('读取文件失败'+err.message)
}else{
  console.log('读取成功'+data)
}

//1数据按照空格分割
const arrOld = data.split(' ')
console.log(arrOld)
//2循环分割后的数组
const arrNew = []
arrOld.forEach(item=>{
  arrNew.push(item.replace('=',': '))
})
console.log(arrNew)
//3新数组的每一项进行合并,得到一个新的字符串
const newStr = arrNew.join('\r\n')
console.log(newStr)

//调用fs.writeFile() 
fs.writeFile('./files/成绩-ok.txt',newStr,err=>{
  if(err){
    console.log('文件写入失败'+err.message)
  }
  console.log('写入成功')
})
})