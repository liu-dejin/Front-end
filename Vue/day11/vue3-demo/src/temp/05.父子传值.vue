<script setup>
//父传子
//父组件添加属性  子组件props接收

//子传父
//1.子组件内部 emit触发事件 (编译器宏)
//2.父组件通过@监听
import sonCom from '@/components/son-com.vue';
import { ref } from 'vue';
const money = ref(100)
const getMoney = ()=>{
  money.value+=10
}
const changeFn =(newMoney)=>{
money.value=newMoney
}
</script>
<template>
  <div>
    <h3>父组件-{{ money }}</h3>
    <button @click="getMoney">挣钱</button>
    <!-- 给子组件添加属性的方式传值 -->
    <sonCom car="宝马车" :money="money"
    @changeMoney="changeFn"></sonCom>
  </div>
</template>