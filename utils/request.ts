// http.ts
import axios, { type AxiosRequestConfig } from 'axios'

// 配置Contenttype
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true

const instance = axios.create({
  // 超时
  timeout: 60000,
  withCredentials: false,
})

instance.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    config.params = {
      ...config.params,
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  async error => {
    const response = error.response
    return response.data
  }
)

export { instance }
