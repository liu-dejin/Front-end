<template>
  <!-- 主体区域 -->
  <section id="app">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="handleClear"></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'

//渲染功能
//1.提供数据?提供在公共的父组件 App.vue
//2.通过父传子  数据传给TodoMain

//添加功能
//1.收集表单数据 -> v-model
//2.监听时间回车和点击都要添加
//3.子传父 添加的任务传给父组件
//4.进行unshift(自己的数据自己负责)

//删除功能
//1.监听删除按钮点击携带id
//2.子传父,删除的id传给父组件
//3.进行删除filter,自己的数据自己负责

//底部合计  父传子传list
// 清空功能 子传父  通知到父组件  -> 父组件进行清空操作

//持久化存储 watch深度监视 一旦变化存到本地  一进页面优先读取
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list')) || [
        { id: 1, name: '打篮球' },
        { id: 2, name: '逛街' },
        { id: 3, name: '吃饭' },
      ],
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  watch: {
    list: {
      deep: true,
      handler(newValue) {
        localStorage.setItem('list', JSON.stringify(newValue))
      },
    },
  },
  methods: {
    handleAdd(todoName) {
      this.list.unshift({
        id: +new Date(),
        name: todoName,
      })
    },
    handleDel(id) {
      // console.log('老爹接受到了', id)
      this.list = this.list.filter((item) => item.id !== id)
    },
    handleClear() {
      this.list = []
    },
  },
}
</script>

<style></style>
