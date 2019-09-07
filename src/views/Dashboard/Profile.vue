<template>
<div id="inspire" >
  <v-app>
<v-toolbar class="primary" dark fixed flat>
   <v-flex xs1 sm1 md1 lg1>
      <i class="material-icons pt-2 " style="color:white" v-on:click="cut">
      arrow_back
      </i>
</v-flex>
<v-flex xs11 sm11 md11 lg11 class="text-xs-center"><span class="pr-4 subheading tit">Profile</span></v-flex>
</v-toolbar>
           <v-container fluid class="pa-0 mt-3">
            <v-layout row wrap class="mt-4">
                <v-flex xs12>
                    <template>
                    <v-tabs
                    v-model="tab"
                    color="primary"
                    fixed-tabs
                    style="margin-top:9px"
                    >
                    <v-tabs-slider color="white"></v-tabs-slider>
                    <v-tab class="caption"  style="color:white; font-family: 'Lato', sans-serif;">
                      CREDITS
                    </v-tab>
                    <v-tab class="caption"  style="color:white; font-family: 'Lato', sans-serif;">
                    BANK ACCOUNT
                    </v-tab>
                    </v-tabs>
                </template>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-container fluid grid-list-md class="ma-0">
               <v-layout row wrap justify-center align-center >
                   <v-flex xs11 sm8 lg8 md8 elevation-2 style="border-radius:6px; background-color:white;" class="mb-4 pa-2 mr-2">
                    <v-card flat>
                      <v-container fill-height
                              fluid
                              pa-2>
                      <v-layout row wrap >
                      <v-flex xs12 lg8 md12 sm12>
                         <v-layout row wrap >
                        <v-flex xs5 md3>
                          <font-awesome-icon class="pa-2" size="6x" color="#136735" :icon="['fas','money-check']"/>
                        </v-flex>
                        <v-flex xs6 md9>
                         <span class="title black--text font-weight-regular tit" >Credit Score:</span><br>
                          <p class="display-2 black--text font-weight-regular tit" >500</p>
                        </v-flex>
                         </v-layout>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>

            <v-flex xs6 sm7 md6 lg5>
              <v-btn color="primary" block small round class="buttons">Financing Options</v-btn>
            </v-flex>

            <v-flex xs11 sm8 lg8 md8 elevation-2 style="border-radius:6px; background-color:white;" class="mb-2 mt-2 pa-1 mr-2">
              <v-card flat>
                <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap >
                      <v-flex xs12 lg6 md12 sm12>
                         <router-link :to="{ name: 'loanprofile', params: {id:1} }" style="text-decoration:none;">
                         <v-layout row wrap >
                        <v-flex xs2 md3 >
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','gem']"/><br>
                         <span class="title black--text font-weight-bold tit pl-3" >GOLD</span>
                        </v-flex>
                        <v-flex xs10 md9>
                          <v-flex xs12 class="ml-5 mr-1">
                            <v-layout row wrap style="margin-top:-14;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">What does the future hold?</v-flex>
                            </v-layout>
                            <v-layout row wrap style="margin-top:-15px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Monthly payments.</v-flex>
                            </v-layout>
                            <v-layout row wrap style="margin-top:-15px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Terms up to 10 years.</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-15px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Pre payment discounts and no early pay penalties</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-10px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Better suited for business that don’t accept credit cards as a form of payment</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-10px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">No personal collateral needed</v-flex>
                            </v-layout>
                          </v-flex>
                        </v-flex>
                      </v-layout>
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

              <!-- Silver -->

            <v-flex xs11 sm8 lg8 md8 elevation-2 style="border-radius:6px; background-color:white;" class="mb-2 mt-1 pa-1 mr-2">
              <v-card flat>
                <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap >
                      <v-flex xs12 lg6 md12>
                         <router-link :to="{ name: 'loanprofile', params: {id:2} }" style="text-decoration:none;">
                         <v-layout row wrap >
                        <v-flex xs2 md3>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','gem']"/><br>
                         <span class="title black--text font-weight-bold tit pl-2" >SILVER</span>
                        </v-flex>
                        <v-flex xs10 md9>
                          <v-flex xs12 class="ml-5 mr-1">
                            <v-layout row wrap style="margin-top:-15px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Ready to expand!</v-flex>
                            </v-layout>
                            <v-layout row wrap style="margin-top:-14px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">No personal collateral needed</v-flex>
                            </v-layout>
                            <v-layout row wrap style="margin-top:-14px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Terms up to 36 months</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-14px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Daily and weekly payments</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-10px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Flexible remittance</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-12px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Advance is based on your revenue not your credit score</v-flex>
                            </v-layout>
                          </v-flex>
                        </v-flex>
                      </v-layout>
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

            <!-- BRONZE -->
            <v-flex xs11 sm8 lg8 md8 elevation-2 style="border-radius:6px; background-color:white;" class="mb-2 mt-1 pa-1 mr-2">
              <v-card flat>
                <v-container fill-height
                              fluid
                              pa-2>
                  <v-layout row wrap >
                      <v-flex xs12 lg6 md12>
                        <router-link :to="{ name: 'loanprofile', params: {id:3} }" style="text-decoration:none;">
                         <v-layout row wrap>
                        <v-flex xs2 md3>
                          <font-awesome-icon class="pa-2" size="5x" color="#136735" :icon="['fas','gem']"/><br>
                         <span class="title black--text font-weight-bold tit pl-1" >BRONZE</span>
                        </v-flex>
                        <v-flex xs10 md9>
                          <v-flex xs12 class="ml-5 mr-1">
                            <v-layout row wrap style="margin-top:-14px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">For troubled businesses wanting better.</v-flex>
                            </v-layout>
                            <v-layout row wrap style="margin-top:-10px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">% of daily sales. 5% of 10,000 = Daily payments</v-flex>
                            </v-layout>
                            <v-layout row wrap style="margin-top:-10px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Previous bankruptcy ok</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-13px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Tax liens ok</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-14px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">Bad credit ok</v-flex>
                            </v-layout>
                             <v-layout row wrap style="margin-top:-14px;">
                              <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                              <v-flex xs11 class="new font-weight-medium">We work with you to put you in the best position to grow</v-flex>
                            </v-layout>
                          </v-flex>
                        </v-flex>
                      </v-layout>
                    </router-link>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>

          </v-layout>
        </v-container>

          </v-tab-item>
          <v-tab-item>
                <v-container fluid grid-list-md class="ma-0">
                  <v-layout row wrap justify-center align-center >
                     <v-flex xs11 sm8 lg8 md8 elevation-2 style="border-radius:6px; background-color:white;" class="mb-4 pa-2 mr-2">
                    <v-card flat>
                      <v-container fill-height
                              fluid
                              pa-2>
                      <v-layout row wrap >
                      <v-flex xs12 lg8 md12 sm12>
                         <v-layout row wrap >
                              <v-flex xs3 md3 class="ml-4">
                                <font-awesome-icon class="pa-2" size="6x" color="#136735" :icon="['fas','dollar-sign']"/>
                              </v-flex>
                              <v-flex xs6 md9 class="ml-3">
                              <span class="title black--text font-weight-regular tit" >Bank Balance</span><br>
                                <p class="display-2 black--text font-weight-bold tit" >$784</p>
                              </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card>
                    </v-flex>
                  </v-layout>
                    <v-layout row wrap justify-center align-center >
                     <v-flex xs11 sm8 lg8 md8 elevation-2 style="border-radius:6px; background-color:white;" class="mb-4 pa-2 mr-2">
                    <v-card flat>
                      <v-container fill-height
                              fluid
                              pa-2>
                      <v-layout row wrap >
                      <v-flex xs12 lg8 md12 sm12>
                         <v-layout row wrap >
                              <v-flex xs3 md3 class="ml-4">
                                <font-awesome-icon class="pa-2" size="6x" color="#136735" :icon="['fas','university']"/>
                              </v-flex>
                              <v-flex xs6 md9 class="ml-4">
                              <span class="title black--text font-weight-regular tit" >Bank Transfer</span><br>
                                <p class="display-2 black--text font-weight-bold tit" >$2149</p>
                              </v-flex>
                              </v-layout>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
          </v-tab-item>
        </v-tabs-items>
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
   tab: null,
  }
},
methods: {
  cut(){
    this.$router.go(-1)
  },

},
mounted (){

}
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato" rel="stylesheet');
.tit{
font-family: 'Lato', sans-serif;
}
.new{
     font-size: 11.25px !important;
}
.buttons{
width: 100%;
height: 35px;
font-size:15px;
text-transform: none;
font-family: 'Lato', sans-serif;
}
#inspire{
background: none;
}

</style>
