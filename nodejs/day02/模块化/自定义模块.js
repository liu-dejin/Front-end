//默认情况下 自定义模块module.exports = {}
// const age = 20
// 向module.exports挂载一个属性
module.exports.username='zs'
// 向module.exports挂载一个方法sayHello
module.exports.sayHello = ()=>{
  console.log('hello')
}
// module.exports.age=age

//覆盖旧对象
module.exports={
  nickname: '小黑',
  sayHi(){
    console.log('hi')
  }
}