<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Drawer></Drawer>
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>

<script>

import Navigation from './components/Navigation'
import Drawer from './components/Drawer'

export default {
  name: 'app',
  data() {
    return {
      drawer: Navigation.data.drawer,
    }
  },
  components: {
    Navigation,
    Drawer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
