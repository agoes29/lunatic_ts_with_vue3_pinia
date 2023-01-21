<script setup lang="ts">
  import {RouterView} from "vue-router"
  import Footers from "./components/Footer.vue"
  import Headers from "./components/Navbar.vue"
  import Modal from "./components/partial/Modal.vue"
</script>

<template>
  <!-- <Headers v-if="$route.name != 'landing'" /> -->
  <Headers />
  <Modal />
  <div class="containerize">
    <RouterView />
  </div>
  <Footers />
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
