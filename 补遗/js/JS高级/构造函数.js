function Pig(name, age) {
  ;(this.name = name), (this.age = age)
}
console.log(new Pig('佩奇', 6))

function Goods(name, price, count) {
  this.name = name
  this.price = price
  this.count = count
}

const mi = new Goods('小米', 1000, 2000)

console.log(mi)
