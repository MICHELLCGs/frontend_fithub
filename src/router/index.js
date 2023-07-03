import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,

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
  {
    path: "/perfil",
    name: "perfil",
    component: () => import("@/views/PerfilHome.vue"),
  },
  {
    path: "/uasistencia",
    name: "uasistencia",
    component: () => import("@/views/Uasistencia.vue"),
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("@/components/CompraComp.vue"),
  },
  {
    path: "/homeadmin",
    name: "homeadmin",
    component: () => import("@/views/Auth/Admin/HomeAdmin.vue"),
  },
  ,
  {
    path: "/usuarios",
    name: "usuarios",
    component: () => import("@/views/Auth/Admin/Usuarios.vue"),
  },
  //{ path: "*", component: PageNotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
