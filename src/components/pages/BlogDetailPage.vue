<template>
  <div class="blogDetail">
    <h1>{{ blogPost.title }}</h1>
    <div class="blogDetail__head">
      <img
        :src="blogPost.author.profile_image"
        class="blogDetail__profileImg"
      />
      <span>{{
        blogPost.author.first_name + " " + blogPost.author.last_name
      }}</span>
      <span>{{ new Date(blogPost.created).toISOString().split("T")[0] }}</span>
    </div>
    <img :src="blogPost.featured_image" />
    <div class="blogDetail__body" v-html="blogPost.body"></div>
  </div>
</template>
<script setup lang="ts">
  import http from "@/http"
  import {ref} from "vue"
  import {useRoute} from "vue-router"

  const route = useRoute()
  const slug = route.params.slug
  const blogPost: any = ref({})

  http
    .get(
      `https://api.buttercms.com/v2/posts/${slug}?auth_token=3ce31c237fbf10fc491cf8741391edc8a74896c3`,
    )
    .then((response) => {
      console.log(response)
      blogPost.value = response.data.data
    })
</script>
<style lang=""></style>
