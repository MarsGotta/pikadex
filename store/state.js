export default () => ({
  pokemons: [],
  pokemonsFiltered: [],
  pokemonsSearched: null,
  search: '',
  pokemon: {},
  theme: 'light',
  reload: false,
  pagination: {
    number: 1,
    count: 0,
    limit: 20,
    pages: 0,
    pagesList: [],
    currentPage: 1,
    next: null,
    previous: null,
  },
})
