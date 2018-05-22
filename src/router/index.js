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
          path: 'film/:film',
          name: 'Film',
          component: {
            template: '<div><mustard-film/></div>',
          },
        },
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
