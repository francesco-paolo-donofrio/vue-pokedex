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
                        <input type="text" class="f-d-search-input" placeholder="Search...">
                        <button class="f-d-search-button">
                            <img src="https://img.icons8.com/ios-filled/50/000000/search--v1.png" alt="Search">
                        </button>
                        <div class="f-d-remove-button">
                            Remove
                        </div>
                    </div>
                </div>
                <div class="f-d-flex">
                    <div class="f-d-main-rectangle">
                        <div class="f-d-flex">
                            <div class="f-d-smaller-circle"></div>
                            <div class="f-d-smaller-circle"></div>
                        </div>
                        <div class="f-d-animated-rectangle">

                        </div>
                        <div class="f-d-flex">
                            <div class="f-d-animated-circle"></div>
                            <div>
                                <div class="f-d-black-bars"></div>
                                <div class="f-d-black-bars"></div>
                                <div class="f-d-black-bars"></div>
                                <div class="f-d-black-bars"></div>
                            </div>
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
                        <div class="f-d-orizzontal-bars red"></div>
                        <div class="f-d-orizzontal-bars blue"></div>
                    </div>
                    <div class="f-d-60-height">
                        <div class="f-d-green-rectangle"></div>
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
            <div class="f-d-great-rectangle green mt-5"></div>
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
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
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
    // formula per smorzare i bordi del clip path polygon da vedere bene
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
    background-color: rgb(12, 182, 214);
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

.f-d-main-rectangle {
    height: 350px;
    width: 85%;
    background-color: white;
    border: 3px solid black;
    clip-path: polygon(0 0, 0 80%, 20% 100%, 80% 100%, 100% 100%, 100% 0);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
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
    clip-path: polygon(0 0, 0 80%, 20% 100%, 80% 100%, 100% 100%, 100% 0);
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    z-index: -1;
}

.f-d-main-rectangle-border-relative {
    position: relative;

}

.f-d-animated-rectangle {
    height: 300px;
    width: 80%;
    border: 3px solid black;
    background-color: aqua;
    border-radius: 20px;
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
    height: 50%;
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
    height: 35%;
    border: 3px solid black;
    border-radius: 10px;
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
</style>