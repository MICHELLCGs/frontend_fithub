<template>
    <footer class="pie-pagina">
        <div class="grupo1">
            <div class="box">
                <figure>
                    <a href="">
                        <img src="" alt="">
                    </a>
                </figure>
            </div>
            <div class="box">
                <h2>Sobre Nosotros</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, incidunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quod.</p>
            </div>
            <div class="box">
                <h2>¿Ya nos sigues?</h2>
                <div class="red-social">
                    <a href="#"> <i class="bi bi-facebook"></i> </a>
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#"></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: "FooterComp",
  methods: {
    isRouteActive(routeName) {
      return this.$route.name === routeName;
    },
  },
}
</script>