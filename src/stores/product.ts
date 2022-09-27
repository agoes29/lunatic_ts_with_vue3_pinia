import router from '@/router'
import DataService from '@/services/DataService'
import { defineStore } from 'pinia'
import { useCookies } from 'vue3-cookies'

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    titleProduct: "",
    authorProduct: "",
    priceProduct: "",
    products: [] as dataProducts[],
    errorFatch: ""
  }),
  getters: {

  },
  actions: {
    fatchProduct() {
      const { cookies } = useCookies()
      const token = cookies.get("token")
      const headers = {
        Authorization: `Bearer ${token}`
      }
      DataService.products({ headers })
        .then((response) => {
          const hasil = response.data
          console.log(this.products = hasil)
        }).catch(() => {
          router.push("/login")
      })
    },
    createProduct() {
      const data = {
        title: this.titleProduct,
        author: this.authorProduct,
        price: this.priceProduct
      }
      const { cookies } = useCookies()
      const token = cookies.get("token")
      const headers = {
        Authorization : `Bearer ${token}`
      }
      DataService.inputProduct(data, {headers})
      .then((response) => {
        console.log(headers)
        console.log(response)
        router.push('/products')
      })
        .catch((e) => {
        console.log(e)
      })
    },
    deleteProduct(dataId:any) {
      const data = dataId
      console.log(data)
      const { cookies } = useCookies()
      const token = cookies.get("token")
      const headers = {
        Authorization : `Bearer ${token}`
      }
      DataService.delete(data, { headers })
        .then((response) => {
          const id = response.data.id
          this.products.splice(this.products.indexOf(id), 1)
        }).catch((e) => {
        console.log(e)
      })
    }
  }
})
interface dataProducts {
  title: string,
  author: string,
  price: number,
  id: number
}