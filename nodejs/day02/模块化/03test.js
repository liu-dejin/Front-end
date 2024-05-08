//在外界使用require导入一个自定义模块 导入的成员 就是modules.export指向的对象
const m =  require('./自定义模块')
console.log(m)
/* 
{ nickname: '小黑', sayHi: [Function: sayHi] }
 */