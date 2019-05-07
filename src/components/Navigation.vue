<template>
  <!-- <div class='nav-inline'>
    <h3 class='nav-header'>Nav Bar</h3>
    <nav class='nav-item'>
      <router-link v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`" class='spacing'>{{routes.text}}</router-link>
    </nav>
  </div> -->

  <v-toolbar height='50vw' color='transparent' scroll-off-screen>
    <v-toolbar-side-icon v-on:click='drawer = !drawer'></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <router-link v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`" class='nav-item v-btn v-btn--flat'>{{routes.text}}
      </router-link> -->
      <v-btn flat v-for="routes in links"
        v-bind:key="routes.id"
        v-on:click='redirectLink(routes.page)' >{{routes.text}}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>

</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      drawer: null,
      links: [
        {
          id: 0,
          text: 'Hello World',
          page:'/HelloWorld'
        },
        {
          id: 1,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 2,
          text: 'About',
          page:'/About'
        },
      ]
    }
  },
  methods:{
    redirectLink(link){
      this.$router.push(link);
    }
  }
}
</script>

<style>
.nav-item{
  color: black;
}

</style>
