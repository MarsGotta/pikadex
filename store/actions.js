export default {
    async FetchPokemons({ commit, state }, url) {
        if (state.pokemons.length === 0) {
            try {
                const { data } = await this.$axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
                const pages = Math.ceil(data.count / state.pagination.limit);
                const list = [];
                for(let page = 1; page <= pages; page++) {
                    list.push(page)
                }
                commit('setPokemons', data);
                commit('setPagination', { count: data?.count, pages, pagesList: list});
            } catch (error) {
                console.err('ERROR:', error)
            }
        }
    },
    async FetchPokemon({ commit }, url) {
        try {
            const response = await this.$axios.get(url);
            commit('setPokemon', response?.data);
            
        } catch (error) {
            console.err('ERROR:', error)
        }
    },
    FetchSearch({ state, dispatch, commit }, { search = '', page = 1 } = {}) {
        const pokemons = [ ...state.pokemons ];
        const filtered = pokemons.filter(pokemon => pokemon.name.includes(search));
        const count = filtered.length;
        const pages = Math.ceil(count / state.pagination.limit);
        const list = [];
        const pagination = { count, pages, pagesList: list, currentPage: page };
        for(let element = 1; element <= pages; element++) {
            list.push(element)
        }
        commit('setPokemonsSearched', filtered);
        commit('setPagination', pagination);
        commit('setSearch', search);
        dispatch('FilterPokemons', { pagination, pokemons: filtered });
    },
    FilterPokemons({ commit, state }, { pagination, pokemons } = {}) {
        const currentPage = pagination?.currentPage ? pagination?.currentPage : state.pagination.currentPage;
        const limit = currentPage * 20;
        const offset = limit - 20;
        const list = pokemons || state.pokemonsSearched ||  state.pokemons;
        const filtered = list.filter((pokemon, key) => {
            const number = key + 1;
            return number <= limit && number > offset;
        });
        commit('setPokemonsFiltered', filtered);
        commit('setPagination', { currentPage });
    }

}
