import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home-page',
      component: require('@/components/HomePage').default,
    },
    {
      path: '/fm',
      name: 'fm-page',
      component: require('@/components/FmPage').default,
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
