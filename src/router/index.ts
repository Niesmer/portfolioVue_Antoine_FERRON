import { createRouter, createWebHistory } from "vue-router/auto";
import { routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  }
});

export default router;
