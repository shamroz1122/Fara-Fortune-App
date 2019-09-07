<template>
<div id="inspire" >
<v-app>
  <v-toolbar class="primary" dark fixed flat>
    <v-flex xs1>
      <i class="material-icons" style="color:white" v-on:click="cut">
        arrow_back
      </i>
    </v-flex>
<v-flex xs11 class="text-xs-center"><span class="pr-4 subheading tit">Financing</span></v-flex>
    </v-toolbar>
        <v-container fluid  class="ma-0 pa-0">
          <v-layout row wrap justify-center align-center  style="margin-top: 70px;">
            <v-flex xs12 class="text-xs-center"><p class="headline font-weight-bold tit">Create your loan profile</p></v-flex>
              <v-flex xs10 lg4 sm6 md6>
                  <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                      @submit.prevent="submprofile"
                    >
                    <v-flex xs12 sm12 md12 lg12>
                      <v-text-field
                          v-model="name"
                          :rules="nameRules"
                          label="Name"
                          solo
                          required
                          height="55px"
                      ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm12 md12 lg12>
                      <v-text-field
                          v-model="lname"
                          :rules="nameRules"
                          label="Last Name"
                          solo
                          required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                        single-line
                        solo
                        v-model="email"
                        :rules="emailRules"
                        label="Username or Email"
                        height="55px"
                    ></v-text-field>
                    </v-flex>
                      <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="phone"
                            :rules="phoneRule"
                            type="phone"
                            label="Phone Number"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                        <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="amount"
                            :rules="creditRule"
                            type="number"
                            label="Loan Amount requested?"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                        <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="credit"
                            :rules="creditRule"
                            type="number"
                            label="Credit Score"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="revenue"
                            :rules="creditRule"
                            label="Revenues"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="ltv"
                            :rules="creditRule"
                            label="LTV of funding request"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="funds"
                            :rules="creditRule"
                            label="Use of funds"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                       <v-select
                        solo
                        height="60"
                        v-model="assets"
                        :items="items"
                        label="Type of Assets"
                      ></v-select>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <v-btn color="primary" class="button" type="submit"
                            block large round >SUBMIT</v-btn>
                      </v-flex>
                      <v-layout row wrap justify-center text-xs-center>
                    <v-flex xs12 sm12 md12>
                      <v-progress-circular
                        indeterminate
                        color="primary"
                        v-show = "loader"
                      ></v-progress-circular>
                    </v-flex>
                  </v-layout>
                </v-form>
                </v-flex>
              </v-layout>

              <!-- <v-bottom-sheet v-model="sheet1">
                <template v-slot:activator>
                </template>
                <v-list >
                  <v-layout row wrap justify-center align-center>
                    <v-flex xs10>
                    <v-btn color="primary" class="button1"
                        @click="sheet = false" block large round >SOFT APPROVAL</v-btn>
                    </v-flex>
                     <v-flex xs10>
                    <v-btn color="primary" class="button1"
                      block large round >HARD APPROVAL</v-btn>
                     </v-flex>
                      <v-flex xs10>
                    <v-btn color="#672318" class="button1 white--text"
                      @click="sheet1 = false" block large round >CANCEL</v-btn>
                      </v-flex>
                      </v-layout>
                </v-list>
              </v-bottom-sheet> -->
            </v-container>
                <v-snackbar
              v-model="snackbar"
              :multi-line="mode === 'multi-line'"
              :timeout="timeout"
              :color="color"
              :right="x === 'right'"
            >
              {{ text }}
              <v-btn
                color="white"
                flat
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
          </v-app>
        </div>
      </template>
    <script>
export default {
data(){
  return{
    subm:true,
    show1: false,
    show2:false,
    loader:false,
    sheet1: false,
    items: ['Real Estate', 'Equipment', 'Hard Asset'],
    snackbar:false,
    color:'',
    text:'',
    name:'',
    lname:'',
    email:'',
    phone:'',
    amount:'',
    credit:'',
    revenue:'',
    ltv:'',
    funds:'',
    assets:'',
    category: this.$route.params.id,

    valid:true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 10 characters'
    ],
    phoneRule: [
     v => !!v || 'Phone is required',
      v => (v && v.length <= 12) || 'Phone must be 11 characters'
    ],
     emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+/.test(v) || 'E-mail must be valid'
  ],
   creditRule: [
     v => !!v || 'Field is required',
      v => (v && v.length <= 50) || 'Credit must be numbers'
    ],
  }
},
methods: {

    cut(){
      this.$router.go(-1)
    },
     route(){
      this.$router.push('questions')
    },

    submprofile(){
      if (
          this.$refs.form.validate()) {
          this.$store.dispatch('loanprofile', {
            user_id: this.$store.getters.loggedInUserId,
            category: this.category,
            name: this.name,
            lname: this.lname,
            email: this.email,
            contact:this.phone,
            loanamount: this.amount,
            creditscore:this.credit,
            revenue:this.revenue,
            fundrequest:this.ltv,
            useoffunds:this.funds,
            typeofassets:this.assets
          })
          .then(response => {
             if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
                  this.$router.push({ name: 'login', params: { } })
          }else{
          this.color = 'green'
          this.text = 'Profile created Successfully!'
          this.snackbar = true
        }

          })
        .catch(error => {
            var data = error.data
            this.text = 'Email has already been taken!'
            this.color = 'red'
            this.snackbar = true
        })
      }
    }
  },
  mounted (){

    const list = document.getElementsByClassName("v-input__slot"); // get all p elements

    list[0].style.borderRadius = "30px";
    list[1].style.borderRadius = "30px";
    list[2].style.borderRadius = "30px";
    list[3].style.borderRadius = "30px";
    list[4].style.borderRadius = "30px";
    list[5].style.borderRadius = "30px";
    list[6].style.borderRadius = "30px";
    list[7].style.borderRadius = "30px";
    list[8].style.borderRadius = "30px";
    list[9].style.borderRadius = "30px";


    const list1 = document.getElementsByClassName(" v-input__control");
    list1[0].style.marginBottom = "-16px";
    list1[1].style.marginBottom = "-16px";
    list1[2].style.marginBottom = "-16px";
    list1[3].style.marginBottom = "-16px";
    list1[4].style.marginBottom = "-16px";
    list1[5].style.marginBottom = "-16px";
    list1[6].style.marginBottom = "-16px";
    list1[7].style.marginBottom = "-16px";
    list1[8].style.marginBottom = "-16px";
    list1[9].style.marginBottom = "-16px";

  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato" rel="stylesheet');
.button{
width: 100%;
height: 55px;
font-size:15px;
text-transform:none;
font-family: 'Lato', sans-serif;
}
.tit{
  font-family: 'Lato', sans-serif;
}
.button1{
width: 100%;
height: 55px;
font-size:15px;
text-transform:none;
font-family: 'Lato', sans-serif;
}
#inspire{
background: none;
}
</style>
