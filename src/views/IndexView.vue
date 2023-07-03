<template>
    <body>
        <HeaderComp />
        <main>
            <div id="myCarousel" class="carousel slide" data-bs-ride="carousel" style="margin-top: 60px;">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777" />
                            <image xlink:href="../assets/img/gim.svg" style="width: 100%;" />
                        </svg>


                        <div class="container">
                            <div class="carousel-caption text-start">
                                <div class="text-carrusel">
                                    <h1>Encuentra gimnasios</h1>
                                    <p>Muchos gimnasios a tu disposición de tu preferencia.</p>
                                </div>
                                <p>
                                    <a class="btn btn-lg btn-light" href="#seccion3"><span class="dir-secciones">Ver gimnasios
                                            <i id="flecha" class="bi bi-arrow-right"></i>
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777" />
                            <image xlink:href="../assets/img/entreimg.svg" style="width: 100%;" />
                        </svg>

                        <div class="container">
                            <div class="carousel-caption">
                                <div class="text-carrusel">
                                    <h1>Tenemos tu plan ideal</h1>
                                    <p>FitPlan se enfoca en tu comodidad.</p>
                                </div>
                                <p>
                                    <a class="btn btn-lg btn-light" href="#seccion4"><span class="dir-secciones">Ver FitPlan
                                            <i id="flecha" class="bi bi-arrow-right"></i>
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777" />
                            <image xlink:href="@/assets/img/dirimg.svg" style="width: 100vw;"/>
                        </svg>

                        <div class="container">
                            <div class="carousel-caption text-end">
                                <div class="text-carrusel">
                                    <h1>FitHub</h1>
                                    <p>Fomentamos el bienestar mediante el uso de tecnología.</p>
                                </div>
                                <p>
                                    <a class="btn btn-lg btn-light" href="#seccion2">
                                        <span class="dir-secciones">Sobre Nosotros
                                            <i id="flecha" class="bi bi-arrow-right"></i>
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <!-- Marketing messaging and featurettes
            ================================================== -->
            <!-- Wrap the rest of the page in another container to center all the content. -->

            <div class="container marketing">
                <!-- START THE FEATURETTES -->
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading fw-normal lh-1">
                            <b>¿Qué es FitHub?</b>
                        </h2>
                        <p class="lead">
                            Descubre la revolucionaria plataforma Fithub y accede a una red de
                            gimnasios y centros de fitness con una membresía única. Explora
                            opciones fitness, reserva clases y disfruta de una experiencia
                            completa y conveniente. Únete a la comunidad Fithub y lleva tu
                            entrenamiento al siguiente nivel.
                        </p>
                    </div>
                    <div class="col-md-5">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            src="../assets/img/sec1.png" alt="Seccion1" />
                    </div>
                </div>

                <hr class="featurette-divider" id="seccion2"/>

                <div class="row featurette" >
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading fw-normal lh-1">
                            <b>¿Quiénes Somos?</b>
                        </h2>
                        <p class="lead">
                            Nosotros somos una plataforma en línea que conecta a sus miembros
                            con una amplia red de gimnasios y centros de fitness con el
                            objetivo de satisfacer las necesidades de nuestros miembros
                            comprometiéndonos a mejorar su estilo de vida. Con una sola
                            membresía, ofrecemos variedad y comodidad para una experiencia
                            fitness única.
                        </p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                            src="@/assets/img/sec2.png" alt="Seccion1"/>
                    </div>
                </div>

                <hr class="featurette-divider" id="seccion3"/>

                <div class="row featurette">
                    <div class="col-md-12 text-center align-items-center">
                        <h2 class="featurette-heading fw-normal lh-1" style="margin-top: 0">
                            <b>Busca tus gimnasios</b>
                        </h2>
                        <p class="lead">Encuentra gimansios cerca de ti.</p>
                    </div>
                    <div class="col-md-12">
                        <iframe src="https://my.atlist.com/map/73f9ee8c-36c6-4f5f-88ff-8be30f81279d?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="400px" frameborder="0" scrolling="no" allowfullscreen></iframe>
                    </div>
                </div>

                <hr class="featurette-divider" id="seccion4"/>

                <div class="row featurette">
                    <div class="col-md-12 text-center align-items-center">
                        <h2 class="featurette-heading fw-normal lh-1" style="margin-top: 0">
                            <b>Un plan para todos</b>
                        </h2>
                        <p class="lead">
                            FitPlan es tu mejor amigo para cuidar tu bienestar cuando lo
                            desees.
                        </p>
                    </div>
                    <div class="col-md-6 d-flex offset-md-3 custom-div">
                        <div class="cards">
                            <div class="card">
                                <div class="title">
                                    <div class="circle"></div>
                                    <i class="bi bi-lightning-charge-fill"></i>
                                    <h2>FitPlan</h2>
                                </div>
                                <div class="price">
                                    <h4><sup> S/. </sup> 89.99</h4>
                                </div>
                                <div class="option">
                                    <ul>
                                        <li>
                                            <i class="bi bi-check-lg"></i>Gimnasios cerca de ti.
                                        </li>
                                        <li>
                                            <i class="bi bi-check-lg"></i>Variedad de opciones de
                                            entrenamiento.
                                        </li>
                                        <li>
                                            <i class="bi bi-check-lg"></i>Horarios de tu elección.
                                        </li>
                                    </ul>
                                </div>
                                <a class="custom-button" href="/compra">¡Ordena ya!</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr class="featurette-divider" />
                <!-- /END THE FEATURETTES -->
            </div>
            <!-- /.container -->

            <!-- FOOTER -->
            <footer class="container">
                <p>
                    &copy; 2023, FitHub &middot;
                    <a href="#">Documentación</a> &middot; <a href="#">Repositorio</a>
                </p>
            </footer>
        </main>
    </body>
