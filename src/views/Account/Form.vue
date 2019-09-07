<template>
  <div id="inspire" >
    <v-app>
      <v-container fluid fill-height>
          <v-layout row wrap justify-center align-center>
                <v-flex xs12 lg12 sm12 md12>
                <v-img
                  :src="require('../../assets/logo_color.png')"
                  class="my-2"
                  contain
                  height="120"
                  style="top:55px"></v-img>
              </v-flex>
                <v-flex xs11 lg4 sm6 md6>
                    <div>
                       <v-btn color="primary" :to="{ path: 'login', params: {} }" block large round class="buttons">Login</v-btn>
                    </div>
                    <div>
                      <v-btn color="primary" :to="{ path: 'signup', params: {} }" block large round class="buttons">Signup</v-btn>
                    </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-app>
        </div>
    </template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.buttons{
width: 100%;
height: 55px;
font-size:15px;

font-family: 'Open Sans', sans- serif !important;
}
#inspire{
background: none;
}
</style>
