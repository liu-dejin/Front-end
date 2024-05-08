const fs = require('fs')
const path = require('path')
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

//读取文件
fs.readFile(path.join(__dirname, './index.html'), 'utf8', (err, data) => {
  if (err) return console.log('读取失败' + err.message)
  //对应的方法
  resolveCSS(data)
  resolveJs(data)
  resolveHtml(data)
})

function resolveCSS(htmlStr) {
  const r1 = regStyle.exec(htmlStr)
  const newCss = r1[0].replace('<style>', '').replace('</style>', '')
  fs.writeFile(path.join(__dirname, './clock/index.css'), newCss, (err) => {
    if (err) {
      console.log('写入css失败' + err.message)
    } else {
      console.log('写入css成功')
    }
  })
}
function resolveJs(htmlStr) {
  const r2 = regScript.exec(htmlStr)
  const newJs = r2[0].replace('<script>', '').replace('</script>', '')
  fs.writeFile(path.join(__dirname, './clock/index.js'), newJs, (err) => {
    if (err) {
      console.log('写入js失败' + err.message)
    } else {
      console.log('写入js成功')
    }
  })
}
function resolveHtml(htmlStr) {
  //将css和js改成外联式
  const newHtml = htmlStr
    .replace(regStyle, '<link rel="stylesheet" href="./index.css">')
    .replace(regScript, '<script src="./index.js"></script>')
  fs.writeFile(path.join(__dirname, './clock/index.html'), newHtml, (err) => {
    if (err) {
      console.log('写入html失败' + err.message)
    } else {
      console.log('写入html成功')
    }
  })
}
