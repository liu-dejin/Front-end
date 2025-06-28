// const arr = [1, 3, 5]
// let result = arr.reduce(function (prev, current) {
//   return prev + current
// })
// console.log(result)    9

const arr = [1, 3, 5]
let result = arr.reduce((prev, current) => prev + current, 10) //加上初始值
console.log(result)
