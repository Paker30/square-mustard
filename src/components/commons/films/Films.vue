<template>
    <v-layout row wrap>
      <v-flex xs9>
        <v-breadcrumbs divider="/">
          <v-breadcrumbs-item v-for="secction in path"
            :key="secction.dir" :disabled="secction.disabled" v-on:click="goTo(secction.dir)">
            {{ secction.dir }}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
        <v-list two-line>
          <template v-for="film in films">
            <v-list-tile avatar v-bind:key="film.pretty" v-on:click="selectFilm(film.pretty)">
              <v-list-tile-content>
                <v-list-tile-title v-html="film.pretty">{{film.pretty}}</v-list-tile-title>
                <!-- <v-list-tile-sub-title v-html="film.pretty">{{film.pretty}}</v-list-tile-sub-title> -->
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
      <v-flex xs3>
        <router-view/>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: "films",
  data() {
    return {
      films: [],
      path: [{ dir: "home", disabled: true }],
      server: "http://localhost:8000",
      endpoint: "/video"
    };
  },
  created() {
    this.exploreFilm();
  },
  methods: {
    selectFilm(dir) {
      this.path[this.path.length - 1].disabled = false;
      this.path.push({ dir, disabled: true });
      dir.match(/(.)*[.]/g) ? this.filmControls() : this.exploreFilm(dir);
    },
    filmControls() {
      this.$router.push("film");
    },
    exploreFilm(dir) {
      const uri = dir
        ? `${this.server}${this.endpoint}/${dir}`
        : `${this.server}${this.endpoint}`;
      this.$http
        .get(uri)
        .then(response => (this.films = response.body))
        .catch(error => {
          console.error(error);
          this.films = [];
        });
    },
    goTo(dir) {
      console.log(dir);
    }
  }
};
</script>
<style scoped>

</style>
