//axiosRequest.js

// @ts-ignore
import axios from 'axios'

//使用axios下面的create([config])方法创建axios实例，其中config参数为axios最基本的配置信息。
const API = axios.create({
    baseURL:'http://127.0.0.1:9527',
    timeout: 6000   //请求超时设置，单位ms
})


//导出我们建立的axios实例模块，ES6 export用法
export default API
