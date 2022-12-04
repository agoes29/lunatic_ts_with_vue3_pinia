<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-sm-8 mx-auto">
        <div class="form-background p-3 ma-4">
          <form class="d-flax" @submit.prevent="loginProduct">
            <h3 class="mb-3">login</h3>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                autocomplete="current-email"
                v-model="auth.loginEmail"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                autocomplete="current-password"
                v-model="auth.loginPassword"
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div
              type="success"
              class="alert alert-success m-2"
              v-if="auth.loginSuccess"
            >
              {{ auth.loginSuccess }}
            </div>
            <div
              type="error"
              class="alert alert-danger m-2"
              v-if="auth.loginError"
            >
              {{ auth.loginError }}
            </div>
            <button type="submit" class="w-100 btn btn-success mt-3">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {useAuthStore} from "../stores/auth"

  const auth = useAuthStore()
  const loginProduct = () => {
    auth.login()
    auth.loginEmail = ""
    auth.loginPassword = ""
  }
</script>
<style lang="css">
  .form-background {
    border-radius: 11px;
    background: var(--color-background);
    box-shadow: 8px 8px 18px #0b0b0b, -8px -8px 18px #252525;
  }
  label {
    color: #000;
  }
</style>
