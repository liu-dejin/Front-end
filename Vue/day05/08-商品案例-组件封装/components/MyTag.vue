<template>
  <div class="my-tag">
    <input
      v-if="isEdit"
      v-focus
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
      :value="value"
      @blur="isEdit = false"
      @keyup.enter="handleEnter"
    />
    <div v-else class="text" @dblclick="handleClick">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      isEdit: false,
    }
  },
  methods: {
    handleClick() {
      //双击后显示到显示状态
      this.isEdit = true
      /*       //等dom更新完再获取焦点
      this.$nextTick(() => {
        //获取焦点
        this.$refs.inp.focus()
      }) */
    },
    handleEnter(e) {
      //标签内容不能为空
      if (e.target.value.trim() === '') return alert('输入内容不能为空')
      //子传父  输入框内容传给父组件更新
      //由于父组件是v-model,触发事件需要触发 input事件
      this.$emit('input', e.target.value)
      //输入完成关闭输入状态
      this.isEdit = false
    },
  },
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>
