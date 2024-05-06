// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vm适配的标准屏的宽度.iPhonex
      // 设计图如果是750  调成1倍=>适配375标准屏幕
      // 设计图640  调成1倍=>适配320
      viewportWidth: 375
    }
  }
}
