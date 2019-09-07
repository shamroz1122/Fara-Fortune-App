<template>
<div id="inspire" >
  <v-app>
<v-toolbar class="primary" dark fixed flat>
   <v-flex xs1 sm1 md1 lg1>
      <i class="material-icons pt-2 " style="color:white" v-on:click="cut">
      arrow_back
      </i>
</v-flex>
<v-flex xs11 sm11 md11 lg11 class="text-xs-center"><span class="pr-4 subheading tit">Finance</span></v-flex>
</v-toolbar>
    <v-container fluid grid-list-md class="ma-0">
                              <!-- Row One -->
      <v-layout row wrap justify-center align-center style="margin-top:80px;">
          <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
              <router-link :to="{ name: '', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                        <v-flex xs12 md12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','money-check-alt']"/>
                        </v-flex>
                        <span class="body-2 primary--text font-weight-medium tit" >Line of credit</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </router-link>
          </v-flex>
              <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3">
              <router-link :to="{ name: '', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                    <v-flex xs12 lg6 md6>
                        <v-flex xs12 md12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','file-alt']"/>
                        </v-flex>
                      <span class="body-2 primary--text font-weight-medium tit" >Invoice Factoring</span>
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
              <router-link :to="{ name: '', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                          <v-flex xs12 md12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','building']"/>
                        </v-flex>
                          <span class="body-2 primary--text font-weight-medium tit" >Small business loan</span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>
              </router-link>
          </v-flex>
              <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3">
              <!-- <router-link :to="{ name: 'details', params: {id:1} }" style="text-decoration:none;"> -->
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                          <v-flex xs12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','wrench']"/>
                        </v-flex>
                          <span class="body-2 primary--text font-weight-medium tit" >Equipment Financing</span>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
                  <!-- </router-link> -->
          </v-flex>
      </v-layout>
                          <!-- Row Three -->
      <v-layout row wrap justify-center align-center >
          <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 mr-2 pa-3">
              <router-link :to="{ name: '', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                          <v-flex xs12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','hand-holding-usd']"/>
                        </v-flex>
                          <span class="body-2 primary--text font-weight-medium tit" >SBA Loans</span>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
                  </router-link>
          </v-flex>
              <v-flex xs5 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3">
              <router-link :to="{ name: '', params: {} }" style="text-decoration:none;">
              <v-card flat>
              <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                      <v-flex xs12 lg6 md6>
                        <v-flex xs12>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','home']"/>
                        </v-flex>
                          <span class="body-2 primary--text font-weight-medium tit" >Real Estate loans</span>
                      </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </router-link>
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
cut(){
    this.$router.go(-1)
  },

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

</style>
