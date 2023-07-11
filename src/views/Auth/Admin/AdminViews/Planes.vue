<template>
  <div>
    <SidebarAdmin />
    <div class="home_content">
      <div class="create-button">
        <button class="btn btn-dark butcreate" @click="createRow">
          Crear Registro
        </button>
      </div>
      <main role="main" class="container tab">
        <div class="row">
          <div class="col-12">
            <h1>Tabla Planes</h1>
            <div class="table-responsive">
              <table class="table table-bordered" style="margin-bottom: 100px">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCIÓN</th>
                    <th>PRECIO</th>
                    <th>CUPOS</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in rows" :key="row._id">
                    <td>{{ row._id }}</td>
                    <td>{{ row.name }}</td>
                    <td>{{ row.description }}</td>
                    <td>{{ row.preci }}</td>
                    <td>{{ row.cupones }}</td>
                    <td>
                      <button class="btn btn-success buttab" @click="editRow(row._id)">
                        Editar
                      </button>
                      <button class="btn btn-danger buttab" @click="deleteRow(row._id)">
                        Borrar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <div class="modal" v-if="editingRow">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">
                {{ editingRow ? "Editar Registro" : "Crear Registro" }}
              </h5>
              <button type="button" class="btn-close" @click="cancelEdit">
                <span></span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="saveChanges">
                <div class="form-group">
                  <label for="id">ID</label>
                  <input
                    type="text"
                    class="form-control"
                    id="id"
                    v-model="editingRow._id"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label for="name">NOMBRE</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="editingRow.name"
                  />
                </div>
                <div class="form-group">
                  <label for="description">DESCRIPCIÓN</label>
                  <input
                    type="text"
                    class="form-control"
                    id="description"
                    v-model="editingRow.description"
                  />
                </div>
                <div class="form-group">
                  <label for="preci">PRECIO</label>
                  <input
                    type="text"
                    class="form-control"
                    id="preci"
                    v-model="editingRow.preci"
                  />
                </div>
                <div class="form-group">
                  <label for="cupones">CUPOS</label>
                  <input
                    type="text"
                    class="form-control"
                    id="cupones"
                    v-model="editingRow.cupones"
                  />
                </div>
                <button type="submit" class="btn btn-primary butinside">
                  {{ editingRow ? "Guardar Cambios" : "Crear" }}
                </button>
                <button
                  type="button"
                  class="btn btn-secondary butinside"
                  @click="cancelEdit"
                >
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="form-bg">
        <div class="container">
          <div class="row">
            <div class="col-md-offset-3 col-md-6 formtra">
              <form class="form-horizontal">
                <div class="header">Cupones</div>
                <div class="form-content ">
                  <h4 class="heading">Detalles del cliente</h4>
                  <div class="form-group">
                    <div class="col-sm-6">
                      <label class="control-label" for="exampleInputName2"
                        ><i class="fa fa-user"></i
                      ></label>
                      <input
                        class="form-control"
                        id="exampleInputName2"
                        placeholder="Username"
                        type="text"
                      />
                    </div>
                    <div class="col-sm-6">
                      <label class="control-label" for="exampleInputName2"
                        ><i class="fa fa-envelope-o"></i
                      ></label>
                      <input
                        class="form-control"
                        id="exampleInputName2"
                        placeholder="Email"
                        type="email"
                      />
                    </div>
                    <div class="col-sm-6">
                      <label class="control-label" for="exampleInputName2"
                        ><i class="fa fa-envelope-o"></i
                      ></label>
                      <input
                        class="form-control"
                        id="exampleInputName2"
                        placeholder="DNI"
                        type="text"
                      />
                    </div>
                  </div>
                  <h4 class="heading">Info. cupones</h4>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <label class="control-label" for="exampleInputName2"
                        ><i class="fa fa-lock"></i
                      ></label>
                      <input
                        class="form-control"
                        id="exampleInputName2"
                        placeholder="Nombre del cupón"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-6">
                      <label class="control-label" for="exampleInputName2"
                        ><i class="fa fa-user"></i
                      ></label>
                      <input
                        class="form-control"
                        id="exampleInputName2"
                        placeholder="Cantidad"
                        type="number"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-6">
                      <label class="control-label" for="exampleInputName2"
                        ><i class="fa fa-calendar"></i
                      ></label>

                      <input
                        class="form-control"
                        id="exampleInputName2"
                        placeholder="Fecha de vencimiento (dd/mm/yy)"
                        type="text"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-12">
                      <label class="control-label" for="exampleInputName2"
                        ><i class="fa fa-calendar"></i
                      ></label>
                      <textarea
                        class="form-control"
                        placeholder="Adicional"
                      ></textarea>
                    </div>
                  </div>
                  <div class="clearfix">
                    <button type="submit" class="btn btn-default">
                      Registrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SidebarAdmin from "@/components/layout/sidebars/SidebarAdmin.vue";
