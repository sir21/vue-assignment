<template>
  <div id="app">
    <h1>Global Electronics</h1>
    <Navigation>
    </Navigation>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
</style>
