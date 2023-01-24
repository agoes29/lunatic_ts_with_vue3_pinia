<template>
  <div class="row">
    <div class="col-md-6">
      <div class="container">
        <img :src="image" class="img-fluid" alt="" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="container blog-content text-center text-md-start">
        <h3 class="fw-bold text-gray mt-3 mt-md-0">{{ title }}</h3>
        <div class="text-truncation text-secondary">
          <p>
            {{ summary }}
          </p>
        </div>
        <a
          @click="$router.push(`/blog/${slug}`)"
          class="btn btn-danger bg-crimson px-5 rounded-pill"
          >Read More</a
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps([
    "slug",
    "image",
    "date",
    "title",
    "summary",
    "authorImage",
    "authorName",
  ])
</script>
<style lang=""></style>
