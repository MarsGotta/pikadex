<template>
  <section class="pokedex-section">
    <the-search-list :page="1" :search="search"></the-search-list>
  </section>
</template>

<script>
export default {
  computed: {
    page() {
      // TODO: fix currentPage NaN
      return this.$store.state.pagination.currentPage
    },
    search() {
      return this.$store.state.search
    },
  },
}
</script>

<style>
.pokedex-section {
  padding: 10px 20px;
  width: 100%;
}
</style>
