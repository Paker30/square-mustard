// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import Header from './components/commons/Header';
import Footer from './components/commons/my-footer';
import Films from './components/commons/films/Films';
import Film from './components/commons/films/Film';

import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueResource);
Vue.component('mustard-header', Header);
Vue.component('mustard-footer', Footer);
Vue.component('mustard-films', Films);
Vue.component('mustard-film', Film);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
