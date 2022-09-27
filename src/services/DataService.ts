import http from '../http'

class DataService {
  getAll(): Promise<any> {
    return http.get("/", { withCredentials:true})
  }
  login(data: any): Promise<any> {
    return http.post("/login", data, { withCredentials:true})
  }
  register(data: any): Promise<any> {
    return http.post("/register", data)
  }
  products({headers}:any): Promise<any> {
    return http.get("/posts", { headers })
  }
  inputProduct(data:any, {headers}:any): Promise<any> {
    return http.post("/posts/product", data, {headers})
  }
  delete(data: any, {headers}:any): Promise<any> {
    return http.delete(`/posts/delete/${data}`, { headers })
  }
}

export default new DataService()