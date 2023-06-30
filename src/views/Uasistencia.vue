<template>
    <body>
      <SidebarHome />
      <main>
        <div class="contenido">
          <body>
            <div class="attendance-container">
              <h1 class="attendance-title">Ver Asistencias</h1>
              <table class="attendance-table">
                <thead>
                  <tr>
                    <th>Nombre Gimnasio</th>
                    <th>Estado</th>
                    <th>Dia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Revo Sport</td>
                    <td class="status present">Asistio</td>
                    <td>29 Abril</td>
                  </tr>
                  <tr>
                    <td>SmartFit</td>
                    <td class="status absent">Asistio</td>
                    <td>14 Mayo</td>
                  </tr>
                  <tr>
                    <td>Revo Sport</td>
                    <td class="status present">Asistio</td>
                    <td>20 Mayo</td>
                  </tr>
                  <tr>
                    <td>Revo Sport</td>
                    <td class="status present">Asistio</td>
                    <td>21 Mayo</td>
                  </tr>
                  <tr>
                    <td>Revo Sport</td>
                    <td class="status present">Asistio</td>
                    <td>23 Mayo</td>
                  </tr>
                  <tr>
                    <td>Millenium Fit</td>
                    <td class="status present">Asistio</td>
                    <td>02 Junio</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </body>
        </div>
      </main>
    </body>
  </template>
  <script>
  import SidebarHome from "@/components/SidebarHome.vue";
  export default {
    components() {
      SidebarHome;
    },
    components: { SidebarHome },
  };
  </script>
  <style>
  .contenido {
    margin-left: 600px;
    margin-right: 400px;
  }
  body {
    font-family: Arial, sans-serif;
    background-color: #f1f1f1;
  }
  
  .attendance-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
  
  .attendance-title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .attendance-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .attendance-table th,
  .attendance-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }
  
  .attendance-table th {
    background-color: #f7f7f7;
  }
  
  .attendance-table .status {
    font-weight: bold;
  }
  </style>