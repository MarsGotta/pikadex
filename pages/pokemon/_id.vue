<template>
  <section class="pokemon-section">
    <h1>{{ pokemon.name }}</h1>
    <img
      v-if="number > 804"
      alt=""
      :src="`/pokemons/default.png`"
      width="300"
    />
    <img v-else :src="`/pokemons/${number}.png`" alt="" width="300" />
    <h2>Abilities</h2>
    <ul>
      <li v-for="(ability, index) in pokemon.abilities" :key="index">
        {{ ability.ability.name }}
      </li>
    </ul>
    <h2>Types</h2>
    <ul>
      <li v-for="(type, index) in pokemon.types" :key="index">
        {{ type.type.name }}
      </li>
    </ul>
    <h2>Weaknesses</h2>
    <ul>
      <li v-for="(type, index) in pokemon.types" :key="index">
        {{ type.type.name }}
      </li>
    </ul>
    <h2>Stats</h2>
    <ul>
      <li v-for="(stat, index) in pokemon.stats" :key="index">
        {{ stat.stat.name }}: {{ stat.base_stat }}
      </li>
    </ul>
    <h2>Moves</h2>
    <ul>
      <li v-for="(move, index) in pokemon.moves" :key="index">
        {{ move.move.name }}
      </li>
    </ul>
    <h2>Sprites</h2>
    <ul>
      <li v-for="(sprite, index) in pokemon.sprites" :key="index">
        <img :src="sprite" width="100" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    },
    pokemon() {
      return this.$store.state.pokemon
    },
    number() {
      let number = this.id
      if (this.id < 10) {
        number = `00${this.id}`
      } else if (this.id < 100) {
        number = `0${this.id}`
      }
      return number
    },
  },
  beforeMount() {
    this.$store.dispatch(
      'FetchPokemon',
      `https://pokeapi.co/api/v2/pokemon/${this.id}/`
    )
  },
}
</script>

<style>
.pokemon-section {
  max-width: 720px;
  width: 100%;
  padding: 20px;
}

.pokemon-section h1 {
  text-transform: capitalize;
  font-size: 30px;
}
</style>
