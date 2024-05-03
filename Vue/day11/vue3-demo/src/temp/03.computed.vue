<script setup>
//const 计算属性 = computed(()=>{
// retune 计算的结果
// })

import {computed, ref} from "vue"
//声明数据
const list = ref([1,2,3,4,5,6,7,8])
//计算属性 过滤出2 (只读写法)
// const computedList = computed(()=>{
//   return list.value.filter(item=>item>2)
// })
//get && set写法
const computedList = computed({
  get: ()=>list.value+1,
  set:(val)=>list.value=val-1
})
//定义一个修改数组的方法
const addFn = ()=>{
  list.value.push(88)
}

</script>
<template>
 <div>
   <div>原始数据:{{list}}</div>
   <div>计算后的数据:{{computedList}}</div>
   <button @click="addFn">修改</button>
 </div>
</template>
