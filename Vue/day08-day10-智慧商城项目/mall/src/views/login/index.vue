<template>
  <div class="login">
    <van-nav-bar title="会员登录" left-arrow @click-left="$router.go(-1)" />
    <div class="container">
      <div class="title">
        <h3>手机号登录</h3>
        <p>未注册的手机号登录后将自动注册</p>
      </div>

      <div class="form">
        <div class="form-item">
          <input v-model="mobile" class="inp" maxlength="11" placeholder="请输入手机号码" type="text">
        </div>
        <div class="form-item">
          <input v-model="picCode" class="inp" maxlength="5" placeholder="请输入图形验证码" type="text">
          <img @click="getPicCode" v-if="picUrl" :src="picUrl" alt="">
        </div>
        <div class="form-item">
          <input v-model="msgCode" class="inp" placeholder="请输入短信验证码" type="text">
          <button @click="getCode">
            {{second === totalSecond ?'获取验证码':second+'秒后重新发送'}}
          </button>
        </div>
      </div>

      <div class="login-btn" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
import { codeLogin, getMsgCode, getPicCode } from '@/api/login'
export default {
  name: 'LoginPage',
  data () {
    return {
      picCode: '', // 用户输入的图形验证码
      picKey: '', // 请求传递的图像验证码唯一标识
      picUrl: '', // 储存请求渲染
      totalSecond: 60, // 总秒数
      second: 60, // 当前秒数
      timer: null, // 定时器id
      mobile: '', // 手机号
      msgCode: '' // 短信验证码
    }
  },
  created () {
    this.getPicCode()
  },
  methods: {
    async getPicCode () {
      const { data: { base64, key } } = await getPicCode()
      console.log(base64)
      this.picUrl = base64 // 图片地址
      this.picKey = key // 唯一标识符

      // this.$toast('获取成功')
      // this.$toast.success('成功文案')

      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: true
      // })
    },

    // 校验 手机号和图形验证码是否合法
    // 通过 true  不通过 false
    validFn () {
      if (!/^1[3-9]\d{9}$/.test(this.mobile)) {
        this.$toast('请输入正确手机号')
        return false
      }
      if (!/^\w{4}$/.test(this.picCode)) {
        this.$toast('请输入正确验证码')
        return false
      }
      return true
    },

    // 获取短信验证码
    async getCode () {
      if (!this.validFn()) {
        // 如果没通过校验没必要往下走
        console.log('校验不通过')
        return
      }
      // 当前没有定时器,且totalSecond 和Second一致才可以进行倒计时
      if (!this.timer && this.second === this.totalSecond) {
        // 发送请求(预期,如果响应的status不是200,就抛出错误,await只会等待成功的promise)
        await getMsgCode(this.picCode, this.picKey, this.mobile)

        this.$toast('短信发送成功')
        // 开启倒计时
        this.timer = setInterval(() => {
          this.second--
          if (this.second <= 0) {
            clearInterval(this.timer)
            this.timer = null
            this.second = this.totalSecond
          }
        }, 1000)
      }
    },
    async login () {
      if (!this.validFn()) {
        return
      }
      if (!/^\d{6}$/.test(this.msgCode)) {
        this.$toast('请输入正确的手机验证码')
        return
      }
      console.log('发送登录请求')

      const res = await codeLogin(this.mobile, this.msgCode)
      this.$store.commit('user/setUserInfo', res.data)
      console.log(res)
      this.$toast('登录成功')
      this.$router.push('/')
    }
  },
  destroyed () {
    // 离开页面销毁倒计时
    clearInterval(this.timer)
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 49px 29px;

  .title {
    margin-bottom: 20px;
    h3 {
      font-size: 26px;
      font-weight: normal;
    }
    p {
      line-height: 40px;
      font-size: 14px;
      color: #b8b8b8;
    }
  }

  .form-item {
    border-bottom: 1px solid #f3f1f2;
    padding: 8px;
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    .inp {
      display: block;
      border: none;
      outline: none;
      height: 32px;
      font-size: 14px;
      flex: 1;
    }
    img {
      width: 94px;
      height: 31px;
    }
    button {
      height: 31px;
      border: none;
      font-size: 13px;
      color: #cea26a;
      background-color: transparent;
      padding-right: 9px;
    }
  }

  .login-btn {
    width: 100%;
    height: 42px;
    margin-top: 39px;
    background: linear-gradient(90deg,#ecb53c,#ff9211);
    color: #fff;
    border-radius: 39px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    letter-spacing: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
