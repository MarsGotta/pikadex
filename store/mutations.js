export default {
        setPokemons(state, { results, count }) {
            const pokemons = results.map(pokemon => {
                const id = pokemon.url.split('/')[6];
                let number = id;
                if(id < 10) {
                    number = `00${id}`
                } else if (id < 100) {
                    number = `0${id}`
                }

                const image = number <= 804 ? `/pokemons/${number}.png` : '/pokemons/default.png';
                return {
                    ...pokemon,
                    number,
                    id,
                    image
                }
            })

            state.pokemons = [
                ...pokemons
            ];
            state.pokemon = {}
        },
        setPokemonsFiltered(state, payload) {
            state.pokemonsFiltered = payload;
        },
        setPokemonsSearched(state, payload) {
            state.pokemonsSearched = payload;
        },
        setPagination(state, payload) {
            state.pagination = { ...state.pagination, ...payload, currentPage: Number(payload.currentPage) };
        },
        setPokemon(state, payload) {
            state.pokemon = payload;
        },
        setSearch(state, payload) {
            state.search = payload;
        }
    }