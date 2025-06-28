//函数提升
// fn()
// function fn() {
//   console.log(111)
// }

fn()
var fn = function fn() {
  console.log('函数表达式不提升')
}
