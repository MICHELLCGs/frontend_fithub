<template>
  <div class="container-fluid">
    <div class="row">
        <SidebarAdmin />
      <div class="col-md-9">
        <div class="container-fluid">

          <!-- aquí va el contenido -->
          <h1>dsfsdsadasd</h1>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import SidebarAdmin from "@/components/layout/sidebars/SidebarAdmin.vue";

export default {
  name: "HomeAdmin",
  components() {
    SidebarAdmin;
  },
  components: { SidebarAdmin }
};
</script>
