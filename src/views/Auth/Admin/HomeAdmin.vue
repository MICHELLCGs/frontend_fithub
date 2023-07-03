<template>
  <div class="content-container">
    <SidebarAdmin />
    <div class="content">
      <div class="head">
        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <div class="input-group">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div class="input-group-append ml-auto">
                <button
                  class="btn btn-outline-success my-2 my-sm-0 btn-position"
                  type="submit"
                >
                  Search
                </button>
              </div>
              <div class="elemento">Elemento</div>
            </div>
          </form>
        </nav>
      </div>
    </div>
    <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaa -->

    <div class="row1-container">
      <div class="box box-down cyan">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        <img
          src="https://assets.codepen.io/2301174/icon-supervisor.svg"
          alt=""
        />
      </div>

      <div class="box red">
        <h2>Team Builder</h2>
        <p>
          Scans our talent network to create the optimal team for your project
        </p>
        <img
          src="https://assets.codepen.io/2301174/icon-team-builder.svg"
          alt=""
        />
      </div>

      <div class="box box-down blue">
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img
          src="https://assets.codepen.io/2301174/icon-calculator.svg"
          alt=""
        />
      </div>
    </div>
    <!-- <div class="row2-container">
      <div class="box orange">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
      </div>
    </div> -->
    <!-- aaaaaaaaaaaaaaaaaaaaaaaaaaa -->
    <div class="content">
      
    </div>
    <div class="content">
      <div class="tab">
        <section class="attendance">
          <div class="attendance-list table-container">
            <section class="attendance">
              <div class="attendance-list">
                <h1><center>Tabla Usuarios</center></h1>
                <table class="table">
                  <thead>
                    <tr class="table-row">
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">DNI</th>
                      <th scope="col">Mail</th>
                      <th scope="col">etc</th>
                      <th scope="col">etc</th>
                      <th scope="col">Plan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td scope="col">01</td>
                      <td scope="col">Sam David</td>
                      <td scope="col">57659033</td>
                      <td scope="col">mail</td>
                      <td scope="col">8:00AM</td>
                      <td scope="col">3:00PM</td>
                    </tr>
                    <tr class="table-row">
                      <td scope="col">02</td>
                      <td scope="col">Balbina Kherr</td>
                      <td scope="col">45673489</td>
                      <td scope="col">mail</td>
                      <td scope="col">9:00AM</td>
                      <td scope="col">4:00PM</td>
                    </tr>
                    <tr class="table-row">
                      <td scope="col">03</td>
                      <td scope="col">Badan John</td>
                      <td scope="col">76459823</td>
                      <td scope="col">mail</td>
                      <td scope="col">8:00AM</td>
                      <td scope="col">3:00PM</td>
                    </tr>
                    <tr class="table-row">
                      <td scope="col">04</td>
                      <td scope="col">Sara David</td>
                      <td scope="col">34764987</td>
                      <td scope="col">mail</td>
                      <td scope="col">8:00AM</td>
                      <td scope="col">3:00PM</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>

        <section class="attendance">
          <div class="attendance-list table-container">
            <section class="attendance">
              <div class="attendance-list">
                <h1><center>tabla Gimnasios</center></h1>
                <table class="table">
                  <thead>
                    <tr class="table-row">
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">dni</th>
                      <th scope="col">Mail</th>
                      <th scope="col">Etc</th>
                      <th scope="col">etc</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td scope="col">05</td>
                      <td scope="col">Jane Smith</td>
                      <td scope="col">12345678</td>
                      <td scope="col">mail</td>
                      <td scope="col">10:00AM</td>
                      <td scope="col">5:00PM</td>
                      <!-- <td><button>Activo</button></td> -->
                    </tr>
                    <tr class="table-row">
                      <td scope="col">06</td>
                      <td scope="col">John Doe</td>
                      <td scope="col">87654321</td>
                      <td scope="col">mail</td>
                      <td scope="col">11:00AM</td>
                      <td scope="col">6:00PM</td>
                      <!-- <td><button>Activo</button></td> -->
                    </tr>
                    <!-- Agrega más filas si es necesario -->
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>

        <section class="attendance">
          <div class="attendance-list table-container">
            <section class="attendance">
              <div class="attendance-list">
                <h1><center>tabla Pagos</center></h1>
                <table class="table">
                  <thead>
                    <tr class="table-row">
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Ubicación</th>
                      <th scope="col">Mail</th>
                      <th scope="col">Foro</th>
                      <th scope="col">etc</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td scope="col">05</td>
                      <td scope="col">Jane Smith</td>
                      <td scope="col">12345678</td>
                      <td scope="col">mail</td>
                      <td scope="col">10:00AM</td>
                      <td scope="col">5:00PM</td>
                      <!-- <td><button>Activo</button></td> -->
                    </tr>
                    <tr class="table-row">
                      <td scope="col">06</td>
                      <td scope="col">John Doe</td>
                      <td scope="col">87654321</td>
                      <td scope="col">mail</td>
                      <td scope="col">11:00AM</td>
                      <td scope="col">6:00PM</td>
                      <!-- <td><button>Activo</button></td> -->
                    </tr>
                    <!-- Agrega más filas si es necesario -->
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>
        <section class="attendance">
          <div class="attendance-list table-container">
            <section class="attendance">
              <div class="attendance-list">
                <h1><center>tabla Partners</center></h1>
                <table class="table">
                  <thead>
                    <tr class="table-row">
                      <th scope="col">ID</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">dni</th>
                      <th scope="col">Mail</th>
                      <th scope="col">Etc</th>
                      <th scope="col">etc</th>
                      <th scope="col">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-row">
                      <td scope="col">05</td>
                      <td scope="col">Jane Smith</td>
                      <td scope="col">12345678</td>
                      <td scope="col">mail</td>
                      <td scope="col">10:00AM</td>
                      <td scope="col">5:00PM</td>
                      <!-- <td><button>Activo</button></td> -->
                    </tr>
                    <tr class="table-row">
                      <td scope="col">06</td>
                      <td scope="col">John Doe</td>
                      <td scope="col">87654321</td>
                      <td scope="col">mail</td>
                      <td scope="col">11:00AM</td>
                      <td scope="col">6:00PM</td>
                      <!-- <td><button>Activo</button></td> -->
                    </tr>
                    <!-- Agrega más filas si es necesario -->
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarAdmin from "@/components/layout/sidebars/SidebarAdmin.vue";
export default {
  components() {
    SidebarAdmin;
  },
  components: { SidebarAdmin },
};
</script>
<style>
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
  margin: 20px;
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
    top: 150px;
  }
  .box {
    width: 20%;
  }
  .header p {
    width: 30%;
  }
}
.elemento {
  background-color: lightgray;
  padding: 5px;
}
.btn-position {
  position: absolute;
  right: -12px;
  margin-right: 40px;
}
.head {
  margin-left: 25px;
  width: 100%;
}
.cards {
  display: flex;
  flex-direction: row; /* Cambiar de "column" a "row" */
  width: 85%;
  align-items: none;
}
.tab {
  display: flex;
  width: 85%;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
}

