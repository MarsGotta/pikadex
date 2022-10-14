<template>
  <section class="home-section">
    <h2 class="home-title">Find all your favorite Pokémon!</h2>
    <p class="home-description">
      You can know the type of Pokemon, its strengths, disadvantages and
      abilities
    </p>
    <mars-button class="home-button" @click="handleClick">
      See pokemons
    </mars-button>
  </section>
</template>

<script>
export default {
  beforeCreate() {
    if (this.$store?.state?.pokemons?.length === 0) {
      this.$store.dispatch('FetchPokemons')
    }
    // this.$store.commit('setReload', true)
    this.$store.commit('setPagination', {
      currentPage: 1,
    })
  },
  methods: {
    handleClick() {
      this.$router.push({ path: `/pokedex` })
    },
  },
}
</script>

<style>
.home-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
  gap: 16px;
}

.home-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0 10px;
}

.home-description {
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 35px;
}

.home-button {
  background: var(--color-ocre-500);
  border: 0;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  font-weight: 300;
  cursor: pointer;
  width: 200px;
}

.home-button:hover {
  background: var(--color-ocre-600);
}
</style>
