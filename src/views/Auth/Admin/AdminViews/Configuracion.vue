<template>
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
                    <th>DURACIÓN</th>
                    <th>ETC</th>
                    <th>MONTO</th>
                    <th>ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in rows" :key="row.id">
                    <td>{{ row.id }}</td>
                    <td>{{ row.nombre }}</td>
                    <td>{{ row.duracion}}</td>
                    <td>{{ row.etc }}</td>
                    <td>{{ row.monto }}</td>
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
                    v-model="editingRow.id"
                    disabled
                  />
                </div>
                <div class="form-group">
                  <label for="nombre">NOMBRE</label>
                  <input
                    type="text"
                    class="form-control"
                    id="nombre"
                    v-model="editingRow.nombre"
                  />
                </div>
                <div class="form-group">
                  <label for="duracion">DURACIÓN</label>
                  <input
                    type="text"
                    class="form-control"
                    id="fecha"
                    v-model="editingRow.duracion"
                  />
                </div>
                <div class="form-group">
                  <label for="etc">ETC</label>
                  <input
                    type="text"
                    class="form-control"
                    id="etc"
                    v-model="editingRow.etc"
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
  </template>
  
  <script>
  import "bootstrap/dist/css/bootstrap.min.css"; // Importa el CSS de Bootstrap
  import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Importa el JavaScript de Bootstrap
  
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
            id: "101",
            nombre: "FITPLAN",
            duracion: "un mes",
            etc: "etc",
            monto: "99.9",
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
        const rowData = this.rows.find((row) => row.id === id);
        this.editingRow = { ...rowData };
      },
      deleteRow(id) {
        // Aquí puedes realizar una petición a tu API para borrar el registro correspondiente al ID
        // Por simplicidad, se mostrará un mensaje en la consola y se eliminará el registro del array "rows"
        console.log("Borrando registro con ID:", id);
        this.rows = this.rows.filter((row) => row.id !== id);
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
          duracion: "",
          etc: "",
          monto: "",
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
  .form-bg{
      background: #ffffff;
  }
  form{
      font-family: 'Roboto', sans-serif;
  }
  .form-horizontal .header{
      background: #474d89;
      padding: 30px 25px;
      font-size: 30px;
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      border-radius: 3px 3px 0 0;
  }
  .form-horizontal .heading{
      font-size: 16px;
      color: #474d89;
      margin: 10px 0 20px 0;
      text-transform: capitalize;
  }
  .form-horizontal .form-content{
      padding: 25px;
      background: #fff;
  }
  .form-horizontal .form-control{
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
  .form-horizontal .form-control:focus{
      border-color: #474d89;
      box-shadow: none;
  }
  .form-horizontal .control-label{
      font-size: 17px;
      color: #ccc;
      position: absolute;
      top: 5px;
      left: 27px;
      text-align: center;
  }
  .form-horizontal textarea.form-control{
      resize: vertical;
      height: 130px;
  }
  .form-horizontal .btn{
      font-size: 18px;
      color: #4e4e4e;
      float: right;
      margin: 10px 0;
      border: 2px solid #ccc;
      border-radius: 0;
      padding: 10px 25px;
      transition: all 0.5s ease 0s;
  }
  .form-horizontal .btn:hover{
      background: #fff;
      border-color: #474d89;
  }
  </style>