<template>
    <v-container fluid grid-list-xl>
        <v-layout wrap>
          <v-flex md4>
            <v-card hover color="blue-grey darken-2" class="white--text">
                <v-layout style="min-height: 155px">
                    <v-card-title primary-title>
                        <div>
                        <div class="headline">Unlimited music now</div>
                        <span>Listen to your favorite artists and albums whenever and wherever, online and offline.</span>
                        </div>
                    </v-card-title>
                </v-layout>
                <v-card-actions>
                    <v-btn flat dark>Listen now</v-btn>
                </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex md4>
            <v-card hover color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex>
            <v-card hover color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                      <div>(2013)</div>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs5>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              <v-card-actions class="pa-3">
                Rate this album
                <v-spacer></v-spacer>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
                <v-icon>star_border</v-icon>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>

        <h3>Some Outstanding Product</h3>
        <h5>Sub header for this</h5>
        <v-layout row wrap>
            <v-flex v-for="i in 6" :key="i" md4>
                <v-card flat hover ripple>
                    <v-layout style="margin:0">
                        <v-flex xs5>
                            <img src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" class="image" alt="lorem" height="125px" contain>
                        </v-flex>
                        <v-flex>
                            <v-card-title>
                                <div>
                                    <div class="headline">Supermodel</div>
                                    <div>Foster the People</div>
                                    <div>(2014)</div>
                                </div>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>

        <h3>More Service</h3>
        <h5>Sub header for this</h5>

    </v-container>
</template>

<script>
export default {
    name: 'MainContent',
    data: () => ({
        
    }),
}
</script>
