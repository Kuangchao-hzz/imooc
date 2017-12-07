import axios from 'axios'
// import qs from 'qs'
import { Message } from 'iview'

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
  // transformRequest: [data => {
  //   return data
  // }]
})
instance.interceptors.request.use(config => {
  return config
})
// 响应拦截器
instance.interceptors.response.use(res => {
  // 如果服务器返回的状态不等于1 则在错误信息打印出来
  if (res.data.code === -1) {
    console.log(this)
    Message.error(res.data.msg)
    return Promise.reject(res.data.msg)
  } else if (res.data.code !== 1) {
    Message.error(res.data.msg)
    return Promise.reject(res.data.msg)
  } else {
    return res.data
  }
}, err => {
  if (err.response) {
    Message.error(`服务器错误！${err.response.status}`)
    return Promise.reject(err)
  }
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
    return instance.post('/usersAdmin/signin', $params)
  },
  userLogout ($params) {
    return instance.post('/usersAdmin/logout', $params)
  },
  // 用户权限接口
  userAdminList ($method = '', $params = {}) {
    return instance.post(`/usersAdmin/admin${$method}`, $params)
  },
  // 课程新增接口
  courseAdminList ($method = '', $params) {
    return instance.post(`/courseAdmin/admin/${$method}`, $params, {headers: {
      'Content-Type': 'multipart/form-data'
    }})
  }
}
