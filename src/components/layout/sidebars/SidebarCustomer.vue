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
        <a href="/homecustomer">
          <i class="bi bi-grid"></i>
          <span class="links_name"> Dashboard</span>
        </a>
        <span class="tooltip"> Dashboard</span>
      </li>
      <li>
        <a href="/gymcustomer">
          <i class="bi bi-cloud-haze2"></i>
          <span class="links_name"> Gimnasios</span>
        </a>
        <span class="tooltip"> Gimnasios</span>
      </li>
      <li>
        <a href="/pagoscustomer">
          <i class="bi bi-cash-stack"></i>
          <span class="links_name"> Pagos</span>
        </a>
        <span class="tooltip"> Pagos</span>
      </li>
      <li>
        <a href="/storecustomer">
          <i class="bi bi-shop-window"></i>
          <span class="links_name"> Store</span>
        </a>
        <span class="tooltip"> Store</span>
      </li>
      <li>
        <a class="btn custom-btn d-flex align-left"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight">
          <i class="bi bi-cast" ></i>
          <span class="links_name"> Referidos</span>
        </a>
        <span class="tooltip"> Referidos</span>
      </li>

      <li >
        <a href="/configcustomer">
          <i class="bi bi-gear"></i>
          <span class="links_name"> Configuracion</span>
        </a>
        <span class="tooltip"> Configuracion</span>
      </li>
    </ul>
    <div class="profile_content">
      <div class="profile">
        <div class="profile_details">
          <img src="@/assets/img/iconusuario.jpg" alt="LogoGym" />
          <div class="name_job">
            <div class="name">N. Gimnasio</div>
            <div class="job">Gimnasio</div>
          </div>
        </div>
        <a href="/">
        <i class="bi bi-box-arrow-left" id="log_out" style="color: white;"></i>
      </a>
      </div>
    </div>
  </div>
<!--
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content border-0">
                                <div class="modal-body border-0" style="padding-top: 40px;">
                                    ¿Seguro que desea salir?
                                </div>
                                <div class="modal-footer border-0">
                                    <button type="button" class="btn bcancel" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn bcontinue btn-selected"
                                        @click="acceptAct">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>-->
  <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Ver Recompensas</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">Aun no hay Nah</div>
      </div>
</template>


<script>
export default {
  name: "SidebarCustomer",
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    //acceptAc() {
      //window.location.href = "/";
    //},
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Nunito:wght@500;700;800&family=Poppins:wght@300&display=swap");
@import "@/assets/css/siderbar.css";

/* Estilos del REFERIDO */
.custom-btn {
   background-color: #2D325B; 
   color: #ffffff;
   height: 50px;

}


/* Estilos del CONFIGURACION */

body {
  font-family: Arial, sans-serif;
}

.align-left {
    justify-content: flex-start;
    padding-left: 0px; /* Ajusta este valor según tu preferencia */
}

.profile-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
}

.profile-container h1 {
  text-align: center;
  margin-bottom: 50px;
}

.profile-form {
  margin-bottom: 15px;
}

.profile-form label {
  font-weight: bold;
  margin-bottom: 5px;
}

.profile-form input[type="text"],
.profile-form textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid #080101;
  border-radius: 5px;
  resize: none;
}

body {
  padding-top: 1rem;
  padding-bottom: 0rem;
}
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