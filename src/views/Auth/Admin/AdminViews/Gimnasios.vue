<template>
  <SidebarAdmin />
  <div class="home_content">
    <main role="main" class="container tab">
      <div class="row">
        <div class="col-12">
          <h1 style="display: flex; align-items: center">
            Tabla Gimnasios
            <div style="margin-left: 480px" class="create-button">
              <button class="btn btn-dark butcreate" @click="createRow">
                Crear Registro
              </button>
            </div>
          </h1>
          <div class="table-responsive">
            <table class="table table-bordered" style="margin-bottom: 100px">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>GEOLOCALIZACIÓN</th>
                  <th>RUC</th>
                  <th>AFORO</th>
                  <th>HORARIO DE ATENCIÓN</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in rows" :key="row.id">
                  <td>{{ row._id }}</td>
                  <td>{{ row.nombre }}</td>
                  <td>{{ row.geolocalizacion}}</td>
                  <td>{{ row.ruc }}</td>
                  <td>{{ row.aforo }}</td>
                  <td>{{ row.horarios_atencion }}</td>
                  <td>
                    <button
                      class="btn btn-success buttab"
                      @click="editRow(row._id)"
                    >
                      Editar
                    </button>
                    <button
                      class="btn btn-danger buttab"
                      @click="deleteRow(row._id)"
                    >
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
              {{ editingRow ? "Crear Registro" : "Editar Registro" }}
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
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  v-model="editingRow.nombre"
                />
              </div>
              <div class="form-group">
                <label for="geolocalizacion">Geolocalización</label>
                <input
                  type="text"
                  class="form-control"
                  id="geolocalizacion"
                  v-model="editingRow.geolocalizacion"
                />
              </div>
              <div class="form-group">
                <label for="ruc">RUC</label>
                <input
                  type="text"
                  class="form-control"
                  id="ruc"
                  v-model="editingRow.ruc"
                />
              </div>
              <div class="form-group">
                <label for="aforo">Aforo</label>
                <input
                  type="text"
                  class="form-control"
                  id="aforo"
                  v-model="editingRow.aforo"
                />
              </div>
              <div class="form-group">
                <label for="horarios_atencion">Horarios de atención</label>
                <input
                  type="text"
                  class="form-control"
                  id="horarios_atencion"
                  v-model="editingRow.horarios_atencion"
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
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SidebarAdmin from "@/components/layout/sidebars/SidebarAdmin.vue";
import axios from "axios";

export default {
  name: "Gimnasios",
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
      axios.get("https://api.fithub.bjrcode.com/api/v1/gimnasios/").then((response) => {
        this.rows = response.data.data;
      });
    },
    editRow(id) {
      const rowData = this.rows.find((row) => row._id === id);
      this.editingRow = { ...rowData };
    },
    deleteRow(id) {
      axios
        .delete(`https://api.fithub.bjrcode.com/api/v1/gimnasios/${id}`)
        .then((response) => {
          console.log(response.data.message);
          this.fetchRows();
        });
    },
    saveChanges() {
      if (this.editingRow._id) {
        axios
          .put(
            `https://api.fithub.bjrcode.com/api/v1/gimnasios/${this.editingRow._id}`,
            this.editingRow
          )
          .then((response) => {
            console.log(response.data.message);
            this.fetchRows();
          });
      } else {
        axios
          .post("https://api.fithub.bjrcode.com/api/v1/gimnasios/", this.editingRow)
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
        nombre: "",
        geolocalizacion: "",
        ruc: "",
        aforo: "",
        horarios_atencion: "",
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
  background-color: white;
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
</style>
