import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

Vue.use(Router);

function getLayout() {
  return require('@/components/Layout/MainLayout').default;
}

export default new Router({
  routes: [
    {
      path: '/home',
      component: getLayout(),
      redirect: '/home/recommend',
      beforeEnter: (to, from, next) => {
        store.commit('SET_HEADER_COMPONENT_ID', 'HomeMenus');
        next();
      },
      children: [{
        path: 'recommend',
        component: require('@/components/HomePage').default,
      }, {
        path: 'music-list',
        component: require('@/components/MusicListPage').default,
      }]
    },
    {
      path: '/fm',
      component: require('@/components/FmPage').default,
      beforeEnter: (to, from, next) => {
        store.commit('SET_HEADER_COMPONENT_ID', '');
        next();
      }
    },
    {
      path: '*',
      redirect: '/home',
    },
  ],
});
