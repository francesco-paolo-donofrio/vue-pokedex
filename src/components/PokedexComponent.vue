<template>
    <div class="f-d-position-relative">
        <div class="pokedex-border-side-left">
            <div class="f-d-flex-right">
                <div class="f-d-smashed-rectangle">
                    <div class="f-d-circle">
                        <div class="f-d-small-circle">

                        </div>
                    </div>
                </div>
            </div>
            <div class="f-d-flex-right">
                <div class="f-d-smashed-rectangle-shadow">

                </div>
            </div>
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

.pokedex-border-side-right {
    height: 730px;
    width: 500px;
    background-color: #D41246;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 40px;
    border: 2px solid black;
    position: relative;
    top: 20px;
    //con clip-path andiamo a specificare la forma irregolare del pokedex andando a specificare perogni punto l'inclinazione voluta
    clip-path: polygon(0 0, 20% 0%, 40% 10%, 100% 10%, 100% 100%, 0 100%);
}

.f-d-smashed-rectangle {
    height: 150px;
    width: 95%;
    background-color: green;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 5px;
    clip-path: polygon(0 0, 0 100%, 30% 100%, 70% 20%, 100% 20%, 100% 0);
    // formula per smorzare i bordi del clip path polygon da vedere bene
    // clip-path: inset(30% 100%, 70% 20% round 50%)
    border: 3px solid #D41246;
}

.f-d-circle {
    height: 135px;
    width: 135px;
    border-radius: 50%;
    border: 3px solid black;
    background-color: yellow;
    margin-left: 10px;
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
    background-color: blue;
}

// .f-d-smashed-rectangle-shadow {
//     height: 20px;
//     width: 95%;
//     background-color: orange;
//     border-top-left-radius: 5px;
//     border-bottom-left-radius: 5px;
//     clip-path: polygon(0 0, 0 100%, 30% 100%, -10% -100%, 100% 20%, 100% 0);
// }

.f-d-flex-right {
    display: flex;
    justify-content: end;
}
</style>