<script setup lang="ts">
  import {RouterView} from "vue-router"
  import Footers from "./components/Footer.vue"
  import FootersBlog from "./components/FooterBlog.vue"
  import HeadersHome from "./components/NavbarHome.vue"
  import HeadersBlog from "./components/NavbarBlog.vue"
  import Modal from "./components/partial/Modal.vue"
</script>
<script lang="ts">
  export default {
    data() {
      return {
        isLoading: true,
      }
    },
    mounted() {
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    },
    computed: {
      homes() {
        return this.$route.name === "home"
      },
      blogs() {
        return this.$route.name === "blog"
      },
    },
  }
</script>

<template>
  <main v-if="!isLoading">
    <HeadersHome v-if="homes" />
    <HeadersBlog v-else="blogs" />

    <Modal />
    <RouterView />
    <Footers v-if="homes" />
    <FootersBlog v-else="blogs" />
  </main>
  <div class="preloader" v-if="isLoading">
    <img src="./assets/img/logo.png" class="rotate" width="100" height="100" />
  </div>
</template>

<style scoped>
  .containerize {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    height: 100vw;
    transform-origin: top left;
    transform: rotate(-90deg) translateX(-100vh);
    overflow-x: hidden;
    overflow-y: scroll;
  }
</style>
