<template>
    <div class="f-d-position-relative">
    <div class="pokedex-border-side-left">
    </div>
    <div class="pokedex-border-side-right">
    </div>
</div>
</template>

<script>
import { store } from '../store.js'
export default {
    name: 'PokedexComponent',


    data() {
        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>

    .pokedex-border-side-left {
        height: 800px;
        width: 600px;
        background-color: red;
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
.pokedex-border-side-right {
    height: 730px;
    width: 500px;
    background-color: red;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 40px;
    border: 2px solid black;
    position: relative;
    top: 20px;
    clip-path: polygon(0 0, 20% 0%, 40% 10%, 100% 10%, 100% 100%, 0 100%);
}
</style>