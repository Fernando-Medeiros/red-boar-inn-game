import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/atualizacoes",
    name: "atualizacoes",
    component: () => import("../views/UpdateView.vue"),
  },
  {
    path: "/sobre",
    name: "sobre",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/acessar",
    name: "acessar",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/registrar",
    name: "registrar",
    component: () => import("../views/RegisterView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
