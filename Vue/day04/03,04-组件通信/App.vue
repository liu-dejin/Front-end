<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  components: {
    Son,
  },
  data() {
    return {
      myTitle: "学前端，就来黑马程序员",
    };
  },
  methods: {
    handleChange(newTitle) {
      // console.log(newTitle);
      this.myTitle = newTitle;
    },
  },
};
</script>

<style>
</style>