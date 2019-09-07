<template>
  <div id="app">
    <PlaidLink
      clientName="Vue Test"
      env="sandbox"
      PLAID_CLIENT_ID=5cb81db65f6405001217f1bb
      PLAID_SECRET=c1cba3e413ad12f136062e4f2ff2d8
      public_key="c157e656bf643f7e617da5812d5404"
      :products="['auth','transactions']"
      webhook="https://api.plaid.com"
      :onLoad='onLoad'
      :onSuccess='onSuccess'
      :onExit='onExit'
      :onEvent='onEvent'
      >
      <v-btn>Open Link Slot</v-btn>
    </PlaidLink>
  </div>
</template>

<script>
/* eslint-disable */
import PlaidLink from 'vue-plaid-link'
export default {
  name: 'app',
  components: {
    PlaidLink
  },
  methods: {
    onLoad() {},
    onSuccess(public_token, metadata) {},
    onExit(err, metadata) {},
    onEvent(eventName, metadata) {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
