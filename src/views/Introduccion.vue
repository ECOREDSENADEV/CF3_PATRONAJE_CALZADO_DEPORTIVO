<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width-2.bg-fondo-1.mb-3
      .px-4.px-md-5.py-4
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8
            p.mb-5 En la industria del calzado deportivo, el diseño y la precisión en el desarrollo de patrones son fundamentales para garantizar productos de alta calidad, confort y desempeño. El proceso de patronaje combina técnicas manuales especializadas y conocimientos en diseño técnico, adaptados a las exigencias específicas de los diferentes tipos de calzado deportivo.
            .bg-color-1.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.order-2
                  figure
                    img(src='@/assets/curso/intro/2.png', alt='')
                .col-lg.order-1.mb-3.mb-lg-0
                  .p-4
                    p.mb-0(data-aos="fade-up") Este componente formativo está orientado a desarrollar las habilidades necesarias para la creación de moldes patrón y moldes de corte aplicados al calzado deportivo. Se inicia con la preparación de la horma y el enmascarado, un paso esencial para definir las líneas de diseño, áreas funcionales y características ergonómicas propias de este tipo de calzado. Posteriormente, se elabora la camisa o trepa manual, que servirá como base para el desarrollo del molde patrón.

        .row.justify-content-center 
          .col-lg-10
            .row.align-items-center.px-4.px-md-5.py-4.bg-color-2.tarjeta
              .col-lg-auto
                img(src="@/assets/curso/intro/3.png", style="max-width: 170px").mx-auto
              .col-lg
                p.mb-0 A partir de la trepa, se construye el molde patrón, que establece las proporciones y medidas precisas para cada modelo deportivo, garantizando su funcionalidad, resistencia y ajuste. También se abordará el proceso de despiece, referenciado y comprobación de moldes, permitiendo organizar adecuadamente cada una de las piezas necesarias para la producción y el ensamble, considerando aspectos técnicos como el refuerzo, la flexibilidad y la durabilidad. Durante el componente, se aplicarán metodologías prácticas y criterios técnicos actualizados para diseñar patrones que respondan a las exigencias de uso del calzado deportivo, asegurando un balance entre rendimiento, confort y estilo.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
