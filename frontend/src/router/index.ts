import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

// Utility to check for the JWT cookie
function hasJwtCookie() {
  return document.cookie.split(';').some((cookie) => cookie.trim().startsWith('jwt='));
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  // Allow access to login page always
  if (to.path === '/user/login') {
    return next();
  }

  // If no JWT cookie, redirect to login
  if (!hasJwtCookie()) {
    return next('/user/login');
  }

  // Otherwise, proceed as normal
  next();
});

export default router;
