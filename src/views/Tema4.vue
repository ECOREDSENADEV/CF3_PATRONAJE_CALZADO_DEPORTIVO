<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Moldes, conceptos y tipos
    
    .bg-full-width-2.bg-color-5.mb-3
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-7.mb-3.mb-lg-0
            .bg-color-9.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-2
                  figure
                    img(src='@/assets/curso/temas/tema4/1.png', alt='')
                .col-lg.order-1
                  .p-4
                    p.mb-0(data-aos="fade-up") En la fabricación del calzado, los moldes (también llamados patrones) son plantillas planas que representan las distintas piezas que conforman la capellada (parte superior del zapato). A partir de estos moldes se realiza el corte y el ensamblaje de los materiales que darán forma al producto final.
          .col-lg-5
            div.bg-color-4.p-5.tarjeta(data-aos="fade-left")
              img.mb-3.d-none.d-lg-flex(src="@/assets/curso/temas/tema4/1.svg", style="max-width: 90px")
              p.mb-0 Su función es garantizar la precisión, simetría, confort y diseño, adaptándose a cada referencia de calzado y permitiendo reproducir el modelo de manera uniforme a través de las diferentes tallas.
      
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Desarrollo del molde
        
        p.mb-5 El proceso de creación del molde comienza con el perfil de la <b>horma</b>, utilizando técnicas como:

        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-2.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema4/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Enmascarado
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-2.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema4/3.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Trazado de líneas guía
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-2.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema4/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Elaboración de máscara compensada
    
    .bg-full-width-2.bg-fondo-2.mb-3
      .px-4.px-md-5.py-4
        p.mb-5 Con base en esta plantilla base, se diseñan y trazan las piezas que posteriormente se <b>escalarán según la talla requerida</b>.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Tipos de moldes utilizados en calzado
        
        p.mb-5 Cada tipo de molde cumple una función específica en la fabricación, desde el diseño hasta el ensamblaje final. La siguiente tabla resume los moldes más comunes:

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema4/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Molde base o patrón
                p.text-center Define la estructura del modelo. Es la referencia principal para desarrollar variantes.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema4/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Molde de corte
                p.text-center Se utiliza para cortar los materiales definitivos de la capellada.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema4/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Molde de forro y refuerzo
                p.text-center Corresponde a piezas internas que brindan estructura, confort y durabilidad al calzado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema4/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Molde de montaje o plantilla de armado
                p.text-center Sirve como guía en el proceso de ensamblaje y construcción del calzado.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/temas/tema4/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4.bg-color-11.p-2 Molde de rayado o marcación
                p.text-center Indica sobre los materiales las líneas de doblez, piquetes, centros, costuras y otras marcas técnicas.   
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/temas/tema4/10.png', alt='')
        
    .row.justify-content-center 
      .col-lg-10
        div.bg-color-10.p-5.tarjeta
          p.mb-0 Una correcta elaboración y aplicación de estos moldes tiene un impacto directo en la calidad final del calzado, permitiendo eficiencia en la producción y fidelidad en el diseño.


</template>

<script>
export default {
  name: 'Tema4',
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
