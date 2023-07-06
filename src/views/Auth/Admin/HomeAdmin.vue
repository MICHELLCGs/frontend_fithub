<template>
  <SidebarAdmin />
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
    <div class="row mt-3">
      <div class="col-md-6 offset-3">
        <div class="card border border-dark">
          <div class="card-header bg-dark"></div>
        <div class="card-body">
          <Bar :chart-options="charOptions" :chart-data="chartData"></Bar>

        </div>
      </div>
    </div>
    </div>
    <div class="row1-container">
      <div class="box box-down cyan">
        <h2></h2>
        <p>Ingresos</p>
        <img
          src="https://assets.codepen.io/2301174/icon-calculator.svg"
          alt=""
        />
      </div>

      <!-- <div class="box red">
      <h2></h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="">
    </div> -->

      <div class="box box-down red">
        <h2></h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img
          src="https://assets.codepen.io/2301174/icon-calculator.svg"
          alt=""
        />
      </div>
      <div class="box box-down blue">
        <h2></h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img
          src="https://assets.codepen.io/2301174/icon-calculator.svg"
          alt=""
        />
      </div>
    </div>

    <!-- <div class="row2-container">
    <div class="box orange">
      <h2></h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="">
    </div>
  </div> -->
    <main role="main" class="container tab">
      <div class="row">
        <div class="col-12">
          <h1>Tabla Usuarios</h1>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>APELLIDOS</th>
                  <th>DNI</th>
                  <th>MAIL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Lucas</td>
                  <td>Castillo</td>
                  <td>45368729</td>
                  <td>example@mail.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Martha</td>
                  <td>Olivares</td>
                  <td>65372897</td>
                  <td>example@mail.com</td>
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
          <h1>Tabla Pagos</h1>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Cod. Usuario</th>
                  <th>FECHA</th>
                  <th>NRO. de Operacion</th>
                  <th>MONTO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>1</td>
                  <td>3/07/2023</td>
                  <td>764356</td>
                  <td>109.90</td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>2</td>
                  <td>10/06/2023</td>
                  <td>768456</td>
                  <td>109.90</td>
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
          <h1>Tabla Gimnasios</h1>
          <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>MAIL</th>
                  <th>UBICACIÓN</th>
                  <th>CAPACIDAD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>Olimpo</td>
                  <td>example@mail.com</td>
                  <td>Arequipa...</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>Smartfit</td>
                  <td>example@mail.como</td>
                  <td>Arequipa...</td>
                  <td>45</td>
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
          <h1>Tabla Partner</h1>
          <div class="table-responsive">
            <table class="table table-bordered" style="margin-bottom: 100px">
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
  components() {
    SidebarAdmin;
  },
  components: { SidebarAdmin },
  components:{Bar},
  props:{
    chartId:{
      type:String,
      default:'bar-chart'
    }
  },
  data(){
    return{
      etiquetas:[],valores:[],chartData:[],
      chartOptions:{
        responsive:true
      }
    }
  },
  async mounted(){
    const totales=await axios.get('api');
    totales.data.map((row)=>(
      this.etiquetas.push(row.producto),
      this.valores.push(row.total)
    ))
    this.chartData={
      labels:this.etiquetas,
      datasets:[
        {label:'Productos',data:this.valores,backgroundColor:'#0F0F0F'}
      ]
    }
  }
};
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
</script>

<style>
/*
Home Content
*/
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 2;
}
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
