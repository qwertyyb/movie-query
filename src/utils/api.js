import axios from 'axios'
import jsonp from 'jsonp'

var http = axios.create({
  baseURL: ''
})
http.interceptors.request.use(config => {
  config.url = 'https://cloudfn.qwertyyb.cn/release/proxy?url=' + encodeURIComponent(`https://api.douban.com${config.url}${config.url.includes('?') ? '&' : '?'}apikey=0b2bdeda43b5688921839c8ecb20399b`)
  return config
})
http.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err)
})

export function getShowingList(start, count, city = '北京') {
  return http.get(`/v2/movie/in_theaters?start=${start}&count=${count}&city=${city}`)
}
export function getIncomingList(start = 0, count = 20) {
  return http.get(`/v2/movie/coming_soon?start=${start}&count=${count}`)
}
export function getMovieInfo(id) {
  return http.get(`/v2/movie/subject/${id}`)
}
export function getTop250(start = 0, count = 20) {
  return http.get(`/v2/movie/top250?start=${start}&count=${count}`)
}

export function getCities() {
  return axios.get('https://raw.githubusercontent.com/cn/GB2260.js/develop/lib/201607.json').then(res => res.data)
}
export function getCurrentCity() {
  return new Promise((resolve, reject) => {
    jsonp('https://whois.pconline.com.cn/ipJson.jsp', {}, function(err, data) {
      if(err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })
}