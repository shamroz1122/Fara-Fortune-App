<template>
<div id="inspire" >
<v-app>
  <v-toolbar class="primary" dark fixed flat>
    <v-flex xs1>
      <i class="material-icons" style="color:white" v-on:click="cut">
        arrow_back
      </i>
    </v-flex>
<v-flex xs11 class="text-xs-center"><span class="pr-4 subheading">Sign Up</span></v-flex>
    </v-toolbar>
      <v-container fluid class="ma-0 pa-0">
          <v-layout row wrap  justify-center align-center style="margin-top: 80px;" >
              <v-flex xs12 lg12 sm12 md12>
                  <v-responsive>
                  <v-img
                  :src="require('../../assets/logo_color.png')"
                  contain
                  height="60"
                  ></v-img>
                  </v-responsive>
              </v-flex>
          </v-layout>
      </v-container>
        <v-container fluid  class="ma-0 pa-0">
          <v-layout row wrap justify-center align-center  style="margin-top: 20px;">
              <v-flex xs10 lg4 sm6 md6>
                  <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                      @submit.prevent="register"
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
                          v-model="bussname"
                          :rules="nameRules"
                          label="Business Name"
                          solo
                          required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                      <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          type="email"
                          label="E-mail"
                          solo
                          required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="phone"
                            :rules="phoneRule"
                            type="phone"
                            label="Contact Number"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                      <v-text-field
                          v-model="password"
                          :rules="passRules"
                          :append-icon="show1 ? 'visibility' : 'visibility_off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          label="Password"
                          solo
                          required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="monthlysale"
                            :rules="sale"
                            type="number"
                            label="Average Monthly Sales"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm12 md12>
                         <v-layout row wrap>
                         <v-flex xs6>
                          <v-text-field
                            v-model="creditScore"
                            type="number"
                            :rules="creditRule"
                            label="Credit Score"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      <v-flex xs6>
                       <v-text-field style="margin-left: 5px;"
                            v-model="time"
                            :rules="timeRule"
                            type="number"
                            label="Time in Business"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>
                      </v-layout>
                      </v-flex>
                        <v-flex xs12 sm12 md12>
                          <v-text-field
                            v-model="loanqunatity"
                            :rules="quantityRule"
                            type="number"
                            label="How much are you looking for?"
                            solo
                            required
                           height="55px"
                      ></v-text-field>
                      </v-flex>

                      <v-flex xs12 sm12 md12>
                        <v-btn color="primary" class="button"
                            v-show="subm"
                            type="submit" block large round >Signup</v-btn>
                            <span style="font-size:15px; padding-left: 23%;
                              padding-bottom: 10%;">
                              Already a member?</span>&nbsp;&nbsp; <span v-on:click="move" style="font-size:16px; color:green;">Sign in</span>

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
            </v-container>
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
    snackbar: false,
    x:null,
    mode: '',
    timeout: 6000,
    color:'red',
    text: 'Error! Invalid Requirement',
    loader:false,
    name:'',
    email:'',
    password:'',
    bussname:'',
    phone:'',
    monthlysale:'',
    creditScore:'',
    time:'',
    loanqunatity:'',
    valid:true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 10 characters'
    ],
    passRules: [
      v => !!v || 'Password is required',
      v => (v && v.length <= 15) || 'Password must be less than 15 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    phoneRule: [
     v => !!v || 'Phone is required',
      v => (v && v.length <= 50) || 'Phone must be 11 characters'
    ],
    creditRule: [
     v => !!v || 'Credit is required',
      v => (v && v.length <= 50) || 'Credit must be numbers'
    ],
    timeRule: [
     v => !!v || 'Time is required',
      v => (v && v.length <= 50) || 'Time must be numbers'
    ],
    quantityRule: [
      v => !!v || 'Amount is required',
      v => (v && v.length <= 50) || 'Amount must be numbers'
    ],
    sale: [
      v => !!v || 'Amount is required',
      v => (v && v.length <= 50) || 'Amount must be numbers'
    ],
  }
},
methods: {

    cut(){
      this.$router.go(-1)
    },
    move(){
      this.$router.push('login')
    },

    register(){
      if (
          this.$refs.form.validate()) {
          this.subm = false
          this.loader = true

          this.$store.dispatch('signup', {
            name: this.name,
            email: this.email,
            password: this.password,
            businessname: this.bussname,
            contact:this.phone,
            monthalysale:this.monthlysale,
            creditvalue:this.creditScore,
            bussinesstime: this.time,
            loan:this.loanqunatity

          })
          .then(response => {
            this.loader = false

            this.text = 'Congrats!Submitted Successfully'
            this.color = 'green'
            this.snackbar = true

            setTimeout(()=>{
            this.$router.push({ name: 'home', params: { userId: response.data.user.id } })
            },1000);
          })
        .catch(error => {

            this.subm = true
            this.loader = false
            var data = error.data
            //console.log(data)
            var content = ''
            Object.keys(data).forEach(function(item) {
                  content =  data[item][0]
            });
            this.text = content
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

    const list1 = document.getElementsByClassName(" v-input__control");
    list1[0].style.marginBottom = "-10px";
    list1[1].style.marginBottom = "-10px";
    list1[2].style.marginBottom = "-10px";
    list1[3].style.marginBottom = "-10px";
    list1[4].style.marginBottom = "-10px";
    list1[5].style.marginBottom = "-10px";
    list1[6].style.marginBottom = "-10px";
    list1[7].style.marginBottom = "-10px";
    list1[8].style.marginBottom = "-10px";
    list1[9].style.marginBottom = "-10px";


}
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.button{
width: 100%;
height: 55px;

font-size:15px;
text-transform:none;
font-family: 'Open Sans', sans- serif !important;
}
#inspire{
background: none;
}
</style>
