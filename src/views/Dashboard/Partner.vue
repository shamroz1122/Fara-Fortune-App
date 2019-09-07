<template>
<div id="inspire" >
  <v-app>
<v-toolbar class="primary" dark fixed flat>
   <v-flex xs1>
      <i class="material-icons pt-2 " style="color:white" v-on:click="cut">
      arrow_back
      </i>
</v-flex>
<v-flex xs11 class="text-xs-center"><span class="pr-4 subheading tit">Partner</span></v-flex>
</v-toolbar>
    <v-container fluid class="ma-0 pa-0">
        <v-layout row wrap justify-center style="margin-top:20%">
            <v-flex xs7 sm5 md3 lg3>
               <v-btn color="primary" block small round class="buttons">Give your clients options</v-btn>
            </v-flex>
            <v-flex xs12 sm11 md11 lg10 class="mt-2">
              <p class="pl-4 pr-4 pt-4 subheading font-weight-medium">We provide extensive financing options from a full range of merchnt solutions from small business loans to asset based lines of credit. Each Program us tailored to the individual business.</p>
              <p class="pl-4 pr-4  subheading font-weight-medium">We give you fast financing options for your clients. Let our industry leading knowledge give you the competitive advantage by providing our clients with the most extensive options availabe to small business owners. Enhance customer loyality and commitment with individualized attention.</p>
            </v-flex>
            <v-flex xs9 sm6 md4 lg3>
               <v-btn color="primary" block small round class="buttons">The Advantage of Being a Partner</v-btn>
            </v-flex>
              <v-flex xs12 sm11 md11 lg10 class="mt-2">
                <p class="pl-4 pr-4 pt-2 subheading font-weight-medium">Administrative and underwriting support, syndication capabilities, and more. Why limit the revenue you can make or the funding accounts you can offer your clients?</p>
              </v-flex>
              <v-flex xs12 sm11 md11 lg10 class="ml-4">
                <v-layout row wrap>
                  <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                  <v-flex xs11 class="subheading font-weight-medium">Quick Turnaround</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                  <v-flex xs11 class="subheading font-weight-medium">Large Deal Size</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                  <v-flex xs11 class="subheading font-weight-medium">Multiple Platforms</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                  <v-flex xs11 class="subheading font-weight-medium">High comissions</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                  <v-flex xs11 class="subheading font-weight-medium">High comissions</v-flex>
                </v-layout>
                <v-layout row wrap>
                  <v-flex xs1><v-icon small color="primary">done</v-icon></v-flex>
                  <v-flex xs11 class="subheading font-weight-medium">Syndication with Daily remittances</v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs10 sm7 md5 lg3 class="mt-3">
               <v-btn  @click.stop="dialog = true" color="primary" block medium round class="buttons1">Send Message</v-btn>
            </v-flex>
                               <!-- Dialog Box -->

    <v-dialog v-model="dialog" width="800px" >
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
.v-input__slot{
  border-radius: 40px !important;
}
</style>
