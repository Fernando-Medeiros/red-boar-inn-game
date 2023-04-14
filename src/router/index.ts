import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isNotAuthenticated, isAuthenticated } from "./constraints";
import HomeView from "view/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    children: [
      {
        path: "/",
        component: HomeView,
      },
      {
        path: "updates",
        name: "updates",
        component: () => import("view/Update.vue"),
        meta: {
          global: true,
        },
      },
      {
        path: "about",
        name: "about",
        component: () => import("view/About.vue"),
        meta: {
          global: true,
        },
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("view/Login.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("view/Register.vue"),
      },
    ],
  },
  {
    path: "/character",
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "profile",
        name: "profile",
        component: () => import("view/Profile.vue"),
      },
      {
        path: "status",
        name: "status",
        component: () => import("view/Status.vue"),
      },
      {
        path: "class",
        name: "class",
        component: () => import("view/SelectClass.vue"),
      },
      {
        path: "options",
        name: "options",
        component: () => import("view/Options.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  const { requiresAuth, global } = to.meta;

  if (isNotAuthenticated(requiresAuth))
    return { path: "/auth/login", query: { redirect: to.fullPath } };

  if (isAuthenticated(requiresAuth) && !global)
    return { path: "/character/profile" };
});

export default router;
