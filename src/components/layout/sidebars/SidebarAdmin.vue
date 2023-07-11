
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
                <a href="/homeadmin">
                    <i class="bi bi-grid"></i>
                    <span class="links_name"> Dashboard</span>
                </a>
                <span class="tooltip"> Dashboard</span>
            </li>
            <li>
                <a href="/gimnasiosadmin">
                    <i class="bi bi-clipboard"></i>
                    <span class="links_name"> Gimnasios</span>
                </a>
                <span class="tooltip"> Gimnasios</span>
            </li>
            <li>
                <a href="/planesadmin">
                    <i class="bi bi-calendar2-check"></i>
                    <span class="links_name"> Planes</span>
                </a>
                <span class="tooltip"> Planes</span>
            </li>
            
            <li>
                <a href="/usuariosadmin">
                    <i class="bi bi-person"></i>
                    <span class="links_name"> Usuarios</span>
                </a>
                <span class="tooltip"> Usuarios</span>
            </li>
            <li>
                <a href="/pagosadmin">
                    <i class="bi bi-cash-stack"></i>
                    <span class="links_name"> Pagos</span>
                </a>
                <span class="tooltip"> Pagos</span>
            </li>

            <li>
                <a href="/configuracionadmin">
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
                        <div class="name">N. Admin</div>
                        <div class="job">Administrador</div>
                    </div>
                </div>
                <a href="/" 
                            data-bs-target="#staticBackdrop">
                <i class="bi bi-box-arrow-left" id="log_out" style="color: white;"></i>
                </a>
            </div>
        </div>
    </div>
    <!--<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content border-0">
                                <div class="modal-body border-0" style="padding-top: 40px;">
                                    ¿Seguro que desea salir?
                                </div>
                                <div class="modal-footer border-0">
                                    <button type="button" class="btn bcancel" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn bcontinue btn-selected"
                                        @click="acceptA">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div> -->
</template>
<script>
export default {
    name: "SidebarAdmin",
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    //acceptA() {
      //window.location.href = "/";
    //},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Nunito:wght@500;700;800&family=Poppins:wght@300&display=swap");
@import "@/assets/css/siderbar.css";
/* modal-botones
.bcancel {
    border: 1px solid #205080;
    background-color: transparent;
}

.bcancel:hover {
    background-color: #205080;
    box-shadow: 0 4px 8px rgba(32, 80, 128, 0.5);
    color: white;
}

.bcontinue {
    background-color: #336699;
    color: #fff;
}

.bcontinue.btn-selected {
    background-color: #205080;
}

.bcontinue:hover {
    box-shadow: 0 4px 8px rgba(32, 80, 128, 0.5);
    color: white;
}*/
</style>