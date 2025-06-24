import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: import.meta.env.SSR
    ? createMemoryHistory() // ✅ works on server
    : createWebHistory(), // ✅ works on client
  routes,
});

export default router;
