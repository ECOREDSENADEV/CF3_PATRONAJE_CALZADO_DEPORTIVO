<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Tipología calzado deportivo y sus variaciones

    p.mb-5 La elección del calzado adecuado para la práctica deportiva suele ser subestimada, pero es un factor <b>determinante para la salud y el rendimiento físico</b>. A diferencia del calzado convencional, el deportivo se diseña con características específicas que <b>favorecen el confort, la prevención de lesiones y el desempeño óptimo en distintas disciplinas. Características clave del calzado deportivo:</b>

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema3/1.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Materiales confortables y transpirables").justify-content-center
            p.mb-0.ms-5 Diseñados para ofrecer agilidad y comodidad, ajustándose de forma firme al pie y reduciendo el riesgo de lesiones.
          div(titulo="Amortiguación").justify-content-center
            p.mb-0.ms-5 Su función esencial es absorber impactos, protegiendo la columna vertebral y el sistema musculoesquelético, especialmente en deportes de alto impacto.
          div(titulo="Gran variedad de modelos según el deporte").justify-content-center
            p.mb-0.ms-5 Existen modelos diseñados específicamente para cada tipo de superficie y movimiento, como las zapatillas de tenis con suelas antideslizantes para pistas.
          div(titulo="Ajuste ergonómico al pie").justify-content-center
            p.mb-0.ms-5 Se adaptan a la forma natural del pie, mejorando el rendimiento y evitando incomodidades. Elegir la talla adecuada es clave.
          div(titulo="Relación con el atuendo deportivo").justify-content-center
            p.mb-0.ms-5 Así como cada evento requiere un vestuario específico, el deporte demanda prendas y calzado adecuados. Utilizar el calzado apropiado asegura un mejor soporte y respuesta a las exigencias de cada disciplina.
    
    separador

    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Reseña histórica del calzado deportivo
    
    .bg-full-width-2.bg-fondo-2.mb-3
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema3/2.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") El origen del calzado deportivo se remonta al siglo XIX, cuando surgió la necesidad de un zapato más adecuado para actividades físicas. En <b>1839</b>, Charles Goodyear inventó la vulcanización del caucho, lo que permitió fabricar suelas <b>más resistentes y elásticas</b>. Esto facilitó la aparición de los primeros modelos como los <em>plimsolls</em>, usados en actividades náuticas y juegos informales.

            .row
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema3/3.svg", data-aos="zoom-in")
              .col-lg-8
                div.bg-color-2.p-4.tarjeta(data-aos="fade-left")
                  img(src="@/assets/curso/temas/tema3/4.svg", style="max-width: 90px")
                  p.mb-0 Durante el siglo XX, especialmente tras la Primera Guerra Mundial, el deporte se masificó como actividad recreativa y competitiva. Esto impulsó el desarrollo de marcas como Converse (1917), con su modelo All Star para baloncesto, y Adidas y Puma, fundadas en Alemania entre los años 1920 y 1940, que introdujeron importantes innovaciones en diversas disciplinas.

        .row.justify-content-center 
          .col-lg-10
            .row.align-items-center.px-4.px-md-5.py-4.bg-color-9.tarjeta
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/temas/tema3/5.png", style="max-width: 315px").mx-auto
              .col-lg
                p.mb-0 En la segunda mitad del siglo XX y el siglo XXI, la evolución tecnológica permitió integrar amortiguación de aire, espumas de alta respuesta, tejidos transpirables y suelas adaptadas a distintos terrenos. Además, surgió una fuerte influencia de la moda urbana, haciendo del calzado deportivo un objeto funcional y estético.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Variaciones del modelo deportivo
            
    p.mb-5 El calzado deportivo se ha diversificado para ajustarse a las exigencias específicas de cada disciplina, tipo de terreno y usuario. A continuación, se presenta una tabla comparativa con las principales categorías:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Cada una de estas categorías continúa evolucionando mediante la integración de tecnologías innovadoras, el uso de materiales sostenibles y un enfoque en el diseño personalizado, buscando optimizar tanto el rendimiento como la estética.
    
    separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Modelos icónicos de zapatillas deportivas
    
    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/temas/tema3/6.png", data-aos="zoom-in") 
        .col-lg-9.order-lg-1
          .bloque-texto-a__texto.p-4
            p A lo largo de la historia, algunos modelos de zapatillas han marcado tendencias tanto en el ámbito deportivo como en la moda urbana. Estos modelos destacan por su diseño, evolución y capacidad de adaptarse a distintos contextos de uso. A continuación, se analizan tres tipos representativos: <em>Court, Royal y Running</em>.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Zapatillas deportivas tipo Court
    
    .bg-full-width-2.bg-fondo-3.mb-3
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/temas/tema3/8.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left") El término court hace referencia a las canchas deportivas donde se practicaban disciplinas como tenis, squash y baloncesto. Las primeras zapatillas court surgieron en las décadas de 1920-1930. Estaban confeccionadas en lona con suelas de goma, diseñadas para evitar daños en las superficies de juego.

            .row
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/temas/tema3/7.png", data-aos="zoom-in")
              .col-lg-8
                div.bg-color-8.p-5.tarjeta(data-aos="fade-left")
                  img.mb-3.d-none.d-lg-flex(src="@/assets/curso/temas/tema3/13.svg", style="max-width: 90px")
                  p.mb-0 En las décadas de 1960 y 1970, marcas como Adidas introdujeron modelos como las <b>Stan Smith</b>, fabricadas en cuero blanco, que mejoraron tanto en durabilidad como en estética. Con el paso del tiempo, este tipo de zapatilla trascendió su uso deportivo para convertirse en un <b>ícono de la moda urbana</b>, manteniendo su diseño sobrio y minimalista.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Zapatillas deportivas tipo Royal

        .row.mb-5
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/temas/tema3/10.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            div.bg-color-2.p-5.tarjeta(data-aos="fade-left")
              img.mb-2(src="@/assets/curso/temas/tema3/9.svg", style="max-width: 90px")
              p.mb-0 Lanzadas por Reebok, las zapatillas Royal nacieron como calzado para actividades físicas ligeras. Con el tiempo, su estética retro y su comodidad las posicionaron como una opción habitual en el calzado urbano.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Zapatillas deportivas tipo Running
        
        .row.mb-5.align-items-center
          .col-lg-3.order-2
            figure
              img(src="@/assets/curso/temas/tema3/12.png", data-aos="zoom-in")
          .col-lg-9.order-1.mb-3.mb-lg-0
            p.mb-5 Las zapatillas de running han evolucionado notablemente desde finales del siglo XIX. Los primeros modelos eran básicos y ligeros, con poca protección. Fue en las décadas de 1960 y 1970 cuando el running se popularizó como actividad recreativa, impulsando a marcas como <b>Nike y Adidas</b> a desarrollar tecnologías como la <b>amortiguación de aire</b> y suelas más ergonómicas.
            .bg-color-4.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema3/11.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") El <b>Nike Cortez (1972)</b> fue uno de los pioneros. En los años 80 y 90 se introdujeron sistemas avanzados como <b>Nike Air y Asics GEL</b>, y se empezó a diferenciar el calzado según el tipo de pisada. Hoy en día, las zapatillas de running integran materiales ultraligeros, espumas de alto retorno de energía (Boost, ZoomX), suelas de carbono y diseños específicos para diferentes terrenos.


</template>

<script>
export default {
  name: 'Tema3',
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
