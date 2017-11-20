import axios from 'axios'
import qs from 'qs'
import { Message } from 'iview'

const instance = axios.create({
  baseURL: '/api',
  headers: {'X-Custom-Header': 'foobar'},
  transformRequest: [data => {
    return qs.stringify(data)
  }]
})
instance.interceptors.request.use((config) => {
  return config
})
// 响应拦截器
instance.interceptors.response.use((res) => {
  if (res.status !== 200) {
    Message.error('服务器错误！')
  } else {
    return res.data
  }
  return res
})
export default {
  localhostTest () {
    return instance.get('/localhostTest')
  },
  adminRule () {
    return instance.post('/adminRule')
  },
  recommendFetch () {
    return instance.post('/home/recommend')
  },
  // 用户登录接口
  userSignup ($params) {
    console.log($params)
    return instance.post('/users/signup', $params)
  },
  // 用户权限接口
  userAdminList ($params = {}, $method = '') {
    console.log($params)
    return instance.post(`users/admin${$method}`, $params)
  }
}
