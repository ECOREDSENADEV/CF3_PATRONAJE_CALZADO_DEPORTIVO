<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Elaborar moldes para el modelo tipo Royal
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este modelo guarda similitud con el tipo Court; sin embargo, su principal diferencia radica en que la capellada está seccionada en la zona de la puntera. Además, el diseño del talón puede presentar variaciones según los requerimientos estéticos y funcionales del modelo a desarrollar.
    
    separador

    .titulo-segundo.color-acento-contenido
      h2 6.1 Elaborar molde patrón para el modelo tipo Royal
    
    p.mb-5 Para el desarrollo de este molde se toma la máscara ajustada y con los aumentos de montaje.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción cordonera y boca
    
    p.mb-5 Esta se realiza de la misma forma que en el modelo anterior.

    .row.mb-5.align-items-end
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema6/2.png", data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 53.
          span Construcción cordonera y boca
        figure
          img(src="@/assets/curso/temas/tema6/3.png", alt="Trazado inicial de líneas paralelas y puntos clave que definen la forma estructural de la cordonera y la abertura del modelo Royal.  ", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción puntera
    
    div.bg-color-7.p-4
      p.mb-5 Para construir la puntera, se dibuja el eje de capellada y de empeine, luego se traza una línea paralela a 5 mm por encima de la línea de chapeta, la cual se prolonga mediante una curva suave hasta encontrarse con la línea metatarsiana. A continuación, se determina el eje de la puntera: desde el eje central, se descienden 20 mm sobre la línea de montaje y se une este punto con la intersección entre la línea de puntera y el eje central. De esta manera, se obtiene el nuevo eje de la puntera. Es importante tener en cuenta que la forma de esta pieza puede variar según el diseño requerido, siempre respetando como referencia el margen de 5 mm por encima de la línea de chapeta.
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 54.
            span Construcción puntera
          figure
            img(src="@/assets/curso/temas/tema6/4.png", alt="Diseño técnico de la puntera con eje definido, línea paralela a 5 mm sobre la chapeta y curva conectada a la línea metatarsiana.  ", data-aos="zoom-in")
      .row.justify-content-center 
        .col-lg-10
          .row.align-items-center.px-4.px-md-5.py-4.bg-color-15.tarjeta
            .col-lg-auto
              img(src="@/assets/curso/temas/tema6/5.svg", style="max-width: 90px").mx-auto
            .col-lg.text-white
              p.mb-0 <b>Nota</b>: en caso de que la horma sea asimétrica o presente una diferencia considerable entre el perfil interno y el externo, se recomienda trabajar directamente con los perfiles de la horma para obtener esta pieza de manera más precisa y ajustada al diseño.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción capellada
    
    p.mb-5 Para definir la capellada y la lengüeta del modelo, se inicia trazando un eje que parte de dos puntos; el primero se ubica en la intersección del eje de la capellada con la línea de puntera y el segundo a 12 mm desde el punto de calzada sobre el eje del empeine. Ambos puntos se conectan mediante una línea recta, la cual se extiende 10 mm más allá del contorno de la cordonera, definiendo así el eje principal.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema6/6.png", data-aos="zoom-in")
      .col-lg-8
        div.bg-color-3.p-5.tarjeta(data-aos="fade-left")
          img.mb-2(src="@/assets/curso/temas/tema6/7.svg", style="max-width: 90px")
          p.mb-0 Para la construcción de la lengüeta, desde el punto superior de este eje, se baja una línea perpendicular de 50 mm. Desde el punto ubicado a 12 mm sobre la línea de empeine, se baja otra línea perpendicular de 35 mm. Estos dos puntos se unen con una línea recta, y luego se suaviza la parte superior con una curva redondeada para formar la parte superior de la lengüeta.
      
      


</template>

<script>
export default {
  name: 'Tema6',
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
