<template>
  <nav class="navbar navbar-expand-md navbar-white fixed-top bg-white"  style="box-shadow: 0 4px 5px #e5e5e5;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/fithub.png" alt="Logo FitHub" style="height: 25px;">
      </a>
      <ul class="nav nav-masthead justify-content-end nav-separator">
        <li class="nav-item">
          <router-link :to="{ name:''}">
            <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Iniciar sesión</a>
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bold py-1 px-0" href="#">Registrarse</a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header"
  }
</script>
<style>
@import "@/assets/css/navbar.css";
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Nunito:wght@500;700;800&family=Poppins:wght@300&display=swap');
</style>
