function getSum() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  console.log(sum)
}
getSum(1, 2, 3, 4, 5, 6, 7)
