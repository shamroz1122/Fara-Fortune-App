<template>
  <div id="app">

        <router-view></router-view>

  </div>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

<style media="screen">
#app{
  background-color: #F8F8F8;
}
</style>
