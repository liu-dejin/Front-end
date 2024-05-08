// console.log(exports)
// console.log(module.exports)

// console.log(exports===module.exports) //true 指向的是同一个对象

//export 简化写法
const username = 'zs'
module.exports.username=username
exports.age=18
exports.sayHello = function () {
  console.log('大家好')
}


//完整写法优于简略写法  永远都是都是module.exports
//使用误区 require 得到的永远是module.exports指向的对象
/* exports.username='zs'
module.exports={
  genderL:'男',
  age:'18'
} */
// {
//   genderL:'男',
//   age:'18'
// }

/* 
exports.username = 'zs'
module.exports.age=17
 */
// {
//   username:'zs' ,age:17
// }

//为了防止混淆 不要在一个模块内使用exports和module.export