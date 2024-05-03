<script setup>
//使用了setup 所以没法直接使用props选项
//需要借助编译器宏 接受子组件传递的数据
const props = defineProps({
  car:String,
  money:Number
})
//js里面需要props.car
console.log(props.car)


const emit =defineEmits(['changeMoney'])
const buy=()=>{
  emit('changeMoney',5)
}

</script>
<template>
  <!-- 模版中对于props传递来的数据可以直接使用 -->
  <div class="son">我是子组件-{{ car }} - {{ money }} 
  <button @click="buy">花钱</button>
  </div>
</template>
<style scoped>
.son {
  border: 1px solid #000;
  padding: 30px;
}
</style>