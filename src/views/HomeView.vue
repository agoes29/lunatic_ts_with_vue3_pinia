<script setup lang="ts">
  import HomePage from "@/components/pages/HomePage.vue"
  import FeaturePage from "@/components/pages/FeaturePage.vue"
  import FrameworkPage from "@/components/pages/FrameworkPage.vue"
  import SaveTimePage from "@/components/pages/SaveTimePage.vue"
  import DeveloperPage from "@/components/pages/DeveloperPage.vue"
  import {onMounted} from "vue"
  onMounted(() => {
    document.body.className = "home"
  })
</script>

<!-- <script lang="ts">
  export default {
    beforeCreate: function () {
      document.body.className = "home"
    },
  }
</script> -->

<template>
  <div class="containerize">
    <article>
      <section>
        <HomePage />
      </section>
      <section>
        <FeaturePage />
      </section>
      <section>
        <FrameworkPage />
      </section>
      <section>
        <SaveTimePage />
      </section>
      <section>
        <DeveloperPage />
      </section>
    </article>
  </div>
</template>

<style>
  * {
    margin: 0;
    scroll-behavior: smooth;
  }
  body.home ::-webkit-scrollbar {
    display: none;
  }
  article {
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: fit-content;
    transform-origin: top left;
    transform: rotate(90deg) translateY(-100vh);
  }
  section {
    width: 100vw;
    height: 100vh;
    /* scroll-snap-align: strat; */
    overflow-y: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    /* font-size: 3rem; */
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
</style>
