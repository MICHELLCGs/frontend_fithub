<template>
  <SidebarCustomer />
  <div class="home_content">
    <body>
      <div class="card text-center">
        <h2 class="card-title">Consulta de Estado de Pago</h2>
        <form id="paymentStatusForm" class="card-body">
          <div class="form-group">
            <label for="invoiceNumber">Número de factura:</label>
            <input
              type="text"
              id="invoiceNumber"
              name="invoiceNumber"
              placeholder="Ingrese el número de factura"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <input
              type="submit"
              value="Consultar Estado"
              class="btn btn-primary"
            />
          </div>
        </form>
        <div id="paymentStatusResult" style="display: none"></div>
      </div>
    </body>
  </div>
</template>
  
  
  <script>
import SidebarCustomer from "@/components/layout/sidebars/SidebarCustomer.vue";
export default {
  components() {
    SidebarCustomer;
  },
  components: { SidebarCustomer },
};
</script>
  
  
  <style>
/*
  Home Content
  */

.home_content .text {
  font-size: 25px;
  font-weight: 500;
  color: #474d89;
  margin: 12px;
  flex-grow: 1;
  overflow-y: auto;
}

.sidebar.active ~ .home_content {
  left: 240px;
  right: 0;
}

/*
  Card
  */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 0;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}
.card {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.589);
}

.card-title {
  font-size: 30px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  padding: 10px 20px;
}

#paymentStatusResult {
  margin-top: 10px;
}
</style>