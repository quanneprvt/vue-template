<template>
  <div>
    <img class ='main-img' src="../assets/homebg.jpg"/>
    <div class='thumb-panel'>
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex
            v-for="elevation in elevations"
            :key="elevation"
            xs7
            md4
            class="thumb-item"
          >
            <v-sheet
              class='pa-4'
              color="grey lighten-3"
            >
              <v-sheet
                :elevation="elevation"
                class="mx-auto"
                height="10vw"
                width="10vw"
              ></v-sheet>
            </v-sheet>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home', //this is the name of the component
  data() {
    return {
      elevations: [6, 12, 18],
    }
  }
}
</script>

<style>

.thumb-panel{
  background-color:whitesmoke;
}

.thumb-item{
  margin: auto;
}

.main-img{
  z-index: -1;
  width: 100%;
  height: 40vw;
  left: 0;
  top: 0;
}

</style>