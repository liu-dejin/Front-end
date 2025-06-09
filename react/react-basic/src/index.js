//项目入口  从这里开始运行

// React必要的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
// 根组件
import App from './B站评论案例';
// App根组件渲染到id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)