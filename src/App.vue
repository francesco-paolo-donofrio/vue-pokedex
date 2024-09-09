<template>
  <div class="main-container">
    <div>
      <PokedexComponent />
    </div>
  </div>
</template>

<script>
import { store } from './store.js'
import PokedexComponent from './components/PokedexComponent.vue'
export default {
  name: 'App',
  components: {
    PokedexComponent,
  },
  data() {
    store
  }
}
</script>

<style lang="scss" scoped>
  .main-container {
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>