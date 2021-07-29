import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import config from './config'
import axios from 'axios'
axios.get(config.mockApi+'/login').then((res)=>{
    console.log(res)
})
console.log('环境变量:',import.meta.env);
const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app');
