<template>
    <SidebarAdmin />
    <div class="home_content">
      <div class="text"> configuracion </div>
    </div>
  </template>
  
  
  <script>
  import SidebarAdmin from "@/components/layout/sidebars/SidebarAdmin.vue";
  export default {
    name: "Gimnasios",
    components() {
      SidebarAdmin;
    },
    components: { SidebarAdmin},
};
  </script>
  
  
  <style>
  /*
  Home Content
  */
  
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
    color: #474D89;
    margin: 12px;
    flex-grow: 1;
    overflow-y: auto
  }
  
  .sidebar.active~.home_content {
    left: 240px;
    right: 0;
  }
  </style>