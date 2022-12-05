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
  <!-- Developer -->
  <section id="developer" class="testimonials text-center mt-4">
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
