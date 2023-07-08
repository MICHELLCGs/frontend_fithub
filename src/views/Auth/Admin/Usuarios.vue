<template>
  <SidebarAdmin />
  <div class="home_content">
    <div class="create-button">
      <button class="btn btn-dark butcreate" @click="createRow">Crear Registro</button>
    </div>
    <main role="main" class="container tab">
      <div class="row">
        <div class="col-12">
          <h1>Tabla Usuarios</h1>
          <div class="table-responsive">
            <table class="table table-bordered" style="margin-bottom: 100px">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NOMBRE</th>
                  <th>APELLIDOS</th>
                  <th>DNI</th>
                  <th>MAIL</th>
                  <th>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in rows" :key="row.id">
                  <td>{{ row.id }}</td>
                  <td>{{ row.nombre }}</td>
                  <td>{{ row.apellidos }}</td>
                  <td>{{ row.dni }}</td>
                  <td>{{ row.mail }}</td>
                  <td>
                    <button class="btn btn-success buttab" @click="editRow(row.id)">Editar</button>
                    <button class="btn btn-danger buttab" @click="deleteRow(row.id)">Borrar</button>
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
            <h5 class="modal-title">{{ editingRow ? 'Crear Registro' : 'Editar Registro' }}</h5>
            <button type="button" class="btn-close" @click="cancelEdit">
              <span></span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="saveChanges">
              <div class="form-group">
                <label for="id">ID</label>
                <input type="text" class="form-control" id="id" v-model="editingRow.id" disabled>
              </div>
              <div class="form-group">
                <label for="nombre">Nombres</label>
                <input type="text" class="form-control" id="nombre" v-model="editingRow.nombre">
              </div>
              <div class="form-group">
                <label for="apellidos">apellidos</label>
                <input type="text" class="form-control" id="apellidos" v-model="editingRow.apellidos">
              </div>
              <div class="form-group">
                <label for="dni">dni</label>
                <input type="text" class="form-control" id="dni" v-model="editingRow.dni">
              </div>
              <div class="form-group">
                <label for="mail">mail</label>
                <input type="text" class="form-control" id="mail" v-model="editingRow.mail">
              </div>
              <button type="submit" class="btn btn-primary butinside">{{ editingRow ? 'Guardar Cambios' : 'Crear' }}</button>
              <button type="button" class="btn btn-secondary butinside" @click="cancelEdit">Cancelar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importa el JavaScript de Bootstrap

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
          id: "1",
          nombre: "Lucas",
          apellidos: "Catillo",
          dni: "45368729",
          mail: "example@mail.com",
        },
        {
          id: "2",
          nombre: "Thalia",
          apellidos: "example@mail.com",
          dni: "example@mail.com",
          mail: "example@mail.com",
        },
      ],
      editingRow: null,
    };
  },
  methods: {
    editRow(id) {
      // Obtener los datos del registro correspondiente al ID
      // Puedes realizar una petición a tu API o trabajar con datos simulados
      // Aquí se utiliza el array "rows" para buscar el registro
      const rowData = this.rows.find(row => row.id === id);
      this.editingRow = { ...rowData };
    },
    deleteRow(id) {
      // Aquí puedes realizar una petición a tu API para borrar el registro correspondiente al ID
      // Por simplicidad, se mostrará un mensaje en la consola y se eliminará el registro del array "rows"
      console.log("Borrando registro con ID:", id);
      this.rows = this.rows.filter(row => row.id !== id);
    },
    saveChanges() {
      if (this.editingRow) {
        // Aquí puedes realizar una petición a tu API para guardar los cambios del registro existente
        // this.editingRow contiene los datos editados del formulario
        console.log("Guardando cambios", this.editingRow);
      } else {
        // Aquí puedes realizar una petición a tu API para crear un nuevo registro
        // this.editingRow contiene los datos del nuevo registro
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
        nombre: "",
        Apellidos: "",
        dni: "",
        mail: "",
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
.butcreate{
  margin-left: 20px;
  margin-top: 10px;
}
.butinside{
  margin-top: 15px;
  margin-right: 15px;
}
.buttab{
  margin-right: 10px;
}
</style>