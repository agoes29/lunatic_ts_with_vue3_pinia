<template lang="">
  <section id="landings" class="d-flex align-items-center mt-5 mb-2">
    <div class="container">
      <div class="row gy-4">
        <div
          class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center"
        >
          <h1 class="bold">Build more, with a profesional framework</h1>
          <h2>Vue, Laravel & Bootstrap</h2>
          <nav>
            <ul>
              <li>
                <a href="#" class="btn-get-started scrollto"
                  ><font-icon icon="fa-brands fa-instagram" class="iconsize"
                /></a>
              </li>
              <li>
                <a href="#" class="btn-get-started scrollto"
                  ><font-icon icon="fa-brands fa-github" class="iconsize"
                /></a>
              </li>
              <li>
                <a href="#" class="btn-get-started scrollto"
                  ><font-icon icon="fa-brands fa-gitlab" class="iconsize"
                /></a>
              </li>
              <li>
                <a href="/home" class="btn-get-started scrollto"
                  ><font-icon icon="fa-solid fa-home" class="iconsize"
                /></a>
              </li>
              <DarkModeVue iconsize="iconsize" />
            </ul>
          </nav>
        </div>
        <div
          class="col-lg-7 order-1 order-lg-2 hero-img d-flex flex-column justify-content-center"
        >
          <div class="animated">
            <img
              src="@/assets/bg-showcase-2.png"
              height="500"
              width="500"
              class="img-fluid"
              alt=""
            />
            <img
              src="@/assets/bg-showcase-3.png"
              height="100"
              width="100"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import DarkModeVue from "@/components/button/DarkMode.vue"
  export default {
    components: {
      DarkModeVue,
    },
  }
</script>
<style>
  #landings .iconsize {
    font-size: 20px;
  }
  #landings {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
  #landings .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }
  #landings h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: var(--text-color-primary);
  }
  #landings h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 56px;
    color: var(--text-color-primary);
  }
  #landings ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  #landings li {
    position: relative;
  }

  #landings a,
  #landings a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 15px;
    color: var(--text-primary-color);
    white-space: nowrap;
    transition: 0.3s;
  }

  #landings a i,
  #landings a:focus i {
    font-size: 12px;
    line-height: 0;
    margin-left: 5px;
  }

  #landings a:hover,
  #landings .active,
  #landings .active:focus,
  #landings li:hover > a {
    color: #eb5d1e;
  }
</style>
