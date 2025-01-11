import "./assets/main.css";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import type { RouteRecordRaw } from "vue-router";
import routes from "./router";
import { createPinia } from "pinia";
import { projects } from "./assets/data/projects";

declare global {
  interface Window {
    __INITIAL_STATE__?: string;
  }
}

interface ImportMeta {
  env: Record<string, any>;
}

// Convert projects to route records
const projectRoutes: RouteRecordRaw[] = projects.map((project) => ({
  path: `/project/${project.link}`,
  name: `project-${project.link}`,
  component: () => import('./pages/project/[id].vue'),
  // Pass project link as id param
  beforeEnter: (to) => {
    to.params.id = to.path.split('/').pop() || '';
  },
  meta: {
    title: project.titre
  }
}));

// Combine static and dynamic routes
const allRoutes = [...routes, ...projectRoutes];

// Define your app with proper router configuration
export const createApp = ViteSSG(
  App,
  {
    routes: allRoutes,
    base: '/'
  },
  ({ app, router, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);
    
    // Handle client-side state hydration
    if (import.meta.env.SSR) {
      initialState.pinia = pinia.state.value;
    } else if (window.__INITIAL_STATE__) {
      pinia.state.value = JSON.parse(window.__INITIAL_STATE__).pinia;
    }

    // Add navigation guards for transitions
    router.beforeEach((to, from, next) => {
      if (to.path !== from.path) {
        // Reset any necessary state here
        const store = pinia.state.value;
        if (store && store.project) {
          store.project.isAnimating = false;
        }
      }
      next();
    });
  }
);
