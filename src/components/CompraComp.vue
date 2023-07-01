<template>
    <div class="container">
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
                        <form>
                            <label for="imagen-voucher" class="input-label">
                                <input type="file" id="imagen-voucher" accept="image/*" class="file-input" />
                            </label>
                        </form>
                    </div>
                    <div class="text-center">
                        <button class="btn w-100 mt-2 text-white" style="background-color: #474d89">
                            Realizar Pago
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

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
</style>