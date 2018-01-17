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
  name: 'film',
  data() {
    return {
      film: '',
      path: '',
      action: '',
      server: 'http://localhost:8000',
      endpoint: `/action/${this.action}/video/${this.film}`
    };
  },
  created() {
    this.film = this.$route.params.film;
    this.path = this.$route.fullPath;
  },
  methods: {
    play() {
      debugger;
      this.action = 'play';
      this.launchAction();
    },
    stop() {
      this.action = 'stop';
      this.launchAction();
    },
    forward() {
      this.action = 'forward';
      this.launchAction();
    },
    rewind() {
      this.action = 'rewind';
      this.launchAction();
    },
    launchAction() {
      this.$http
        .get(`${this.server}${this.endpoint}`)
        .then(response => (this.films = response.body))
        .catch(error => {
          this.films = [];
        });
    },
  },
};
</script>

<style scoped>

</style>

