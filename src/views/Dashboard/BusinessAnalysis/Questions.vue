<template>
<div id="inspire" >
  <v-form ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submitQues">
<v-app>
<v-toolbar class="primary" dark fixed flat>
  <v-flex xs1>
    <i class="material-icons" style="color:white" v-on:click="cut">
      arrow_back
      </i>
    </v-flex>
  <v-flex xs11 class="text-xs-center"><span class="pr-4 subheading tit">Business Analysis</span></v-flex>
</v-toolbar>


      <v-container fluid class="ma-0 pa-0">
        <!-- Question#1 -->

        <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show">
          <v-flex xs12 class="pa-4">
            <p class="display-1 font-weight-bold tit">Any judgement or claims against the business?</p>
          </v-flex>

          <v-flex xs10>
            <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
            <v-card flat>
            <v-container fill-height fluid pa-2>
                <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                  <v-flex xs12>
                      <v-text-field
                        solo
                        :rules="msgRule"
                        v-model="ques1"
                        placeholder="Type your answer here"
                        height="70"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5>
                      <v-btn color="primary" class="button1"
                      v-on:click="route1" block large round >NEXT</v-btn>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
      </v-flex>
    </v-layout>
            <!-- Question#2 -->
          <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show3">
              <v-flex xs12 class="pa-4">
                <p class="display-1 font-weight-bold tit">How's your credit score?</p>
              </v-flex>

          <v-flex xs10>
            <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
              <v-card flat>
                <v-container fluid pa-2>
                  <v-layout row wrap>
                    <v-flex xs6 lg6 md6>
                        <v-card class="ma-2 pa-1 text-xs-center new" color="color"><p v-on:click="other('499-below')" class="pt-1  subheading font-weight-bold tit"> 499 below</p></v-card>
                  </v-flex>
                    <v-flex xs6 lg6 md6>
                        <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="other('500-599')" class="pt-1 subheading font-weight-bold tit">500-599</p></v-card>
                  </v-flex>
                </v-layout>
                  <v-layout row wrap justify-center align-center text-xs-center >
                    <v-flex xs6 lg6 md6>
                      <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="other('600-649')" class="pt-1 subheading font-weight-bold tit">600-649</p></v-card>
                  </v-flex>
                    <v-flex xs6 lg6 md6>
                    <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="other('650-679')" class="pt-1 subheading font-weight-bold tit">650-679</p></v-card>
                  </v-flex>
                </v-layout>
                      <v-layout row wrap justify-center align-center text-xs-center >
                    <v-flex xs6 lg6 md6>
                      <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="other('680-719')" class="pt-1 subheading font-weight-bold tit">680-719</p></v-card>
                  </v-flex>
                    <v-flex xs6 lg6 md6>
                    <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="other('720 or above')" class="pt-1 subheading font-weight-bold tit">720 or above</p></v-card>
                  </v-flex>
                    <v-flex xs5>
                      <v-btn color="primary" class="button1"
                      v-on:click="route2" block large round >NEXT</v-btn>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
      </v-flex>
    </v-layout>

      <!-- Question#3 -->

        <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show4">
          <v-flex xs12 class="pa-4">
            <p class="display-1 font-weight-bold tit">Do you have any tax liens or Bankruptcies?</p>
          </v-flex>
          <v-flex xs10>
            <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
            <v-card flat>
            <v-container fill-height fluid pa-2>
                <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                  <v-flex xs12>
                      <v-text-field
                        solo
                        :rules="msgRule"
                        v-model="ques3"
                        placeholder="Type your answer here"
                        height="70"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5>
                      <v-btn color="primary" class="button1"
                      v-on:click="route3" block large round >NEXT</v-btn>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
      </v-flex>
    </v-layout>

              <!-- Question#4 -->

        <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show5">
          <v-flex xs12 class="pa-4">
            <p class="display-1 font-weight-bold tit">What percentage of the business do you own?</p>
          </v-flex>
          <v-flex xs10>
            <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
            <v-card flat>
            <v-container fill-height fluid pa-2>
                <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                  <v-flex xs12>
                      <v-text-field
                        solo
                        :rules="msgRule"
                        v-model="ques4"
                        placeholder="Type your answer here"
                        height="70"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5>
                      <v-btn color="primary" class="button1"
                      v-on:click="route4" block large round >NEXT</v-btn>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-flex>
      </v-layout>

        <!-- Question#5 -->

        <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show6">
          <v-flex xs12 class="pa-4">
            <p class="display-1 font-weight-bold tit">How much money are you looking for?</p>
          </v-flex>

            <v-flex xs10>
              <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
              <v-card flat>
              <v-container fluid pa-2>
              <v-layout row wrap>
                <v-flex xs6 lg6 md6>
                    <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="money('$5000')" class="pt-1 subheading font-weight-bold tit">$5000</p></v-card>
              </v-flex>
                <v-flex xs6 lg6 md6>
                    <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="money('$10,000')" class="pt-1 subheading font-weight-bold tit">$10,000</p></v-card>
              </v-flex>
            </v-layout>
              <v-layout row wrap justify-center align-center text-xs-center >
                <v-flex xs6 lg6 md6>
                  <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="money('$20,000')" class="pt-1 subheading font-weight-bold tit">$20,000</p></v-card>
              </v-flex>
                <v-flex xs6 lg6 md6>
                <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="money('$30,000')" class="pt-1 subheading font-weight-bold tit">$30,000</p></v-card>
              </v-flex>
            </v-layout>
                  <v-layout row wrap justify-center align-center text-xs-center >
                <v-flex xs6 lg6 md6>
                  <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="money('$50,000')" class="pt-1 subheading font-weight-bold tit">$50,000</p></v-card>
              </v-flex>
                <v-flex xs6 lg6 md6>
                <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="money('$100,000')" class="pt-1 subheading font-weight-bold tit">$100,000</p></v-card>
              </v-flex>
                <v-flex xs5>
                  <v-btn color="primary" class="button1"
                  v-on:click="route5" block large round >NEXT</v-btn>
                </v-flex>
            </v-layout>
          </v-container>
        </v-card>
    </v-flex>
  </v-flex>
