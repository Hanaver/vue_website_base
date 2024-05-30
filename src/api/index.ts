// src/api/user.js
import http from '@/utils/http'

const apiVersion = '/api'

// 获取用户信息
export function getConfs() {
  return http.get(apiVersion + '/common/configs')
}

// // 登录
// export function login(data) {
//   return http.post('/auth/login', data)
// }

// // 注册
// export function register(data) {
//   return http.post('/auth/register', data)
// }
