<template>
  <div class="container my-5 pt-3">
    <h3>Detail Product</h3>
    <router-link to="/products/create" class="btn btn-success"
      >Create Products</router-link
    >
    <div class="row mt-2 g-1">
      <div
        class="col-md-3 col-card p-1 mx-1"
        v-for="product in products"
        :key="product.id"
      >
        <div class="text-color card p-1 ma-4">
          <div class="text-center mt-2 p-2">
            <img
              :src="imageStore + product.image"
              class="image-fit"
              alt=""
              width="150"
              height="150"
            />
            <hr />
            <span>{{ product.title }}</span>
            <div
              class="d-flex flex-row align-items-center justify-content-center"
            >
              <small class="small-color">{{ product.author }}</small>
            </div>
            <div
              class="d-flex align-content-center justify-content-center mt-2"
            >
              <span>Rp.{{ product.price }}</span>
            </div>
            <button
              @click="deleteProduct(product.id)"
              class="text-cr btn btn-success btn-sm btn-outline-dark mt-2"
            >
              Apply Now
            </button>
          </div>
          <div
            type="error"
            class="alert alert-danger m-2"
            v-if="data_products.errorFatch"
          >
            {{ data_products.errorFatch }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {useProductStore} from "@/stores/product"
  import {onMounted, computed} from "vue"

  const imageStore = "https://api.prasetyoadisantoso.com/storage/"

  const data_products = useProductStore()
  onMounted(() => {
    data_products.fatchProduct()
  })
  const products = computed(() => data_products.products)

  const deleteProduct = (dataId: any) => {
    data_products.deleteProduct(dataId)
  }
</script>
<style lang="css">
  .image-fit {
    object-fit: cover;
  }
  .text-cr {
    color: aliceblue;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    .col-card {
      width: 24%;
    }
  }
  /* .small-color,
  .text-color {
    color: #181818;
  } */
  .card {
    border-radius: 11px;
    background: var(--color-background);
    box-shadow: 8px 8px 18px rgba(127, 137, 161, 0.25),
      -8px -8px 18px rgba(127, 137, 161, 0.25);
  }
</style>
