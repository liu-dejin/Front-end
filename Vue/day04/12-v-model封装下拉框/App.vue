<template>
  <div class="app">
    <!-- v-model等价于:value和@input
    :cityId="selectId" @changeId="selectId = $event" -->
    <BaseSelect v-model="selectId"></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style></style>
