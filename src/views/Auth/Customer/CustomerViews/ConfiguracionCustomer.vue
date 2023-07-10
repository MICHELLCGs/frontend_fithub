<template>
    <SidebarCustomer />
    <div class="home_content">
      <div class="container emp-profile">
    <form method="post">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
            <div class="file btn btn-lg btn-primary">
              Cambiar foto
              <input type="file" name="file" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-head">
            <h5>María de los Ángeles Corrales</h5>
            <h6>Aministradora</h6>
            <p class="proile-rating">RANKINGS : <span>8/10</span></p>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#" role="tab" aria-controls="home" aria-selected="true">Acerca de mi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Editar" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="profile-work">
            <p>Link de trabajo</p>
            <a href="">Website Link</a><br/>
            <!-- <a href="">Bootsnipp Profile</a><br/>
            <a href="">Bootply Profile</a> -->
            <p>Habilidades</p>
            <a href="">Diseñadora web</a><br/>
            <a href="">Desarrolladora web</a><br/>
            <a href="">WordPress</a><br/>
            <a href="">WooCommerce</a><br/>
            <a href="">PHP, Net</a><br/>
          </div>
        </div>
        <div class="col-md-8">
          <div class="tab-content profile-tab" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div class="row">
                <div class="col-md-6">
                  <label>User Id</label>
                </div>
                <div class="col-md-6">
                  <p>MariaAC</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Name</label>
                </div>
                <div class="col-md-6">
                  <p>María de los Ángeles Corrales</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Email</label>
                </div>
                <div class="col-md-6">
                  <p>MariaAC@gmail.com</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Número</label>
                </div>
                <div class="col-md-6">
                  <p>934672834</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label> Profesión</label>
                </div>
                <div class="col-md-6">
                  <p>Diseñadora web</p>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div class="row">
                <div class="col-md-6">
                  <label>Experiencia</label>
                </div>
                <div class="col-md-6">
                  <p>Experta</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Pago por hora</label>
                </div>
                <div class="col-md-6">
                  <p>10$/hr</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Proyectos totales</label>
                </div>
                <div class="col-md-6">
                  <p>230</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Nivel de Inglés</label>
                </div>
                <div class="col-md-6">
                  <p>Experta</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Disponible</label>
                </div>
                <div class="col-md-6">
                  <p>6 meses</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label>idk</label><br/>
                  <p>idk</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>           
  </div>
    </div>
  </template>
  
  
  <script>
  import SidebarCustomer from "@/components/layout/sidebars/SidebarCustomer.vue";
  export default {
    name: "Gimnasios",
    components() {
      SidebarCustomer;
    },
    components: { SidebarCustomer},
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
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index: 2;
  }
  .sidebar.active~.home_content {
    left: 240px;
    right: 0;
  }
  body{
    background: -webkit-linear-gradient(left, #2D325B, #624D4B);
  }
  .emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
  }
  .profile-img{
    text-align: center;
  }
  .profile-img img{
    width: 70%;
    height: 100%;
  }
  .profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
  }
  .profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
  }
  .profile-head h5{
    color: #333;
  }
  .profile-head h6{
    color: #0062cc;
  }
  .profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
  }
  .proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
  }
  .proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
  }
  .profile-head .nav-tabs{
    margin-bottom:5%;
  }
  .profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
  }
  .profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #2D325B;
  }
  .profile-work{
    padding: 14%;
    margin-top: -15%;
  }
  .profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
  }
  .profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
  }
  .profile-work ul{
    list-style: none;
  }
  .profile-tab label{
    font-weight: 600;
  }
  .profile-tab p{
    font-weight: 600;
    color: #2D325B;
  }
  </style>