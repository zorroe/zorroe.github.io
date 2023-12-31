import axios from 'axios'
import { request_prefix } from '@/utils/constants'

const common_prefix = 'blog'

// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = false

export const clearPageInfo = () => {
  localStorage.removeItem('pageNum')
  localStorage.removeItem('pages')
}

export const uploadImage = (data: any) => {
  return axios({
    url: `${request_prefix}/${common_prefix}/upload`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  })
}