</template>
<script>
import HeaderComp from '@/components/HeaderComp.vue';
export default {
    components() {
        HeaderComp;
    },
    components: { HeaderComp }
};

</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&family=Nunito:wght@500;700;800&family=Poppins:wght@300&display=swap");

/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */
* {
    font-family: "Poppins", sans-serif;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
    margin-bottom: 4rem;
}

/* Since positioning the image, we need to help out the caption */
.carousel-caption {
    bottom: 3rem;
    z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
    height: 32rem;
}

.text-carrusel {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
}

.dir-secciones {
    display: flex;
    align-items: center;
}

#flecha {
    color: #28325b;
    margin-left: 8px;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
    margin-bottom: 1.5rem;
    text-align: center;
}

.marketing .col-lg-4 p {
    margin-right: 0.75rem;
    margin-left: 0.75rem;
}

/* Featurettes
------------------------- */

.featurette-divider {
    margin: 5rem 0;
    /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {

    /* Bump up size of carousel content */
    .carousel-caption p {
        margin-bottom: 1.25rem;
        font-size: 1.25rem;
        line-height: 1.4;
    }

    .featurette-heading {
        color: #474d89;
        font-size: 50px;
    }
}

@media (min-width: 62em) {
    .featurette-heading {
        margin-top: 7rem;
    }
}

/* Tarjeta */
.custom-div {
    border-radius: 80px;
}

.cards {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 85px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card {
    width: auto;
    margin: 25px;
    padding: 40px 20px;
    background: white;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.5);
    text-align: center;
    transition: all 0.5s ease;
}

.title .bi {
    color: #474d89;
    font-size: 3rem;
    width: auto;
    height: auto;
    line-height: 100px;
    text-align: center;
}

.title h2 {
    color: black;
    font-size: 35px;
    margin-top: 15px;
}

.price {
    color: black;
    font-size: 35px;
}

.option ul {
    margin-top: 10px;
}

.option ul li {
    list-style: none;
    color: black;
}

.custom-button {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 15px;
    background: #474d89;
    border-radius: 40px;
    color: white;
    text-decoration: none;
}

.card:hover {
    transform: scale(1.05);
}
</style>
