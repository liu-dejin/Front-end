// function outher() {
//   let a = 1
//   function inner() {
//     console.log(a)
//   }
//   inner()
// }
// outher()

// 常见的闭包的形式   外部可以访问使用 函数内部的变量
function outher() {
  let a = 10
  function fn() {
    console.log(a)
  }
  return fn
}
const fnn = outher()
fnn()

// 常见的写法2
// function outher() {
//   let a = 10
//   return function fn() {
//     console.log(a)
//   }
// }
// const a1 = outher()
// a1()
