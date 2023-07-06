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
    path: "/homecustomer",
    name: "homecustomer",
    component: () => import("@/views/Auth/Customer/HomeCustomer.vue"),
  },
  {
    path: "/storecustomer",
    name: "storecustomer",
    component: () => import("@/views/Auth/Customer/StoreCustomer.vue"),
  },
  {
    path: "/gymcustomer",
    name: "gymcustomer",
    component: () => import("@/views/Auth/Customer/GymCustomer.vue"),
  },
  {
    path: "/pagoscustomer",
    name: "pagoscustomer",
    component: () => import("@/views/Auth/Customer/PagosCustomer.vue"),
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
  {
    path: "/homeadmingym",
    name: "homeadmingym",
    component: () => import("@/views/Auth/AdminGym/HomeAdminGym.vue"),
  },
  //{ path: "*", component: PageNotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
