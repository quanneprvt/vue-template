<template>

<v-navigation-drawer absolute temporary v-model="_drawer">
    <v-list class="pa-1">
        <v-list-tile avatar>
            <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>

    <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
            v-for="item in items"
            :key="item.title"
        >
            <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
    </v-list>
</v-navigation-drawer>
    
</template>

<script>
  export default {
    name:'Drawer',
    props:['drawer'],
    data () {
      return {
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },
    computed:{
        _drawer:{
            get(){
                return this.drawer;
            },
            set(v){
                this.$emit('toggledDrawer', v);
            },
        }
    }
  }
</script>