<template>
  <div class="app">
    <button @click="isShow = true">退出按钮</button>
    <!-- :visible.sync 等价于 :visible +@update:visivle  -->
    <BaseDialog :visible.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {},
  components: {
    BaseDialog,
  },
}
</script>

<style></style>
