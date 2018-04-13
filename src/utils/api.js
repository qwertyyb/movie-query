import axios from 'axios'

var http = axios.create({
  baseURL: 'https://bird.ioliu.cn/v1?url=https://api.douban.com/'
})
http.interceptors.request.use(config => {
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
export function getMovieInfo(id) {
  return http.get(`/v2/movie/subject/${id}`)
}
export function getTop250(start = 0, count = 20) {
  return http.get('/v2/movie/top250', {params: {start, count}})
}

export function getCities() {
  return axios.get('https://raw.githubusercontent.com/cn/GB2260.js/develop/lib/201607.json').then(res => res.data)
}
export function getMyCity() {
  return axios.get('http://ip-api.com/json/?lang=zh-CN').then(res => res.data)
}