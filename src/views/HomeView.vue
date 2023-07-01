<template>
    <body>
      <SidebarHome />
      <main>
        <div class="contenido">
          <!-- ======= Hero Section ======= -->
          <section
            id="hero"
            class="d-flex flex-column justify-content-center align-items-center"
          >
            <div class="hero-container" data-aos="fade-in">
              <h1 style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Bienvenido</h1>
            </div>
          </section>
          <!-- End Hero -->
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
  /*--------------------------------------------------------------
  # Hero Section
  --------------------------------------------------------------*/
  #hero {
    width: calc(100% - 250px); /* Resta el ancho del sidebar al ancho total */
    height: 100vh;
    margin-left: 250px; /* Ancho del sidebar */
    background: url("../assets/img/home.png");
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  #hero .hero-container {
    position: relative;
    z-index: 2;
  }
  
  #hero h1 {
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #fff;
  }
  
  @media (max-width: 768px) {
    .contenido {
      margin-left: 0;
    }
  
    #hero {
      width: 100%;
      margin-left: 0;
    }
  
    #hero h1 {
      font-size: 28px;
      line-height: 36px;
    }
  
    #hero h2 {
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 30px;
    }
  }
  body {
    padding-top: 0rem;
    padding-bottom: 0rem;
    color: #5a5a5a;
  }
  
  </style>