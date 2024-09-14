import { reactive } from "vue";

export const store = reactive({
  pokemonList: [],
  pokemonDetails: [],
  pokemonTypes: [],
  pokemonAbilities: [],
  pokemonMoves: [],
  pokemonStats: [],
  pokemonSpecie: [],
  lastAddedPokemon: '',
});