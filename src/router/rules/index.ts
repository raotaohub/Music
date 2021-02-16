import { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';

const routerTable: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Error.vue'),
  },
];

export default routerTable;
