<template>
  <SidebarAdminGym />
  <HeaderAdminGym />
  <div class="home_content">
    <div class="container-fluid">
      <div class="row g-4">
        <div class="col-sm-12 col-md-4">
          <div class="rounded h-100 p-4 custom-bg">
            <h5 class="mb-4">Usuarios</h5>
            <Bar :chart-options="CharOptions" :chart-data="charData"> </Bar>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="rounded h-100 p-4 custom-bg">
            <h5 class="mb-4">Pagos</h5>
            <Bar :chart-options="CharOptions" :chart-data="charData"> </Bar>
          </div>
        </div>
        <div class="col-sm-12 col-md-4">
          <div class="rounded h-100 p-4 custom-bg">
            <h5 class="mb-4">Asistencias</h5>
            <Bar :chart-options="CharOptions" :chart-data="charData"> </Bar>
          </div>
        </div>
      </div>

      <div class="tab rounded px-4 py-2" style="background-color: #F3F6F9; margin-top: 1.5rem;">
        <div class="d-flex align-items-center justify-content-between mb-3">
          <h2 class="mb-0">Estado de Usuarios</h2>
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
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in rows" :key="row.id">
                  <td>{{ row.id }}</td>
                  <td>{{ row.cod_user }}</td>
                  <td>{{ row.nombre }}</td>
                  <td>{{ row.dni }}</td>
                  <td>{{ row.estado }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import SidebarAdminGym from "@/components/layout/sidebars/SidebarAdminGym.vue";
import HeaderAdminGym from "@/components/layout/headers/HeaderGym.vue";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
  components: {
    SidebarAdminGym,
    HeaderAdminGym,
    // Bar,
  },
  // props: {
  //   chartId: {
  //     type: String,
  //     default: 'bar-chart'
  //   }
  // },
  // data() {
  //   return {
  //     etiquetas: [], valores: [], chartData: [],
  //     CharOptions: {
  //       responsive: true
  //     }
  //   }
  // },
  // async mounted() {
  //   const totales = await axios.get('api');
  //   totales.data.map((row) => (
  //     this.etiquetas.push(row.producto),
  //     thhis.valores.push(row.total)
  //   ))
  //   this.chartData = {
  //     labels: this.etiquetas,
  //     datasets: [
  //       { label: 'Productos', data: this.valores, backgroundColor: 'black' }
  //     ]
  //   }
  // },
  data() {
    return {
      rows: [
        {
          id: "01",
          cod_user: "1",
          nombre: "Bridie Kessler",
          dni: "42567891",
          estado: "Estado 1",
        },
        {
          id: "02",
          cod_user: "2",
          nombre: "Ashleigh Langosh",
          dni: "42567891",
          estado: "Estado 2",
        },
      ],
      editingRow: null,
    };
  },
}
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 2;
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

.sidebar.active~.home_content {
  left: 240px;
  right: 0;
}

.custom-bg {
  background-color: #F3F6F9;
}

.home_content .row {
  margin: 1rem;
  margin-top: 4.5rem;
}

.sidebar.active~.home_content .row {
  left: 240px;
  right: 0;
  margin-top: 5rem;
}

.home_content .tab {
  margin: 1.5rem;
  margin-top: 5rem;
  width: auto;
}

.sidebar.active~.home_content .tab {
  width: auto;
  left: 240px;
  right: 0;
  margin: 1.5rem;
  margin-top: 5rem;
}
</style>