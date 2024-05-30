// src/utils/http.js
import axios from 'axios'

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://coloar.test', // 替换为你的API基地址
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么（如添加Token）
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response.data
  },
  (error) => {
    // 处理响应错误
    if (error.response) {
      // 请求已发出，但服务器响应了状态码不在2xx的范围
      console.error('Response error:', error.response.data)
    } else {
      // 一些错误是在设置请求时触发的
      console.error('Request error:', error.message)
    }
    return Promise.reject(error)
  }
)

export default instance
