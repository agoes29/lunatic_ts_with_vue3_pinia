<template>
  <div class="container-fluid fixed-top mx-md-4 mx-0" id="navigation">
    <div class="d-flex justify-content-between align-items-top">
      <!-- Brand Logo -->
      <div class="container">
        <div class="d-flex justify-content-start">
          <router-link to="/">
            <img id="logo" src="../assets/logo.svg" alt="" />
          </router-link>
          <h2 class="ms-3 my-auto" id="text-logo">Skeleton Web</h2>
        </div>
      </div>

      <!-- Menu List -->
      <div class="container" id="menu-desktop">
        <div id="menu">
          <ul id="menu-list">
            <li class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <span class="fi fi-gb me-3"></span>
                English
              </a>
              <ul class="dropdown-menu text-left">
                <li>
                  <a href="#" class="dropdown-item px-2"
                    ><span class="fi fi-id me-3"></span>Indonesia</a
                  >
                </li>
                <li>
                  <a href="#" class="dropdown-item px-2"
                    ><span class="fi fi-gb me-3"></span>English</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="blog" class="text-dark"
                ><icon icon="fas fa-blog" class="me-3" />Blog</router-link
              >
            </li>
            <li>
              <a href="#news" class="text-dark"
                ><icon icon="fas fa-right-to-bracket" class="me-3" />Sign</a
              >
            </li>
            <li>
              <a href="#" class="text-dark"
                ><icon icon="fas fa-user-plus" class="me-3" />Register</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Menu Mobile -->
      <div class="container text-right" id="menu-mobile">
        <a
          href="#"
          type="button"
          class="text-decoration-none text-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <icon icon="fas fa-bars" />
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {RouterLink} from "vue-router"
</script>
<style lang=""></style>
