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
            src="../assets/img/negocio.svg"
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
          Beneficiate
        </p>
        <small
          class="text-white text-wrap text-center"
          style="
            width: 17rem;
            font-family: 'Courier New', 'Courier', 'monospace';
          "
          >Empieza a trabajar con nosotros</small
        >
      </div>

      <div class="col-md-6 right-box" method="POST">
        <div class="row align-items-center">
          <div class="header-text mb-4 text-center">
            <h1>Bienvenido</h1>
            <p>Registrate y aprovecha nuestros servicios</p>
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Mail"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="DNI"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Contraseña"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Confirma contraseña"
            />
          </div>

          <div class="input-group mb-1">
            <button
              type="button"
              class="btn btn-lg btn-dark w-100 fs-6"
              data-bs-toggle="modal"
              data-bs-target="#modelregister"
            >
              Registrar tu gimnasio
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
          <div class="mb-3">
    <button type="button" class="btn btn-lg btn-light w-100 fs-6" @click="cancelar">Cancelar</button>
  </div>
        </div>
        
      </div>
    </div>
  </div>
  <div
    class="modal fade"
    id="modelregister"
    tabindex="-1"
    aria-labelledby="modelregisterlabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modelregisterlabel">Registro gimnasio</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Nombre"
            />
          </div>
          <!-- <div class="input-group mb-3">
            <input
              type="file"
              class="form-control form-control-lg bg-light fs-6 custom-file-input"
              placeholder="Logo"
              accept="image/*"
            />
          </div> -->
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Geolocalización"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="RUC"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="number"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Aforo"
            />
          </div>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control form-control-lg bg-light fs-6"
              placeholder="Horarios de atención"
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
          <button type="button" class="btn btn-dark">Registrar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    cancelar() {
      window.location.href = "/";
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
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Seleccionar logo";
  display: inline-block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 100;
  font-size: 10pt;
}
.custom-file-input:hover::before {
  border-color: #99757d;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
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
