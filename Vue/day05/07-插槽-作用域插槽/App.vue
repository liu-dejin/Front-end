<template>
  <div>
    <MyTable :data="list">
      <!-- 3.template #插槽名="变量名" -->
      <template #default="obj">
        <!-- {{ obj }}  { "row": { "id": 1, "name": "张小花", "age": 18 }, "msg": "测试文本" } -->
        <button @click="del(obj.row.id)">删除</button>
      </template>
    </MyTable>
    <MyTable :data="list2">
      <template #default="{ row }">
        <button @click="show(row)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from './components/MyTable.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ],
    }
  },
  components: {
    MyTable,
  },
  methods: {
    del(id) {
      // console.log(id)
      this.list = this.list.filter((item) => item.id !== id)
    },
    show(row) {
      // console.log(row)
      alert(`姓名:${row.name};年级:${row.age}`)
    },
  },
}
</script>
