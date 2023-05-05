import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { isNotAuthenticated, isAuthenticated } from "./constraints";
import HomeView from "view/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    children: [
      {
        path: "",
        component: HomeView,
      },
      {
        path: "updates",
        name: "updates",
        component: () => import("view/UpdateView.vue"),
        meta: {
          global: true,
        },
      },
      {
        path: "about",
        name: "about",
        component: () => import("view/AboutView.vue"),
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
        component: () => import("view/LoginView.vue"),
      },
      {
        path: "logout",
        name: "logout",
        component: () => import("view/LogoutView.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "register",
        name: "register",
        component: () => import("view/RegisterView.vue"),
      },
    ],
  },
  {
    path: "/password",
    children: [
      {
        path: "recover",
        name: "recover",
        component: () => import("view/RecoverPwdView.vue"),
      },
      {
        path: "reset/:token",
        name: "reset",
        component: () => import("view/ResetPwdView.vue"),
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
        component: async () => await import("view/Profile.vue"),
      },
      {
        path: "status",
        name: "status",
        component: async () => await import("view/Status.vue"),
      },
      {
        path: "class",
        name: "class",
        component: async () => await import("view/SelectClass.vue"),
      },
      {
        path: "options",
        name: "options",
        component: async () => await import("view/Options.vue"),
      },
    ],
  },
  {
    path: "/dungeon",
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "dungeon",
        component: async () => await import("view/Dungeon.vue"),
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

  if (isNotAuthenticated(requiresAuth)) return { path: "/auth/login" };

  if (isAuthenticated(requiresAuth) && !global)
    return { path: "/character/profile" };
});

export default router;
