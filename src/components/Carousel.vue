<template lang="">
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row gy-4">
        <div
          class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
        >
          <h1>Build more, with a profesional framework</h1>
          <h2>Vue, Laravel & Bootstrap</h2>
          <div>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div
          class="col-lg-6 order-1 order-lg-2 hero-img d-flex flex-column justify-content-center"
        >
          <div class="animated">
            <img
              src="@/assets/Logo_34xx.png"
              height="400"
              width="400"
              class="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style>
  /*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
  #hero {
    width: 100%;
    height: 70vh;
    background: var(--background-color-secondary);
    margin: 72px 0 -72px 0;
  }

  #hero h1 {
    margin: 0;
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    color: var(--text-color-primary);
  }

  #hero h2 {
    color: var(--text-color-secondary);
    margin: 15px 0 0 0;
    font-size: 24px;
  }

  #hero .btn-get-started {
    font-family: "Raleway", sans-serif;
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 8px 28px;
    border-radius: 3px;
    transition: 0.5s;
    margin-top: 30px;
    color: #fff;
    background: #ff2919;
  }

  #hero .btn-get-started:hover {
    background: #ef7f4d;
  }

  #hero .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }

  @media (max-width: 991px) {
    #hero {
      height: calc(100vh - 72px);
    }

    #hero .animated {
      -webkit-animation: none;
      animation: none;
    }

    #hero .hero-img {
      text-align: center;
    }

    #hero .hero-img img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }

    #hero h2 {
      font-size: 18px;
      line-height: 24px;
    }

    #hero .hero-img img {
      width: 70%;
    }
  }

  @media (max-width: 575px) {
    #hero .hero-img img {
      width: 80%;
    }
  }

  @media (max-height: 600px) {
    #hero {
      height: 120vh;
    }
  }

  @-webkit-keyframes up-down {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(-10px);
    }
  }
</style>
