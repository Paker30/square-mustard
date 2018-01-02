import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Films',
      component: {
        template: '<div><mustard-films/></div>',
      },
      children: [
        {
          path: 'film',
          component: {
            template: '<div> hola</div>',
          },
        },
      ],
    },
  ],
});
