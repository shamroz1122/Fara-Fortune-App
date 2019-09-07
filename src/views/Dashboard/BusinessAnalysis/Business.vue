<template>
<div id="inspire" >
<v-app>
  <v-toolbar class="primary" dark fixed flat>
    <v-flex xs1>
      <i class="material-icons" style="color:white" v-on:click="cut">
        arrow_back
      </i>
    </v-flex>
<v-flex xs11 class="text-xs-center"><span class="pr-4 subheading">Business Analysis</span></v-flex>
    </v-toolbar>

        <v-container fluid  class="ma-0 pa-0">
          <v-layout row wrap justify-center align-center  style="margin-top: 80px;">
              <v-flex xs10 lg4 sm6 md6>
                  <v-form
                      ref="form"
                      v-model="valid"
                      lazy-validation
                      @submit.prevent="businessanalysis"
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
                            v-model="phone"
                            :rules="phoneRule"
                            type="phone"
                            label="Phone Number"
                            solo
                            required
                            height="55px"
                      ></v-text-field>
                      </v-flex>
                    <v-flex xs12 sm12 md12 lg12>
                      <v-select
                        solo
                        height="55px"
                        v-model="pickbusiness"
                        :items="items"
                        label="Pick your Business"
                        required
                      ></v-select>
                      </v-flex>
                       <v-flex xs12 sm12 md12>
                        <span class="body-2 font-weight-bold pl-2 ">How long have you been in business?</span>
                        <v-text-field
                          solo
                          :rules="msgRule"
                          v-model="message"
                          height="65"
                        ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm12 md12>
                        <span class="body-2 font-weight-bold pl-2 ">What were your gross sales last year?</span>
                        <v-text-field
                          solo
                          :rules="msgRule"
                          v-model="message1"
                          height="65"
                        ></v-text-field>
                      </v-flex>
                       <v-flex xs12 sm12 md12>
                        <span class="body-2 font-weight-bold pl-2 ">Is your business seasonal?</span>
                        <v-text-field
                          solo
                          :rules="msgRule"
                          v-model="message2"
                          height="65"
                        ></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm12 md12>
                        <v-btn color="primary" class="button" type="submit"
                            block large round >Credit Score</v-btn>
                      </v-flex>
                  </v-form>
                </v-flex>
              </v-layout>
              <v-bottom-sheet v-model="sheet">
                <template v-slot:activator>
                </template>
                <v-list>
                  <v-layout row wrap justify-center align-center>
                    <v-flex xs10>
                    <v-btn color="primary" class="button1"
                      v-on:click="route"  block large round >YES</v-btn>
                    </v-flex>
                     <v-flex xs10>
                    <v-btn color="primary" class="button1"
                     v-on:click="route2" block large round >NO</v-btn>
                     </v-flex>
                      <v-flex xs10>
                    <v-btn color="#672318" class="button1 white--text"
                      @click="sheet = false" block large round >CANCEL</v-btn>
                      </v-flex>
                      </v-layout>
                </v-list>
              </v-bottom-sheet>

              <v-bottom-sheet v-model="sheet1">
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
              </v-bottom-sheet>
            </v-container>
          </v-app>
        </div>
      </template>
    <script>
export default {
data(){
  return{
    subm:true,
    dialog: false,
    show1: false,
    show2:false,
    loader:false,
    sheet: false,
    sheet1: false,
    name:'',
    bussname:'',
    phone:'',
    pickbusiness:'',
    message:'',
    message1:'',
    message2:'',

    items:['Accountants','Car Dealers','Car Manufacturers','Clothing','Manufacturing','Computer Software','Construction Services','Credit Unions',
    'Cruise Ships & Lines','Dentists','Electronics Manufacturing & Equipment Electronics','Energy & Natural Resources',
    'Farming','Food Products Manufacturing','Food Stores','For-profit Education','Funeral Services',
    'Gambling & Casinos','Garbage Collection/Waste Management','Gas & Oil','General Contractors',
    'Hotels, Motels & Tourism','Lawyers / Law Firms','Meat processing & products','Medical Supplies',
    'Mortgage Bankers & Brokers','Motion Picture Production & Distribution','Non-profits, Foundations & Philanthropists',
    'Nursing Homes/Hospitals','Nutritional & Dietary Supplements','Oil & Gas ,Payday Lenders','Pharmaceutical Manufacturing',
    'Pharmaceuticals / Health Products','Phone Repair or Provider','Physicians & Other Health Professionals',
    'Postal Unions','Professional Sports','Sports Arenas & Related Equipment & Services','Publishing & Printing',
    'Radio/TV Stations','Real Estate','Record Companies','Music Production','Live Entertainment','Religious Organizations',
    'Residential Construction','Restaurants & Bars','Loans','Sea Transport','Special Trade Contractors',
    'Sports','Professional','Steel Production','Stock Brokers/Investment Industry','Textiles','Timber',
    'Logging & Paper Mills','Tobacco','Trash Collection/Waste Management','Trucking','TV Production',
    'Airline','Transportation','Universities','Colleges & Schools','Vegetables & Fruits','Venture Capital',
    'Waste Management','Wine','Beer & Liquor'],

    valid:true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 50) || 'Name must be less than 10 characters'
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
     route(){
      this.$router.push('questions')
    },
    route2(){
      this.sheet1= true
    },

    businessanalysis(){
      if (
          this.$refs.form.validate()) {
          this.$store.dispatch('busAnalysis', {
            user_id: this.$store.getters.loggedInUserId,
            name: this.name,
            businessname: this.bussname,
            contact:this.phone,
            pickbusiness:this.pickbusiness,
            busstime:this.message,
            grosssale:this.message1,
            seasonal:this.message2,
          })
          .then(response => {
             if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
                  this.$router.push({ name: 'login', params: { } })
          }else{
            this.sheet = true
        }
          })
        .catch(error => {

        })
      }
    }
  },
  mounted (){
    const list2 = document.getElementsByClassName("v-input__control");
    list2[0].style.marginBottom = "-16px";
     list2[1].style.marginBottom = "-16px";
      list2[2].style.marginBottom = "-16px";
       list2[3].style.marginBottom = "-16px";
        list2[4].style.marginBottom = "-16px";
         list2[5].style.marginBottom = "-16px";
          list2[6].style.marginBottom = "-16px";
          // list2[7].style.marginBottom = "-13px";
      //      list2[8].style.marginBottom = "-13px";

    const list = document.getElementsByClassName("v-input__slot"); // get all p elements

    list[0].style.borderRadius = "30px";
    list[1].style.borderRadius = "30px";
    list[2].style.borderRadius = "30px";
    list[3].style.borderRadius = "30px";
    list[4].style.borderRadius = "15px";
    list[5].style.borderRadius = "15px";
    list[6].style.borderRadius = "15px";
    list[7].style.borderRadius = "15px";
    list[8].style.borderRadius = "15px";

  // const list2 = document.getElementsByClassName("v-input__control");
  //   list2[0].style.marginBottom = "-20px";


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
