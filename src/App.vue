<template>
  <v-app id="app">
    <mustard-header></mustard-header>
      <v-content>
        <v-container fluid fill-height>
            <router-view/>
        </v-container>
      </v-content>
    <mustard-footer></mustard-footer>
  </v-app>
</template>

<script>

export default {
  name: 'app',
  components: { },
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