import axios from "axios";

export default {
  name: "Planes",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      rows: [],
      editingRow: null,
    };
  },
  mounted() {
    this.fetchRows();
  },
  methods: {
    fetchRows() {
      axios.get("https://api.fithub.bjrcode.com/api/v1/planes/").then((response) => {
        this.rows = response.data.data;
      });
    },
    editRow(id) {
      const rowData = this.rows.find((row) => row._id === id);
      this.editingRow = { ...rowData };
    },
    deleteRow(id) {
      axios.delete(`https://api.fithub.bjrcode.com/api/v1/planes/${id}`).then((response) => {
        console.log(response.data.message);
        this.fetchRows();
      });
    },
    saveChanges() {
      if (this.editingRow._id) {
        axios
          .put(`https://api.fithub.bjrcode.com/api/v1/planes/${this.editingRow._id}`, this.editingRow)
          .then((response) => {
            console.log(response.data.message);
            this.fetchRows();
          });
      } else {
        axios
          .post("https://api.fithub.bjrcode.com/api/v1/planes/", this.editingRow)
          .then((response) => {
            console.log(response.data.message);
            this.fetchRows();
          });
      }
      this.cancelEdit();
    },
    cancelEdit() {
      this.editingRow = null;
    },
    createRow() {
      this.editingRow = {
        name: "",
        description: "",
        preci: "",
        cupones: "",
      };
    },
  },
};

</script>

<style>
/*
    Home Content
    */
.tab {
  margin-top: 90px;
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
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 2;
}

.sidebar.active ~ .home_content {
  left: 240px;
  right: 0;
}

.modal {
  display: block;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.modal-dialog {
  margin: 10% auto;
  max-width: 500px;
}

.modal-content {
  position: relative;
  background-color: #fff;
  padding: 20px;
}

.modal-header {
  border-bottom: none;
}

.modal-title {
  margin-bottom: 15px;
}

.close {
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 24px;
}

.create-button {
  margin: 20px;
}
.butcreate {
  margin-left: 20px;
  margin-top: 10px;
}
.butinside {
  margin-top: 15px;
  margin-right: 15px;
}
.buttab {
  margin-right: 10px;
}
/*FORM */
.form-bg {
  background: #ffffff;
}
form {
  font-family: "Roboto", sans-serif;
}
.form-horizontal .header {
  background: #474d89;
  padding: 30px 25px;
  font-size: 30px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  border-radius: 3px 3px 0 0;
}
.form-horizontal .heading {
  font-size: 16px;
  color: #474d89;
  margin: 10px 0 20px 0;
  text-transform: capitalize;
}
.form-horizontal .form-content {
  padding: 25px;
  background: #fff;
}
.form-horizontal .form-control {
  padding: 12px 16px 12px 39px;
  height: 50px;
  font-size: 14px;
  color: #2b2a2a;
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  box-shadow: none;
  margin-bottom: 15px;
}
.form-horizontal .form-control:focus {
  border-color: #474d89;
  box-shadow: none;
}
.form-horizontal .control-label {
  font-size: 17px;
  color: #ccc;
  position: absolute;
  top: 5px;
  left: 27px;
  text-align: center;
}
.form-horizontal textarea.form-control {
  resize: vertical;
  height: 130px;
}
.form-horizontal .btn {
  font-size: 18px;
  color: #4e4e4e;
  float: right;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 0;
  padding: 10px 25px;
  transition: all 0.5s ease 0s;
}
.form-horizontal .btn:hover {
  background: #fff;
  border-color: #474d89;
}
</style>
