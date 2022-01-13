<template>
  <section>
    <h2>Find all your favorite Pokémon!</h2>
    <p>
      You can know the type of Pokemon, its strengths, disadvantages and abilities
    </p>
    <mars-button @click="handleClick"> See pokemons </mars-button>
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
    methods: {
        handleClick() {
            this.$router.push({ path: `/pokedex` });
        }
    },
}
</script>

<style>
body {
  margin: 0;

  --color-ocre-500: #F29408;
  --color-carmesi-700: #A01A13;
}
</style>