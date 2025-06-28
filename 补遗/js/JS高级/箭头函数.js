// const fn = function () {
//   console.log('普通函数')
// }

// fn()
// const fn1 = () => {
//   console.log('箭头函数')
// }
// fn1()

// const fn2 = (x) => {
//   console.log(x)
// }

// fn2(2)

// const fn3 = (x) => console.log(x)
// fn3(2)

// const fn4 = (x) => x + x
// console.log(fn4(5))

// // 直接返回对象
// const fn5 = (uname) => ({ uname: uname })
// console.log(fn5('ldj'))

// 箭头函数的剩余参数
// const getSum = (...arr) => {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   return sum
// }
// const result = getSum(1, 2, 3, 4)
// console.log(result)

// this指向
console.log(this)
function fn() {
  console.log(this)
}
fn()

const obj = {
  name: 'andy',
  sayHi: function () {
    console.log(this)
  }
}
obj.sayHi()
