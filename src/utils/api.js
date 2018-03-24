import axios from 'axios'

var http = axios.create({
  baseURL: 'https://bird.ioliu.cn/v1?url=https://api.douban.com/'
})
http.interceptors.request.use(config => {
  console.log(config)
  config.url  += '?apikey=0b2bdeda43b5688921839c8ecb20399b'
  return config
})
http.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
})

export function getShowingList(start, count, city = '北京') {
  return http.get('/v2/movie/in_theaters', {params: {start, count, city}})
}
export function getIncomingList(start = 0, count = 20) {
  return http.get('/v2/movie/coming_soon', {params: {start, count}})
}