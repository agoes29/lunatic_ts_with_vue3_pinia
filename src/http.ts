import axios, { type AxiosInstance } from 'axios'

// const baseUrl = "https://api.prasetyoadisantoso.com/api/v1/"
const baseUrl = "https://api.buttercms.com/v2/posts/?auth_token=3ce31c237fbf10fc491cf8741391edc8a74896c3"
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const apiClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
})

export default apiClient
