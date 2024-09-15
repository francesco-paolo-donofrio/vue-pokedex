<template>
    <div class="f-d-position-relative">
        <div class="pokedex-border-side-left">
            <div class="f-d-flex-right">
                <div class="f-d-smashed-rectangle">
                    <div class="f-d-circle">
                        <div class="f-d-small-circle">
                            <div class="f-d-deep-small-circle">

                            </div>
                        </div>
                    </div>
                    <div class="f-d-colorated-circles red">
                        <div class="f-d-colorated-circles-circle">

                        </div>
                    </div>
                    <div class="f-d-colorated-circles yellow">
                        <div class="f-d-colorated-circles-circle">

                        </div>
                    </div>
                    <div class="f-d-colorated-circles green">
                        <div class="f-d-colorated-circles-circle">

                        </div>
                    </div>
                </div>
            </div>
            <div class="f-d-main-rectangle-border-relative">
                <div>
                    <div class="f-d-search-container f-d-flex-between">
                        <input type="text" v-model="searchQuery" class="f-d-search-input" placeholder="Search..."
                            @input="searchPokemon">
                        <button class="f-d-search-button" @click="searchPokemon">
                            <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="Search">
                        </button>
                        <div class="f-d-add-button" @click="addPokemon">
                            Add
                        </div>
                        <div class="f-d-remove-button" @click="clearSearch">
                            Omit
                        </div>
                    </div>
                </div>
                <div class="f-d-flex">
                    <div class="f-d-main-rectangle">
                        <div class="f-d-animated-rectangle" :style="backgroundStyle">
                            <!-- Mostra l'immagine del Pokémon cercato -->
                            <p v-if="selectedPokemon" class="f-d-pokemon-animation">
                                <img :src="selectedPokemon.sprites.front_default" :alt="selectedPokemon.name"
                                    class="front-image">
                                <img :src="selectedPokemon.sprites.back_default" :alt="selectedPokemon.name"
                                    class="back-image">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="f-d-main-rectangle-border">

                </div>
            </div>
            <div class="f-d-bottom-main-container">
                <div class="f-d-65-container">
                    <div class="f-d-40-height">
                        <div class="f-d-circle-black">
                            <div class="f-d-circle-black-absolute"></div>
                        </div>
                        <div class="f-d-orizzontal-bars red d-flex justify-content-center align-items-center fw-bold" @click="removePokemon(index)">Remove</div>
                        <div class="f-d-orizzontal-bars blue"></div>
                    </div>
                    <div class="f-d-60-height">
                        <div class="f-d-green-rectangle">
                            <div id="carouselExample" class="carousel slide">
                                <div class="carousel-inner mt-2">
                                    <div class="carousel-item" v-for="(pokemon, index) in addedPokemons"
                                        :key="pokemon.id" :class="{ 'active': index === 0 }">
                                        <img :src="pokemon.sprites.front_default" class="f-d-img-carousel"
                                            :alt="pokemon.name">
                                        <div class="carousel-caption d-none d-md-block">
                                            <p class="f-d-text-title ">My Pokémon</p>
                                            <h6 class="text-white fw-bold text-uppercase ms-5">{{ pokemon.name }}</h6>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="f-d-35-container">
                    <div class="f-d-cross-polygon">
                        <div class="f-d-cross-circle"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pokedex-border-side-right">
            <div>ciao</div>
            <div class="f-d-great-rectangle green mt-5">
                <ul class="f-d-list-style" v-if="selectedPokemon">
                    <li>
                        <h2 class="f-d-text-title">{{ selectedPokemon.name }}</h2>
                        <div class="f-d-flex-center">
                            <p class="pe-3">Height:</p>
                            <p>{{ selectedPokemon.height }}</p>
                        </div>
                        <div class="f-d-flex-center">
                            <p class="pe-3">Base experience:</p>
                            <p>{{ selectedPokemon.base_experience }}</p>
                        </div>
                        <div class="f-d-flex-center">
                            <p class="pe-3">Weight:</p>
                            <p>{{ selectedPokemon.weight }}</p>
                        </div>
                        <div class="f-d-flex-center">
                            <p class="pe-3">Type:</p>
                            <span v-for="type in selectedPokemon.types" :key="type.type.name">
                                {{ type.type.name }}
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="f-d-grid-container">
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
                <div class="f-d-grid-item aqua"></div>
            </div>
            <div class="f-d-master-container-white">
                <div class="f-d-grid-container-white">
                    <div class="f-d-grid-item white"></div>
                    <div class="f-d-grid-item white"></div>
                </div>
                <div class="f-d-grid-container-50">
                    <div class="d-flex">
                        <div class="f-d-orizzontal-bars green"></div>
                        <div class="f-d-orizzontal-bars green"></div>
                    </div>
                    <div class="f-d-animated-circle-yellow">
                        <div class="f-d-animated-circle-yellow-shadow"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'PokedexComponent',
    data() {
        return {
            store,
            pokemonList: [],
            pokemonDetails: [],
            searchQuery: '',
            selectedPokemon: null,
            imageAppearPokemon: ('../../public/img/pokemon.avif'),
            imageWood: ('../../public/img/images.jfif'),
            backgroundStyle: {
                backgroundImage: `url('../../public/img/images.jfif')`
            },
            addedPokemons: [],
            carouselInstance: null
        }
    },
    mounted() {
        this.getPokemon();
        this.loadSavedPokemons();
        this.$nextTick(() => {
            this.initializeCarousel();
        });
    },
    updated() {
        this.$nextTick(() => {
            this.updateCarousel();
        });
    },
    methods: {
        async getPokemon() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
                this.pokemonList = response.data.results;
                const detailRequests = this.pokemonList.map(pokemon => axios.get(pokemon.url));
                const details = await Promise.all(detailRequests);
                this.pokemonDetails = details.map(res => res.data);
            } catch (error) {
                console.error('Errore nella chiamata API:', error);
            }
        },
        loadSavedPokemons() {
            const savedPokemons = JSON.parse(localStorage.getItem('savedPokemons')) || [];
            this.addedPokemons = savedPokemons;
        },
        savePokemon() {
            if (!this.selectedPokemon) {
                console.log("Nessun Pokémon selezionato.");
                return;
            }

            if (!this.addedPokemons.some(p => p.id === this.selectedPokemon.id)) {
                this.addedPokemons.push(this.selectedPokemon);
                localStorage.setItem('savedPokemons', JSON.stringify(this.addedPokemons));
                store.lastAddedPokemon = this.selectedPokemon.name;

                this.$nextTick(() => {
                    this.updateCarousel();  // Aggiorna il carosello quando il DOM è stato aggiornato
                });
            } else {
                console.log("Questo Pokémon è già stato aggiunto.");
            }
        },
        searchPokemon() {
            const searchQueryLower = this.searchQuery.toLowerCase();
            const foundPokemon = this.pokemonDetails.find(pokemon =>
                pokemon.name.toLowerCase() === searchQueryLower
            );
            if (foundPokemon) {
                this.selectedPokemon = foundPokemon;
                this.backgroundStyle.backgroundImage = `url('${this.imageAppearPokemon}')`;
            } else {
                this.selectedPokemon = null;
                this.backgroundStyle.backgroundImage = `url('${this.imageWood}')`;
            }
        },
        addPokemon() {
            if (this.selectedPokemon) {
                this.savePokemon();
                const addedPokemonElement = document.querySelector('.f-d-add-button');
                addedPokemonElement.classList.add('added-pokemon-animation');
                setTimeout(() => {
                    addedPokemonElement.classList.remove('added-pokemon-animation');
                }, 500);
            }
        },
        clearSearch() {
            this.searchQuery = '';
            this.selectedPokemon = null;
            this.backgroundStyle.backgroundImage = `url('${this.imageWood}')`;
        },
        initializeCarousel() {
            const carouselElement = document.getElementById('carouselExample');
            if (carouselElement) {
                this.carouselInstance = new bootstrap.Carousel(carouselElement, {
                    interval: 2000,
                    wrap: true
                });
            }
        },
        updateCarousel() {
            // Rimuove l'istanza precedente del carosello, se esiste
            if (this.carouselInstance) {
                this.carouselInstance.dispose();
            }

            // Inizializza di nuovo il carosello con il nuovo elenco
            this.$nextTick(() => {
                this.initializeCarousel();
            });
        },
        removePokemon(index) {
        // Rimuovi il Pokémon dall'array `addedPokemons`
        this.addedPokemons.splice(index, 1);

        // Aggiorna il localStorage per mantenere i Pokémon aggiornati
        localStorage.setItem('savedPokemons', JSON.stringify(this.addedPokemons));

        // Aggiorna il carosello dopo aver rimosso il Pokémon
        this.$nextTick(() => {
            this.updateCarousel();
        });
    }
    }
}
</script>

