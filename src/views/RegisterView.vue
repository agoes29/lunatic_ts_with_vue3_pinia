<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-sm-8 mx-auto">
        <div class="form-background p-3 ma-4">
          <form class="d-flax" @submit.prevent="registerProduct">
            <h3 class="mb-3">Register</h3>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingName"
                placeholder="input nama"
                v-model="register.registerName"
              />
              <label for="floatingName">Input Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingEmail"
                placeholder="name@example.com"
                autocomplete="current-email"
                v-model="register.registerEmail"
              />
              <label for="floatingEmail">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                autocomplete="current-password"
                v-model="register.registerPassword"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div
              type="error"
              class="alert alert-danger m-2"
              v-if="register.registerError"
            >
              {{ register.registerError }}
            </div>
            <button type="submit" class="w-100 btn btn-success mt-3">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {useAuthStore} from "@/stores/auth"

  const register = useAuthStore()
  const registerProduct = () => {
    register.register()
    register.registerName = ""
    register.registerEmail = ""
    register.registerPassword = ""
  }
</script>

<style lang="css">
  .form-background {
    border-radius: 11px;
    background: linear-gradient(145deg, #161616, #1a1a1a);
    box-shadow: 8px 8px 18px #0b0b0b, -8px -8px 18px #252525;
  }
  label {
    color: #181818;
  }
</style>
