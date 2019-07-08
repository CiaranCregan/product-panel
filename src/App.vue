<template>
  <v-app>
    <Navbar />
    <v-content class="grey lighten-3">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>

.application a{
  text-decoration: none;
  color: white;
}
  
</style>
