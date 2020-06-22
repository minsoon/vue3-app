import axios from 'axios'
// import router from '../router'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

axios.interceptors.request.use(config => {
  return config
})

axios.interceptors.response.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

export default axios