.content {
  flex-grow: 1;
  margin-left: 90px; /* Ancho del sidebar */
  padding: 20px;
  position: relative;
}
.content-container {
  margin-left: 110px;
  padding: 20px;
  transition: all 0.3s;
}

.attendance {
  margin-top: 20px;
  text-transform: capitalize;
}
.attendance-list {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
}
.attendance-list.table-container {
  width: calc(190% - 300px);
  margin-left: 0;
  margin-right: auto;
}

.table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 15px;
  min-width: 100%;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}
table thead tr {
  color: #fff;
  background: #34af6d;
  text-align: left;
  font-weight: bold;
}
.table th,
.table td {
  padding: 8px 5px;
  margin-right: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table tbody tr {
  border-bottom: 1px solid #ddd;
}
.table tbody tr:nth-of-type(odd) {
  background: #f3f3f3;
}
.table tbody tr.active {
  font-weight: bold;
  color: #4d4443;
}
.table tbody tr:last-of-type {
  border-bottom: 2px solid #4d4443;
}
.table button {
  padding: 6px 20px;
  margin-right: 4px;
  border-radius: 10px;
  cursor: pointer;
  background: transparent;
  border: 1px solid #4d4443;
}
.table button:hover {
  background: #4d4443;
  color: #fff;
  transition: 0.5rem;
}

@media screen and (max-width: 300px) {
  .content {
    padding-left: 0;
  }
  .attendance-list.table-container {
    margin: 0 auto;
  }
  .tab {
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    display: flex;
  }

  .table-container {
    overflow-x: auto;
    width: 100%;
  }

  .table-wrapper {
    width: 100%;
    max-width: 100%;
  }
}
</style>
