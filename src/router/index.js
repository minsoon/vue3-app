import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ x: 0, y: 0 })
        }
      });
    });
  }
})

router.beforeEach((to, from, next) => {
  /**
   * TODO:
   * - Page requireAuth Check
   */
  next()
});

export default router
