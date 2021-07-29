<template>
  <h1>欢迎来到登录界面</h1>
  <Welcome msg="jack"/>
  <el-button @click="goHome">回首页</el-button>
</template>

<script >
//vue 3 composition API:
// import { defineProps, reactive } from 'vue'
// import { useRouter } from 'vue-router'

// defineProps({
//   msg: String
// })

// const state = reactive({ count: 0 });

// const router = useRouter();

// const goHome = ()=>{
//   router.push('/welcome')
// }

import Welcome from './Welcome.vue'
export default{
  name:'login',
  components:{
    Welcome
  },
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
