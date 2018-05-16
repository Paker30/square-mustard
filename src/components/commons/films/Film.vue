<template>
  <v-container fluid grid-list>
    <v-layout row justify-space-between>
      <v-flex offset-xs3>
        <v-btn flat color="black" v-on:click="play()">
          <i class="material-icons icon" aria-hidden="true">play_arrow</i>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row justify-space-between>
      <v-flex>
        <v-btn flat color="black" v-on:click="rewind()">
          <i class="material-icons icon" aria-hidden="true">fast_rewind</i>
        </v-btn>
      </v-flex>
      <v-flex>
        <v-btn flat color="black" v-on:click="forward()">
          <i class="material-icons icon" aria-hidden="true">fast_forward</i>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row justify-space-between>
      <v-flex offset-xs3>
        <v-btn flat color="black" v-on:click="stop()">
          <i class="material-icons icon" aria-hidden="true">stop</i>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "film",
  data() {
    return {
      film: "",
      path: "",
      action: "",
<<<<<<< HEAD
      server: "http://192.168.0.208:8000"
=======
      server: "http://reno:8000"
>>>>>>> 92ae30da495cbd6df91883999befccfc3cf54bd7
    };
  },
  created() {
    this.film = this.$route.params.film;
    this.path = this.$route.params.path;
  },
  methods: {
    play() {
      this.action = "play";
      this.launchAction();
    },
    stop() {
      this.action = "stop";
      this.launchAction();
    },
    forward() {
      this.action = "forward";
      this.launchAction();
    },
    rewind() {
      this.action = "rewind";
      this.launchAction();
    },
    launchAction() {
      this.$http
        .post(`${this.server}/action/${this.action}/video/${this.film}`, { path: this.path.join('/') })
        .then(response => (this.films = response.body))
        .catch(error => console.error("error"));
    }
  }
};
</script>
<style scoped>

</style>

