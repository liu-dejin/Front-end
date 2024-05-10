/* 
⣿⣿⣿⠟⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢋⣩⣉⢻
⣿⣿⣿⠀⣿⣶⣕⣈⠹⠿⠿⠿⠿⠟⠛⣛⢋⣰⠣⣿⣿⠀⣿
⣿⣿⣿⡀⣿⣿⣿⣧⢻⣿⣶⣷⣿⣿⣿⣿⣿⣿⠿⠶⡝⠀⣿
⣿⣿⣿⣷⠘⣿⣿⣿⢏⣿⣿⣋⣀⣈⣻⣿⣿⣷⣤⣤⣿⡐⢿
⣿⣿⣿⣿⣆⢩⣝⣫⣾⣿⣿⣿⣿⡟⠿⠿⠦⠀⠸⠿⣻⣿⡄⢻
⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣾⣿⣿⣿⣿⠇⣼
⣿⣿⣿⣿⣿⣿⡄⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⣰
⣿⣿⣿⣿⣿⣿⠇⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣿
⣿⣿⣿⣿⣿⠏⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿
⣿⣿⣿⣿⠟⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿
⣿⣿⣿⠋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄⣿
⣿⣿⠋⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸
*/

//导入mysql模块
const mysql = require('mysql2')
//简历连接
const db = mysql.createPool({
  host: '127.0.0.1', //数据库ip
  port: '3306',
  user: 'root', //数据库账号
  password: '123456', //数据库密码
  database: 'my_db_01'  //指定操作数据库
})
//测试mysql是否正常工作
// db.query('SELECT 1', (err, results) => {
//   if (err) return console.log(err.message)
//   //成功执行sql
//   console.log(results)
// })

/* //查询user表所有的数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, results) => {
//   //查询数据失败
//   if (err) return console.log(err.message)
//   //查询数据成功
//   //select执行的结果是数组
//   console.log(results)
// }) */

/* 
//插入数据
// users表内新值一条数据,username为Spider-man password为pcc123
const user = { username: 'Spider-Man', password: 'pcc123' }
//定义sql语句
const sqlStr = 'insert into users (username,password) values (?,?)'
//执行sql
//使用数组的形式依次?占位符提供真正的值
db.query(sqlStr, [user.username, user.password], (err, resules) => {
  if (err) return console.log(err.message)
  //注意如果sql语句是insert into results 是一个对象
  //可以通过affectedRows属性判断是否成功
  if (resules.affectedRows === 1) {
    console.log('数据插入成功')
  }
}) */

/* //插入数据的便捷方式
const user = { username: 'ldj', password: 123 }
//待执行sql语句
const sqlStr = 'insert into users set ?'
//sql语句
db.query(sqlStr, user, (err, resules) => {
  if (err) return console.log(err.message)
  if (resules.affectedRows === 1) {
    console.log('插入成功')
  }
}) */

//更新 用户信息
/* const user = { id: 2, username: 'aaa', password: '000' }
//预处理sql
const sqlStr = 'update users set username=?,password=? where id=?'
//执行sql
db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
  if (err) return console.log(err.message)
  //更新了update 语句之后 执行了的结果也是一个对象 affactedRows 用于判断是否成功
  if (results.affectedRows === 1) {
    console.log('更新成功')
  }
}) */

/* //更新数据的便捷方式  数据对象的每个属性和数据表字段一一对应
const user = { id: 32, username: 'aa111a', password: '0001' }
//sql语句
const sqlStr = 'update users set ? where id=?'
//执行sql语句
db.query(sqlStr, [user, user.id], (err, results) => {
  if (err) console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('更新成功')
  }
}) */

/* //删除数据  根据id删除数据
const sqlStr = 'DELETE FROM USERS WHERE id=?'
// SQL语句多个占位符 使用数据为每个占位符指定具体的值
//  如果SQL只有一个占位符则可省略占位符
db.query(sqlStr, 32, (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('数据删除成功')
  }
})
 */

//标记删除  status状态字段 update语句标记当前状态是否被删除 
const sqlStr = 'update users set status=? where id=?'
db.query(sqlStr, [1, 1], (err, results) => {
  if (err) return console.log(err.message)
  if (results.affectedRows === 1) {
    console.log('标记删除成功')
  }
})
