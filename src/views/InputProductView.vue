<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-6 col-sm-8 mx-auto">
        <div class="form-background p-3 ma-4">
          <form class="d-flax" @submit.prevent="createProduct">
            <h3 class="mb-3">Create Product</h3>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingProduct"
                placeholder="input nama produk"
                v-model="inputProduct.titleProduct"
              />
              <label for="floatingProduct">Input Nama Produk</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                class="form-control"
                id="floatingAuthor"
                placeholder="input nama author"
                v-model="inputProduct.authorProduct"
              />
              <label for="floatingAuthor">Input Author</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="number"
                class="form-control"
                id="floatingPrice"
                placeholder="input harga barang"
                v-model="inputProduct.priceProduct"
              />
              <label for="floatingName">Input Harga</label>
            </div>
            <button type="submit" class="w-100 btn btn-success mt-3">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useProductStore } from '@/stores/product';

  const inputProduct = useProductStore()
  const createProduct = () => {
    inputProduct.createProduct()
  }
</script>
<style lang="css">
  .form-background {
    border-radius: 11px;
    background: linear-gradient(145deg, #161616, #1a1a1a);
    box-shadow: 8px 8px 18px #0b0b0b, -8px -8px 18px #252525;
  }
  label {
    color: #181818;
  }
</style>