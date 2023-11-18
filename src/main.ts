import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axiosRequest from "@/api/axiosRequest";

axiosRequest.defaults.baseURL = "http://127.0.0.1:9527";

const app = createApp(App)
app.config.globalProperties.$axios = axiosRequest;
createApp(App).use(ElementPlus).use(router).mount('#app')