<style lang="scss" scoped>
// Colors

.red {
    background-color: red;
}

.yellow {
    background-color: rgb(206, 206, 7);
}

.green {
    background-color: rgb(9, 53, 50);
}

.blue {
    background-color: blue;
}

.white {
    background-color: white;
}

.aqua {
    background-color: aqua;
}

//////////////

// Left side of the pokedex

.pokedex-border-side-left {
    height: 800px;
    width: 600px;
    background-color: #D41246;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 2px solid black;
}

.f-d-position-relative {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.f-d-smashed-rectangle {
    height: 150px;
    width: 100%;
    border-top-left-radius: 30px;
    background-color: #740a26;
    border-bottom-left-radius: 5px;
    clip-path: polygon(0 0, 0 100%, 30% 100%, 70% 20%, 100% 20%, 100% 0);
    // formula per smorzare i bordi di una forma geometrica -  clip path polygon
    // clip-path: inset(30% 100%, 70% 20% round 50%)
    display: flex;
    align-items: start;
}

.f-d-circle {
    height: 135px;
    width: 135px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: white;
    margin-left: 10px;
    margin-top: 10px;
    display: flex;
    align-items: start;
    justify-content: end;
    padding: 10px;
}

.f-d-small-circle {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: rgb(12, 182, 214);
    position: absolute;
}

.f-d-deep-small-circle {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: rgb(204, 221, 224);
    clip-path: circle(50% at 50% 50%);
    filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.5));
    position: relative;
    top: 10px;
    left: 25px;
}

