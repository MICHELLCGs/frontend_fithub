<template>
  <SidebarCustomer />
  <div class="home_content">
      <body>
        <div class="card">
          <h2>Consulta de Estado de Pago</h2>
          <form id="paymentStatusForm">
            <div class="form-group">
              <label for="invoiceNumber">Número de factura:</label>
              <input
                type="text"
                id="invoiceNumber"
                name="invoiceNumber"
                placeholder="Ingrese el número de factura"
              />
            </div>
            <div class="form-group">
              <input type="submit" value="Consultar Estado" />
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
      height: 100vh;
      margin: 0;
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
    }
.card {
      width: 400px;
      background-color: #f5f5f5;
      border-radius: 10px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
    }

    .card h2 {
      text-align: center;
      margin-top: 0;
      color: #333;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-weight: bold;
      margin-bottom: 5px;
      color: #666;
    }

    .form-group input[type="text"] {
      width: 100%;
      padding: 8px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }

    .form-group input[type="submit"] {
      padding: 10px 20px;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
    }

</style>