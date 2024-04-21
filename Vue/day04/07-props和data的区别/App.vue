<template>
  <div class="app">
    <BaseCount @changeCount="handleChange" :count="count"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  data() {
    return {
      count: 666,
    }
  },
  methods: {
    handleChange(newCount) {
      // console.log(newCount)
      this.count = newCount
    },
  },
  components: {
    BaseCount,
  },
}
</script>

<style></style>