.f-d-colorated-circles {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: 3px solid black;
    margin: 10px;
}

.f-d-colorated-circles-circle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    position: relative;
    top: 5px;
    left: 5px;
}

.f-d-flex-right {
    display: flex;
    justify-content: end;
    position: relative;
}

.f-d-flex-center {
    display: flex;
    justify-content: center;
}

.f-d-flex {
    display: flex;
    justify-content: center;
}

.f-d-flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.f-d-flex-around {
    display: flex;
    justify-content: space-around;
}

.f-d-main-rectangle {
    height: 350px;
    width: 85%;
    background-color: white;
    border: 3px solid black;
    border-radius: 20px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.f-d-main-rectangle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: transparent;
    border: 6px solid black;
    border-radius: 20px;
    z-index: -1;
}

.f-d-main-rectangle-border-relative {
    position: relative;

}

.f-d-animated-rectangle {
    height: 300px;
    width: 80%;
    border: 3px solid black;
    background-image: url(../../public/img/images.jfif);
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.f-d-black-bars {
    width: 100px;
    height: 5px;
    background-color: black;
    margin: 10px;
}

.f-d-smaller-circle {
    height: 15px;
    width: 15px;
    border: 3px solid black;
    border-radius: 50%;
    background-color: #D41246;
    margin: 10px;
}

.f-d-animated-circle {
    height: 40px;
    width: 40px;
    border: 3px solid black;
    border-radius: 50%;
    background-color: #D41246;
    margin-right: 150px;
    margin-top: 10px;
    cursor: pointer;
}

.f-d-animated-circle-yellow {
    height: 40px;
    width: 40px;
    border: 3px solid black;
    border-radius: 50%;
    background-color: rgb(206, 206, 7);
    cursor: pointer;
    align-self: end;
    margin-right: 40px;
}

.f-d-animated-circle-yellow-shadow {
    height: 15px;
    width: 15px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    position: relative;
    top: 5px;
    left: 5px;
}

.f-d-bottom-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
}

