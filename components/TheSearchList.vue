<template>
    <section class="search-list">
        <p>
            <strong>{{ pokemons.length }}</strong> Pokemons for you to choose your favorite:
        </p>
        <mars-search placeholder="Find your pokemon" @search="(search) => handlePagination({ search, page: 1 })"></mars-search>
        <mars-list :items="pokemonsFiltered" :on-pagination="(page) => handlePagination({ page })" :on-card-click="handleCardClick"/>
    </section>
</template>

<script>
export default {
    props: {
        search: {
            type: String,
            default: ''
        },
        page: {
            type: Number,
            default: 1
        },
    },
    computed: {
        pokemonsFiltered() {
            console.log(this.$store.state.pokemonsFiltered)
            return this.$store.state.pokemonsFiltered
        },
        pokemons() {
            return this.$store.state.pokemons
        },
    },
    async beforeMount() {
        const { pokemons } = this.$store.state;
        if(pokemons.length === 0 ) {
            await this.$store.dispatch('FetchPokemons')
        }
        
        this.$store.dispatch('FetchSearch', { search: this.search, page: this.page })
        this.$store.commit('setPokemon', {})
    },
    methods: {
        handlePagination({search, page}) {
            const pathSearch = search || '';
            const pathPage = page || 1;
            this.$router.push({ path: `/pokedex/${pathPage}/${pathSearch}` });
        },
        handleCardClick(pokemon) {
            const { id } = pokemon;
            this.$router.push({ path: `/pokemon/${id}/` });
        }
    }
}
</script>

<style>
    .search-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .search-list p {
        font-size: 1.5rem;
        font-weight: 200;
        margin: 10px;
        line-height: 2rem;
        text-align: center;
    }
</style>