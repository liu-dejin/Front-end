<script setup>
const count = 999
const sayHi=()=>{
  console.log('打招呼')
}
//向外暴露
defineExpose({
  count,
  sayHi
})
</script>
<template>
  <div>
    我是测试组件 - {{ count }}
  </div>
</template>