.f-d-65-container {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.f-d-35-container {
    width: 35%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

.f-d-40-height {
    height: 40%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.f-d-60-height {
    height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.f-d-green-rectangle {
    width: 60%;
    height: 100%;
    border: 3px solid black;
    background-color: rgb(98, 198, 134);
    border-radius: 10px;
    margin-left: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.f-d-circle-black {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: black;
    position: relative;
}

.f-d-circle-black-absolute {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgb(63, 59, 59);
    top: 5px;
    left: 15px;
}

.f-d-orizzontal-bars {
    width: 100px;
    height: 20px;
    border: 3px solid black;
    border-radius: 10px;
}

.f-d-cross-polygon {
    width: 80%;
    height: 80%;
    background-color: rgb(63, 59, 59);
    border: 3px solid black;
    clip-path: polygon(38% 0, 40% 40%, 0% 38%, 0% 62%, 40% 60%, 38% 100%, 62% 100%, 60% 60%, 100% 62%, 100% 38%, 60% 40%, 62% 0%, 38% 0%);
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(40px 40px 40px rgb(0, 0, 0));
}

.f-d-cross-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgb(63, 59, 59);
    border: 3px solid black;
    clip-path: circle(50% at 50% 50%);
}

// Input style

.f-d-search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 20px auto;
}

.f-d-search-input {
    width: 100%;
    padding: 10px;
    padding-right: 40px;
    border: 3px solid black;
    border-radius: 25px;
    outline: none;
    font-size: 15px;
    font-weight: bold;
}

.f-d-search-button {
    background-color: transparent;
    border: none;
    position: relative;
    right: 35px;
    cursor: pointer;
}

.f-d-search-button img {
    width: 20px;
    height: 20px;
}

.f-d-add-button {
    background-color: white;
    border: none;
    cursor: pointer;
    border: 3px solid black;
    width: 150px;
    height: 45px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;
}

.f-d-remove-button {
    background-color: white;
    border: none;
    cursor: pointer;
    border: 3px solid black;
    width: 150px;
    height: 45px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-weight: bold;

    &:hover {
        background-color: rgba(0, 0, 0, 0.336);
        color: white;
    }
}

//////////////////

// Right side of the pokedex

.pokedex-border-side-right {
    height: 730px;
    width: 500px;
    background-color: #D41246;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 40px;
    border: 3px solid black;
    position: relative;
    top: 20px;
    //con clip-path andiamo a specificare la forma irregolare del pokedex andando a specificare perogni punto l'inclinazione voluta
    clip-path: polygon(0 0, 30% 0%, 70% 15%, 100% 15%, 100% 100%, 0 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.f-d-great-rectangle {
    width: 80%;
    height: 30%;
    border: 3px solid black;
    border-radius: 10px;
    overflow: hidden;
    color: white;
}

.f-d-grid-container {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.f-d-master-container-white {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.f-d-grid-container-white {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.f-d-grid-container-50 {
    width: 50%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
}

.f-d-grid-item {
    border: 1px solid black;
    width: 70px;
    height: 70px;
    border-radius: 5px;
}

#carouselExample {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

// Text styles

.f-d-list-style {
    list-style: none;
    padding: 0;
    margin: 0;
}

.f-d-text-title {
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
}

// Animation img pokemon

.f-d-pokemon-animation {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .front-image,
    .back-image {
        animation: fadeAnimation 6s infinite;
        opacity: 0;
        transition: opacity 1s ease-in-out;
    }

    .front-image {
        animation-delay: 0s;
    }

    .back-image {
        animation-delay: 3s; // Si alterna ogni 3 secondi
    }
}

@keyframes fadeAnimation {

    0%,
    50% {
        opacity: 1;
    }

    50.01%,
    100% {
        opacity: 0;
    }
}

// Animation add button pokemon 

@keyframes addPokemonAnimation {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.added-pokemon-animation {
    animation: addPokemonAnimation 0.5s ease-in-out;
}

// carousel

.f-d-img-carousel {
    width: 50%;
    height: 50%;
    object-fit: contain;
    margin-right: 30px;
}
</style>