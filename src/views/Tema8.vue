<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Elaboración maqueta de comprobación
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/temas/tema8/1.png", data-aos="zoom-in") 
        .col-lg-9.order-lg-1
          .bloque-texto-a__texto.p-4
            p La maqueta es una representación tridimensional del diseño del calzado, elaborada a partir de los moldes iniciales. Se emplea como herramienta de verificación durante el desarrollo del patrón, permitiendo al patronista analizar de manera práctica cómo se ajustan y se comportan las piezas del diseño sobre la horma.
    
    separador

    #t_8_1.titulo-segundo.color-acento-contenido
      h2 8.1 Funciones principales de la maqueta
    
    p.mb-5 La maqueta cumple varias funciones esenciales dentro del proceso de patronaje:

    .row.align-items-start
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema8/2.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Verificar el ajuste").justify-content-center
            p.mb-0.ms-5 Permite comprobar si las piezas del molde encajan correctamente sobre la horma, identificando tensiones, pliegues o sobrantes.
          div(titulo="Evaluar el diseño").justify-content-center
            p.mb-0.ms-5 Ayuda a revisar la distribución estética de las piezas (capellada, cordonera, talón, puntera, entre otras) y confirmar que respeten las proporciones y líneas proyectadas.
          div(titulo="Corregir inconsistencias").justify-content-center
            p.mb-0.ms-5 Facilita la detección de errores o desajustes en el trazado del molde, permitiendo hacer correcciones antes de cortar en materiales definitivos.
          div(titulo="Optimizar tiempos y materiales").justify-content-center
            p.mb-0.ms-5 Al identificar errores tempranamente, se reduce el desperdicio de material y se evitan retrabajos durante la producción.
    
    separador

    #t_8_2.titulo-segundo.color-acento-contenido
      h2 8.2 Materiales comunes para la elaboración de maquetas
    
    p.mb-5 Los materiales más utilizados para construir maquetas de comprobación son:

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema8/3.png", alt="")
            .col-lg-6.order-lg-1
              h5 Papel <em>kraft</em> o cartulina
              p Fáciles de manipular y económicos, ideales para pruebas preliminares.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema8/4.png", alt="")
            .col-lg-6.order-lg-1
              h5 <em>Telford</em>
              p Plástico delgado y flexible que ofrece mayor precisión en el ajuste y permite una revisión detallada del diseño.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema8/5.png", alt="")
            .col-lg-6.order-lg-1
              h5 <em>Cambrelle</em>
              p Tejido no tejido que simula mejor el comportamiento de materiales reales como la lona o el forro.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/temas/tema8/6.png", alt="")
            .col-lg-6.order-lg-1
              h5 Cuero (retales)
              p Utilizado en maquetas más avanzadas cuando se requiere una verificación más cercana al calce y acabado reales.
    
    separador

    #t_8_3.titulo-segundo.color-acento-contenido
      h2 8.3 Importancia de la maqueta

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema8/7.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-8.h-100.p-5.tarjeta(data-aos="fade-left")
          p.mb-0.mt-4 El uso de maquetas es una práctica clave en el diseño de calzado, ya que permite detectar oportunamente fallas estructurales o estéticas. Gracias a este paso, se garantiza que el producto final no solo cumpla con las condiciones de funcionalidad y comodidad, sino que también conserve una composición visual equilibrada
          
         

</template>

<script>
export default {
  name: 'Tema8',
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
