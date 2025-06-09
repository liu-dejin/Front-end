//useState实现一个计数器按钮
import { useState } from 'react'
function App() {
  //1.调用useState
  // count 状态变量 setCount 状态更新函数
  const [count, setCount] = useState(0)

  // 2.点击事件回调
  const handleClick = () => {
    // 1.用传入新值修改count
    // 2.使用新的count渲染ui

    // 直接修改，视图不会变化
    // count++
    // console.log(count)

    setCount(count + 1)
  }

  //修改对象状态
  const [form, setForm] = useState({ name: 'jack' })
  const changeForm = () => {
    //错误写法，直接修改
    // form.name = 'tom'
    // 正确写法  setForm(newForm)
    setForm({
      ...form,
      name: 'tom'
    })
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
      <button onClick={changeForm}>修改form{form.name}</button>
    </div>
  )
}

export default App