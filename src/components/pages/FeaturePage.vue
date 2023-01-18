<template>
  <div
    class="container"
    id="features"
    data-aos="fade-up"
    data-aos-duration="3000"
  >
    <div class="row" id="features-row">
      <div class="col-md-4">
        <div
          class="card w-md-75 my-md-0 my-3 w-100 h-md-50 h-25 border-0 shadow-none text-center"
        >
          <div
            class="feature-1-icon crimson text-center"
            data-bs-toggle="collapse"
            href="#feature-1"
            role="button"
            aria-expanded="false"
            aria-controls="feature-1"
          >
            <icon icon="fas fa-gauge" style="font-size: 3rem" class="mb-2" />
            <h5 class="card-title mt-2">Fast & Reliable</h5>
          </div>
          <div class="feature-1-collapse collapse card-body" id="feature-1">
            <h6 class="card-subtitle mb-2 text-muted">Build systems</h6>
            <h6 class="card-subtitle mb-2 text-muted">quickly and reliably</h6>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="card w-md-75 my-md-0 my-3 w-100 h-50 border-0 shadow-none text-center"
        >
          <div
            class="feature-2-icon text-center dodgerblue"
            data-bs-toggle="collapse"
            href="#feature-2"
            role="button"
            aria-expanded="false"
            aria-controls="feature-2"
          >
            <icon
              icon="fas fa-layer-group"
              style="font-size: 3rem"
              class="mb-2"
            />
            <h5 class="card-title mt-2">Scalable</h5>
          </div>
          <div class="feature-2-collapse collapse card-body" id="feature-2">
            <h6 class="card-subtitle mb-2 text-muted">Can be developed</h6>
            <h6 class="card-subtitle mb-2 text-muted">
              according to your needs
            </h6>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="card w-md-75 w-100 my-md-0 my-3 h-50 border-0 shadow-none text-center"
        >
          <div
            class="feature-3-icon seagreen crimson text-center"
            data-bs-toggle="collapse"
            href="#feature-3"
            role="button"
            aria-expanded="false"
            aria-controls="feature-3"
          >
            <icon
              icon="fas fa-shield-halved"
              class="mb-2"
              style="font-size: 3rem"
            />
            <h5 class="card-title mt-2">Secure</h5>
          </div>
          <div class="feature-3-collapse collapse card-body" id="feature-3">
            <h6 class="card-subtitle mb-2 text-muted">
              Less vulnerability and protected
            </h6>
            <h6 class="card-subtitle mb-2 text-muted">
              from malicious code injection
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>
