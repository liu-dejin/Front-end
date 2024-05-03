<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<!-- <script setup>
  // 1.reactive 接收一个对象类型的数据,返回一个响应式的对象
  // import { reactive } from 'vue'
  // const state = reactive({
  //   count : 100
  // })
  // const setCount =()=>{
  //   state.count++
  // }

  //2.ref:接收简单类型或复杂类型 返回一个响应式对象
  //  本质 原有传入数据的基础上,外层包了一层对象 包成了复杂数据类型
  //   底层 包成复杂类型之后  再借助reactive实现响应式
  //  1.js脚本访问数据需要通过.value
  //  2.template模版里面不用加.value  (帮助我们扒了一层)

  //推荐以后声明数据  统一使用ref  => 统一编码规范
  import { ref } from 'vue'
  const count = ref(0)
  const setCount = ()=>{
    count.value++
  }
</script>
<template>
  <div>{{ count }}</div>
  <button @click="setCount">+1</button>
</template> -->
