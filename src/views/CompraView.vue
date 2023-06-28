<template>
    <main class="container">
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
                                <h4 class="mb-0">FitPlan</h4>
                                <p class="mb-0">Plan de 30 días</p>
                            </div>
                            <div class="col-md-6 text-end d-flex align-items-center justify-content-end">
                                <p class="mb-0 d-inline me-2">Precio: S/. 89.99</p>
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
                            <p class="mb-0">S/. 89.99</p>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-between align-items-center">
                            <p class="mb-0"><b>Total normal</b></p>
                            <p class="mb-0"><b> S/. 89.99 </b></p>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="btn w-100 mt-2 text-white" style="background-color: #474d89">
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!--<div v-if="mostrarComponente">
            <CompraCom />
        </div>-->
    </main>
</template>
<!--<script>
import CompraCom from '@/components/CompraComp.vue';

export default {
  components: {
    CompraComp
  },
  data() {
    return {
      mostrarComponente: false
    };
  },
  methods: {
    mostrarCompra() {
      this.mostrarComponente = true;
    }
  }
}
</script> -->
<style>
.blog-pagination {
    margin-bottom: 4rem;
}

/*
 * Blog posts
 */
.blog-post {
    margin-bottom: 10rem;
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
</style>
