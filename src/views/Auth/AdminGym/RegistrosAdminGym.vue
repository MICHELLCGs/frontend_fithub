<template>
    <SidebarAdminGym style="z-index: 5;" />
    <HeaderAdminGym />
    <div class="home_content">
        <div class="container-fluid tab rounded px-4 py-2" style="background-color: #F3F6F9;">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h2 class="mb-0">Tabla Asistencias</h2>
                <button class="btn butcreate" @click="createRow"
                    style="background-color: rgb(97, 69, 241); color: #F3F6F9;">Generar Asistencia</button>
            </div>
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>COD. USUARIO</th>
                                <th>NOMBRE</th>
                                <th>DNI</th>
                                <th>FECHA</th>
                                <th>ESTADO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in AsisData" :key="row.id">
                                <td>{{ row.id }}</td>
                                <td>{{ row.cod_usuario }}</td>
                                <td>{{ row.nombre }}</td>
                                <td>{{ row.dni }}</td>
                                <td>{{ row.fecha }}</td>
                                <td>{{ row.estado }}</td>
                                <td class="text-center">
                                    <button class="btn btn-success buttab" @click="editRow(row.id)">Editar</button>
                                    <button class="btn btn-danger buttab" @click="deleteRow(row.id)">Borrar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal" v-if="editingRow">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Editar Asistencia</h5>
                        <button type="button" class="btn-close" @click="cancelEdit"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="saveChanges">
                            <div class="form-group">
                                <label for="id">ID</label>
                                <input type="text" class="form-control" id="id" v-model="editingRow.id" disabled>
                            </div>
                            <div class="form-group">
                                <label for="cod_usuario">COD. USUARIO</label>
                                <input type="text" class="form-control" id="cod_usuario" v-model="editingRow.cod_usuario">
                            </div>
                            <div class="form-group">
                                <label for="nombre">NOMBRE</label>
                                <input type="text" class="form-control" id="nombre" v-model="editingRow.nombre">
                            </div>
                            <div class="form-group">
                                <label for="dni">DNI</label>
                                <input type="text" class="form-control" id="dni" v-model="editingRow.dni">
                            </div>
                            <div class="form-group">
                                <label for="fecha">FECHA</label>
                                <input type="text" class="form-control" id="fecha" v-model="editingRow.fecha">
                            </div>
                            <div class="form-group">
                                <label for="estado">Estado</label>
                                <select class="form-control" id="estado" v-model="editingRow.estado">
                                    <option value="asistio">asistio</option>
                                    <option value="falto">falto</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary butinside">Guardar Cambios</button>
                            <button type="button" class="btn btn-secondary butinside" @click="cancelEdit">Cancelar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid tab rounded px-4 py-2 tabla2" style="background-color: #F3F6F9;">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h2 class="mb-0">Tabla Faltas</h2>
            </div>
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>COD. USUARIO</th>
                                <th>NOMBRE</th>
                                <th>DNI</th>
                                <th>FECHA</th>
                                <th>ESTADO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in FaltaData" :key="row.id">
                                <td>{{ row.id }}</td>
                                <td>{{ row.cod_usuario }}</td>
                                <td>{{ row.nombre }}</td>
                                <td>{{ row.dni }}</td>
                                <td>{{ row.fecha }}</td>
                                <td>{{ row.estado }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="container-fluid tab rounded px-4 py-2 tabla2" style="background-color: #F3F6F9;">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <h2 class="mb-0">Tabla Asistencias FitHub</h2>
                <button class="btn butcreate" @click="createRow"
                    style="background-color: rgb(97, 69, 241); color: #F3F6F9;">Generar Asistencia</button>
            </div>
            <div class="table-container">
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>COD. USUARIO</th>
                                <th>NOMBRE</th>
                                <th>DNI</th>
                                <th>FECHA</th>
                                <th>ESTADO</th>
                                <th>ACCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row in AsisData" :key="row.id">
                                <td>{{ row.id }}</td>
                                <td>{{ row.cod_usuario }}</td>
                                <td>{{ row.nombre }}</td>
                                <td>{{ row.dni }}</td>
                                <td>{{ row.fecha }}</td>
                                <td>{{ row.estado }}</td>
                                <td class="text-center">
                                    <button class="btn btn-success buttab" @click="editRow(row.id)">Editar</button>
                                    <button class="btn btn-danger buttab" @click="deleteRow(row.id)">Borrar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
import SidebarAdminGym from "@/components/layout/sidebars/SidebarAdminGym.vue";
import HeaderAdminGym from "@/components/layout/headers/HeaderGym.vue";

export default {
    components: {
        SidebarAdminGym,
        HeaderAdminGym
    },
    data() {
        return {
            AsisData: [
                {
                    id: "01",
                    cod_usuario: "1",
                    nombre: "Brandon Jacob",
                    dni: "83928391",
                    fecha: "13/09/2023",
                    estado: "asistio",
                },
                {
                    id: "02",
                    cod_usuario: "2",
                    nombre: "Bridie Kessler",
                    dni: "71928391",
                    fecha: "14/09/2023",
                    estado: "asistio",
                },
            ],
            editingRow: null,
            FaltaData: [
                {
                    id: "01",
                    cod_usuario: "1",
                    nombre: "Brandon Jacob",
                    dni: "83928391",
                    fecha: "13/09/2023",
                    estado: "falto",
                },
                {
                    id: "02",
                    cod_usuario: "2",
                    nombre: "Bridie Kessler",
                    dni: "71928391",
                    fecha: "14/09/2023",
                    estado: "falto",
                },
            ]
        };
    },
    methods: {
        editRow(id) {
            // Obtener los datos del registro correspondiente al ID
            // Puedes realizar una petición a tu API o trabajar con datos simulados
            // Aquí se utiliza el array "rows" para buscar el registro
            const rowData = this.AsisData.find(row => row.id === id);
            this.editingRow = { ...rowData };
        },
        deleteRow(id) {
            // Aquí puedes realizar una petición a tu API para borrar el registro correspondiente al ID
            // Por simplicidad, se mostrará un mensaje en la consola y se eliminará el registro del array "rows"
            console.log("Borrando registro con ID:", id);
            this.rows = this.AsisData.filter(row => row.id !== id);
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
                cod_plan: "",
                duracion: "",
                precio: "",
            };
        },
    },
};
</script>
  
<style>
.home_content {
    position: absolute;
    height: 100%;
    right: 0;
    left: 78px;
    transition: all 0.5s ease;
    flex-grow: 1;
    overflow-y: auto;
}

.sidebar.active~.home_content {
    left: 240px;
    right: 0;
}

.home_content .container-fluid {
    margin: 2.5rem;
    margin-top: 6.5rem;
    width: auto;
}

.sidebar.active~.home_content .container-fluid {
    width: auto;
    left: 240px;
    right: 0;
    margin: 2.5rem;
    margin-top: 6.5rem;
}

.table-container {
    margin-left: 20px;
}

.home_content .tabla2 {
    margin: 2.5rem;
    margin-top: 2.5rem;
    margin-bottom: 0;
    width: auto;
}

.sidebar.active~.home_content .tabla2 {
    width: auto;
    left: 240px;
    right: 0;
    margin: 2.5rem;
    margin-top: 2.5rem;
    margin-bottom: 0;
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