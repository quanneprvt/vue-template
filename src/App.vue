<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div class='debug'>{{showDrawer}}</div> -->
    <Drawer :drawer=showDrawer @toggledDrawer='showDrawer = $event'></Drawer>
    <Navigation @toggledDrawer='showDrawer = !showDrawer'></Navigation>
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
      showDrawer: false,
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
