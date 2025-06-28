// const date = new Date()
// console.log(date.getTime())

// console.log(+new Date())

// console.log(Date.now())

// console.log('-----------------------')
// console.log(+new Date('2022-4-1 18:30:10'))

// // 元字符
// // 元字符
// // 量词 * 类似 >=0 次
// console.log(/^哈$/.test('哈')) // true
// console.log(/^哈*$/.test('')) // true
// console.log(/^哈*$/.test('哈')) // true
// console.log(/^哈*$/.test('哈哈')) // true
// console.log(/^哈*$/.test('二哈很傻')) //  false
// console.log(/^哈*$/.test('哈很傻')) //  false
// console.log(/^哈*$/.test('哈很哈')) // false
// console.log('------------------')

// // //  量词 + 类似 >=1 次
// console.log(/^哈$/.test('哈')) // true
// console.log(/^哈+$/.test('')) // false
// console.log(/^哈+$/.test('哈')) // true
// console.log(/^哈+$/.test('哈哈')) // true
// console.log(/^哈+$/.test('二哈很傻')) //  false
// console.log(/^哈+$/.test('哈很傻')) //  false
// console.log(/^哈+$/.test('哈很哈')) // false
// console.log('------------------')

// // //  量词 ? 类似  0 || 1
// console.log(/^哈?$/.test('')) // true
// console.log(/^哈?$/.test('哈')) // true
// console.log(/^哈?$/.test('哈哈')) // false
// console.log(/^哈?$/.test('二哈很傻')) //  false
// console.log(/^哈?$/.test('哈很傻')) //  false
// console.log(/^哈?$/.test('哈很哈')) // false

// // 量词 {n} 写几，就必须出现几次
// console.log(/^哈{4}$/.test('哈'))
// console.log(/^哈{4}$/.test('哈哈'))
// console.log(/^哈{4}$/.test('哈哈哈'))
// console.log(/^哈{4}$/.test('哈哈哈哈'))
// console.log(/^哈{4}$/.test('哈哈哈哈哈'))
// console.log(/^哈{4}$/.test('哈哈哈哈哈哈'))
// console.log('------------------')

// // 量词 {n,}   >=n
// console.log(/^哈{4,}$/.test('哈'))
// console.log(/^哈{4,}$/.test('哈哈'))
// console.log(/^哈{4,}$/.test('哈哈哈'))
// console.log(/^哈{4,}$/.test('哈哈哈哈'))
// console.log(/^哈{4,}$/.test('哈哈哈哈哈'))
// console.log(/^哈{4,}$/.test('哈哈哈哈哈哈'))
// console.log('------------------')

// // 量词 {n,m}  逗号左右两侧千万不能有空格    >=n && <= m
// console.log(/^哈{4,6}$/.test('哈'))
// console.log(/^哈{4,6}$/.test('哈哈'))
// console.log(/^哈{4,6}$/.test('哈哈哈'))
// console.log(/^哈{4,6}$/.test('哈哈哈哈'))
// console.log(/^哈{4,6}$/.test('哈哈哈哈哈'))
// console.log(/^哈{4,6}$/.test('哈哈哈哈哈哈'))
// console.log(/^哈{4,6}$/.test('哈哈哈哈哈哈哈'))
// console.log('------------------')
console.log(/^哈{4}$/.test('哈哈哈哈'))

const str = 'java11111111'
const re = str.replace(/javA/gi, '前端')
console.log(re)

const div = document.querySelector('div')
div.innerHTML = tx.value.replace(/激情/gi, '**')
