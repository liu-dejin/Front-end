<script setup>
import CenterCom from '@/components/center-com.vue'
import { provide, ref } from 'vue';
//跨层传递普通数据
provide('theme-color','pink')

//跨层传递响应式数据
const count = ref(100)
provide('count',count)

setTimeout(()=>{
  count.value=500
},2000)

//跨层级传递函数  => 给子孙后代传递改变数据的方法
provide('changeCount',(newCount)=>{
  count.value=newCount
})
</script>
<template>
  <div>
    <h1>我是顶层组件</h1>
    <CenterCom></CenterCom>
  </div>
</template>