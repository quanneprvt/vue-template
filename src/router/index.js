import Vue from 'vue'
import Router from 'vue-router'
import Vuetify from 'vuetify'

import HelloWorld from '../components/HelloWorld'
import Home from '../components/Home'
import About from '../components/About'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router ({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ]
})