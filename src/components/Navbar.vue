<template>
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1 class="text-light">
          <a href="#"><span>Skeleton Web</span></a>
        </h1>
      </div>
      <nav class="navbar" id="navbar">
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/products">Product</RouterLink></li>
          <li><RouterLink to="/test">Test</RouterLink></li>
          <li>
            <a
              href="https://skeleton-web.prasetyoadisantoso.com/en"
              class="nav-link scrollto"
              >Portfolio</a
            >
          </li>
          <li><a href="#developer" class="nav-link scrollto">Team</a></li>
          <li class="dropdown">
            <a href="#"
              ><span class="me-2">Dropdown</span>
              <font-icon icon="fa-solid fa-chevron-down" />
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <a class="dropdown-item" href="#">Something else here</a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="https://skeleton-web.prasetyoadisantoso.com/en/authentication/login/page"
              >Login</a
            >
          </li>
          <li>
            <a
              href="https://skeleton-web.prasetyoadisantoso.com/en/authentication/register/page"
              >Register</a
            >
          </li>
          <!-- <li>
            <RouterLink to="/login" v-if="!auth.setToken">Login</RouterLink>
          </li>
          <li>
            <RouterLink to="/register" v-if="!auth.setToken"
              >Register</RouterLink
            >
          </li>
          <li>
            <a href="#" v-if="auth.setToken" @click="auth.logout()">Logout</a>
          </li> -->
          <DarkMode />
        </ul>
        <font-icon
          icon="fa-solid fa-bars"
          class="mobile-nav-toggle"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-down"
          aria-controls="navbar-down"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></font-icon>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
  import "@/services/main.js"
  import {RouterLink} from "vue-router"
  import DarkMode from "../components/button/DarkMode.vue"
  import {useAuthStore} from "@/stores/auth"
  const auth = useAuthStore()
</script>
<style lang="css">
  /*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
  #header {
    height: 72px;
    transition: all 0.5s;
    z-index: 997;
    transition: all 0.5s;
    background: var(--background-color-secondary);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }

  #header .logo h1 {
    font-size: 30px;
    margin: 0;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 2px;
  }

  #header .logo h1 a,
  #header .logo h1 a:hover {
    color: var(--text-primary-color);
    text-decoration: none;
  }

  #header .logo img {
    padding: 0;
    margin: 0;
    max-height: 40px;
  }

  /*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
  /**
* Desktop Navigation 
*/
  .navbar {
    padding: 0;
  }

  .navbar ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  .navbar li {
    position: relative;
  }

  .navbar a,
  .navbar a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 30px;
    font-size: 15px;
    color: var(--text-primary-color);
    white-space: nowrap;
    transition: 0.3s;
  }

  .navbar a i,
  .navbar a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  .navbar a:hover,
  .navbar .active,
  .navbar .active:focus,
  .navbar li:hover > a {
    color: #eb5d1e;
  }

  .navbar .getstarted,
  .navbar .getstarted:focus {
    background: #eb5d1e;
    color: #fff;
    padding: 10px 25px;
    margin-left: 30px;
    border-radius: 50px;
  }

  .navbar .getstarted:hover,
  .navbar .getstarted:focus:hover {
    color: #fff;
    background: #ee7843;
  }

  .navbar .dropdown ul {
    display: block;
    position: absolute;
    left: 14px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: var(--background-color-primary);
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
  }

  .navbar .dropdown ul li {
    min-width: 200px;
  }

  .navbar .dropdown ul a {
    padding: 10px 20px;
    font-size: 15px;
    text-transform: none;
  }

  .navbar .dropdown ul a i {
    font-size: 12px;
  }

  .navbar .dropdown ul a:hover,
  .navbar .dropdown ul .active:hover,
  .navbar .dropdown ul li:hover > a {
    color: #eb5d1e;
    background-color: var(--background-color-primary);
  }

  .navbar .dropdown:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .navbar .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .navbar .dropdown .dropdown:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }

  @media (max-width: 1366px) {
    .navbar .dropdown .dropdown ul {
      left: -90%;
    }

    .navbar .dropdown .dropdown:hover > ul {
      left: -100%;
    }
  }

  /**
* Mobile Navigation 
*/
  .mobile-nav-toggle {
    color: #7a6960;
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
  }

  .mobile-nav-toggle.bi-x {
    color: #fff;
  }

  @media (max-width: 991px) {
    .mobile-nav-toggle {
      display: block;
    }

    .navbar ul {
      display: none;
    }
  }

  .navbar-mobile {
    position: fixed;
    overflow: hidden;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(78, 64, 57, 0.9);
    transition: 0.3s;
  }

  .navbar-mobile .mobile-nav-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .navbar-mobile ul {
    display: block;
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    padding: 10px 0;
    background-color: var(--background-color-primary);
    overflow-y: auto;
    transition: 0.3s;
  }

  .navbar-mobile a,
  .navbar-mobile a:focus {
    padding: 10px 20px;
    font-size: 15px;
    color: #7a6960;
  }

  .navbar-mobile a:hover,
  .navbar-mobile .active,
  .navbar-mobile li:hover > a {
    color: #eb5d1e;
  }

  .navbar-mobile .getstarted,
  .navbar-mobile .getstarted:focus {
    margin: 15px;
  }

  .navbar-mobile .dropdown ul {
    position: static;
    display: none;
    margin: 10px 20px;
    padding: 10px 0;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    background: var(--background-color-primary);
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  }

  .navbar-mobile .dropdown ul li {
    min-width: 200px;
  }

  .navbar-mobile .dropdown ul a {
    padding: 10px 20px;
  }

  .navbar-mobile .dropdown ul a i {
    font-size: 12px;
  }

  .navbar-mobile .dropdown ul a:hover,
  .navbar-mobile .dropdown ul .active:hover,
  .navbar-mobile .dropdown ul li:hover > a {
    color: #eb5d1e;
  }

  .navbar-mobile .dropdown > .dropdown-active {
    display: block;
  }

  body {
    padding: 0;
    margin: 0;
  }
  /* Define styles for the default root window element */
  :root {
    --background-color-primary: #ebebeb;
    --background-color-secondary: #fafafa;
    --accent-color: #cacaca;
    --text-primary-color: #222;
    --element-size: 4rem;
  }

  /* Define styles for the root window with dark - mode preference */
  :root.dark-theme {
    --background-color-primary: #1e1e1e;
    --background-color-secondary: #2d2d30;
    --accent-color: #3f3f3f;
    --text-primary-color: #ddd;
  }

  p {
    color: var(--text-primary-color);
  }

  .container-center {
    background-color: var(--background-color-primary);
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    padding: 2rem 4rem;
    height: 200px;
    /* width: 200px; */
    text-align: center;
    border: 1px solid var(--accent-color);
    border-radius: 4px;
    background-color: var(--background-color-secondary);
  }
</style>
