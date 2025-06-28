// 移动端自适应布局核心脚本
// 通过动态设置 html 的 font-size，实现 rem 适配
;(function flexible(window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // 设置 body 的字体大小，保证不同 dpr 下文字大小合适
  function setBodyFontSize() {
    if (document.body) {
      // 例如 dpr=2 时，字体大小为 24px
      document.body.style.fontSize = 12 * dpr + 'px'
    } else {
      // 如果 body 还没加载，等 DOMContentLoaded 后再设置
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize()

  // 设置 rem 单位：1rem = 视口宽度 / 10
  function setRemUnit() {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // 监听页面尺寸变化和页面显示，实时更新 rem 单位
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // 检测浏览器是否支持 0.5px 细线（发丝线）
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    // 如果支持，testElement 的高度会是 1 像素
    if (testElement.offsetHeight === 1) {
      // 给 html 元素加上 hairlines 类名，方便 CSS 针对性处理
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
})(window, document)
