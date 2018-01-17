<template>
    <v-layout row wrap>
      <v-flex xs9>
        <div>
          <v-breadcrumbs divider="/">
            <v-breadcrumbs-item v-for="secction in path"
              :key="secction.dir">
                <v-btn depressed small v-on:click="goBackTo(secction.dir)">
                  {{ secction.dir }}
                </v-btn>
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </div>
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
      path: [{ dir: "home", section: "", disabled: true }],
      server: "http://localhost:8000",
      endpoint: "/video"
    };
  },
  created() {
    this.exploreFilmPath();
  },
  methods: {
    selectFilm(dir) {
      this.path[this.path.length - 1].disabled = false;
      this.path.push({ dir, section: dir, disabled: true });
      dir.match(/(.)*[.]/g)
        ? this.getFilmControls(dir)
        : this.exploreFilmPath();
    },
    getFilmControls(dir) {
      const film = this.path[this.path.length - 1];
      this.$router.push(`/film/${film.dir}`);
    },
    exploreFilmPath() {
      const filmRoute = this.path.map(section => section.section);
      const uri = `${this.server}${this.endpoint}${filmRoute.join("/")}`;
      this.$http
        .get(uri)
        .then(response => (this.films = response.body))
        .catch(error => {
          this.films = [];
        });
    },
    goBackTo(title) {
      const index = this.path.findIndex(item => item.dir === title);
      this.path = this.path.slice(0, (index + 1));
      if (this.$router.currentRoute.path !== "/") {
        this.$router.push({ path: "/" });
      } else {
        this.exploreFilmPath();
      }
    }
  }
};
</script>
<style scoped>

</style>
