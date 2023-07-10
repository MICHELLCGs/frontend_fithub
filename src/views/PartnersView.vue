<template>
    <div class="p-4 p-md-5 mb-4 text-bg-dark alinear">
        <div class="col-md-6 px-0">
            <h1 class="display-4">¡Aumenta tus ganancias y amplía tu alcance con FitHub!</h1>
            <p class="lead my-3">Forma parte de nuestra red de partners y beneficite de una mayor visibilidad y un
                incremento en tu base de clientes.</p>
            <p class="lead mb-0">
                <a href="#" class="custom-button">¡Sé nuestro partner hoy!</a>
            </p>
        </div>
    </div>
    <div class="container marketing">
        <div class="row featurette">
            <div class="col-md-12 align-items-center">
                <h2 class="featurette-heading fw-normal lh-1" style="margin-top: 2.5rem">
                    <b>¿Por qué FitHub?</b>
                </h2>
                <div class="slide-container">
                    <div class="slide-content">
                        <div class="card-wrapper row">
                            <div class="pcard col-md-3 mb-4">
                                <div class="image-content">
                                    <span class="overlay"></span>
                                    <div class="card-image">
                                        <img src="@/assets/img/partcard1.svg" alt="" class="card-img">
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">Abre las puertas. <br />a nuevas audiencias</h2>
                                    <p class="description">Atrapa la atención de usuarios nuevos y diversos.</p>
                                </div>
                            </div>
                            <div class="pcard col-md-3 mb-4">
                                <div class="image-content">
                                    <span class="overlay"></span>
                                    <div class="card-image">
                                        <img src="@/assets/img/partcard2.svg" alt="" class="card-img">
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">Incrementa tus ganancias</h2>
                                    <p class="description">Aumenta tus beneficios económicos con tarifas competitivas.</p>
                                </div>
                            </div>
                            <div class="pcard col-md-3 mb-4">
                                <div class="image-content">
                                    <span class="overlay"></span>
                                    <div class="card-image">
                                        <img src="@/assets/img/partcard3.svg" alt="" class="card-img">
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">Gestión eficiente.. <br /> de datos </h2>
                                    <p class="description">Accede y controla los datos actualizados de los usuarios.</p>
                                </div>
                            </div>
                            <div class="pcard col-md-3 mb-4" style="margin-right:0">
                                <div class="image-content">
                                    <span class="overlay"></span>
                                    <div class="card-image">
                                        <img src="@/assets/img/partcard4.svg" alt="" class="card-img">
                                    </div>
                                </div>

                                <div class="card-content">
                                    <h2 class="name">Amplía tu <br /> exposición</h2>
                                    <p class="description">FitHub te conecta en línea, mejorando tu presencia en el mercado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="row featurette">
                    <div class="col-md-9 align-items-center">
                        <h2 class="featurette-heading fw-normal lh-1" style="margin-top: 2.5rem">
                            <b>Alcance nuevos clientes</b>
                        </h2>
                        <p class="lead">
                            Como partner de FitHub, tu negocio formará parte de nuestra red de gimnasios y estará al alcance
                            de miles de usuarios que buscan opciones de fitness. 
                            <br/> Aprovecha esta oportunidad para aumentar tu visibilidad y captar la
                            atención de una audiencia más amplia.
                        </p>

                    </div>
                </div>
                <div class="row featurette">
                    <div class="col-md-9 align-items-center">
                        <h2 class="featurette-heading fw-normal lh-1" style="margin-top: 2.5rem">
                            <b>Empezar es muy sencillo</b>
                        </h2>
                        <p class="lead">
                            FitHub simplifica el proceso de incorporación, brindándote una plataforma intuitiva donde
                            podrás registrar y gestionar tu gimnasio. <br/> Con tan solo unos simples pasos, podrás conectar con
                            usuarios interesados y comenzar a ofrecer tus servicios a través de nuestra plataforma.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        <img src="@/assets/img/fitnom2.svg" alt="">
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>Sobre Nosotros</h2>
                <a href="#seccion1" style="text-decoration: none;">
                    <p>¿Qué es FitHub?</p>
                </a>
                <p>Repositorio</p>
                <p>Documentación</p>
            </div>
            <div class="box">
                <h2>Contáctanos</h2>
                <router-link to="/partners" style="text-decoration: none;">
                    <p>Para Partners</p>
                </router-link>
                <p>Saber más</p>
            </div>
            <div class="box">
                <h2>¿Ya nos sigues?</h2>
                <div class="red-social">
                    <a href="#"><i class="bi bi-facebook"></i> </a>
                    <a href="#"><i class="bi bi-instagram"></i> </a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                    <a href="https://github.com/MICHELLCGs/frontend_fithub.git" target="_blank"><i
                            class="bi bi-github"></i></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small> &copy; 2023 <b>FitHub</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
</template>

<script>

</script>

<style>
.alinear {
    display: flex;
    align-items: center;
    height: 500px;
}

.custom-button {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: #474d89;
    color: white;
    text-decoration: none;
    transition: box-shadow 0.3s ease-in-out;
}

.custom-button:hover {
    box-shadow: 0 4px 8px #474d89;
}

.display-4 {
    font-size: 2.5rem;
    font-weight: bold;
}

/*carrusel*/

.slide-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: auto;
    width: 100%;
    padding: 40px 0 0 0;
}

.slide-content {
    margin: 0 40px;
}

.pcard {
    width: 240px;
    height: 100%;
    border-radius: 25px;
    background-color: #FFF;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 0;

}

.image-content,
.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;
}

.image-content {
    position: relative;
    row-gap: 5px;
    padding: 25px 0 5px 0;
}


.overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #FAA6A6;
    border-radius: 25px 25px 0 25px;
}

.overlay::before,
.overlay::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: #FAA6A6;
}

.overlay::after {
    border-radius: 0 25px 0 0;
    background-color: #fff;
}

.card-image {
    position: relative;
    height: 150px;
    width: 150px;
}

.card-image .card-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.card-content {
    width: 100%;
    text-align: center;
}

.name {
    font-size: 20px;
    font-weight: 500;
    color: #333;
}

.description {
    font-size: 16px;
    color: #707070;
    text-align: center;
}</style>
  