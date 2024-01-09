import request from '@/utils/request'

export const login = (data: object) => {
  return request({
    url: '/login/register/login',
    method: 'post',
    data
  })
}
export const getPublicKey = () => {
  return request({
    url: 'login/register/getPublicKey',
    method: 'get',
  })
}