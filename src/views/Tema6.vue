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

    #t_6_1.titulo-segundo.color-acento-contenido
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
    
    div.bg-color-7.p-4.mb-3
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
    
    .row.justify-content-center.mb-5
      .col-lg-10
        div.bg-color-7.p-4
          p.mb-5 Para el trazado de la capellada, se dibuja una línea paralela a 12 mm hacia atrás desde el contorno lateral, y otra paralela a 10 mm hacia adentro para el aumento que permitirá unir con la puntera. Finalmente, se conecta el punto a 35 mm de la lengüeta con el punto de intersección de las dos líneas anteriores, utilizando una curva fluida que define el contorno de la capellada.
          .row.justify-content-center.mb-5
            .col-lg-8
              .titulo-sexto.color-acento-contenido
                h5 Figura 55.
                span Construcción capellada
              figure
                img(src="@/assets/curso/temas/tema6/8.png", alt="Molde de la capellada elaborado desde puntos sobre el eje del empeine y la puntera, conectados con línea recta y curva extendida.  ", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción bigotera de talón

    .row.mb-5
      .col-lg-5.order-2
        figure
          img(src="@/assets/curso/temas/tema6/9.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Para iniciar la construcción de la bigotera, se traza una línea paralela 10 mm debajo de la línea de profundidad, luego se marca un punto a 60 mm sobre la línea de profundidad. Desde ese punto, se traza una línea perpendicular que se une con la línea paralela a 10 mm. A continuación, se localiza un punto a 15 mm por debajo de la línea paralela obtenida anteriormente sobre la línea de talón y desde allí se traza una línea horizontal de 20 mm hacia el interior. Posteriormente, se marca otro punto a 25 mm sobre la línea paralela a la de profundidad, partiendo desde la línea del talón, y se une con la línea previamente trazada de 20 mm.
        p Finalmente, se conectan todos estos puntos mediante líneas curvas suaves, siguiendo las guías visuales indicadas en el diseño, para formar el contorno característico de la bigotera.

    .row.justify-content-center.mb-3
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 56.
          span Construcción bigotera de talón
        figure
          img(src="@/assets/curso/temas/tema6/10.png", alt="Molde técnico de la bigotera con puntos referenciados desde la línea de profundidad, plantilla y talón, unidos con líneas curvas suaves. ", data-aos="zoom-in")
    .row.justify-content-center.mb-5
      .col-lg-8
        .row.align-items-center.px-4.px-md-5.py-4.bg-color-15.tarjeta
          .col-lg-auto
            img(src="@/assets/curso/temas/tema6/11.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Nota</b>: esta pieza puede modificarse según los criterios y decisiones del patronista, adaptándose al diseño específico que se desee desarrollar.
  
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción talón
    
    div.bg-color-3.p-4
      p.mb-5 Este modelo puede incluir o no la pieza del talón, la cual se adapta según el diseño propuesto. En este caso, se construirá un talón con las siguientes características: Para comenzar, se marca un punto sobre la línea de la cordonera, a 22 mm del borde superior de la boca. Luego, se traza una línea paralela a la línea de profundidad, a una distancia de 28 mm. Sobre esta línea, se marcan dos puntos adicionales: uno a 50 mm desde la línea de entrada y otro sobre la línea de plantilla, a 30 mm de la misma referencia. A continuación, se conectan estos tres puntos mediante líneas rectas. Finalmente, se suavizan las intersecciones con curvas y se extienden hasta alcanzar la línea de montaje, conformando así la forma definitiva del talón.
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido
            h5 Figura 57.
            span Construcción talón
          figure
            img(src="@/assets/curso/temas/tema6/12.png", alt="Molde curvo del talón diseñado con líneas paralelas y puntos sobre entrada y plantilla, conectados para dar forma al contrafuerte trasero. ", data-aos="zoom-in")
    
    separador

    #t_6_2.titulo-segundo.color-acento-contenido
      h2 6.2 Despiece de moldes para el modelo tipo Royal
    
    p.mb-5 En esta sección se detallan los pasos para el despiece de cada una de las partes del modelo tipo Royal:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
      div(titulo="Despiece puntera").justify-content-center
        p.ms-5 Para elaborar este molde, se comienza doblando una cartulina por su eje de simetría. Luego, se coloca el patrón sobre dicho eje, alineando correctamente el eje de puntera. A partir de allí, se realiza la simetría del diseño para obtener el molde completo.
        .row.justify-content-center.mb-3
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 58.
              span Despiece puntera
            figure
              img(src="@/assets/curso/temas/tema6/13.png", alt="Molde de la puntera simétrica, construido sobre eje central y ajustado para asegurar continuidad entre los perfiles externo e interno. ").justify-content-center
        p.ms-5 <b>Nota:</b> en caso de ser necesario, se debe ajustar la intersección entre las partes interna y externa del molde para asegurar una correcta continuidad en el diseño.
      div(titulo="Despiece capellada").justify-content-center
        p.ms-5 Para iniciar el proceso de despiece, trace un eje de simetría sobre una cartulina. Luego, ubique sobre este eje el patrón correspondiente a la capellada y dibuje su contorno. A continuación, añada los aumentos necesarios para el armado, tanto en la cordonera como en la puntera, hasta llegar a la línea de nacimiento de la lengüeta. Este procedimiento permitirá obtener una base precisa para el desarrollo del molde completo.
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 59.
              span Despiece capellada
            figure
              img(src="@/assets/curso/temas/tema6/14.png", alt="Molde de la capellada trazado en eje simétrico, con aumentos técnicos en uniones con cordonera y puntera hasta la línea de lengüeta. ").justify-content-center
      div(titulo="Despiece lengüeta").justify-content-center
        p.ms-5 Este se realiza igual que el modelo anterior.
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 60.
              span Despiece lengüeta
            figure
              img(src="@/assets/curso/temas/tema6/15.png", alt="Molde simétrico de la lengüeta trazado sobre eje central, con contorno claro y márgenes técnicos para costura, igual al procedimiento del modelo Court. ")
      div(titulo="Despiece lateral").justify-content-center
        p.ms-5   Para obtener la pieza del lateral trasero, la cual tiene la función de ensamblar la cordonera, la puntera y el talón. Por este motivo, se le agrega un margen de 10 mm en la zona del talón y 8 mm en la cordonera donde se unirán estas piezas.
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 61.
              span Despiece lateral
            figure
              img(src="@/assets/curso/temas/tema6/16.png", alt="Molde de la pieza lateral con márgenes de 10 mm para la unión con el talón y 8 mm para la unión con la cordonera, diseñado para acoplar múltiples piezas. ")
      div(titulo="Despiece cordonera").justify-content-center
        p.ms-5 Para elaborar la cordonera, se comienza trazando su forma base. Desde un punto ubicado entre el segundo y tercer ojalete, se delimita el contorno de la pieza y se adiciona un margen de 4 mm en todo su perímetro, correspondiente al aumento para cosido y vuelto. En este modelo específico no se marca la ubicación del rayador, ya que la costura de seguridad habitual se reemplaza por la unión con la puntera, la cual proporciona el refuerzo necesario e impide que la cordonera se abra. Finalmente, se señalan los puntos de ubicación de los ojaletes de manera precisa.
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 62.
              span Despiece cordonera
            figure
              img(src="@/assets/curso/temas/tema6/17.png", alt="Molde base de la cordonera con margen de 4 mm en todo el contorno. No incluye rayador, ya que el refuerzo se genera al ensamblarse con la puntera. ")
      div(titulo="Despiece talón").justify-content-center
        p.ms-5 Para el despiece del talón, se deben considerar los siguientes aumentos de armado: 10 mm en las zonas de unión con el lateral, la cordonera y la bigotera; 4 mm en la parte superior (boca) destinados al proceso de cosido y vuelto, y un aumento adicional de 2 mm sobre la línea del talón para permitir una correcta unión con el talón interno.
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 63.
              span Despiece talón
            figure
              img(src="@/assets/curso/temas/tema6/18.png", alt="Molde técnico del talón con aumentos de 10 mm en sus puntos de unión con el lateral, cordonera y bigotera, y margen de 4 mm para cosido en la parte superior. ")
      div(titulo="Despiece bigotera").justify-content-center
        p.ms-5 Para el despiece de la bigotera, se comienza trazando un eje central sobre la cartulina. Luego, se posiciona el molde patrón alineado con la línea del talón correspondiente y se marca su contorno. Posteriormente, se añade el margen de 4 mm en la parte superior para permitir el proceso de cosido y vuelto.
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 64.
              span Despiece bigotera
            figure
              img(src="@/assets/curso/temas/tema6/19.png", alt="Molde simétrico de la bigotera alineado a la línea del talón, con 4 mm de aumento en la parte superior para volteado y ensamblaje con las piezas traseras. ")
    
    separador

    #t_6_3.titulo-segundo.color-acento-contenido
      h2 6.3 Moldes forro para el modelo tipo Royal
    
    p.mb-5 Los forros se desarrollan de la misma forma que el modelo anterior, con algunas pequeñas variantes.

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 65.
                span Forro capellada
              figure
                img(src="@/assets/curso/temas/tema6/20.png", alt="Molde del forro de capellada con trazado extendido hasta la línea de montaje, basado en el patrón externo y ajustado para garantizar cobertura interna. ")
            .col-lg-6.order-lg-1
              h5 Forro capellada
              p El procedimiento se realiza de manera similar al modelo anterior, con la diferencia de que en este caso se extiende la curva de nacimiento de la lengüeta hasta alcanzar la línea de montaje. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 66.
                span Forro talón
              figure
                img(src="@/assets/curso/temas/tema6/20.png", alt="Molde alineado a partir del patrón del talón, extendido hasta la línea de montaje con aumentos para asegurar empalme preciso con la capellada interna.  ")
            .col-lg-6.order-lg-1
              h5 Forro talón
              p El procedimiento se realiza de manera similar al modelo anterior, con la diferencia de que en este caso se extiende la línea de la cordonera hasta alcanzar la línea de montaje. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 67.
                span Forro lengüeta
              figure
                img(src="@/assets/curso/temas/tema6/20.png", alt="Molde del forro con los mismos contornos que la lengüeta externa, incorporando 4 mm de aumento en todo el borde para costura y montaje. ")
            .col-lg-6.order-lg-1
              h5 Forro lengüeta
              p El procedimiento se realiza de manera similar al modelo anterior.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 68.
                span Moldes abullonado
              figure
                img(src="@/assets/curso/temas/tema6/20.png", alt="Conjunto de moldes para las espumas del cuello y la lengüeta, elaborados con la misma técnica del modelo Court, ajustados a la estructura Royal.  ")
            .col-lg-6.order-lg-1
              h5 Moldes de abullonado Deportivo tipo Royal
              p Se elaboran de la misma forma que el modelo anterior. 



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
