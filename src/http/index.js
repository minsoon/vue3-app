import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

axios.interceptors.request.use(config => {
  // config.headers.key = key;
  return config
}, error => {
  return Promise.reject(error.response)
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
});

export default axios;
