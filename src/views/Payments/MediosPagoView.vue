<template>
    <div class="container" style="margin-top: 70px;">
        <div class="col-md-12">
            <div class="mb-4">
                <h1 style="color: #474d89"><b>¡Comprando tu FitPlan!</b></h1>
            </div>
        </div>
        <div class="row g-5">
            <div class="col-md-7">
                <article class="blog-post">
                    <div class="p-4 mb-4 custom-bg rounded">
                        <h4 class="mb-0">Pasos para obtener tu Fitplan</h4>
                    </div>
                    <div class="p-4 border rounded">
                        <div class="row">
                            <div class="col-md-12">
                                <h5 class="mb-4">Realiza el pago por una de estas cuentas bancarias:</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p class="mb-0">BCP (Soles)</p>
                                <p class="mb-0">Interbank</p>
                            </div>
                            <div class="col-md-6 text-end d-flex align-items-center justify-content-end">
                                <div class="row">
                                    <div class="col-12">
                                        <p class="mb-0">21505419817058</p>
                                        <p class="mb-0">00221510541981705827</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>
            </div>
            <div class="col-md-5">
                <div class="blog-post" style="top: 2rem">
                    <div class="p-4 mb-3 custom-bg rounded">
                        <h4 class="mb-0">Sube tu voucher</h4>
                    </div>
                    <div class="p-4 mb-3 rounded">
    <form @submit="subirVoucher">
        <label for="voucher" class="input-label">
            <input type="file" id="voucher" accept="image/*" class="file-input" @change="onFileChange" />
        </label>
    </form>
</div>

<div class="text-center">
                        <!--<button class="btn w-100 mt-2 text-white" style="background-color: #474d89" type="submit">
                            Subir Voucher
                        </button>-->
                        <button class="btn w-100 mt-2 text-white" style="background-color: #474d89" type="submit"  data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop">
                            Realizar Pago
                        </button>
                    </div>

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content border-0">
                                <div class="modal-body border-0" style="padding-top: 40px;">
                                    ¡En espera de validación!
                                </div>
                                <div class="modal-footer border-0">
                                    <button type="button" class="btn bcancel" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="btn bcontinue btn-selected"
                                        @click="accept">Aceptar</button>
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
            voucher: null, // Variable para almacenar el archivo seleccionado
        };
    },
    methods: {
        accept() {
      window.location.href = "/";
    },
        onFileChange(event) {
            this.voucher = event.target.files[0]; // Obtener el archivo seleccionado
        },
        subirVoucher() {
            const formData = new FormData();
            formData.append('foto', this.voucher); // Agregar el archivo al objeto FormData

            // Realizar la solicitud HTTP utilizando axios u otra librería similar
            axios.post('http://localhost:8000/api/v1/pagos', formData)
                .then(response => {
                    // Manejar la respuesta de la API
                    console.log(response.data);
                })
                .catch(error => {
                    // Manejar el error de la API
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