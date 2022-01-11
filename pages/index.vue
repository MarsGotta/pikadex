<template>
  <section>
    <h2>Find all your favorite Pokémon!</h2>
    <p>
      You can know the type of Pokemon, its strengths, disadvantages and abilities
    </p>
    <mars-button> See pokemons </mars-button>
  </section>
</template>

<script>
export default {
    beforeCreate() {
      if(this.$store.state.pokemons.length === 0) {
        this.$store.dispatch('FetchPokemons')
      }
      // this.$store.commit('setReload', true)
      this.$store.commit('setPagination', {
            currentPage: 1,
      })
    },
}
</script>
