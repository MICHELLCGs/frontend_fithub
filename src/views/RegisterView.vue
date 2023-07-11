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
    class="container d-flex justify-content-center align-items-center min-vh-100 bloq"
  >
    <div class="row border rounded-5 p-3 bg-white shadow box-area">
      <div
        class="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
        style="background: #89bbcb"
      >
        <div class="featured-image mb-3">
          <img
            src="../assets/img/regis.svg"
            class="img-fluid"
            style="width: 250px"
          />
        </div>
        <p
          class="text-white fs-2"
          style="
            font-family: 'Courier New', Courier, monospace;
            font-weight: 700;
          "
        >
          Ejercitate
        </p>
        <small
          class="text-white text-wrap text-center"
          style="
            width: 17rem;
            font-family: 'Courier New', 'Courier', 'monospace';
          "
          >Busca y encuentra tu gimnasio preferido</small
        >
      </div>

      <div class="col-md-6 right-box" method="POST">
        <div class="row align-items-center">
          <div class="header-text mb-4 text-center">
            <h1>Bienvenido</h1>
            <p>Registrate y conoce una vida saludable</p>
          </div>
          <!-- <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control form-control-lg bg-light fs-6"
                  placeholder="Nombre"
                />
              </div> -->
          <div class="input-group mb-3">
            <input
              v-model="email"
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="input-group mb-3">
            <input
              v-model="numeroDNI"
              type="number"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="DNI"
            />
          </div>
          <div class="input-group mb-3">
            <input
            v-model="contraseña"
              type="password"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Contraseña"
            />
          </div>
          <div class="input-group mb-4">
            <input
              type="password"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Confirmar contraseña"
            />
          </div>

          <div class="input-group mb-3">
            <button
              type="button"
              class="btn btn-lg btn-dark w-100 fs-6"
              data-bs-toggle="modal"
              data-bs-target="#modelregister"
              @click="consultarAPI"
            >
              Registrarse
            </button>
          </div>
          <div class="input-group mb-3">
            <!-- <button class="btn btn-lg btn-light w-100 fs-6">
                  <img
                    src="../assets/img/google.svg"
                    style="width: 20px"
                    class="me-2"
                  /><small>Registrate con Google</small>
                </button> -->
          </div>
          <div class="row">
            <small
              >¿Ya estás registrado? &nbsp; &nbsp;<a
                href="/login"
                class="link-secondary"
                >Log in
              </a></small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- MODAL VALIDAR DATOS-->
  <div
    class="modal fade"
    data-bs-backdrop="static"
    id="modelregister"
    tabindex="-1"
    aria-labelledby="modelregisterlabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modelregisterlabel">VALIDANDO USUARIO</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h6 class="text-center">DATOS DE REGISTRO</h6>
          <span>EMAIL:</span>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control form-control-lg bg-light fs-6"
              :placeholder="emailPlaceholder"
              disabled
            />
          </div>
          <span>DNI:</span>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control form-control-lg bg-light fs-6"
              :placeholder="dniPlaceholder"
              disabled
            />
          </div>
          <span>Nombres:</span>
          <div class="input-group mb-3">
            <input
            v-model="nombres"
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Nombres"
            />
          </div>
          <span>Apellidos:</span>
          <div class="input-group mb-3">
            <input
            v-model="apellidos"
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Apellidos"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cerrar
          </button>
          <button @click="submitForm" type="button" class="btn btn-dark">
            Registrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import HeaderComp from "@/components/layout/headers/HeaderComp.vue";

export default {
  components: {
    HeaderComp,
  },
  data() {
    return {
      email: "",
      numeroDNI: "",
      contraseña:"",
      nombres:"",
      apellidos:"",
      resultado: null, // Agrega una propiedad para almacenar el resultado
    };
  },
  computed: {
    emailPlaceholder() {
      return this.email;
    },
    dniPlaceholder() {
      return this.numeroDNI;
    },
  },
  methods: {
    submitForm() {
      const url = "https://api.fithub.bjrcode.com/api/register"; // URL del API

      const data = {
        name: this.nombres, // Obtén el valor del campo de nombres desde los datos de Vue.js
        lastname: this.apellidos, // Obtén el valor del campo de apellidos desde los datos de Vue.js
        email: this.email, // Obtén el valor del campo de correo electrónico desde los datos de Vue.js
        dni: this.numeroDNI, // Obtén el valor del campo de DNI desde los datos de Vue.js
        role: "customer", // Asigna el rol según sea necesario (en este caso, 'admin','customer,'partner')
        password: this.contraseña, // Asigna la contraseña según sea necesario
      };

      axios
        .post(url, data)
        .then((response) => {
          // La solicitud se realizó con éxito
          console.log(response.data); // Puedes hacer algo con la respuesta del servidor aquí
        })
        .catch((error) => {
          // Hubo un error en la solicitud
          console.error(error);
        });
    },
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
.bloq {
  margin-top: 35px;
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
  