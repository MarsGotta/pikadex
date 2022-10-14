<template>
  <section class="pokedex-section">
    <the-search-list :page="page" :search="search"></the-search-list>
  </section>
</template>

<script>
export default {
  computed: {
    pokemonsFiltered() {
      return this.$store.state.pokemonsFiltered
    },
    pokemons() {
      return this.$store.state.pokemons
    },
    page() {
      return Number(this.$route.params.page) || 1
    },
    search() {
      return this.$route.params.search || ''
    },
  },
}
</script>

<style>
.pokedex-section {
  grid-area: content;
  padding: 10px 20px;
}
</style>
