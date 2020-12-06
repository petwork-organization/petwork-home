import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from '../components/pages/HomePage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';
import SandboxPage from '../components/pages/SandboxPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/sandbox',
    name: 'sandbox',
    component: SandboxPage,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage,
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
