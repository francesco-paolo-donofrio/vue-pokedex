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
    background-color: orange;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 5px;
    clip-path: polygon(0 0, 0 100%, 30% 100%, 70% 20%, 100% 20%, 100% 0);
    // formula per smorzare i bordi del clip path polygon da vedere bene
    // clip-path: inset(30% 100%, 70% 20% round 50%)
    border: 3px solid #D41246;
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
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: rgb(12, 182, 214);
    margin: 10px;
}

.f-d-colorated-circles-circle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.5);
    position: relative;
    top: 2px;
    left: 2px;
}

.red {
    background-color: red;
}

.yellow {
    background-color: rgb(206, 206, 7);
}

.green {
    background-color: green;
}

.f-d-flex-right {
    display: flex;
    justify-content: end;
}
</style>