<template>
   <h1>欢迎来到主界面{{msg}}</h1>
  <!-- <el-button>去登录</el-button> -->
  <router-link to='/login'>去登录</router-link>
</template>

<script>
// import { defineProps, reactive } from 'vue'

// defineProps({
//   msg: String
// })

// const state = reactive({ count: 0 })

export default{
  name:'welcome',
  props:['msg'],
  // methods:{
  //   goHome(){
  //     this.$router.push('/welcome')
  //   }
  // }
}

</script>

<style scoped>
a {
  color: #42b983;
}
</style>
