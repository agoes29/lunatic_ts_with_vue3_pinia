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
<script setup lang="ts">
  import * as createjs from "@thegraid/createjs-module"
</script>
<script lang="ts">
  export default {
    methods: {
      init: function () {
        var stage = new createjs.Stage("demoCanvas")
        var circle = new createjs.Shape()
        var circle_magenta = new createjs.Shape()
        var circle_dark = new createjs.Shape()
        var circle_green = new createjs.Shape()
        var circle_blue = new createjs.Shape()
        circle.graphics
          .beginFill(createjs.Graphics.getRGB(249, 50, 44))
          .drawCircle(0, 0, 100)
        circle_magenta.graphics
          .beginFill(createjs.Graphics.getRGB(214, 51, 132))
          .drawCircle(0, 0, 50)
        circle_dark.graphics
          .beginFill(createjs.Graphics.getRGB(52, 58, 64))
          .drawCircle(0, 0, 60)
        circle_green.graphics
          .beginFill(createjs.Graphics.getRGB(25, 135, 84))
          .drawCircle(0, 0, 40)
        circle_blue.graphics
          .beginFill(createjs.Graphics.getRGB(13, 110, 253))
          .drawCircle(0, 0, 30)
        circle.x = 100
        circle.y = 150
        circle_magenta.x = 100
        circle_magenta.y = 100
        circle_dark.x = 300
        circle_dark.y = 350
        circle_green.x = 300
        circle_green.y = 400
        circle_blue.x = 300
        circle_blue.y = 400
        stage.addChild(circle)
        stage.addChild(circle_magenta)
        stage.addChild(circle_dark)
        stage.addChild(circle_green)
        stage.addChild(circle_blue)
        createjs.Tween.get(circle, {loop: true} as any)
          .to({y: 350}, 1000, createjs.Ease.getPowInOut(2))
          .to({y: 150}, 800, createjs.Ease.getPowInOut(2))
        createjs.Tween.get(circle_magenta, {loop: true} as any)
          .to({x: 450}, 1000, createjs.Ease.getPowInOut(4))
          .to({alpha: 0, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 100}, 100)
          .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({x: 100}, 800, createjs.Ease.getPowInOut(2))
        createjs.Tween.get(circle_dark, {loop: true} as any)
          .to({y: 200}, 1000, createjs.Ease.getPowInOut(4))
          .to({alpha: 0, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, y: 100}, 100)
          .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          .to({y: 300}, 800, createjs.Ease.getPowInOut(2))
        createjs.Tween.get(circle_green, {loop: true} as any)
          .to({y: 100}, 1000, createjs.Ease.getPowInOut(2))
          .to({y: 400}, 800, createjs.Ease.getPowInOut(2))
        createjs.Tween.get(circle_blue, {loop: true} as any)
          .to({x: 150}, 1000, createjs.Ease.getPowInOut(2))
          .to({x: 300}, 800, createjs.Ease.getPowInOut(2))
        createjs.Ticker.framerate = 60
        createjs.Ticker.addEventListener("tick", stage)
      },
    },
    mounted() {
      this.init()
    },
  }
</script>
<style lang=""></style>
