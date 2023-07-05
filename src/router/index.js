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
  
  {
    path: "/homeadmingym",
    name: "homeadmingym",
    component: () => import("@/views/Auth/AdminGym/HomeAdminGym.vue"),
  },
  {
    path: "/gimnasiosadmin",
    name: "gimnasiosadmin",
    component: () => import("@/views/Auth/Admin/Gimnasios.vue"),
  },
  {
    path: "/planesadmin",
    name: "planesadmin",
    component: () => import("@/views/Auth/Admin/Planes.vue"),
  },
  {
    path: "/usuariosadmin",
    name: "usuariosadmin",
    component: () => import("@/views/Auth/Admin/Usuarios.vue"),
  },
  {
    path: "/pagosadmin",
    name: "pagosadmin",
    component: () => import("@/views/Auth/Admin/Pagos.vue"),
  },
  {
    path: "/configuracionadmin",
    name: "configuracionadmin",
    component: () => import("@/views/Auth/Admin/configuracion.vue"),
  }
  //{ path: "*", component: PageNotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
