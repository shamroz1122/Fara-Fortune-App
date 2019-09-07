<template>
<div id="inspire" >
  <v-app>
<v-toolbar class="primary" dark fixed flat>
   <v-flex xs1 sm1 md1 lg1>
      <i class="material-icons pt-2 " style="color:white" v-on:click="cut">
      arrow_back
      </i>
</v-flex>
<v-flex xs11 sm11 md11 lg11 class="text-xs-center"><span class="pr-4 subheading tit">Consulting</span></v-flex>
</v-toolbar>
    <v-container fluid class="ma-0 pa-0">
        <v-layout row wrap justify-center>
          <v-flex xs12>
             <v-responsive>
              <v-img :src="require('../../assets/Top-banner.jpg')"
                    contain
                    class="mt-5">
              </v-img>
             </v-responsive>
          </v-flex>
            <v-flex xs12 class="ml-4">
              <p class="pt-3 subheading font-weight-medium">We advise consulting to business owners with the following problems</p>
              <v-layout row wrap>
                <v-flex xs1 sm1 md1 lg1><v-icon small color="primary">done</v-icon></v-flex>
                <v-flex xs11 class="subheading font-weight-medium">Bankruptcy</v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs1 sm1 md1 lg1><v-icon small color="primary">done</v-icon></v-flex>
                <v-flex xs11 class="subheading font-weight-medium">Tax liens</v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs1 sm1 md1 lg1><v-icon small color="primary">done</v-icon></v-flex>
                <v-flex xs11 class="subheading font-weight-medium">Multiple negative days in your account</v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs1 sm1 md1 lg1><v-icon small color="primary">done</v-icon></v-flex>
                <v-flex xs11 class="subheading font-weight-medium">A loss on tax returns</v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs6 sm4 md3 lg3>
               <v-btn color="primary" block small round class="buttons">Why Consult?</v-btn>
            </v-flex>
             <v-flex xs12 class="ml-4 mr-3">
              <v-layout row wrap>
                <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                <v-flex xs11 class="subheading font-weight-medium">Work with an educated advisor who can analyze and understand your business profile.</v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                <v-flex xs11 class="subheading font-weight-medium">Fara handles all underwriting and negotiating with lenders to get you exactly what you need to be comfortable.</v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                <v-flex xs11 class="subheading font-weight-medium">Together we all decide what is the best option for your business.</v-flex>
              </v-layout>

              <p class="pt-3 text-xs-center subheading font-weight-medium">Consultant Price <span class="primary--text">$75 HR / $125 per hour</span></p>
            </v-flex>
            <v-flex xs10 sm6 md4 lg4>
               <v-btn  @click.stop="dialog = true" color="primary" block medium round class="buttons1">Consult Now</v-btn>
            </v-flex>
                               <!-- Dialog Box -->

    <v-dialog v-model="dialog" width="800px">
      <v-card style=" border-radius: 15px;">
        <v-form ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="usermsg">
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap justify-center>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-text-field
                  solo
                  v-model="name"
                  :rules="nameRules"
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                solo
                v-model="email"
                :rules="emailRules"
                placeholder="E-mail"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                solo
                :rules="phoneRule"
                v-model="phonenumber"
                placeholder="Telephone(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                solo
                :rules="msgRule"
                v-model="message"
                placeholder="Message"
                height="100"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
          <v-layout row wrap justify-center text-xs-center>
           <v-flex xs10 sm12 md12 lg12>
            <v-btn color="primary" v-show="butn" type="submit" block large round class="button">Send Message</v-btn>
           </v-flex>
          </v-layout>
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
            </v-card>
          </v-dialog>
        </v-layout>
           <v-snackbar
              v-model="snackbar"
              :multi-line="mode === 'multi-line'"
              :timeout="timeout"
             color="green"
              :right="x === 'right'">
              Message Send Succesfully!
              <v-btn
                color="white"
                flat
                @click="snackbar = false">
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
  butn:true,
  snackbar: false,
  loader:false,
  dialog: false,
  name:'',
  email:'',
  phonenumber:'',
  message:'',
  valid:true,
  nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 10 characters'
    ],
  emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
  phoneRule: [
     v => !!v || 'Phone is required',
      v => (v && v.length <= 50) || 'Phone must be 11 characters'
    ],
  msgRule: [
     v => !!v || 'Message cant be empty',
      v => (v && v.length <= 1000) || 'Phone must be 10 characters'
    ],
  }
},
methods: {
  cut(){
    this.$router.go(-1)
  },
  usermsg(){
    if (
        this.$refs.form.validate()) {
        this.loader = true
        this.butn = false
          this.$store.dispatch('sendmsg', {
          user_id: this.$store.getters.loggedInUserId,
          name: this.name,
          email: this.email,
          phonenumber:this.phonenumber,
          message:this.message
        })
        .then(response => {
           if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
                  this.$router.push({ name: 'login', params: { } })
          }else{
          this.loader = false,
          this.dialog = false,
          this.snackbar = true
        }
      })
      .catch(error => {

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

    const list1 = document.getElementsByClassName(" v-input__control");
    list1[0].style.marginBottom = "-20px";
    list1[1].style.marginBottom = "-20px";
    list1[2].style.marginBottom = "-20px";
    list1[3].style.marginBottom = "-20px";
}
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato" rel="stylesheet');
.tit{
font-family: 'Lato', sans-serif;
}
.buttons{
width: 100%;
height: 35px;
font-size:15px;
text-transform: none;
font-family: 'Lato', sans-serif;
}
.buttons1{
width: 100%;
height: 55px;
font-size:17px;

font-family: 'Lato', sans-serif;
}
.button{
width: 100%;
height: 55px;
font-size:15px;
font-family: 'Lato', sans-serif;
}
#inspire{
background: none;
}

</style>
