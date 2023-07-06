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
  
      
      <main role="main" class="container tab">
        <div class="row">
          <div class="col-12">
            <h1>Tus Asistencias</h1>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>GIMNASIO</th>
                    <th>SEDE</th>
                    <th>DIA</th>
                    <th>HORAS DE ENTRENAMIENTO</th>
                    <th>ESTADO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>REVO SPORT</td>
                    <td>JLBYR</td>
                    <td>14-02-2022</td>
                    <td>2 HORAS</td>
                    <td>ASISTIO</td>
                  </tr>
                  <tr>
                    <td>REVO SPORT</td>
                    <td>JLBYR</td>
                    <td>16-02-2022</td>
                    <td>4 HORAS</td>
                    <td>ASISTIO</td>
                  </tr>
                  <tr>
                    <td>SMARTFIT</td>
                    <td>MALL PORONGOCHE</td>
                    <td>07-03-2022</td>
                    <td>3 HORAS 15 MINUTOS</td>
                    <td>ASISTIO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <main role="main" class="container tab">
        <div class="row">
          <div class="col-12">
            <h1>Tus Pagos</h1>
            <div class="table-responsive">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>NRO DE OPERACION</th>
                    <th>PLAN</th>
                    <th>MONTO</th>
                    <th>FECHA DE PAGO</th>
                    <th>ESTADO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1478523</td>
                    <td>FITPLAN</td>
                    <td>S/. 89.90</td>
                    <td>05-02-2022</td>
                    <td>EN VIGENCIA</td>
                  </tr>
                  <tr>
                    <td>2546398</td>
                    <td>FITPLAN PRO</td>
                    <td>S/. 179.90</td>
                    <td>24-04-2022</td>
                    <td>EN EVALUACION</td>
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
  Home Content
  */
  .draggable-box {
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    padding: 30px;
    margin: 20px;
    cursor: grab;
    position: relative;
    z-index: 1;
  }
  .tab {
    margin-top: 90px;
  }
  .items {
    margin-left: 1000px;
    color: black;
    font-size: 18px;
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
  .navbar1 {
    justify-content: flex-start;
    margin-left: 18px;
    margin-top: 20px;
  }
  
  /* CARDS */
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
  
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
  
  h1:first-of-type {
    font-weight: var(--weight1);
    color: var(--varyDarkBlue);
  }
  
  h1:last-of-type {
    color: var(--varyDarkBlue);
  }
  
  @media (max-width: 400px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  
  .header {
    text-align: center;
    line-height: 0.8;
    margin-bottom: 50px;
    margin-top: 100px;
  }
  
  .header p {
    margin: 0 auto;
    line-height: 2;
    color: var(--grayishBlue);
  }
  
  .box p {
    color: var(--grayishBlue);
  }
  
  .box {
    border-radius: 5px;
    box-shadow: 0px 30px 40px -20px var(--grayishBlue);
    padding: 30px;
    margin-right: 200px;
  }
  
  img {
    float: right;
  }
  
  @media (max-width: 450px) {
    .box {
      height: 200px;
    }
  }
  
  @media (max-width: 950px) and (min-width: 450px) {
    .box {
      text-align: center;
      height: 180px;
    }
  }
  
  .cyan {
    border-top: 3px solid var(--cyan);
  }
  .red {
    border-top: 3px solid var(--red);
  }
  .blue {
    border-top: 3px solid var(--blue);
  }
  .orange {
    border-top: 3px solid var(--orange);
  }
  
  h2 {
    color: var(--varyDarkBlue);
    font-weight: var(--weight3);
  }
  
  @media (min-width: 950px) {
    .row1-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .row2-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box-down {
      position: relative;
      margin-top: 40px;
      margin-left: 0px;
      margin-right: 90px;
    }
    .box {
      width: 20%;
    }
    .header p {
      width: 30%;
    }
  }
  </style>
  