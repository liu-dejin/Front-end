
    window.onload = function () {
      // 定时器，每隔 1 秒执行 1 次
      setInterval(() => {
        let dt = new Date()
        let HH = dt.getHours()
        let mm = dt.getMinutes()
        let ss = dt.getSeconds()

        // 为页面上的元素赋值
        document.querySelector('#HH').innerHTML = padZero(HH)
        document.querySelector('#mm').innerHTML = padZero(mm)
        document.querySelector('#ss').innerHTML = padZero(ss)
      }, 1000)
    }

    // 补零函数
    function padZero(n) {
      return n > 9 ? n : '0' + n
    }
  