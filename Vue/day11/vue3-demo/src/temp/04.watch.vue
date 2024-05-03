<script setup>
import { ref, watch } from 'vue';

const count = ref(0)
const nickName = ref('张三')
const changeCount = ()=>{
  count.value++
}
const changeNikeName=()=>{
  nickName.value='李四'
}

//1.监视单个数据变化
// watch(ref(对象),(newValue,oldValue)=>{...})
// watch (count, (newValue,oldValue)=>{
//   console.log(newValue,oldValue)
// })
//2.监视多个数据的变化
// watch([ref对象1,ref对象2],(newValue,oldValue)=>{
//   console.log(newValue,oldValue)
// })

// watch([count,nickName],(newValue,oldValue)=>{
//   console.log(newValue,oldValue)
// })
//3.immediate 立即执行
// watch (count, (newValue,oldValue)=>{
//   console.log(newValue,oldValue),{
//     immediate:true
//   }
// })
// ````````````````````````````````````````````````````````
//4.deep深度监视  默认是浅层监视
//  ref(简单类型) 直接监视
//  ref(复杂类型) 监视不到复杂类型内部数据的变化
const userInfo = ref({
  name:'zs',
  age:17
})
const setUserInfo = ()=>{
  userInfo.value.age++
}
// watch(userInfo,(newValue)=>{
//   console.log(newValue) //newValue是对象 地址没有发生改变,所以监视不到
// },
// {
//   deep:true //深度监视
// })

//对于对象里面的单个属性监视  第一个参数写成函数  返回具体的属性
watch(()=>userInfo.value.age,(newValue,oldValue)=>{
  console.log(newValue,oldValue)
})
</script>
<template>
<div>{{ count }}</div>
<button @click="changeCount">该数字</button>
<div>{{ nickName }}</div>
<button @click="changeNikeName">改昵称</button>
<div>````````````````````````````````````````````</div>
<div>{{ userInfo }}</div>
<button @click="setUserInfo">修改userInfo</button>
</template>