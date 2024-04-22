<template>
  <div>
    <MyDialog>
      <!-- 需要通过template包裹整体 -->
      <template v-slot:header>
        <div>大标题</div>
      </template>
      <template v-slot:content> <div>我是内容</div></template>
      <template #footer>
        <button>确认</button>
        <button>取消</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
import MyDialog from './components/MyDialog.vue'
export default {
  data() {
    return {}
  },
  components: {
    MyDialog,
  },
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>
