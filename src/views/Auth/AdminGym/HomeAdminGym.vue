<template>
  <SidebarAdminGym />
  <HeaderAdminGym/>
  <div class="home_content">
</div>
</template>

<script>
import SidebarAdminGym from "@/components/layout/sidebars/SidebarAdminGym.vue";
import HeaderAdminGym from "@/components/layout/headers/HeaderGym.vue";

export default {
  components: {
    SidebarAdminGym,
    HeaderAdminGym
  }
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
</style>