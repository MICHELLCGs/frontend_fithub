import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/views/AdminView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/LoginComp.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/RegisterComp.vue"),
  },
  {

    path: "/compra",
    name: "compra",
    component: () => import("@/views/CompraView.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
