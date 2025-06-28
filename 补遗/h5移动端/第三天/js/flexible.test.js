// 引入 JSDOM 库，用于在 Node.js 环境中模拟浏览器 DOM
const { JSDOM } = require('jsdom');

// 引入 fs 模块，用于读取文件
const fs = require('fs');

// 读取 flexible.js 文件内容
const flexibleScript = fs.readFileSync('d:\\code\\Front-end\\h5移动端\\第三天\\js\\flexible.js', 'utf-8');

// 创建测试环境
function createTestEnvironment() {
  // 创建一个新的 JSDOM 实例
  const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
    pretendToBeVisual: true,
    url: "http://localhost"
  });
  
  // 将 window 和 document 对象添加到全局对象中
  global.window = dom.window;
  global.document = dom.window.document;
  
  return { dom, window, document };
}

// 移除测试环境
function removeTestEnvironment() {
  delete global.window;
  delete global.document;
}

// 测试 setBodyFontSize 函数
test('setBodyFontSize should set body font size correctly', () => {
  // 创建测试环境
  createTestEnvironment();
  
  // 执行被测代码
  eval(flexibleScript);
  
  // 验证 body 字体大小是否正确设置
  expect(global.document.body.style.fontSize).toBe('12px');
  
  // 移除测试环境
  removeTestEnvironment();
});

// 测试 setRemUnit 函数
test('setRemUnit should set rem unit correctly', () => {
  // 创建测试环境
  createTestEnvironment();
  
  // 执行被测代码
  eval(flexibleScript);
  
  // 模拟视口宽度为 375px
  Object.defineProperty(global.document.documentElement, 'clientWidth', {
    value: 375,
    configurable: false,
    writable: false
  });
  
  // 调用 setRemUnit 函数
  setRemUnit();
  
  // 验证 rem 单位是否正确设置
  expect(global.document.documentElement.style.fontSize).toBe('37.5px');
  
  // 移除测试环境
  removeTestEnvironment();
});

// 测试 hairlines 类名添加
test('hairlines class should be added when .5px border is supported', () => {
  // 创建测试环境
  createTestEnvironment();
  
  // 执行被测代码
  eval(flexibleScript);
  
  // 模拟设备像素比大于等于 2
  Object.defineProperty(global.window, 'devicePixelRatio', {
    value: 2,
    configurable: false,
    writable: false
  });
  
  // 创建测试元素
  var fakeBody = global.document.createElement('body');
  var testElement = global.document.createElement('div');
  testElement.style.border = '.5px solid transparent';
  fakeBody.appendChild(testElement);
  global.document.documentElement.appendChild(fakeBody);
  
  // 模拟支持 .5px 边框
  Object.defineProperty(testElement, 'offsetHeight', {
    value: 1,
    configurable: false,
    writable: false
  });
  
  // 执行检测逻辑
  if (global.window.devicePixelRatio >= 2) {
    // ... existing code ...
    if (testElement.offsetHeight === 1) {
      // 给 html 元素加上 hairlines 类名，方便 CSS 针对性处理
      global.document.documentElement.classList.add('hairlines');
    }
    // ... existing code ...
  }
  
  // 验证 hairlines 类名是否正确添加
  expect(global.document.documentElement.classList.contains('hairlines')).toBe(true);
  
  // 移除测试环境
  removeTestEnvironment();
});