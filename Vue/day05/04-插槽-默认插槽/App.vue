<template>
  <div>
    <MyDialog> 你确认要重启吗? </MyDialog>
    <MyDialog> 你确认要退出吗? </MyDialog>
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
