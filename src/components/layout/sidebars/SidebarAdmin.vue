<template>
  <!-- Sidebar -->
  <div class="col-md-3 bg-dark text-white">
    <div class="sidebar">
      <h2>Dashboard</h2>
      <ul class="list-unstyled">
        <li><a href="#">Inicio</a></li>
        <li>
          <a
            href="#submenu"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="submenu"
            >Menú <i class="bi bi-chevron-down"></i
          ></a>
          <ul class="collapse" id="submenu">
            <li><a href="#">Opción 1</a></li>
            <li><a href="#">Opción 2</a></li>
            <li><a href="#">Opción 3</a></li>
          </ul>
        </li>
        <li><a href="#">Configuración</a></li>
      </ul>
    </div>
    </div>
    <slot></slot>
  <!-- Contenido principal -->
</template>
<script>
export default {
  name: "SidebarAdmin",
};
</script>