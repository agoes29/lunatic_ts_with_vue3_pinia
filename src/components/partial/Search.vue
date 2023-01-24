<template>
  <form @submit.prevent="$emit('search', searchValue)">
    <div class="searchBar">
      <input
        id="searchQueryInput"
        name="search"
        v-model="searchValue"
        placeholder="Search..."
      />
      <button id="searchQuerySubmit">
        <icon icon="fas fa-magnifying-glass" />
      </button>
    </div>
  </form>
</template>
<script setup lang="ts">
  import {ref} from "vue"
  const searchValue = ref("")
</script>
<style lang=""></style>
