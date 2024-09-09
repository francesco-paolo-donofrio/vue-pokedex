<template>
  <div class="main-container">
    <div>
      <LeftPokedexComponent />
    </div>
    <div>
      <RightPokedexComponent />
    </div>
  </div>
</template>

<script>
import { store } from './store.js'
import LeftPokedexComponent from './components/LeftPokedexComponent.vue'
import RightPokedexComponent from './components/RightPokedexComponent.vue';
export default {
  name: 'App',
  components: {
    LeftPokedexComponent,
    RightPokedexComponent
  },
  data() {
    store
  }
}
</script>

<style lang="scss" scoped>
  .main-container {
    display: flex;
    height: 100vh;
  }
</style>