import http from '../http'

class DataService {
  getAll(): Promise<any> {
    return http.get("/client/home")
  }
  login(data: any): Promise<any> {
    return http.post("/login", data)
  }
  register(data: any): Promise<any> {
    return http.post("/register", data)
  }
  products({ headers }: any): Promise<any> {
    return http.get("/administrator/dashboard", { headers })
  }
  // inputProduct(data: any): Promise<any> {
  //   return http.post("/posts", data)
  // }
  inputProduct(data: any, { headers }: any): Promise<any> {
    return http.post("/administrator/create-book", data, { headers })
  }
  editProduct(data: any, { headers }: any): Promise<any> {
    return http.post("/administrator/edit-book", data, { headers })
  }
  delete(data: any, { headers }: any): Promise<any> {
    return http.post(`/administrator/delete-book`, data, { headers })
  }
}

export default new DataService()