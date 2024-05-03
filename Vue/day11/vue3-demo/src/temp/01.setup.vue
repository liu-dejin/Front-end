<!-- <script>
//1.setup比beforeCreate还要早
//2.获取不到this  this指向undefined
//3.数据和函数 需要在setup里面return才能在模版里面使用
//每次都要return好复杂
export default{
  setup(){
    // console.log('setup',this)
    //数据
    const message = 'hello vue3'
    //函数
    const logMessage = ()=>{
      console.log(message)
    }

    return{
      message,logMessage
    }
  },
  beforeCreate(){
    console.log('beforeCreate')
  }
}
</script> -->

<script setup>
//数据
const message = 'this is vue3'
//函数
const logMessage = () => {
  console.log(message)
}
</script>
<template>
  <div>
    {{ message }}
  </div>
  <button @click="logMessage">

  </button>
</template>