<script setup lang="ts">
  import {watch, onMounted} from "vue"
  import http from "@/http"
  import Search from "@/components/partial/Search.vue"
  import BlogCard from "@/components/partial/BlogCard.vue"
  import {ref} from "vue"
  interface Props {
    searchValue: any
  }

  onMounted(() => {
    document.body.className = "blogs"
  })
  // const handleSearch = (searchValue: Props) => {}
  const blogPosts: any = ref([])
  const filtered: any = ref([])

  watch(blogPosts, (newData) => {
    filtered.value = newData
  })

  http
    .get(
      "https://api.buttercms.com/v2/posts/?auth_token=3ce31c237fbf10fc491cf8741391edc8a74896c3",
    )
    .then((response) => {
      blogPosts.value = response.data.data
    })

  const handleSearch = (searchValue: String) => {
    const result = blogPosts.value.filter((post: any) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    filtered.value = result
  }
</script>

<template>
  <div class="containerize-blog">
    <div class="container-fluid h-100">
      <div class="container my-md-5 text-center">
        <h1 class="fw-bold">Blog</h1>
      </div>
      <div class="container w-100 w-md-25" style="margin-bottom: 5%">
        <Search @search="handleSearch" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <p v-if="!blogPosts.length" class="noBlogPost">
            No blog post available
          </p>
          <div v-else v-for="post in filtered" class="container mb-5 mt-5">
            <BlogCard
              :slug="post.slug"
              :image="post.featured_image"
              :title="post.title"
              :summary="post.summary"
            />
          </div>
          <div class="container mt-5 w-100 w-md-50">
            <div class="d-flex justify-content-between align-items-center">
              <div class="container">
                <a href="" class="text-decoration-none text-gray"
                  ><i class="fa-solid fa-angles-left"></i>&nbsp;Latest Post</a
                >
              </div>
              <div class="container">
                <a href="" class="text-decoration-none text-gray"
                  >Oldest Post&nbsp;<i class="fa-solid fa-angles-right"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="container text-center mt-5 mt-md-0">
            <h3 class="fw-bold text-gray">Categories</h3>
          </div>
          <div class="container text-center">
            <ul class="list-group">
              <li class="list-group-item border-0">
                <a
                  class="text-decoration-none text-secondary"
                  href="https://skeleton-web.prasetyoadisantoso.com/en/blog/category/sample-category"
                  >Sample Category</a
                >
              </li>
              <li class="list-group-item border-0">
                <a
                  class="text-decoration-none text-secondary"
                  href="https://skeleton-web.prasetyoadisantoso.com/en/blog/category/uncategorized"
                  >Uncategorized</a
                >
              </li>
              <li class="list-group-item border-0">
                <a
                  class="text-decoration-none text-secondary"
                  href="https://skeleton-web.prasetyoadisantoso.com/en/blog/category/parent-category"
                  >Parent Category</a
                >
              </li>
              <li class="list-group-item border-0">
                <a
                  class="text-decoration-none text-secondary"
                  href="https://skeleton-web.prasetyoadisantoso.com/en/blog/category/sub-category"
                  >Sub Category</a
                >
              </li>
            </ul>
          </div>
          <div class="container text-center mt-5">
            <h3 class="fw-bold text-gray">Tags</h3>
          </div>
          <div class="container text-center">
            <ul class="list-group">
              <li class="list-group-item border-0">
                <a
                  class="text-decoration-none text-secondary"
                  href="https://skeleton-web.prasetyoadisantoso.com/en/blog/tag/good"
                  >good</a
                >
              </li>
              <li class="list-group-item border-0">
                <a
                  class="text-decoration-none text-secondary"
                  href="https://skeleton-web.prasetyoadisantoso.com/en/blog/tag/new"
                  >new</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @media (min-width: 768px) {
    .w-md-25 {
      width: 25% !important;
    }
  }
  .searchBar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  #searchQueryInput {
    width: 100%;
    height: 2.8rem;
    background: #f5f5f5f5;
    outline: none;
    border: none;
    border-radius: 1625rem;
    padding: 0 3.5rem 0 1.5rem;
    font-size: 1rem;
  }
  #searchQuerySubmit {
    width: 3.5rem;
    height: 2.8rem;
    margin-left: -3.5rem;
    background: none;
    border: none;
    outline: none;
  }
</style>
