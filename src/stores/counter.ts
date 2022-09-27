import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCookies } from 'vue3-cookies'


export const useCookiesStore = defineStore('cookies-token', () => {
  const { cookies } = useCookies()
  const VueCookies = cookies.get("token")
  state: () => ({
    token: VueCookies || null,
    products: []
  })
  getters: {
    isLoggedIn: (state:any) => {
      return !!state.token
    }
  }
  actions: {

  }
    
})

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
