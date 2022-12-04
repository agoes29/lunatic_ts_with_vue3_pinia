import router from '@/router'
import DataService from '@/services/DataService'
import { defineStore } from 'pinia'
import { useCookies } from 'vue3-cookies'

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    createData: {
      titleProduct: "",
      authorProduct: "",
      priceProduct: "",
      imageProduct: null as any,
    },
    imageName: "" as any,
    imageUrl: "https://api.prasetyoadisantoso.com/storage/",
    products: [] as dataProducts[],
    errorFatch: "",
  }),
  getters: {

  },
  actions: {
    fatchProduct() {
      DataService.getAll()
        .then((response) => {
          const hasil = response.data.data.data
          console.log(hasil)
          this.products = hasil
        }).catch((e) => {
          console.log(e)
        })
    },
    listProduct() {
      const { cookies } = useCookies()
      const token = cookies.get("token")
      const headers = {
        Authorization: `Bearer ${token}`
      }
      DataService.products({ headers })
        .then((response) => {
          const hasil = response.data.data.data
          console.log(this.products = hasil)
        }).catch((e) => {
          console.log(e)
        })
    },
    onFileChange(event: any) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf(".") <= 0) {
        return alert("Tolong masukan file yang sesuai")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener("load", () => {
        this.imageName = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.createData.imageProduct = files[0]
    },
    createProduct() {
      const data = new FormData()
      data.append("title", this.createData.titleProduct)
      data.append("author", this.createData.authorProduct)
      data.append("price", this.createData.priceProduct)
      data.append("image", this.createData.imageProduct)

      const { cookies } = useCookies()
      const token = cookies.get("token")
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": 'multipart/form-data; boundary=-----NPRequestBoundary-----"',
      }
      // const data = {
      //   title: this.createData.titleProduct,
      //   author: this.createData.authorProduct,
      //   price: this.createData.priceProduct,
      // }
      DataService.inputProduct(data, { headers })
        .then((response) => {
          console.log(headers)
          console.log(response)
          // router.push('/products')
        })
        .catch((e) => {
          console.log(e)
        })
    },
    deleteProduct(dataId: any) {
      const data = { id: dataId }
      console.log(data)
      const { cookies } = useCookies()
      const token = cookies.get("token")
      const headers = {
        Authorization: `Bearer ${token}`
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
  image: string,
  price: number,
  id: number
}