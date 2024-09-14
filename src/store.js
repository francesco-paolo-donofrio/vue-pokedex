import { reactive } from "vue";
export const store = reactive({
  state: {
    pokemonCollection: [],
    currentPokemonName: ''
  },
  mutations: {
    addPokemon(state, pokemon) {
      state.pokemonCollection.push(pokemon);
      state.currentPokemonName = pokemon.name; // Salva il nome dell'ultimo Pokémon aggiunto
    }
  },
});