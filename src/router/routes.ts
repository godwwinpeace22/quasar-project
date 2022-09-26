import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/invoices',
        component: () => import('pages/Invoices.vue'),
      },
      {
        path: 'Wallet',
        component: () => import('pages/Wallet.vue'),
      },
      {
        path: 'Activity',
        component: () => import('pages/Activity.vue'),
      },
      {
        path: 'Help',
        component: () => import('pages/Help.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
