import { instance } from '@/utils/request'
import { request_prefix } from '@/utils/constants'

const common_prefix = 'blog'

export const listAll = (params: { pageNum: Number; pageSize: Number }) => {
  return instance({
    url: `${request_prefix}/${common_prefix}/list`,
    method: 'get',
    params,
  })
}

export const queryById = (params: { id: string }) => {
  return instance({
    url: `${request_prefix}/${common_prefix}/query`,
    method: 'get',
    params,
  })
}

export const listByKey = (params: { key: string }) => {
  return instance({
    url: `${request_prefix}/${common_prefix}/queryCondition`,
    method: 'get',
    params,
  })
}
