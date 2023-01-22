<template>
  <div class="containerize-blog">
    <div class="container-fluid h-100">
      <div class="container my-md-5 text-center">
        <h1 class="fw-bold">Blog</h1>
      </div>
      <div class="container w-100 w-md-25" style="margin-bottom: 5%">
        <form
          action="https://skeleton-web.prasetyoadisantoso.com/en/blog"
          method="post"
        >
          <input type="hidden" name="_token" value="" />
          <div class="searchBar">
            <input
              type="text"
              id="searchQueryInput"
              name="search"
              placeholder="Search..."
            />
            <button
              id="searchQuerySubmit"
              name="searchQuerySubmit"
              type="submit"
            >
              <icon icon="fas fa-magnifying-glass" />
            </button>
          </div>
        </form>
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
