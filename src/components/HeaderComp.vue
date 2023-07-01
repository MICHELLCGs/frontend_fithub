<template>
  <nav class="navbar navbar-expand-md navbar-white fixed-top bg-white" style="box-shadow: 0 4px 5px #e5e5e5;">
    <div class="container-fluid">
      <router-link :to="{ name: 'index' }">
        <a class="navbar-brand" href="#">
          <img src="../assets/img/fithub.png" alt="Logo FitHub" style="height: 32px;">
        </a>
      </router-link>
      <ul class="nav nav-masthead justify-content-end nav-separator">
        <li class="nav-item">
          <router-link :to="{ name: 'login' }">
          <a :class="{'nav-link fw-bold py-1 px-0':true, active: isRouteActive('login'),}" aria-current="page" href="#">
            <button class="btn btn-custom rounded-pill" style="font-size: 14px;">Iniciar sesión</button>
          </a>
        </router-link>

        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'register' }">
          <a :class="{'nav-link fw-bold py-1 px-0': true,
                active: isRouteActive('register'),
              }" href="#">
            <button class="btn btn-custom rounded-pill selected" style="font-size: 14px;">Registrarse</button>
          </a>
        </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName;
    },
  },
};
</script>
<style>
@import "@/assets/css/navbar.css";
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Nunito:wght@500;700;800&family=Poppins:wght@300&display=swap");
</style>
