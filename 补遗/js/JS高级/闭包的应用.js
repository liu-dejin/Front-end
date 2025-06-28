//数据私有化

// i是全局变量,容易被修改
// let i = 0
// function fn() {
//   i++
//   console.log(i)
// }

// 优化写法 闭包
function outher() {
  let i = 0
  function fn() {
    i++
    console.log(i)
  }
  return fn
}
const fnn = outher()
