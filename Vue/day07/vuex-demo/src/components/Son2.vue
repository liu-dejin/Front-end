<template>
  <div class="box">
    <h2>Son2 子组件</h2>
    从vuex中获取的值:<label>{{count}}</label>
    <br />
    <button @click="subCount(1)">值 - 1</button>
    <button @click="subCount(5)">值 - 5</button>
    <button @click="subCount(10)">值 - 10</button>
   <button @click="changeCountAction(888)">一秒钟变成888</button>
    <button @click="changeTitle('前端程序员')">改标题</button>
    <hr>
    <div>{{filterList}}</div>
    <!-- 访问模块中的state -->
    <div>{{ user.userInfo.age }}</div>
    <div>{{ setting.theme }}</div>
    <!-- 访问模块中的state -->
    <div>user模块的数据{{ userInfo }}</div>
    <button @click="setUser({name:'xiaoli',age:18})">更新个人信息</button>
    <div>setting模块的数据{{theme}} - {{desc}}</div>
    <button @click="setTheme('pink')">更新主题色</button>
    <!-- 访问模块中的getter -->
    <div>{{UpperCaseName}}</div>
    <!-- 访问模块中的actions -->
    <button @click="setUserSecond({name:'xiaoming',age:27})">异步更新</button>
    <button @click="setThemeSecond('pink')">一秒后修改主题</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Son2Com',
  computed: {
    // mapState  mapGetters都是在映射方法
    ...mapState(['count', 'title', 'setting', 'user']),
    ...mapState('user', ['userInfo']),
    ...mapState('setting', ['theme', 'desc']),
    ...mapGetters(['filterList']),
    ...mapGetters('user', ['UpperCaseName'])
  },
  methods: {
    // mapMutations,mapActions都是在映射方法
    ...mapMutations(['subCount', 'changeTitle']),
    ...mapMutations('user', ['setUser']),
    ...mapMutations('setting', ['setTheme']),
    // handleSub (n) {
    //   this.subCount(n)
    // }
    ...mapActions(['changeCountAction']),
    ...mapActions('user', ['setUserSecond']),
    ...mapActions('setting', ['setThemeSecond'])
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
