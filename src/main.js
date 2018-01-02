// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App';
import router from './router';
import Header from './components/commons/Header';

import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.component('mustard-header', Header);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
