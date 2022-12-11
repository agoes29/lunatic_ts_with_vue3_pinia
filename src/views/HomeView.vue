<script setup lang="ts">
  import TheWelcome from "../components/TheWelcome.vue"
  import Carousel from "../components/Carousel.vue"
</script>

<template>
  <Carousel />
  <!-- Icons Grid-->
  <section class="features-icons text-center">
    <div class="container mt-5">
      <div class="row">
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <font-icon
                icon="fa-solid fa-gauge"
                class="m-auto text-danger fonticon"
              />
            </div>
            <h3>Fast & Reliable</h3>
            <p class="lead mb-0">Build systems quickly and reliably</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <font-icon
                icon="fa-solid fa-layer-group"
                class="m-auto text-primary fonticon"
              />
            </div>
            <h3>Scalable</h3>
            <p class="lead mb-0">Can be developed according to your needs</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
              <font-icon
                icon="fa-solid fa-shield-halved"
                class="m-auto text-success fonticon"
              />
            </div>
            <h3>Secure</h3>
            <p class="lead mb-0">
              Less vulnerability and protected from malicious code injection
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <div class="row gy-3">
        <div
          class="col-lg-5 order-2 order-lg-2 d-flex flex-column justify-content-center"
        >
          <h1>Framework Standard</h1>
          <p>
            Built from scratch according to Laravel and Bootstrap conventions
            with some easy customization. Bridging developers with ordinary
            users in developing the system according to their wishes.
          </p>
          <!-- <div>
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div> -->
        </div>
        <div
          class="col-lg-7 order-1 order-lg-1 hero-img d-flex flex-column justify-content-center"
        >
          <div class="animated">
            <img
              src="@/assets/bg-showcase-2.png"
              height="400"
              width="400"
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
  <!-- Developer -->
  <section id="developer" class="testimonials text-center mt-5">
    <div class="container">
      <h2 class="mb-5">Developer</h2>
      <div class="row">
        <div class="col-lg-6">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              class="img-fluid rounded-circle mb-3"
              width="300"
              height="300"
              src="https://skeleton-web.prasetyoadisantoso.com/image/pras.jpg"
              alt="..."
            />
            <h5>Prasetyo Adi Santoso</h5>
            <small>Back-end Developer</small>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="testimonial-item mx-auto mb-5 mb-lg-0">
            <img
              class="img-fluid rounded-circle mb-3"
              width="300"
              height="300"
              src="https://skeleton-web.prasetyoadisantoso.com/image/satriyadi.jpg"
              alt="..."
            />
            <h5>Gede Bagus Satriyadi</h5>
            <small>Front-end Developer</small>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .features-icons .features-icons-item .features-icons-icon {
    height: 7rem;
  }
  .features-icons .features-icons-item .features-icons-icon .fonticon {
    font-size: 4.5rem;
  }
</style>