</v-layout>

        <!-- Question#6 -->

        <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show7">
          <v-flex xs12 class="pa-4">
            <p class="display-1 font-weight-bold tit">How soon are you looking for this?</p>
          </v-flex>
          <v-flex xs10>
            <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
            <v-card flat>
            <v-container fill-height fluid pa-2>
                <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                  <v-flex xs12>
                    <v-select
                      solo
                      height="60"
                      v-model="ques6"
                      :items="items"
                      label="Choose Month"
                      required
                    ></v-select>
                      <v-text-field
                        solo
                        :rules="msgRule"
                        v-model="ques6a"
                        placeholder="Year"
                        height="70"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5>
                      <v-btn color="primary" class="button1"
                      v-on:click="route6" block large round >NEXT</v-btn>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-flex>
      </v-layout>

      <!-- Question#7 -->

        <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show8">
          <v-flex xs12 class="pa-4">
            <p class="display-1 font-weight-bold tit">What will the money be used for?</p>
          </v-flex>
          <v-flex xs10>
            <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
            <v-card flat>
            <v-container fill-height fluid pa-2>
                <v-layout row wrap justify-center align-center text-xs-center style="margin: -12px;">
                  <v-flex xs12>
                      <v-text-field
                        solo
                        :rules="msgRule"
                        v-model="ques7"
                        placeholder="Type your answer here"
                        height="70"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs5>
                      <v-btn color="primary" class="button1"
                      v-on:click="route7" block large round >NEXT</v-btn>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-flex>
      </v-layout>

        <!-- Question#8 -->

            <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show9">
              <v-flex xs12 class="pa-4">
                <p class="display-1 font-weight-bold tit">Do you have any current loans?</p>
              </v-flex>

                <v-flex xs10>
                  <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
                  <v-card flat>
                  <v-container fluid pa-2>
                  <v-layout row wrap>
                    <v-flex xs6 lg6 md6>
                        <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="crrloan('Yes')" class="pt-1 subheading font-weight-bold tit">YES</p></v-card>
                  </v-flex>
                    <v-flex xs6 lg6 md6>
                        <v-card  class="ma-2 pa-1 text-xs-center new"><p  v-on:click="crrloan('No')" class="pt-1 subheading font-weight-bold tit">NO</p></v-card>
                  </v-flex>
                  </v-layout>
                  <v-layout row wrap justify-center>
                  <v-flex xs5>
                      <v-btn color="primary" class="button1"
                      v-on:click="route8" block large round >NEXT</v-btn>
                    </v-flex>
                </v-layout>
              </v-container>
            </v-card>
        </v-flex>
      </v-flex>
    </v-layout>

        <!-- Question#9 -->

            <v-layout row wrap justify-center align-center  style="margin-top: 80px;" v-show="show10">
              <v-flex xs12 class="pa-4">
                <p class="display-1 font-weight-bold tit">What is the total of overall debt?</p>
              </v-flex>
                <v-flex xs10>
                  <v-flex xs12 sm5 lg5 md5 elevation-3 style="border-radius:8px; background-color:white;" class="mb-2 pa-3 mr-2">
                  <v-card flat>
                  <v-container fluid pa-2>
                  <v-layout row wrap>
                    <v-flex xs6 lg6 md6>
                        <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="debt('$5000')" class="pt-1 subheading font-weight-bold tit">$5000</p></v-card>
                  </v-flex>
                    <v-flex xs6 lg6 md6>
                        <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="debt('$10,000')" class="pt-1 subheading font-weight-bold tit">$10,000</p></v-card>
                  </v-flex>
                </v-layout>
                  <v-layout row wrap justify-center align-center text-xs-center >
                    <v-flex xs6 lg6 md6>
                      <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="debt('$20,000')" class="pt-1 subheading font-weight-bold tit">$20,000</p></v-card>
                  </v-flex>
                    <v-flex xs6 lg6 md6>
                    <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="debt('$30,000')" class="pt-1 subheading font-weight-bold tit">$30,000</p></v-card>
                  </v-flex>
                </v-layout>
                      <v-layout row wrap justify-center align-center text-xs-center >
                    <v-flex xs6 lg6 md6>
                      <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="debt('$50,000')" class="pt-1 subheading font-weight-bold tit">$50,000</p></v-card>
                  </v-flex>
                    <v-flex xs6 lg6 md6>
                    <v-card  class="ma-2 pa-1 text-xs-center new"><p v-on:click="debt('$100,000')" class="pt-1 subheading font-weight-bold tit">$100,000</p></v-card>
                  </v-flex>
                    <v-flex xs5>
                      <v-btn color="primary" class="button1" type="submit"
                      block large round >SUBMIT</v-btn>
                    </v-flex>
                </v-layout>
                  <v-bottom-sheet v-model="sheet1">
                <template v-slot:activator>

                </template>
                <v-list >
                  <v-layout row wrap justify-center align-center>
                    <v-flex xs10>
                    <v-btn color="primary" class="button1"
                      block large round >SOFT APPROVAL</v-btn>
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
            </v-card>
          </v-flex>
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
</v-form>
</div>
</template>
<script>
export default {
data(){
return{
  show:true,
  show3:false,
  show4:false,
  show5:false,
  show6:false,
  show7:false,
  show8:false,
  show9:false,
  show10:false,

  sheet1: false,
  sheet:false,

  color:'green',
  text:'Your Questions submitted Successfully',
  timeout:6000,
  snackbar:false,
  x: null,
  mode: '',

  ques1:'',
  ques2:'',
  ques3:'',
  ques4:'',
  ques5:'',
  ques6:'',
  ques6a:'',
  ques7:'',
  ques8:'',
  ques9:'',

  items: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],

  valid:true,

  nameRules: [
    v => !!v || 'Name is required',
    v => (v && v.length <= 50) || 'Name must be less than 10 characters'
  ],
    msgRule: [
    v => !!v || 'Field cant be empty',
    v => (v && v.length <= 1000) || 'Phone must be 10 characters'
  ],
}
},
methods: {
  other(val,el){
    this.ques2 = val
  },
    money(val){
   this.ques5 = val
  },
  crrloan(val){
   this.ques8 = val
  },
  debt(val){
   this.ques9 = val
  },
  cut(){
    this.$router.go(-1)
  },
    route1 (){
    this.show3 = true
    this.show = false
  },
    route2 (){
    this.show3 = false
    this.show4 = true

  },
    route3 (){
    this.show4 = false
    this.show5 = true
  },
    route4 (){
    this.show5 = false
    this.show6 = true
  },
    route5 (){
    this.show6 = false
    this.show7 = true
  },
    route6 (){
    this.show7 = false
    this.show8 = true
  },
    route7 (){
    this.show8 = false
    this.show9 = true
  },
    route8 (){
    this.show9 = false
    this.show10 = true
  },
    route9 (){
    this.sheet1 = true
  },

  submitQues(){
    if (
        this.$refs.form.validate()) {

        this.$store.dispatch('quesSubm', {
          user_id: this.$store.getters.loggedInUserId,
          question1: this.ques1,
          question2: this.ques2,
          question3: this.ques3,
          question4: this.ques4,
          question5: this.ques5,
          question6: this.ques6,
          question6a: this.ques6a,
          question7: this.ques7,
          question8: this.ques8,
          question9: this.ques9,
        })
        .then(response => {
             if(response.data.status!=undefined && response.data.status=='Token is Expired')
          {
              this.$router.push({ name: 'login', params: { } })
          }else{
            this.snackbar = true
            this.sheet1 = true
          }
        })
      .catch(error => {

      })
    }
  }
},
mounted (){
  const list = document.getElementsByClassName("v-input__slot"); // get all p elements

  list[0].style.borderRadius = "20px";
  list[1].style.borderRadius = "20px";
  list[2].style.borderRadius = "20px";
  list[3].style.borderRadius = "20px";
  list[4].style.borderRadius = "20px";
  list[5].style.borderRadius = "20px";
  list[6].style.borderRadius = "20px";
  list[7].style.borderRadius = "20px";
  list[8].style.borderRadius = "20px";
  list[9].style.borderRadius = "20px";
  list[10].style.borderRadius = "20px";
  list[11].style.borderRadius = "20px"
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
.tit{
font-family: 'Open Sans', sans- serif !important;
}
.new:hover{
  background-color: #136735 !important;
  color: white !important;
}
.button{
width: 100%;
height: 55px;
font-size:15px;
text-transform:none;
font-family: 'Open Sans', sans- serif !important;
}
.button1{
width: 100%;
height: 55px;
font-size:17px;
text-transform:none;
font-family: 'Open Sans', sans- serif !important;
}
#inspire{
background: none;
}
.active {
color:red;
font-weight:bold;
}
</style>
