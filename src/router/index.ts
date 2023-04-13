import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Session } from "core/auth/session";
import HomeView from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/updates",
    name: "updates",
    component: () => import("../views/Update.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/character/create",
    name: "create-character",
    component: () => import("../views/CreateCharacter.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !Session.isAuthenticated()) {
    return {
      path: "/login",
      query: { redirect: to.fullPath },
    };
  }
  if (!to.meta.requiresAuth && Session.isAuthenticated()) {
    return {
      path: "/profile",
    };
  }
});

export default router;
