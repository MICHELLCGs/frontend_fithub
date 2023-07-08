<template>
  <div class="container">
    <h1>Bootstrap Tables</h1>

    <p>Una tabla con extensión de integración de terceros Extensión de control de filtro Exportación de datos para exportador</p>

    <div id="toolbar">
      <select class="form-control" v-model="exportDataType" @change="changeExportDataType">
        <option value="">Export Basic</option>
        <option value="all">Export All</option>
        <option value="selected">Export Selected</option>
      </select>
    </div>

    <table
      id="table"
      data-toggle="table"
      data-search="true"
      data-filter-control="true"
      data-show-export="true"
      data-click-to-select="true"
      data-toolbar="#toolbar"
      class="table-responsive"
    >
      <thead>
        <tr>
          <th data-field="state" data-checkbox="true"></th>
          <th data-field="prenom" data-filter-control="input" data-sortable="true">First Name</th>
          <th data-field="date" data-filter-control="select" data-sortable="true">Date</th>
          <th data-field="examen" data-filter-control="select" data-sortable="true">Examination</th>
          <th data-field="note" data-sortable="true">Note</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index" @click="toggleRow(index)" :class="{ 'bold-blue': item.selected }">
          <td class="bs-checkbox"><input :data-index="index" name="btSelectItem" type="checkbox"></td>
          <td>{{ item.firstName }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.examination }}</td>
          <td>{{ item.note }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exportDataType: '',
      tableData: [
        { firstName: 'Jitender', date: '01/09/2015', examination: 'Français', note: '12/20', selected: false },
        { firstName: 'Jahid', date: '05/09/2015', examination: 'Philosophie', note: '8/20', selected: false },
        { firstName: 'Valentin', date: '05/09/2015', examination: 'Philosophie', note: '4/20', selected: false },
        { firstName: 'Milton', date: '05/09/2015', examination: 'Philosophie', note: '10/20', selected: false },
        { firstName: 'Gonesh', date: '01/09/2015', examination: 'Français', note: '14/20', selected: false },
        { firstName: 'Valérie', date: '07/09/2015', examination: 'Mathématiques', note: '19/20', selected: false },
        { firstName: 'Valentin', date: '01/09/2015', examination: 'Français', note: '11/20', selected: false },
        { firstName: 'Eric', date: '01/10/2015', examination: 'Philosophie', note: '8/20', selected: false },
        { firstName: 'Valentin', date: '07/09/2015', examination: 'Mathématiques', note: '14/20', selected: false },
        { firstName: 'Valérie', date: '01/10/2015', examination: 'Philosophie', note: '12/20', selected: false },
        { firstName: 'Eric', date: '07/09/2015', examination: 'Mathématiques', note: '14/20', selected: false },
        { firstName: 'Valentin', date: '01/10/2015', examination: 'Philosophie', note: '10/20', selected: false }
      ]
    };
  },
  methods: {
    changeExportDataType() {
      // Actualizar opciones de exportación según el valor seleccionado
      $table.bootstrapTable('refreshOptions', {
        exportDataType: this.exportDataType
      });
    },
    toggleRow(index) {
      // Alternar estado seleccionado del ítem en la tabla de datos
      this.tableData[index].selected = !this.tableData[index].selected;
    }
  }
};
</script>

<style>
.bold-blue {
  font-weight: bold;
  color: blue;
}
</style>
