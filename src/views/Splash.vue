<template>
<div id="inspire" >

    <v-app>
      <v-container fluid fill-height class="back">
        <v-layout row wrap justify-center align-center>
              <v-flex xs12 lg12 sm12 md12>
                <v-responsive>
              <v-img
                :src="require('../assets/logo_white.png')"
                class="my-5"
                contain
                height="120"
                ></v-img>
                </v-responsive>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
data () {
  return {
    value: 0,
    query: false,
    show: true,
    interval: 0,
    progressBar:true,
  }
},
mounted () {
  this.queryAndIndeterminate()
},

beforeDestroy () {
  clearInterval(this.interval)
},
beforeRouteLeave (to, from, next) {
  //const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      clearInterval(this.interval)
      next()
},
methods: {
  queryAndIndeterminate () {
    this.query = true
    this.show = true
    this.value = 0

    setTimeout(() => {
      this.query = false

      this.interval = setInterval(() => {
        if (this.value === 100) {
          clearInterval(this.interval)
          this.show = false
          this.progressBar = false
          this.$router.push({path:'form'})
          //return setTimeout(this.queryAndIndeterminate, 8000)
        }
        this.value += 2
      }, 100)
    }, 450)
  },
}
}
</script>

<style scoped>
.back {
  background-image: url(../assets/splash_bg.png);
  background-size: cover;
  height: 100vh;
}
#inspire{
background: none;
}
</style>
