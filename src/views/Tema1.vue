<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Líneas y puntos básicos para el desarrollo del patronaje

    .bg-full-width-2.bg-fondo-2.mb-3
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.tarjeta.p-4.h-100(data-aos="fade-left")
              p.mb-0(data-aos="fade-left") En la industria de la fabricación de calzado, la precisión en el desarrollo de moldes es fundamental para garantizar la calidad y estandarización de los productos. El proceso de elaboración de moldes requiere el dominio de diversas técnicas manuales y el conocimiento de los principios de diseño y patronaje.
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/1.svg" data-aos="zoom-in")
          .col-lg-5.mb-3.mb-lg-0
            .bg-color-4.tarjeta.p-4.h-100(data-aos="fade-left")
              p.mb-0(data-aos="fade-left") Este componente formativo aborda los pasos esenciales para la creación de moldes patrón y moldes de corte, desde la preparación inicial de la horma hasta la obtención de piezas listas para la producción. Se inicia con el proceso de enmascarado de la horma, una etapa clave para definir las líneas y formas que darán estructura al modelo. Posteriormente, se desarrolla la camisa (trepa) de forma manual, la cual sirve como base para la construcción del molde patrón.

        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema1/2.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") A partir de la trepa, se procede a la elaboración del molde patrón, que actúa como referencia principal para la fabricación del calzado, asegurando medidas y proporciones adecuadas. Finalmente, se profundiza en la elaboración de moldes específicos para los modelos tipo y Oxford, incluyendo el despiece, referenciado y comprobación de los moldes, un proceso crucial para identificar y organizar las piezas necesarias para el ensamble del calzado.
        
            .bg-color-1.tarjeta.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/3.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 A lo largo de este módulo, se aplicarán técnicas manuales y criterios técnicos que permitirán desarrollar moldes con precisión y eficiencia, garantizando la funcionalidad y estética del producto final.
            
            p Al iniciar el patronaje, es fundamental conocer los puntos y líneas guía básica, ya que sirven de referencia para cualquier modelo de calzado. Aunque estos pueden variar según el diseño, siempre deben marcarse sobre la horma. Un patronista debe dominar su uso para garantizar precisión en la elaboración de los moldes.

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Punto metatarsiano
    
    p.mb-5 Para marcar las líneas básicas, primero identificaremos los puntos metatarsianos, que corresponden a los cinco huesos del pie articulados con los dedos. Estos puntos, ubicados entre el primer y quinto metatarsiano, se sitúan en las zonas más prominentes a cada lado de la base de la horma.

    .bg-full-width-2.bg-color-5.mb-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5
          .col-lg-10
            div.bg-color-2.p-4.tarjeta(data-aos="fade-left")
              .row
                .col-lg-7.order-2
                  figure
                    img(src="@/assets/curso/temas/tema1/3.png", data-aos="zoom-in")
                .col-lg-5.order-1.mb-3.mb-lg-0
                  img.mb-3(src="@/assets/curso/temas/tema1/4.svg", style="max-width: 90px")
                  p.mb-0 Se obtienen colocando el borde de la horma por la línea de plantilla sobre una superficie recta de forma perpendicular de tal manera que la parte posterior de la horma toque esta superficie el otro punto de contacto sobre la superficie o punto tangencial será nuestro punto metatarsiano, esto se realiza en las dos caras de la horma como lo indica la siguiente imagen.

        .row.justify-content-center.mb-5
          .col-lg-5.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Punto metatarsiano externo
            figure
              img(src="@/assets/curso/temas/tema1/5.png", data-aos="fade-up", alt="Fotografía técnica de una horma de calzado con marcas para identificar el punto metatarsiano externo, ubicado en la zona lateral delantera. ")
          .col-lg-5.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Punto metatarsiano interno
            figure
              img(src="@/assets/curso/temas/tema1/6.png", data-aos="fade-down", alt="Fotografía técnica de una horma de calzado con marcas que señalan el punto metatarsiano interno, en la parte media frontal interna. ")

        p A continuación, se explican los puntos clave que se deben marcar sobre la horma para continuar con el proceso de diseño y construcción del calzado. Cada uno tiene una función específica en la configuración del modelo.
    
    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 3.
                span Línea metatarsiana
              figure
                img(src="@/assets/curso/temas/tema1/7.png", alt="Fotografía lateral de una horma con cinta métrica que une los puntos metatarsianos interno y externo, mostrando el trazo recto de la línea metatarsiana sobre la superficie del calzado. ")
            .col-lg-6.order-lg-1
              h5 Línea metatarsiana
              p Para trazar esta línea, se utiliza una cinta métrica de manera que una los puntos metatarsianos interno y externo. Luego, se marca con el portaminas, tal como se ilustra en la siguiente imagen.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 4.
                span Punto de calzada
              figure
                img(src="@/assets/curso/temas/tema1/8.png", alt="Vista lateral de una horma con marca circular en la zona central del empeine, donde se cruzan el eje del empeine y la línea metatarsiana. ")
            .col-lg-6.order-lg-1
              h5 Punto de calzada
              p Se obtiene en la intersección entre el eje del empeine y la línea metatarsiana, tal como se aprecia en la imagen.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 5.
                span Punto de atraque
              figure
                img(src="@/assets/curso/temas/tema1/9.png", alt="Dos imágenes comparativas de una horma, una del lado externo y otra del lado interno, con marcas que indican la ubicación del punto de atraque a lo largo de la línea metatarsiana. ")
            .col-lg-6.order-lg-1
              h5 Punto de atraque
              p Este punto se localiza a la mitad de la distancia entre el punto de calzada y la línea de plantilla, siguiendo la trayectoria de la línea metatarsiana. Se determina tanto en el lado interno como en el externo, tal como se ilustra en la siguiente imagen.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 6.
                span Punto de altura de talón
              figure
                img(src="@/assets/curso/temas/tema1/10.png", alt="Fotografía de la parte posterior de una horma con cinta métrica vertical mostrando la medición de la altura del talón desde la plantilla hasta el punto superior del eje. ")
            .col-lg-6.order-lg-1
              h5 Punto de altura de talón
              p Este punto se obtiene midiendo desde la línea de plantilla hacia la parte superior, específicamente sobre el eje del talón, de la siguiente manera:
              p La altura del talón se calcula sumando al número de la horma:
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-6
                  p.mb-0 Para calzado de hombre: número de la horma + 20 mm
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-6
                  p.mb-0 Para calzado de mujer: número de la horma + 18 mm
              p Ejemplo: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-6
                  p.mb-0 Horma N.º 40 + 20 mm = 60 mm (altura del talón para hombre)
                li.mb-0.d-flex
                  i.fas.fa-check-circle.bg-color-6
                  p.mb-0 Horma N.º 40 + 18 mm = 58 mm (altura del talón para mujer)
              p Este procedimiento se representa en la siguiente imagen.
    
    p.mb-5 A continuación,  se detallan las líneas y puntos adicionales que permiten completar el trazado del contorno sobre la horma. Estas referencias son esenciales para definir la forma del corte y garantizar un ajuste preciso del calzado.

    TabsB.color-acento-contenido.mb-5(data-aos="fade-up")
      .py-4.py-md-5(titulo="Línea de profundidad" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Línea de profundidad
            p Se obtiene uniendo con la cinta métrica el punto de altura del talón con el punto de atraque. Una vez alineados, se marca la línea, tal como se indica en la imagen.
        
          .col-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 7.
              span Línea de profundidad
            figure
              img(src="@/assets/curso/temas/tema1/12.png", alt="Secuencia de imágenes de una horma vista desde diferentes ángulos (externo, interno, frontal y posterior), con cinta métrica y líneas marcadas que muestran el trazo de la línea de profundidad al unir el punto de altura del talón con el punto de atraque. ")
      .py-4.py-md-5(titulo="Punto de entrada" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Punto de entrada
            p Se determina midiendo desde el punto de calzada hacia arriba una distancia equivalente al número de la horma más un valor adicional, según el tipo de calzado:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-6
                p.mb-0 Para horma de dama o niño: número de la horma + 28 mm
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-6
                p.mb-0 Para horma de hombre: número de la horma + 30 mm
            p Ejemplo:
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-6
                p.mb-0 •	Horma N.º 40 + 30 mm = 70 mm
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-6
                p.mb-0 •	Horma N.º 40 + 28 mm = 68 mm
            p Este procedimiento se representa en la siguiente imagen.
          .col-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 8.
              span Punto de entrada
            figure
              img(src="@/assets/curso/temas/tema1/13.png", alt="Vista superior y lateral de una horma con marcas que indican el punto de entrada, ubicado sobre el empeine a una distancia específica desde el punto de calzada, según el tipo y número de horma. ")
      .py-4.py-md-5(titulo="Línea de entrada" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Línea de entrada
            p Se traza colocando el metro en escuadra a 90 grados justo debajo del punto de entrada y dejándolo caer libremente sobre la horma hasta alcanzar la línea de plantilla, en ambos lados de la horma. Este procedimiento se representa en la siguiente imagen.
            
          .col-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 9.
              span Línea de entrada
            figure
              img(src="@/assets/curso/temas/tema1/14.png", alt="Vista lateral de una horma con una línea vertical descendente desde el punto de entrada hasta la línea de plantilla, indicando el trazo perpendicular que define la apertura superior del calzado. ")
      .py-4.py-md-5(titulo="Línea de tobillo" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Línea de tobillo
            p Se obtiene colocando la cinta métrica a partir del punto de entrada  hasta  la parte inferior de la línea del talón, luego se dibuja como lo indica la siguiente imagen en ambas caras de la horma.
          .col-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 10.
              span Línea de tobillo
            figure
              img(src="@/assets/curso/temas/tema1/15.png", alt="Imagen lateral de la horma con una línea curva trazada desde el punto de entrada hasta la base del talón, delimitando el contorno de la zona del tobillo en ambos lados del modelo. ")
      .py-4.py-md-5(titulo="Línea de chapeta o vena" :icono="require('@/assets/curso/temas/tema1/11.svg')")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            h4 Línea de chapeta o vena
            p Esta línea se dibuja marcando el quiebre o filo de la parte delantera de la horma (capellada), como se muestra en la imagen.
          .col-md-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 11.
              span Línea de chapeta o vena
            figure
              img(src="@/assets/curso/temas/tema1/16.png", alt="Vista lateral de una horma con línea curva marcada en el quiebre frontal, correspondiente al filo de la capellada, que delimita la pieza delantera superior del calzado. ") 
    
    p.mb-5 Una vez obtenidos los puntos y líneas guía, se retira la máscara de la horma y se adhiere sobre una cartulina, asegurándola desde la línea de profundidad hacia afuera. A continuación, se perfila y se rectifican los puntos y líneas guía. Finalmente, se marca la referencia, la talla de la horma y se indica si corresponde a la cara externa o interna, tal como se presenta a continuación.

    .row.justify-content-center.align-items-center.bg-color-7.p-4.tarjeta
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 12.
              span Máscara de horma 
            figure
              img(src="@/assets/curso/temas/tema1/17.png", alt="Diagrama que representa la máscara de la horma una vez retirada y adherida sobre cartulina, con líneas y puntos guía marcados para definir la referencia, talla y orientación del molde (cara externa o interna).") 

          .col-lg-3(data-aos="zoom-in")
            img.img-fluid(src='@/assets/curso/temas/tema1/18.png', alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
