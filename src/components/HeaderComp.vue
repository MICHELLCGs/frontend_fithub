<template>
  <header class="topheader">
    <nav class="topnav">
      <a href="/" class="logo">
        <img
          height="45"
          width="135"
          src="../assets/img/fithub.png"
          alt="logo de fithub"
        />
      </a>
      <ul class="menu">
        <li><a href="#mapa" >Mapa</a></li>
        <li><a href="login">Log In</a></li>
        <li><a href="register">Register</a></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header"}
</script>
<style>
 @import "@/assets/css/navbar.css";
 @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Nunito:wght@500;700;800&family=Poppins:wght@300&display=swap');
</style>
