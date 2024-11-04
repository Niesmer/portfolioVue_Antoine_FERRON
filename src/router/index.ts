import { createRouter, createWebHistory } from "vue-router";
import View404 from "@/views/View404.vue";
import HomeView from "@/views/HomeView.vue";
import ProjectView from "@/views/ProjectView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/informations",
      name: "informations",
      component: HomeView,
    },
    {
      path: "/space-hokey",
      name: "space-hokey",
      component: ProjectView,
      props: { project: "Space hokey" },  // Pass `project` as a prop
    },
    {
      path: "/amzzon",
      name: "amzzon",
      component: ProjectView,
      props: { project: "Amzzon" },
    },
    {
      path: "/wys-app",
      name: "wys-app",
      component: ProjectView,
      props: { project: "Wys App" },
    },
    {
      path: "/dames",
      name: "dames",
      component: ProjectView,
      props: { project: "Dames" },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: View404,
    },
  ],
});

export default router;
