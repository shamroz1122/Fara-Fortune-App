<template>
<div id="inspire" >
  <v-app>
    <v-toolbar class="primary" dark fixed flat>
      <v-flex xs1></v-flex>
      <v-flex xs10 class="text-xs-center"><span class="tit title">FaraFortunes</span></v-flex>
      <v-flex xs1><font-awesome-icon v-on:click="logout" size="2x" color="white" :icon="['fas','sign-out-alt']"/></v-flex>
    </v-toolbar>
    <v-container fluid grid-list-md class="ma-0">
                              <!-- Row One -->
      <v-layout row wrap justify-center align-center style="margin-top:80px;">
          <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
              <router-link :to="{ name: 'consult', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                        <v-flex xs12 md12>
                          <font-awesome-icon class="pa-2" size="6x" color="#136735" :icon="['far','handshake']"/>
                        </v-flex>
                        <span class="body-2 primary--text font-weight-medium tit" >Consulting</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </router-link>
            </v-flex>
              <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3">
                <router-link :to="{ name: 'finance', params: {} }" style="text-decoration:none;">
                  <v-card flat>
                    <v-container fill-height
                                  fluid
                                  pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                    <v-flex xs12 lg6 md6>
                        <v-flex xs12 md12>
                          <font-awesome-icon class="pa-2" size="6x" color="#136735" :icon="['fas','coins']"/>
                        </v-flex>
                      <span class="body-2 primary--text font-weight-medium tit" >Financing</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </router-link>
          </v-flex>
        </v-layout>
                        <!-- Row Two -->
      <v-layout row wrap justify-center align-center >
          <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 mr-2 pa-3">
              <router-link :to="{ name: 'contact', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                          <v-flex xs12 md12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','phone']"/>
                        </v-flex>
                        <span class="body-2 primary--text font-weight-medium tit" >Contact</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </router-link>
            </v-flex>
              <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3">
                <router-link :to="{ name: 'business', params: {} }" style="text-decoration:none;">
                  <v-card flat>
                    <v-container fill-height
                                  fluid
                                  pa-2>
                    <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                          <v-flex xs12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','chart-area']"/>
                        </v-flex>
                        <span class="body-2 primary--text font-weight-medium tit" >Business Analysis</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </router-link>
            </v-flex>
          </v-layout>
                          <!-- Row Three -->
      <v-layout row wrap justify-center align-center >
          <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 mr-2 pa-3">
              <router-link :to="{ name: 'profile', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                          <v-flex xs12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','user-circle']"/>
                        </v-flex>
                          <span class="body-2 primary--text font-weight-medium tit" >Profile</span>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
                  </router-link>
          </v-flex>
              <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3">
              <router-link :to="{ name: 'partner', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                        <v-flex xs12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','hands-helping']"/>
                        </v-flex>
                          <span class="body-2 primary--text font-weight-medium tit" >Partner</span>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </router-link>
          </v-flex>
      </v-layout>
                          <!-- Row Four -->
      <v-layout row wrap justify-center >
          <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3">
              <!-- <router-link :to="{ name: 'details', params: {id:1} }" style="text-decoration:none;"> -->
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                          <v-flex xs12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','share-alt-square']"/>
                        </v-flex>
                          <span class="body-2 primary--text font-weight-medium tit">Share</span>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
                  <!-- </router-link> -->
            </v-flex>
          <v-flex xs5 sm5 lg5 md5 class="mb-2 pa-3 ml-1">
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</div>
</template>
<script>
export default {
data(){
return{

}
},
methods: {
  logout(){
      this.$store.dispatch('destroyToken')
        .then(response => {
          response.status
          this.$router.push({ name: 'login' })
        })
    }

}
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato" rel="stylesheet');

.tit{
font-family: 'Lato', sans-serif;
}
#inspire{
background: none;
}
.v-input__slot{
border-radius: 40px !important;
}
</style>
