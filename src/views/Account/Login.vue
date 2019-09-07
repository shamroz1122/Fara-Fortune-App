<template>
<div id="inspire" >
  <v-app>
<v-toolbar class="primary" dark fixed flat>
   <v-flex xs1>
      <i class="material-icons pt-2 " style="color:white" v-on:click="cut">
      arrow_back
      </i>
</v-flex>
<v-flex xs11 class="text-xs-center"><span class="pr-4 subheading
">Login</span></v-flex>
</v-toolbar>
    <v-container fluid fill-height class="ma-0 pa-0">
        <v-layout row wrap justify-center align-center>
              <v-flex xs12 lg12 sm12 md12>
                <v-responsive>
                <v-img
                  :src="require('../../assets/logo_color.png')"
                  contain
                  height="100"
                  class="mt-5"
                  ></v-img>
                </v-responsive>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container fluid fill-height class="ma-0 pa-0">
          <v-layout row wrap justify-center align-center>
            <v-flex xs10 lg4 sm6 md6>
              <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    @submit.prevent="login"
                  >
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
                    <v-flex xs12 sm12 md12 lg12>
                    <v-text-field
                        solo
                        v-model="password"
                        :rules="passRules"
                        :append-icon="show1 ? 'visibility' : 'visibility_off'"
                        :type="show1 ? 'text' : 'password'"
                        @click:append="show1 = !show1"
                        label="Password"
                        height="55px"
                    ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12 md12 lg12>
                       <v-btn color="primary" v-show="log"
                        type="submit" block large round class="button">Login</v-btn>
                        <span style="font-size:14px;color:#136735; padding-left: 17%;
                              padding-bottom: 10%;">Forget Password? |&nbsp;</span> <span v-on:click="move" style="font-size:14px;color:#136735;">Create Account</span>
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
  log:true,
  show1: false,
  loader:false,
  snackbar: false,
  x: null,
  mode: '',
  timeout: 6000,
  color:'red',
  text: 'Error! Invalid Email or Password',
  email:'',
  password:'',
  valid:true,
  passRules: [
    v => !!v || 'Password is required',
    v => (v && v.length <= 15) || 'Password must be less than 10 characters'
  ],
  emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+/.test(v) || 'E-mail must be valid'
  ],
}
},
methods: {
login(){
  if (
        this.$refs.form.validate()) {
        this.loader = true
        this.log = false
        this.$store.dispatch('authenticate', {
          email: this.email,
          password: this.password,
        })
        .then(response => {
          this.log = true
          this.loader = false
          this.$router.push({ name: 'home', params: { userId: response.data.user.id } })
        })
          .catch(error => {
          this.log = true
          this.loader = false
          this.snackbar = true

        })
        }
},
  cut(){
    this.$router.go(-1)
  },
   move(){
    this.$router.push('signup')
  },
},
mounted (){
    const list = document.getElementsByClassName("v-input__slot"); // get all p elements

    list[0].style.borderRadius = "30px";
    list[1].style.borderRadius = "30px";

    const list1 = document.getElementsByClassName(" v-input__control");
    list1[0].style.marginBottom = "-10px";
    list1[1].style.marginBottom = "-12px";
}

}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.button{
width: 100%;
height: 55px;
font-size:15px;
font-family: 'Open Sans', sans- serif !important;
}
#inspire{
background: none;
}
.v-input__slot{
  border-radius: 40px !important;
}
</style>
