import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import Login from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView
  },
  {
    path: "/login",
    name: "login",
    component: Login,//() => import("@/views/LoginView.vue"),
    children:[
      
    ],
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegisterView.vue"),
  },
  
  {
    path: "/compra",
    name: "compra",
    component: () => import("@/views/Payments/CompraView.vue"),
  },
  {
    path: "/homecustomer",
    name: "homecustomer",
    component: () => import("@/views/Auth/Customer/HomeCustomer.vue"),
  },
  {
    path: "/storecustomer",
    name: "storecustomer",
    component: () => import("@/views/Auth/Customer/CustomerViews/StoreCustomer.vue"),
  },
  {
    path: "/gymcustomer",
    name: "gymcustomer",
    component: () => import("@/views/Auth/Customer/CustomerViews/GymCustomer.vue"),
  },
  {
    path: "/pagoscustomer",
    name: "pagoscustomer",
    component: () => import("@/views/Auth/Customer/CustomerViews/PagosCustomer.vue"),
  },
  {
    path: "/configcustomer",
    name: "configcustomer",
    component: () => import("@/views/Auth/Customer/CustomerViews/ConfiguracionCustomer.vue"),
  },
  {
    path: "/pay",
    name: "pay",
    component: () => import("@/views/Payments/MediosPagoView.vue"),
  },
  {
    path: "/homeadmin",
    name: "homeadmin",
    component: () => import("@/views/Auth/Admin/HomeAdmin.vue"),
  },
  {
    path: "/usuariosadmin",
    name: "usuariosadmin",
    component: () => import("@/views/Auth/Admin/AdminViews/Usuarios.vue"),
  },
  {
    path: "/gimnasiosadmin",
    name: "gimnasiosadmin",
    component: () => import("@/views/Auth/Admin/AdminViews/Gimnasios.vue"),
  },
  {
    path: "/pagosadmin",
    name: "pagossadmin",
    component: () => import("@/views/Auth/Admin/AdminViews/Pagos.vue"),
  },
  {
    path: "/planesadmin",
    name: "planesadmin",
    component: () => import("@/views/Auth/Admin/AdminViews/Planes.vue"),
  },
  {
    path: "/configuracionadmin",
    name: "configuracionadmin",
    component: () => import("@/views/Auth/Admin/AdminViews/Configuracion.vue"),
  },
  {
    path: "/homeadmingym",
    name: "homeadmingym",
    component: () => import("@/views/Auth/AdminGym/HomeAdminGym.vue"),
  },
  {
    path: "/planesadmingym",
    name: "planesadmingym",
    component: () => import("@/views/Auth/AdminGym/PlanesAdminGym.vue"),
  },
  {
    path: "/usuariosadmingym",
    name: "usuariosadmingym",
    component: () => import("@/views/Auth/AdminGym/UsuariosAdminGym.vue"),
  },
  {
    path: "/pagosadmingym",
    name: "pagosadmingym",
    component: () => import("@/views/Auth/AdminGym/PagosAdminGym.vue"),
  },
  {
    path: "/registrosadmingym",
    name: "registrosadmingym",
    component: () => import("@/views/Auth/AdminGym/RegistrosAdminGym.vue"),
  },
  {
    path: "/configadmingym",
    name: "configadmingym",
    component: () => import("@/views/Auth/AdminGym/ConfigAdminGym.vue"),
  },
  //{ path: "*", component: PageNotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
