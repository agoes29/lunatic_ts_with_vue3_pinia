import axios, { type AxiosInstance } from 'axios'

const baseUrl = "https://api.prasetyoadisantoso.com/api/v1/"
// const baseUrl = "https://crudcrud.com/api/f9ff7636f93a4af48cf67c2d64f4c441"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const apiClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
})

export default apiClient
