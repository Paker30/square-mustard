<template>
  <div>
    <v-list two-line>
      <template v-for="item in films">
        <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
        <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
        <v-list-tile avatar v-else v-bind:key="item.title" @click=''>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <router-view/>
  </div>
</template>

<script>
import Film from './Film';

export default {
  name: 'films',
  components: { Film },
  data() {
    return {
      films: [
        { header: 'Today' },
        {
          avatar: "/static/doc-images/lists/1.jpg",
          title: "Brunch this weekend?",
          subtitle:
            '<span class="grey--text text--darken-2">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        { divider: true, inset: true },
        {
          avatar: "/static/doc-images/lists/2.jpg",
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle:
            '<span class="grey--text text--darken-2">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.'
        },
        { divider: true, inset: true },
        {
          avatar: "/static/doc-images/lists/3.jpg",
          title: "Oui oui",
          subtitle:
            '<span class="grey--text text--darken-2"å>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>
