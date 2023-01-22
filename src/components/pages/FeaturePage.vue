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
            href="#feature-1"
            role="button"
            @mouseenter="showIndex['feature-1'] = !showIndex['feature-1']"
            @mouseleave="showIndex['feature-1'] = false"
          >
            <icon icon="fas fa-gauge" style="font-size: 5rem" class="mb-2" />
            <h5 class="card-title mt-2">Fast & Reliable</h5>
          </div>
          <transition name="bounce">
            <div
              class="feature-1-collapse card-body"
              v-show="showIndex['feature-1']"
            >
              <h6 class="card-subtitle mb-2 text-muted">Build systems</h6>
              <h6 class="card-subtitle mb-2 text-muted">
                quickly and reliably
              </h6>
            </div>
          </transition>
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
            @mouseover="showIndex['feature-2'] = true"
            @mouseleave="showIndex['feature-2'] = false"
          >
            <icon
              icon="fas fa-layer-group"
              style="font-size: 5rem"
              class="mb-2"
            />
            <h5 class="card-title mt-2">Scalable</h5>
          </div>
          <transition name="bounce">
            <div
              class="feature-2-collapse card-body"
              v-if="showIndex['feature-2']"
              id="feature-2"
            >
              <h6 class="card-subtitle mb-2 text-muted">Can be developed</h6>
              <h6 class="card-subtitle mb-2 text-muted">
                according to your needs
              </h6>
            </div>
          </transition>
        </div>
      </div>
      <div class="col-md-4">
        <div
          class="card w-md-75 w-100 my-md-0 my-3 h-50 border-0 shadow-none text-center"
        >
          <div
            class="feature-3-icon seagreen crimson text-center"
            role="button"
            @mouseover="showIndex['feature-3'] = !showIndex['feature-3']"
            @mouseleave="showIndex['feature-3'] = false"
          >
            <icon
              icon="fas fa-shield-halved"
              class="mb-2"
              style="font-size: 5rem"
            />
            <h5 class="card-title mt-2">Secure</h5>
          </div>
          <transition name="bounce">
            <div class="card-body" v-if="showIndex['feature-3']">
              <h6 class="card-subtitle mb-2 text-muted">
                Less vulnerability and protected
              </h6>
              <h6 class="card-subtitle mb-2 text-muted">
                from malicious code injection
              </h6>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    data() {
      return {
        showIndex: {
          "feature-1": false,
          "feature-2": false,
          "feature-3": false,
        },
      }
    },
  }
  // const showIndex = {
  //   "feature-1": false,
  //   "feature-2": false,
  //   "feature-3": false,
  // }
  // function run() {
  //   console.log(showIndex["feature-3"])
  // }
</script>
<style lang="css">
  .div-hover {
    color: #000;
  }
  .bounce-enter-active {
    animation: bounce-in 0.5s;
  }
  .bounce-leave-active {
    animation: bounce-in 0.5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
