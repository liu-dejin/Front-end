<script setup>
import Son1Com from '@/components/Son1Com.vue'
import Son2Com from '@/components/Son2Com.vue'
import { useCounterStore } from './store/counter'
import { useChannelStore } from './store/channel'
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore()
const channelStore = useChannelStore()

//直接结构 会丢失响应式 需加上storeToRefs
const {count , msg} = storeToRefs(counterStore)

const {channelList} =storeToRefs(channelStore)
</script>
<template>
  <div>111
    {{ channelList }}
    {{ count }}
    {{ msg }}
  </div>
  <div>
    <h3>app.vue根组件 -0- {{ counterStore.count }}-{{ counterStore.double }}</h3>
    <Son1Com @click="counterStore.addCount"></Son1Com>
    <Son2Com @click="counterStore.subCount"></Son2Com>
    <hr>
    <button @click="channelStore.getList">获取频道数据</button>
    <ul>
      <li v-for="item in channelStore.channelList" :key="item.id" >{{ item.name }}</li>
    </ul>
  </div>
</template>
<style scoped>
</style>