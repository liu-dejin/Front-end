import {defineStore} from 'pinia'
import { computed, ref } from 'vue'

//定义store
//defineStore(仓库唯一标识符,()=>{...})
export const useCounterStore =  defineStore('counter',()=>{
  //声明数据 state -count
  const count = ref(100)
  //声明数据的方法 action(普通函数)
  const addCount = ()=>count.value++
  const subCount = ()=>count.value--
  //声明基于数据派生的计算属性  getters(computed)
const double = computed(()=>count.value*2)

  //声明数据 state -msg
  const msg = ref('hello pinia')

  return{
    count,  
    double,
    addCount,
    subCount,
  
    msg,
  }
},{
  // persist:true //开启了当前模块的持久化
  persist:{
    key:'pn-counter', //自定义键名
    // storage:'sessionStorage',  //自定义持久化存储形式
    paths:['count']//用于指定 state 中哪些数据需要被持久化
  } 
})