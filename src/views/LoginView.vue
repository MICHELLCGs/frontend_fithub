<template>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <HeaderComp />
  <div
    class="container d-flex justify-content-center align-items-center min-vh-100"
  >
    <div class="row border rounded-5 p-3 bg-white shadow box-area">
      <div
        class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
        style="background: #89bbcb"
      >
        <div class="featured-image mb-3">
          <img
            src="../assets/img/enter.svg"
            class="img-fluid"
            style="width: 250px"
          />
        </div>
        <p
          class="text-white fs-2"
          style="
            font-family: 'Courier New', Courier, monospace;
            font-weight: 600;
          "
        >
          Entrena
        </p>
        <small
          class="text-white text-wrap text-center"
          style="
            width: 17rem;
            font-family: 'Courier New', 'Courier', 'monospace';
          "
          >Obten un plan a tu comodidad</small
        >
      </div>

      <div class="col-md-6 right-box">
        <div class="row align-items-center">
          <div class="header-text mb-4 text-center">
            <h2>Bienvenido</h2>
            <p>Estamos encantados de verte otra vez</p>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="input-group mb-1">
            <input
              type="password"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Contraseña"
              v-model="password"
            />
          </div>
          <div class="input-group mb-5 d-flex justify-content-between">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="formCheck" />
              <label for="formCheck" class="form-check-label text-secondary"
                ><small>Recuerdame</small></label
              >
            </div>
            <div class="forgot">
              <small
                ><a href="/" class="link-dark"
                  >¿Olvidaste tu contraseña?</a
                ></small
              >
            </div>
          </div>
          <div ref="/homecustomer" class="input-group mb-3">
            <button class="btn btn-lg btn-dark w-100 fs-6" @click="handleLogin">Login</button>
          </div>
          <div class="input-group mb-3">
            <!-- <button class="btn btn-lg btn-light w-100 fs-6">
                <img
                  src="../assets/img/google.svg"
                  style="width: 20px"
                  class="me-2"
                /><small>Inicia sesión con Google</small>
              </button> -->
          </div>
          <div class="row">
            <small
              >No tienes una cuenta &nbsp; &nbsp;<a
                href="/register"
                class="link-secondary"
                >Sign Up</a
              ></small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComp from "@/components/layout/headers/HeaderComp.vue";

export default {
  data() {
    return {

      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      if (this.email === 'admin@fithub.com' && this.password === 'password') {
        // Redireccionar a la página de administrador (homeadmin)
        this.$router.push('/homeadmin');
      } else if (this.email === 'customer@fithub.com' && this.password === 'password') {
        // Redireccionar a la página de cliente (homecustomer)
        this.$router.push('/homecustomer');
      } else {
        // Mostrar mensaje de error o tomar otra acción en caso de autenticación fallida
        alert('Credenciales incorrectas');
      }
    },
  },
  components: {
    HeaderComp,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

body {
  font-family: "Poppins", sans-serif;
  background: #ececec;
}
.box-area {
  width: 930px;
}

.right-box {
  padding: 40px 30px 40px 40px;
}

::placeholder {
  font-size: 16px;
}

.rounded-4 {
  border-radius: 20px;
}
.rounded-5 {
  border-radius: 30px;
}

@media only screen and (max-width: 40px) {
  .box-area {
    margin: 0 10px;
  }
  .left-box {
    height: 100px;
    overflow: hidden;
  }
  .right-box {
    padding: 20px;
  }
}
</style>
