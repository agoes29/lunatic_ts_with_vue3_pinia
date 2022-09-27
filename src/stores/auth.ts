import DataService from "@/services/DataService"
import { defineStore } from "pinia"
import { useCookies } from "vue3-cookies"
import router from "../router"

const { cookies } = useCookies()
const getCookies = cookies.get("token")

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
      loginEmail: "",
      loginPassword: "",
      loginSuccess: "",
      loginError: "",
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerSuccess: "",
      registerError: "",
      token: getCookies || null,
    }),
  getters: {
    setToken: (state) => !!state.token
  },
  actions: {
    logout() {
      cookies.remove("token")
      this.token = null
      this.loginSuccess = ""
      router.push("/login")
    },
    login() {
      const data = {
        email: this.loginEmail,
        password: this.loginPassword
      }
      DataService.login(data)
        .then((response) => {
        const to = response.data.data.token
        cookies.set("token", to)
        console.log(to)
        this.token = response.data.data.token
        const message = "Login Success!!!"
        this.loginSuccess = message
        router.push("/products")
      })
        .catch((e) => {
        const message = "An error has occured trying to login."
        this.loginError =  message
      })
    },
    register() {
      const data = {
        name: this.registerName,
        email: this.registerEmail,
        password: this.registerPassword
      }
      DataService.register(data)
        .then((response) => {
          console.log(response)
          router.push("/login")
        }).catch((e) => {
          console.log(e)
          const message = "Account is used"
          this.registerError = message
      })
    }
  }
})