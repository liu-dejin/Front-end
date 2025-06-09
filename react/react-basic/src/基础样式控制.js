//导入样式
import './index.css'
const style = {
  color: 'red',
  fontSize: '29px'
}
function App() {
  return (
    <div>
      {/* 行内控制样式 */}
      <span style={style}>hello world</span>
      <span className="foo"> this is class foo</span>
    </div >
  )
}

export default App