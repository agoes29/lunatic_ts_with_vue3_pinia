import axios, { type AxiosInstance } from 'axios'

const baseUrl = "http://localhost:3333/api/"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const apiClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
})

export default apiClient
