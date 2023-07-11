<template>
    <div class="container" style="margin-top: 70px;">
        <div class="col-md-12">
            <div class="mb-4">
                <h1 style="color: #474d89"><b>¡Estás por acceder a tu FitPlan!</b></h1>
            </div>
        </div>
        <div class="row g-5">
            <div class="col-md-7">
                <article class="blog-post">
                    <div class="p-4 mb-4 custom-bg rounded">
                        <h4 class="mb-0">Bolsa de Compra</h4>
                    </div>
                    <div class="p-4 border rounded">
                        <div class="row">
                            <div class="col-md-6">
                                <h4 class="mb-0">{{ plan.name }}</h4>
                                <p class="mb-0">{{ plan.description }}</p>
                            </div>
                            <div class="col-md-6 text-end d-flex align-items-center justify-content-end">
                                <p class="mb-0 d-inline me-2">Precio: S/. {{ plan.preci }}</p>
                                <i class="bi bi-trash trash-icon" style="margin-left: 8px"></i>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-md-5">
                <div class="blog-post" style="top: 2rem">
                    <div class="p-4 mb-3 custom-bg rounded">
                        <h4 class="mb-0">Resumen</h4>
                    </div>
                    <div class="p-4 mb-3 border rounded">
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0">Subtotal</p>
                            <p class="mb-0">S/. {{ plan.preci }}</p>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0"><b>Total normal</b></p>
                            <p class="mb-0"><b> S/. {{ plan.preci }} </b></p>
                        </div>
                    </div>
                    <div class="text-center">
                            <button class="btn w-100 mt-2 text-white" style="background-color: #474d89" data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                                Continuar
                            </button>
                    </div>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content border-0">
                                <div class="modal-body border-0" style="padding-top: 40px;">
                                    ¿Desea continuar con la compra?
                                </div>
                                <div class="modal-footer border-0">
                                    <button type="button" class="btn bcancel" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn bcontinue btn-selected"
                                        @click="acceptAction">Aceptar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      plan: {},
    };
  },
  mounted() {
    this.fetchPlan();
  },
  methods: {
    acceptAction() {
      window.location.href = "/pay";
    },
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
.blog-pagination {
    margin-bottom: 4rem;
}

/*
 * Blog posts
 */
.blog-post {
    margin-bottom: 4rem;
}

.blog-post-title {
    font-size: 2.5rem;
}

.custom-bg {
    background-color: #72615f;
    color: white;
}

.border-color {
    border-color: #72615f;
}

/* modal-botones*/
.bcancel {
    border: 1px solid #205080;
    background-color: transparent;
}

.bcancel:hover {
    background-color: #205080;
    box-shadow: 0 4px 8px rgba(32, 80, 128, 0.5);
    color: white;
}

.bcontinue {
    background-color: #336699;
    color: #fff;
}

.bcontinue.btn-selected {
    background-color: #205080;
}

.bcontinue:hover {
    box-shadow: 0 4px 8px rgba(32, 80, 128, 0.5);
    color: white;
}
</style>
