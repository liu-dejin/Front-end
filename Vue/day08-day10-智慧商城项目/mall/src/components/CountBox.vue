<template>
<div class="count-box">
  <button class="minus">-</button>
  <input :value="1" type="text" class="inp">
  <button class="add">+</button>
</div>
</template>
<script>
export default {
  name: 'CountBox'
}
</script>

<style scoped lang="less">
.count-box{
  width: 110px;
  display: flex;
  .add ,.minus {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background-color: #efefef;
  }
  .inp{
    width: 40px;
    height: 30px;
    outline: none;
    border: none;
    margin: 0 5px;
    background-color: #efefef;
    text-align: center;
  }
}
</style>
