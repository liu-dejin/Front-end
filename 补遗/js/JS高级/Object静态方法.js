// const o = { uname: 'ldj', age: 18 }
// console.log(Object.keys(o)) //[ 'uname', 'age' ]
// console.log(Object.values(o)) //[ 'ldj', 18 ]

const o = {
  uname: 'ldj',
  age: 18
}
const oo = {}
Object.assign(oo, o)
console.log(oo) //{ uname: 'ldj', age: 18 }

Object.assign(o, { gender: '女' })
console.log(o)  //{ uname: 'ldj', age: 18, gender: '女' }   追加
