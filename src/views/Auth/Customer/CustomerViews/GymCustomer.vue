<template>
  <SidebarCustomer />
  <div class="home_content">
    <nav class="navbar navbar-light bg-light navbar1">
      <form class="form-inline custom-form">
        <input
          class="form-control mr-sm-2"
          type="search"
          placeholder="Búsqueda"
          aria-label="Search"
        />
        <button class="btn btn-outline-dark my-2 my-sm-0" type="submit">
          <i class="bi bi-search"></i>
        </button>
      </form>
      <button
        type="button"
        class="btn btn-light"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i class="bi bi-bell"></i>
      </button>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Notificaciones
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">ETC</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main class="container tab d-flex justify-content-center">
      <div class="row featurette">
        <div class="col-md-12 text-center align-items-center">
          <h2 class="featurette-heading fw-normal lh-1" style="margin-top: 0">
            <b>Busca gimnasios de tu preferencia</b>
          </h2>
        </div>
        <div class="col-md-12">
          <iframe
            src="https://my.atlist.com/map/73f9ee8c-36c6-4f5f-88ff-8be30f81279d?share=true"
            allow="geolocation 'self' https://my.atlist.com"
            class="w-100"
            style="height: 500px"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </main>

    <main role="main" class="container tab">
      <div class="card-container">
        <div class="card red-border">
          <i class="bi bi-geo-alt-fill icon"></i>
          <div class="card-body">
            <h5 class="card-title">REVO SPORT</h5>
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipPIuOp2x1MrH5llTlVA_ZsEhu0elX0gMsGHB0bN=s300-w300"
                  alt=""
                />
              </div>
            </div>
            <p class="card-text">
              Gimnasio que ofrece clases de ejercicio y equipamiento de última
              generación. Es el más grande y mejor equipado Club de
              Entrenamiento Deportivo en la ciudad de Arequipa.
            </p>
            <a href="#" class="btn btn-primary">Solicitar Asistencia</a>
          </div>
        </div>
        <div class="card blue-border">
          <i class="bi bi-geo-alt-fill icon"></i>
          <div class="card-body">
            <h5 class="card-title">SMARTFIT</h5>
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://gestion.pe/resizer/6PE7nFMZmPOwx1EyqEFHJm8B_kk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GFDIOSWCM5AHPD7AFLQZTGHDME.jpg"
                  alt=""
                />
              </div>
            </div>
            <p class="card-text">
              Smartfit tiene el propósito de ofrecer fitness de alta calidad
              para todos, en un ambiente cómodo, seguro y con la mejor
              tecnología para potenciar tu entrenamiento.
            </p>
            <a href="#" class="btn btn-primary">Solicitar Asistencia</a>
          </div>
        </div>
        <div class="card blue-border">
          <i class="bi bi-geo-alt-fill icon"></i>
          <div class="card-body">
            <h5 class="card-title">CLUB GYM</h5>
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://i.ytimg.com/vi/_r59Yapbba8/maxresdefault.jpg"
                  alt=""
                />
              </div>
            </div>
            <p class="card-text">
              CLUB GYM esta ubicado en una zona estratégica de la ciudad de
              Arequipa, el cual cuenta con instalacion.
            </p>
            <a href="#" class="btn btn-primary">Solicitar Asistencia</a>
          </div>
        </div>
        <div class="card green-border">
          <i class="bi bi-geo-alt-fill icon"></i>
          <div class="card-body">
            <h5 class="card-title">MILLENIUM FIT</h5>
            <div class="col-md-4">
              <div class="profile-img">
                <img
                  src="https://feelingperu.com/wp-content/uploads/2019/09/Millenium-Gym.jpg"
                  alt=""
                />
              </div>
            </div>
            <p class="card-text">
              Contamos con amplios horarios y múltiples actividades. Musculación
              fitness entrenamiento funcional en todas sus variantes spinning
              pilates.
            </p>
            <a href="#" class="btn btn-primary">Solicitar Asistencia</a>
          </div>
        </div>
      </div>
    </main>

    
  </div>
</template>
  
<script>
import SidebarCustomer from "@/components/layout/sidebars/SidebarCustomer.vue";
export default {
  components() {
    SidebarCustomer;
  },
  components: { SidebarCustomer },
};
</script>
  
  <style>
/*
  Search
  */

.tab {
  margin-top: 90px;
}

.custom-form {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 600px;
}

.custom-form .btn {
  margin-left: 20px;
}
.navbar1 {
  justify-content: flex-start;
  margin-left: 18px;
  margin-top: 20px;
}

:root {
  --red: hsl(0, 78%, 62%);
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --varyDarkBlue: hsl(234, 12%, 34%);
  --grayishBlue: hsl(229, 6%, 66%);
  --veryLightGray: hsl(0, 0%, 98%);
  --weight1: 200;
  --weight2: 400;
  --weight3: 600;
}

body {
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  background-color: var(--veryLightGray);
}
/*
  SidebarCustomer
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
  color: #474d89;
  margin: 12px;
  flex-grow: 1;
  overflow-y: auto;
}

.sidebar.active ~ .home_content {
  left: 240px;
  right: 0;
}

/* Cards*/
.card-container {
  display: flex;
  justify-content: space-next to;
}

.card {
  width: 18rem;
}

.icon {
  font-size: 3rem;
  color: rgb(3, 30, 62);
}
.red-border {
  border: 3px solid rgb(9, 34, 88);
}

.blue-border {
  border: 3px solid rgb(9, 34, 88);
}

.green-border {
  border: 3px solid rgb(9, 34, 88);
}

.profile-img {
  text-align: center;
}
.profile-img img {
  width: 300%;
  height: 200%;
}
</style>
  