<template>
    <div class="sidebar" :class="{ active: isSidebarOpen }">
        <div class="logo_content">
            <div class="logo">
                <i class="bi bi-tropical-storm"></i>
                <div class="logo_name">FitHub</div>
            </div>
            <i class="bi bi-list" id="btn" @click="toggleSidebar"></i>
        </div>
        <ul class="nav_list">
            <li>
                <a href="href=/homeadmingym">
                    <i class="bi bi-grid"></i>
                    <span class="links_name"> Dashboard</span>
                </a>
                <span class="tooltip"> Dashboard</span>
            </li>
            <li>
                <a href="/planesadmingym">
                    <i class="bi bi-clipboard"></i>
                    <span class="links_name"> Planes</span>
                </a>
                <span class="tooltip"> Planes</span>
            </li>
            <li>
                <a href="/usuariosadmingym">
                    <i class="bi bi-person"></i>
                    <span class="links_name"> Usuarios</span>
                </a>
                <span class="tooltip"> Usuarios</span>
            </li>
            <li>
                <a href="pagosadmingym">
                    <i class="bi bi-cash-stack"></i>
                    <span class="links_name"> Pagos</span>
                </a>
                <span class="tooltip"> Pagos</span>
            </li>
            <li>
                <a href="/registrosadmingym">
                    <i class="bi bi-calendar2-check"></i>
                    <span class="links_name"> Registros</span>
                </a>
                <span class="tooltip"> Registros</span>
            </li>
            <li>
                <a href="/configadmingym">
                    <i class="bi bi-gear"></i>
                    <span class="links_name"> Configuracion</span>
                </a>
                <span class="tooltip"> Configuracion</span>
            </li>
        </ul>
        <div class="profile_content">
            <div class="profile">
                <div class="profile_details">
                    <img src="@/assets/img/icongym.jpg" alt="LogoGym">
                    <div class="name_job">
                        <div class="name">N. Gimnasio</div>
                        <div class="job">Gimnasio</div>
                    </div>
                </div>
                <i class="bi bi-box-arrow-left" id="log_out"></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "SidebarAdminGym",
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Nunito:wght@500;700;800&family=Poppins:wght@300&display=swap");
@import "@/assets/css/siderbar.css";
</style>