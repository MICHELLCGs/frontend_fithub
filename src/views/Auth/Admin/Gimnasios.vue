<template>
    <SidebarAdmin />
    <div class="home_content">
      <main role="main" class="container tab">
      <div class="row">
        <div class="col-12">
          <h1>Tabla Gimnasios</h1>
          <div class="table-responsive">
            <table class="table table-bordered" style="margin-bottom: 100px;">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>APELLIDO</th>
                  <th>MAIL</th>
                  <th>CÓDIGO GIMNASIO</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Lorenzo</td>
                  <td>Omar</td>
                  <td>example@mail.com</td>
                  <td>001</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Thalia</td>
                  <td>Montenegro</td>
                  <td>example@mail.com</td>
                  <td>002</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
    </div>
  </template>
  
  
  <script>
  import SidebarAdmin from "@/components/layout/sidebars/SidebarAdmin.vue";
  export default {
    name: "Gimnasios",
    components() {
      SidebarAdmin;
    },
    components: { SidebarAdmin},
};
  </script>
  
  
  <style>
  /*
  Home Content
  */
  
  .home_content {
    position: absolute;
    height: 100%;
    right: 0;
    left: 78px;
    transition: all 0.5s ease;
    flex-grow: 1;
    overflow-y: auto;
  }
  
  .home_content .text {
    font-size: 25px;
    font-weight: 500;
    color: #474D89;
    margin: 12px;
    flex-grow: 1;
    overflow-y: auto
  }
  
  .sidebar.active~.home_content {
    left: 240px;
    right: 0;
  }
  </style>