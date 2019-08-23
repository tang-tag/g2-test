import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/transform',
      name: 'transform',
      component: () => import('@/views/Transform'),
    },
    {
      path: '/pie',
      name: 'pie',
      component: () => import('@/views/Pie'),
    },
    {
      path: '/interval',
      name: 'interval',
      component: () => import('@/views/Interval'),
    },
    {
      path: '/bar',
      name: 'bar',
      component: () => import('@/views/Bar'),
    },
  ],
});
