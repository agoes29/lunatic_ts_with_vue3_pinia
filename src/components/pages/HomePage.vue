<template>
  <div class="home-1">
    <div class="row" id="home-row">
      <!-- Description -->
      <div class="col-md-6">
        <div class="container mb-5 descriptions">
          <div class="description text-dark rounded text-center text-md-start">
            <h1>BUILD MORE WITH</h1>
            <h1>PROFESSIONAL</h1>
            <h1>FRAMEWORK</h1>
            <h1>
              <icon
                icon="fab fa-vuejs"
                class="me-3"
                style="color: #41b883"
              />&<icon
                icon="fab fa-bootstrap"
                class="ms-3"
                style="color: #6610f2"
              />
            </h1>
          </div>
        </div>
        <div class="social container mt-5">
          <div class="d-flex justify-content-start">
            <a href="#" class="me-4">
              <icon
                icon="fab fa-instagram"
                class="me-3"
                style="font-size: 40px; color: #6c757d"
              />
            </a>
            <a href="#" class="me-4">
              <icon
                icon="fab fa-gitlab"
                class="me-3"
                style="font-size: 40px; color: #6c757d"
              ></icon>
            </a>
            <a href="#" class="me-4">
              <icon
                icon="fab fa-github"
                class="me-3"
                style="font-size: 40px; color: #6c757d"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Animation -->
      <div class="col-md-6">
        <div class="container animation">
          <div class="container">
            <img src="../../assets/img/macbook.png" alt="" class="macbook" />
          </div>
          <canvas id="demoCanvas" width="500" height="500"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang=""></style>
