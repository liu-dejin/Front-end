<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{$store.state.count}}</label>
    <br>
    <button @click="handleAdd(1)">值 + 1</button>
    <button @click="handleAdd(5)">值 + 5</button>
    <button @click="handleCount">一秒钟修改为666</button>
    <button @click="handleAdd(19)">值 + 10</button>
    <button @click="changeFn">改标题</button>
    <hr>
    <div>{{$store.state.list}}</div>
    <div>{{$store.getters.filterList}}</div>
    <hr>
    <!-- 测试访问模块中的state -->
    <div>{{$store.state.user.userInfo.name}}</div>
    <button @click="updateUser">更新个人信息</button>
    <div>{{$store.state.setting.theme}}</div>
    <button @click="updateTheme">更新主题色</button>
     <br>
    <!-- 测试getters 原生 -->
    <div>{{$store.getters['user/UpperCaseName']}}</div>
    <button @click="updateUser2">一秒后修改数据</button>

  </div>
</template>

<script>
export default {
  name: 'Son1Com',
  created () {
    console.log(this.$store.getters)
  },
  methods: {
    updateUser () {
      // $store.commit('模块名/mutation名',额外传参)
      this.$store.commit('user/setUser', {
        name: 'xiaoming',
        age: 17
      })
    },
    updateTheme () {
      this.$store.commit('setting/setTheme', 'pink')
    },
    updateUser2 () {
      this.$store.dispatch('user/setUserSecond', {
        name: 'xiaoming',
        age: 17
      })
    },

    // 单向数据流
    // 错误代码,但vue不会检测,因为会损耗性能
    // this.$store.state.count++
    // console.log(this.$store.state.count)

    handleAdd (n) {
      // 应该通过mutation 修改
    //   this.$store.commit('addCount')
    // },
    // addFive () {
    //   this.$store.commit('addFive')
    // },
    // changeFn () {
    //   this.$store.commit('changeTitle')
    // }

      // 共有同一个方法 传参
      this.$store.commit('addCount', {
        count: n,
        msg: '哈哈'
      })
    },
    changeFn () {
      this.$store.commit('changeTitle', '传智教育')
    },
    handleCount () {
      // 调用actions
      this.$store.dispatch('changeCountAction', 666)
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
