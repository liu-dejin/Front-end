const path = require('path')
const fpath = '/a/b/c/index.js'
//获取文件名
// const fname = path.basename(fpath)
// console.log(fname)
const fname = path.basename(fpath,'.js')
console.log(fname)
