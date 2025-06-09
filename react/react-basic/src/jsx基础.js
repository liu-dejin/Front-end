// 项目的根组件
//APP->index.js ->public/index.html(App)
// const count = 100
// function getName() {
//   return 'jack'
// }
// const list = [
//   { id: 1, name: 'jack' },
//   { id: 2, name: 'tom' },
//   { id: 3, name: 'lucy' }
// ]

// const isLogin = false

// // 定义文章类型
// const articleType = 1 // 0 1 3
// //核心函数 根据文章类型不同使用不同jsx
// function getArticleTem() {
//   if (articleType === 0) {
//     return <div>我是无图文章</div>
//   } else if (articleType === 1) {
//     return <div>我是单图文章</div>
//   } else {
//     return <div>我是三图文章</div>
//   }
// }

// 基础绑定
// const handleClick = () => {
//   console.log('被click')
// }
// 事件参数e
// const handleClick = (e) => {
//   console.log('被click',e)
// }
// 传递自定义参数
// const handleClick = (name) => {
//   console.log('被click', name)
// }

// 自定义参数和事件对象e
const handleClick = (name, e) => {
  console.log('被click', name, e)
}
function App() {
  return (
    // <div className="App">
    //   this is App
    //   {/* 使用引号传递字符串 */}
    //   {'this is message'}
    //   {/* 识别js变量 */}
    //   {count}
    //   {/* 函数调用 */}
    //   {getName}
    //   {/* 方法调用 */}
    //   {new Date().toLocaleDateString()}
    //   {/* 使用js对象 */}
    //   <div style={{ color: 'red', fontSize: '20px' }}> this is div</div>
    //   {/* 渲染列表 */}
    //   {/* map循环那个结构 return那个结构 */}
    //   {/* 注意事项：加上独一无二的key  字符串或者number  id */}
    //   {/* react内部渲染的 */}
    //   <ul>
    //     {list.map(item => <li key={item.id}>{item.name}</li>)}
    //   </ul>
    // </div >

    // <div className="App" >
    //   this is App
    //   逻辑与&&运算符
    //   {/* {isLogin && <div>登录</div>} */}
    //   {/* 三元运算符 */}
    //   {isLogin ? <span>jack</span> : <span>looding.....</span>}
    // </div>

    <div className="App">
      {/* 调用函数渲染不同模版 */}
      {/* {getArticleTem()} */}
      <button onClick={(e) => handleClick('jack', e)}>
        click me
      </button>
    </div>
  )
}

export default App;
