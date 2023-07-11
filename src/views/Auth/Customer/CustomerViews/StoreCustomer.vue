<template>
    <SidebarCustomer />
    <div class="home_content">
      <div class="card w-50 mx-auto">
        <div class="card-body">
          <i class="bi bi-lightning-charge-fill custom-icon"></i>
          <h5 class="card-title" style="font-size: 24px">{{ plan.name }}</h5>
          <p class="card-text" style="font-size: 16px">
            Brindamos un plan basado en la comodidad de nuestra comunidad. 
          </p>
          <div class="price">
            <h4><sup> S/. </sup>{{ plan.preci }}</h4>
          </div>
          <a href="/compra" class="btn custom-button" >Comprar</a>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  import SidebarCustomer from "@/components/layout/sidebars/SidebarCustomer.vue";
  import axios from 'axios';
  export default {
    components() {
      SidebarCustomer;
    },
    components: { SidebarCustomer },
    data() {
    return {
      plan: {},
    };
  },
  mounted() {
    this.fetchPlan();
  },
  methods: {
    fetchPlan() {
      axios.get('https://api.fithub.bjrcode.com/api/v1/planes')
        .then(response => {
          if (response.data.data.length > 0) {
            this.plan = response.data.data[0];
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
  },

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
    color: #474d89;
    margin: 12px;
    flex-grow: 1;
    overflow-y: auto;
  }
  
  
  .sidebar.active ~ .home_content {
    left: 240px;
    right: 0;
  }
  
    .custom-icon {
      font-size: 40px;
      color:#474D89;
    }
  
  .custom-button {
      background-color: #2c326f;
      color: rgb(255, 255, 255);
    }
    .custom-button:hover {
      background-color: rgb(5, 221, 81);
      color: rgb(255, 255, 255);
    }
  </style>
  