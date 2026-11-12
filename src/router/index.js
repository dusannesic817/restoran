import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Menu from "@/views/Menu.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/meni",
      component: Menu,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return {
      top: 0,
    };
  },
});

export default router;