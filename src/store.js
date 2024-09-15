import { reactive } from "vue";

export const store = reactive({
  pokemonList: [],
  pokemonDetails: [],
  lastAddedPokemon: null,
});