<template>
  <div class="containerize-blog">
    <div class="container-fluid h-100 py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="container">
              <img
                :src="author.profile_image"
                class="rounded-circle"
                width="50"
                height="50"
                alt=""
              />
              <h5 class="fw-bold">
                {{ author.first_name + " " + author.last_name }}
              </h5>
              <span>
                {{ new Date(blogPage.created).toDateString() }}
              </span>
            </div>
            <div class="container mt-5 text-center">
              <h3 class="fw-bold">{{ blogPage.title }}</h3>
            </div>
            <div class="container mt-5">
              <img :src="blogPage.featured_image" class="img-fluid" alt="" />
            </div>
            <div
              class="container mt-5 blogDetail__body"
              v-html="blogPage.body"
            ></div>
            <div class="container mt-5 w-50">
              <div class="d-flex justify-content-center align-items-center">
                <div class="container text-center">
                  <router-link
                    to="/blog"
                    class="text-decoration-none text-gray"
                  >
                    <icon icon="fas fa-angles-left" />
                    Back to Post List
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import http from "@/http"
  import {ref} from "vue"
  import {useRoute, RouterLink} from "vue-router"
  import SideMenu from "../partial/SideMenu.vue"

  const route = useRoute()
  const slug = route.params.slug
  const blogPage: any = ref({})
  const author: any = ref([])

  http
    .get(
      `https://api.buttercms.com/v2/posts/${slug}?auth_token=3ce31c237fbf10fc491cf8741391edc8a74896c3`,
    )
    .then((response) => {
      blogPage.value = response.data.data
      author.value = response.data.data.author
    })
</script>
<style lang="css">
  .blogDetail__body img,
  video {
    margin: 5px 0;
  }
  .blogDetail__body img {
    width: 700px;
    height: auto;
  }
</style>
