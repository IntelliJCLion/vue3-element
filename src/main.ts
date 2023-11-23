import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axiosRequest from "@/api/axiosRequest";


axiosRequest.defaults.baseURL='/api'
const app = createApp(App)

createApp(App).use(ElementPlus).use(router).mount('#app')

