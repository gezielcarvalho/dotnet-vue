import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../pages/HomeView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../pages/AboutView.vue') },
  { path: '/contact', name: 'contact', component: () => import('../pages/ContactView.vue') },
  {
    path: '/user',
    children: [
      {
        path: 'profile',
        name: 'profile',
        component: () => import('../pages/user/ProfileView.vue'),
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('../pages/user/SettingsView.vue'),
      },
      { path: 'logout', name: 'logout', component: () => import('../pages/user/LogoutView.vue') },
      { path: 'login', name: 'login', component: () => import('../pages/user/LoginView.vue') },
    ],
  },
];

export default routes;
