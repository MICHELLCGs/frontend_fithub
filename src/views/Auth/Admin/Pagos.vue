<template>
  <SidebarAdmin />
  <div class="home_content">
    <div class="create-button">
      <button class="btn btn-dark butcreate" @click="createRow">
        Crear Registro
      </button>
    </div>
    <div class="filter-dropdown filtro " filtro>
      <label for="filter ">Filtrar por Estado:</label>
      <select id="filter " class="filtra" v-model="filterState">
        <option value="">Todos</option>
        <option value="activo">Activo</option>
        <option value="no-activo">No Activo</option>
      </select>
    </div>
    <main role="main" class="container tab">
      <div class="row">
        <div class="col-12">
          <h1>Tabla Pagos</h1>
          <div class="table-responsive">
            <table class="table table-bordered" style="margin-bottom: 100px">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>COD. USUARIO</th>
                  <th>FECHA</th>
                  <th>NRO. DE OPERACIÓN</th>
                  <th>MONTO</th>
                  <th>ESTADO</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in filteredRows" :key="row.id">
                  <td>{{ row.id }}</td>
                  <td>{{ row.cod_user }}</td>
                  <td>{{ row.fecha }}</td>
                  <td>{{ row.nro_operacion }}</td>
                  <td>{{ row.monto }}</td>
                  <td>{{ row.estado }}</td>
                  <td>
                    <button
                      class="btn btn-success buttab"
                      @click="editRow(row.id)"
                    >
                      Editar
                    </button>
                    <button
                      class="btn btn-danger buttab"
                      @click="deleteRow(row.id)"
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
                  v-model="editingRow.id"
                  disabled
                />
              </div>
              <div class="form-group">
                <label for="cod_user">COD. USUARIO</label>
                <input
                  type="text"
                  class="form-control"
                  id="cod_user"
                  v-model="editingRow.cod_user"
                />
              </div>
              <div class="form-group">
                <label for="fecha">FECHA</label>
                <input
                  type="text"
                  class="form-control"
                  id="fecha"
                  v-model="editingRow.fecha"
                />
              </div>
              <div class="form-group">
                <label for="nro_operacion">NRO. DE OPERACIÓN</label>
                <input
                  type="text"
                  class="form-control"
                  id="nro_operacion"
                  v-model="editingRow.nro_operacion"
                />
              </div>
              <div class="form-group">
                <label for="monto">MONTO</label>
                <input
                  type="text"
                  class="form-control"
                  id="monto"
                  v-model="editingRow.monto"
                />
              </div>
              <div class="form-group">
                <label for="estado">ESTADO</label>
                <select
                  class="form-control"
                  id="estado"
                  v-model="editingRow.estado"
                >
                  <option value="activo">Activo</option>
                  <option value="no-activo">No Activo</option>
                </select>
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
export default {
  name: "Gimnasios",
  components: {
    SidebarAdmin,
  },
  data() {
    return {
      rows: [
        {
          id: "01",
          cod_user: "1",
          fecha: "3/07/2023",
          nro_operacion: "764356",
          monto: "109.90",
          estado: "activo",
        },
        {
          id: "01",
          cod_user: "2",
          fecha: "10/06/2023",
          nro_operacion: "768456",
          monto: "109.90",
          estado: "no-activo",
        },
      ],
      editingRow: null,
      filterState: "",
    };
  },
  computed: {
    filteredRows() {
      if (this.filterState === "") {
        return this.rows;
      } else {
        return this.rows.filter((row) => row.estado === this.filterState);
      }
    },
  },
  methods: {
    editRow(id) {
      const rowData = this.rows.find((row) => row.id === id);
      this.editingRow = { ...rowData };
    },
    deleteRow(id) {

      const index = this.rows.findIndex((row) => row.id === id);

      if (index !== -1) {

        this.rows.splice(index, 1);
        console.log("Registro borrado con ID:", id);
      } else {
        console.log("No se encontró el registro con ID:", id);
      }
    },
    saveChanges() {
      if (this.editingRow) {
        console.log("Guardando cambios", this.editingRow);
      } else {
        console.log("Creando registro", this.editingRow);
      }
      this.cancelEdit();
    },
    cancelEdit() {
      this.editingRow = null;
    },
    createRow() {
      this.editingRow = {
        id: "",
        cod_user: "",
        fecha: "",
        nro_operacion: "",
        monto: "",
        estado: "activo",
      };
    },
  },
};
</script>

<style>
/*
  Home Content
  */
  .filtra {
  margin-left: 20px;
  display: inline-block;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 0 2px rgb(204, 204, 204);
  transition: all .5s ease;
  position: relative;
  font-size: 14px;
  color: #474747;
}
.filtro {
  margin-left: 40px;
}
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
</style>
