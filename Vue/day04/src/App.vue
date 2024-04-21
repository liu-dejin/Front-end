<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input ref="inp" type="text" v-model="editValue" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="handleEdit">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    handleEdit() {
      //显示输入框 (异步dom更新)
      this.isShowEdit = true
      //输入框获取焦点
      //等dom更新完立即执行
      this.$nextTick(() => {
        console.log(this.$refs.inp)
        this.$refs.inp.focus()
      })
      //计数器把握不住
      // setTimeout(() => {
      //   console.log(this.$refs.inp)
      //   this.$refs.inp.focus()
      // }, 1000)
    },
  },
}
</script>

<style></style>
