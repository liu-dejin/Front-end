<script setup>
import testCom from '@/components/test-com.vue'
import {onMounted, ref} from 'vue'
//模版引用
//1.调用ref函数 生成一个ref对象
//2.通过ref标识,进行绑定
//3.通过ref对象.value访问绑定的元素 (必须渲染完才能访问)
const inp = ref(null)

//生命周期钩子
onMounted(()=>{
  // console.log(inp.value)
  // inp.value.focus()
})
const clickFn=()=>{
  inp.value.focus()
}
//`````````````````````````````````````````````````
const testRef = ref(null)
const getCom=()=>{
  console.log(testRef.value)
  testRef.value.sayHi()
}
</script>
<template>
  <div>
    <input type="text" ref="inp">
    <button @click="clickFn">点击使输入框聚焦</button>
  </div>
  <test-com ref="testRef"></test-com>
  <button @click="getCom">获取组件</button>
</template>