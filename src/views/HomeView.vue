<template>
  <body>
    <HeaderComp />
    <main>
      <div>
        <div>
          <div class="col-md-15">
            <div>
              <ul class="fondo">
                <div id="fondo" class="col-md-4 p-lg-5 mx-auto my-0">
                  <h1 class="display-2 fw-bold" style="color: white">
                    BIENVENIDO
                  </h1>
                  <h3 style="color: white">
                    FitHub Mejora la Calidad de tu Vida
                  </h3>
                </div>
              </ul>
            </div>
            <!-- ======= About Section ======= -->
            <section id="about" class="about">
              <div class="container">
                <div class="section-title">
                  <h2 :style="{ color: textColor }">
                    <strong>TU INFORMACION</strong>
                  </h2>
                  <p>Aqui puedes editar y actualizar tu información.</p>
                </div>

                <div class="row">
                  <div class="col-lg-4" data-aos="fade-right">
                    <div class="image-container">
                      <img
                        src="../assets/img/userimg.png"
                        width="220"
                        class="img-fluid"
                        alt=""
                      />
                      
                    </div>
                    <form>
                      <label for="imagen-perfil" class="input-label">
                        <span class="label-text">Seleccionar archivo</span>
                        <input
                          type="file"
                          id="imagen-perfil"
                          accept="image/*"
                          class="file-input"
                        />
                        <button class="boton-editar" type="submit">Guardar</button>
                      </label>
                      
                    </form>
                  </div>
                  <div
                    class="col-lg-8 pt-4 pt-lg-0 content"
                    data-aos="fade-left"
                  >
                    <h3>Michell Sabrina Condori</h3>

                    <div class="row">
                      <div class="col-lg-6">
                        <ul>
                          <ul>
                            <i class="bi bi-chevron-right"></i>
                            <strong>DNI: </strong>
                            <span>724569813</span>
                          </ul>
                        </ul>
                      </div>
                      <div class="col-lg-6">
                        <ul>
                          <ul>
                            <i class="bi bi-chevron-right"></i>
                            <strong>CORREO ELECTRONICO: </strong>
                            <span>michellsabrinac@gmail.com</span>
                          </ul>
                          
                        </ul>
                      </div>
                    </div>
                    <a href="/editar"><button class="boton-editar">Editar</button></a>
                    
                  </div>
                </div>
              </div>
            </section>
            <!-- End About Section -->
            <!-- ======= Plan Section ======= -->
            <section id="facts" class="facts">
              <div class="container">
                <div class="section-title">
                  <h2 :style="{ color: textColor }">
                    <strong>INFORMACION SOBRE TU PLAN</strong>
                  </h2>
                  <p>
                    Aqui podras enterarte sobre los dias restantes del uso de tu
                    plan.
                  </p>
                  <ul>
                    <i class="bi bi-chevron-right"></i>
                    <strong>PLAN ADQUIRIDO: </strong>
                    <span>FitPlan</span>
                  </ul>
                </div>

                <div class="row no-gutters">
                  <div
                    class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                    data-aos="fade-up"
                  >
                    <div class="count-box">
                      <i class="bi bi-emoji-smile" style="font-size: 50px"></i>
                      <p style="font-size: 24px">
                        <strong>18</strong> Días Asistidos
                      </p>
                    </div>
                  </div>

                  <div
                    class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div class="count-box">
                      <i
                        class="bi bi-journal-richtext"
                        style="font-size: 50px"
                      ></i>
                      <p style="font-size: 24px">
                        <strong>235</strong> Días para la Expiración de tu Plan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- End Facts Section -->
          </div>
        </div>
      </div>
    </main>
  </body>
</template>
<script>
import HeaderComp from "@/components/HeaderComp.vue";
export default {
  components() {
    HeaderComp;
  },
  components: { HeaderComp },
  data() {
    return {
      textColor: "#89BACD", // Puedes cambiar el color aquí
    };
  },
};
</script>
<style>
.fondo {
  background-image: url("../assets/img/gymhome.png");
  background-size: cover;
}
.boton-editar {
  background-color: #1d648d;
  border: none;
  color: white;
  padding: 09px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
.input-label {
  position: relative;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0;
  height: 0;
}

.label-text {
  background-color: #1d648d;
  color: white;
  padding: 9px 10px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.label-text:hover {
  background-color: #45a049;
}

.file-input:focus + .label-text {
  outline: 2px solid #4caf50;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28vh; /* Ajusta la altura según tus necesidades */
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
}
</style>