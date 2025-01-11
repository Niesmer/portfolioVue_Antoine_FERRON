import "./assets/main.css";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import type { RouteRecordRaw } from "vue-router";
import routes from "./router";
import { createPinia } from "pinia";
import { projects } from "./assets/data/projects";

interface ImportMeta {
  env: Record<string, any>;
}

// Convert projects to route records
const projectRoutes: RouteRecordRaw[] = projects.map((project) => ({
  path: `/project/${project.link}`,
  name: `project-${project.link}`,
  component: () => import('./pages/project/[id].vue'),
  props: (route) => ({
    id: route.params.id,
    project: projects.find(p => p.link === route.params.id)
  }),
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
  },
  ({ app, router, initialState }) => {
    const pinia = createPinia();
    app.use(pinia);

    if (import.meta.env.SSR) initialState.pinia = pinia.state.value;
    else pinia.state.value = initialState.pinia || {};
  }
);
