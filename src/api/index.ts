import request from '@/utils/request'

export const login = (data: object) => {
  return request({
    url: '/login/register/login',
    method: 'post',
    data
  })
}

// export function getInfo (token) {
//   return request({
//     url: '/user/info',
//     method: 'get',
//     params: { token }
//   })
// }

export function message() {
  return request({
    url: '/message',
    method: 'get'
  })
}
