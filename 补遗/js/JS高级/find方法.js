// find查找

// const arr = ['red', 'pink', 'blue']
// const re = arr.find(function (item) {
//   return item === 'blue'
// })
// console.log(re)

// const arr = [
//   {
//     name: '小米',
//     price: 19999
//   },
//   {
//     name: '华为',
//     price: 19998
//   }
// ]

// // 查找第一个匹配的元素
// const mi = arr.find(function (item) {
//   return item.name === '小米'
// })

// console.log(mi)

// every每一个都符合 符合返回true 不符合返回false
const arr1 = [10, 20, 30]
const flag = arr1.every((item) => item > 0)
console.log(flag)
