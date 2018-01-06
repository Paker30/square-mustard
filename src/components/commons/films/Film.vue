<template>
  <v-flex>
    <v-btn flat color="black" v-on:click="play()">
      <i class="material-icons icon" aria-hidden="true">play_arrow</i>
    </v-btn>
    <v-btn flat color="black" v-on:click="stop()">
      <i class="material-icons icon" aria-hidden="true">stop</i>
    </v-btn>
    <v-btn flat color="black" v-on:click="rewind()">
      <i class="material-icons icon" aria-hidden="true">fast_rewind</i>
    </v-btn>
    <v-btn flat color="black" v-on:click="forward()">
      <i class="material-icons icon" aria-hidden="true">fast_forward</i>
    </v-btn>
  </v-flex>
</template>

<script>
export default {
  name: "film",
  methods: {
    play() {},
    stop() {},
    forward() {},
    rewind() {}
  }
};
</script>

<style scoped>

</style>

