<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Elaborar moldes para el modelo deportivo tipo court
    
    .bloque-texto-a.color-secundario.p-4.p-md-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/tema5/1.png", data-aos="zoom-in") 
        .col-lg-9
          .bloque-texto-a__texto.p-4
            p El patronaje del calzado deportivo modelo court constituye el punto de partida fundamental en la confección de un zapato clásico y versátil, caracterizado por una silueta limpia y un corte bajo que envuelve el pie con elegancia.
    
    separador

    #t_5_1.titulo-segundo.color-acento-contenido
      h2 5.1 Elaborar molde patrón para el modelo deportivo tipo court
    
    p.mb-5 Para la construcción del molde patrón, se emplea la máscara compensada previamente realizada, utilizando los puntos y líneas guía correspondientes. El modelaje inicia con el ajuste de dicha máscara, siguiendo los pasos detallados a continuación:

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Ajuste de la máscara
    
    p.mb-5 Para iniciar, se ajusta la máscara base sobre la que se construirá el resto del molde:

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        PasosB.color-acento-contenido.bg-white.tarjeta.p-4
          div(titulo="Paso 1")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-6
                p.mb-0 Dibujar la máscara compensada con las líneas y puntos de referencia establecidos.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-6
                p.mb-0 Trazar una línea a 3 mm de la línea de talón y otra a 15 mm de la línea de profundidad.
              li.mb-0.d-flex
                i.fas.fa-check-circle.bg-color-6
                p.mb-0 Identificar el punto medio en la altura del talón y marca 5 mm hacia arriba desde dicho punto.
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 23.
                  span Ajuste inicial de la máscara para molde patrón
                figure
                  img(src="@/assets/curso/temas/tema5/2.png", alt="Diagrama de ajuste inicial de la máscara compensada sobre la horma, incluyendo líneas de referencia a 3 mm y 15 mm desde el talón, además del punto medio del talón desplazado 5 mm hacia arriba. ") 
          div(titulo="Paso 2")
            p.mb-5 Con un arco, une los dos puntos anteriores, ajustando el trazo para definir el contorno del talón. 
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 24.
                  span Trazo del contorno del talón con curva
                figure
                  img(src="@/assets/curso/temas/tema5/3.png", alt="Trazo curvo realizado con compás entre los puntos marcados sobre el talón, delineando la curva externa que define el contorno posterior del molde. ") 
          div(titulo="Paso 3")
            p.mb-5 Marcar un punto sobre la línea de talón a 20 mm por encima de la línea de plantilla, y otro a 3 mm hacia adelante de la intersección entre la línea de plantilla y la línea de talón.  Une ambos con un trazo en arco que conecte de forma continua con la curva definida previamente.
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 25.
                  span Curva de conexión entre plantilla y talón
                figure
                  img(src="@/assets/curso/temas/tema5/4.png", alt="Trazado adicional sobre la línea de talón, conectando con la plantilla mediante una curva suave, que define el perímetro inferior del talón del zapato. ") 
          div(titulo="Paso 4")
            p.mb-5 Finalmente, traza una línea a 20 mm de la línea de plantilla para el aumento de montaje, y extiende la curva de talón ajustada, obteniendo el patrón final.
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 26.
                  span Patrón base con línea de montaje final
                figure
                  img(src="@/assets/curso/temas/tema5/5.png", alt="Representación del patrón completo con la línea de montaje a 20 mm de la plantilla, donde se integran todas las curvas previas para formar el molde base. ") 
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción cordonera y boca
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
      div(titulo="Construcción inicial de la cordonera").justify-content-center
        p.ms-5 Se traza una línea paralela a la línea metatarsiana, desplazada 20 mm hacia adelante, y se marca un punto a 15 mm por debajo del eje de capellada. Luego se dibuja una línea paralela al eje del empeine, a 10 mm de distancia; sobre ella se ubica un punto a 15 mm por encima de la línea de entrada. La unión de estos puntos define la primera sección de la línea de la cordonera.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 27.
              span Construcción inicial de la cordonera
            figure
              img(src="@/assets/curso/temas/tema5/6.png", alt="Dibujo de la construcción inicial de la cordonera, con líneas paralelas a la metatarsiana y puntos estratégicos sobre el empeine y la entrada, que delimitan la estructura del sistema de amarre. ") 
      div(titulo="Extensión de la cordonera hacia la plantilla").justify-content-center
        p.ms-5 En la línea de plantilla, se marca un punto a 60 mm de la línea metatarsiana (ajustable entre 60 y 80 mm según la horma) y se conecta con el inicio de la línea previamente trazada, prolongándola hasta alcanzar la línea de montaje.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 28.
              span Extensión de la cordonera hacia la plantilla
            figure
              img(src="@/assets/curso/temas/tema5/7.png", alt="Extensión de la línea de cordonera desde su inicio hasta el límite de la línea de montaje, incluyendo la ubicación sobre la plantilla a 60 mm de la metatarsiana. ")
      div(titulo="Curva para el diseño de la boca del zapato").justify-content-center
        p.ms-5 Para la construcción de la boca, se marca un punto 15 mm por encima del punto de altura del talón y otro a 60 mm sobre la línea de profundidad. Se unen mediante una curva.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 29.
              span Curva para el diseño de la boca del zapato
            figure
              img(src="@/assets/curso/temas/tema5/8.png", alt="Trazado de la boca del calzado con un punto 15 mm por encima del talón y otro sobre la línea de profundidad, unidos por una curva que delimita el borde posterior de la abertura del zapato. ")
      div(titulo="Conexión de líneas de profundidad, tobillo y cordonera").justify-content-center
        p.ms-5 Posteriormente, se dibuja otra curva que conecta la línea de profundidad con la línea del tobillo, y desde ese punto se continúa con un trazo recto hasta la parte superior de la cordonera.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 30.
              span Conexión de líneas de profundidad, tobillo y cordonera
            figure
              img(src="@/assets/curso/temas/tema5/9.png", alt="Conexión de la línea de profundidad con la del tobillo mediante curva continua y trazo recto hasta el extremo superior de la cordonera, definiendo la forma completa de la boca. ")
      div(titulo="Ajuste de curvas de la cordonera").justify-content-center
        p.ms-5 Se recomienda suavizar los ángulos, ajustando los radios de las curvas según el criterio del patronista.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 31.
              span Ajuste de curvas de la cordonera
            figure
              img(src="@/assets/curso/temas/tema5/10.png", alt="Versión refinada del diseño de la cordonera, donde se suavizan los ángulos y radios de las curvas para optimizar la ergonomía y estética del molde. ")
      div(titulo="Línea paralela de refuerzo para la cordonera").justify-content-center
        p.ms-5   Para completar la cordonera, se traza una línea paralela a 20 mm de distancia.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 32.
              span Línea paralela de refuerzo para la cordonera
            figure
              img(src="@/assets/curso/temas/tema5/11.png", alt="Línea paralela externa a la cordonera trazada a 20 mm de distancia, que complementa la estructura del sistema de amarre del calzado deportivo. ")
      div(titulo="Guía de ubicación de ojaletes").justify-content-center
        p.ms-5 Se añade una guía para los ojaletes, ubicada a 10 mm de la línea principal. Sobre esta, se marcan dos puntos a 15 mm de cada extremo, determinando así la ubicación del primer y último ojalete. El espacio entre ellos se divide en cinco segmentos iguales para definir los puntos intermedios.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 33.
              span Guía de ubicación de ojaletes
            figure
              img(src="@/assets/curso/temas/tema5/12.png", alt="Guía de ojaletes con línea auxiliar a 10 mm de la principal, donde se marcan los puntos de los extremos y se dividen en cinco partes iguales para ubicar los ojales intermedios. ")
      div(titulo="Línea de costura de remate bajo la cordonera").justify-content-center
        p.ms-5 Finalmente, se traza una línea 15 mm por debajo del último ojalete, que indicará la costura de remate o atraque.
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 34.
              span Línea de costura de remate bajo la cordonera
            figure
              img(src="@/assets/curso/temas/tema5/13.png", alt="Línea horizontal ubicada 15 mm por debajo del último ojalete, utilizada como guía para la costura de remate o atraque de la cordonera. ")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción talón
    
    p.mb-5 La siguiente parte consiste en definir el talón, necesario para dar forma al contrafuerte posterior del calzado:

    .row.mb-3.justify-content-center
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/temas/tema5/14.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        .bg-color-11.p-4.tarjeta(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Se traza una línea paralela a la línea de talón, separada 20 mm.
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 En la línea de profundidad, se marca un punto a 60 mm y desde allí se baja en escuadra 15 mm.
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Se ubica otro punto a 20 mm de la línea de profundidad, sobre la línea paralela al talón.
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Ambos puntos se conectan con una línea recta y se suavizan las uniones con trazos curvos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 35.
          span Construcción del contrafuerte del talón
        figure
          img(src="@/assets/curso/temas/tema5/15.png", alt="Construcción del contrafuerte del talón con líneas paralelas a la línea de talón y puntos ubicados en la línea de profundidad, unidos con curvas suaves que definen su forma final. ", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción capellada
    
    p.mb-5 Finalmente, se construyen la capellada y la lengüeta, que forman la parte superior delantera del zapato:

    .row.justify-content-center
      .col-lg-10
        div.bg-color-8.p-4
          p.mb-0 Se definen dos puntos: uno a 3 mm por debajo de la línea del eje central en la puntera y otro a 12 mm desde el punto de calzada, siguiendo la línea del empeine. Se conectan mediante una línea recta y se prolongan 10 mm más allá del contorno de la cordonera.
        div.p-5.bg-color-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 36.
            span Trazado de la capellada sobre la puntera
          figure
            img(src="@/assets/curso/temas/tema5/16.png", alt="Trazado de la capellada con puntos sobre el eje de la puntera y la línea del empeine, unidos mediante línea recta que se extiende 10 mm más allá del borde de la cordonera. ", data-aos="zoom-in")
    
    .row.justify-content-center
      .col-lg-10
        div.bg-color-8.p-4
          p.mb-0 Para la lengüeta, desde el punto superior del eje se baja en escuadra 50 mm, y desde el punto a 12 mm sobre la línea del empeine se desciende 35 mm. Estos puntos se unen y se redondea suavemente la parte superior.
        div.p-5.bg-color-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 37.
            span Diseño de la lengüeta del zapato
          figure
            img(src="@/assets/curso/temas/tema5/17.png", alt="Construcción de la lengüeta con medidas exactas desde el eje central y el punto de la capellada, unidas en forma curva para completar la parte frontal superior del calzado.  ", data-aos="zoom-in")
    .row.justify-content-center
      .col-lg-10
        div.bg-color-8.p-4
          p.mb-0 Para la capellada, se traza una línea paralela a 12 mm hacia atrás desde el contorno lateral y se conecta con el punto a 35 mm de la lengüeta.
        div.p-5.bg-color-12
          .titulo-sexto.color-acento-contenido
            h5 Figura 38.
            span Conexión entre capellada y lengüeta
          figure
            img(src="@/assets/curso/temas/tema5/18.png", alt="Trazado posterior de la capellada a partir del contorno lateral, con línea paralela a 12 mm que conecta con el diseño de la lengüeta, generando la forma total de la pieza.  ", data-aos="zoom-in")
        div.bg-color-8.p-4
          p.mb-0 Con esto finaliza la fase de modelado, y se continúa con el calado para dar inicio al despiece.
    
    separador

    #t_5_2.titulo-segundo.color-acento-contenido
      h2 5.2 Despiece de moldes para el modelo deportivo tipo court
    
    p.mb-5 En esta fase, el molde patrón se separa en las piezas individuales que permitirán su posterior corte y ensamblaje.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Despiece capellada
    
    p.mb-5 El despiece comienza con la capellada, componente central del corte del calzado:

    
    .row.justify-content-center.mb-3
      .col-lg-10
        div.bg-color-1.p-4.tarjeta
          ul.lista-ul--color
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Se traza un eje de simetría sobre la cartulina.
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Sobre ese eje se ubica la capellada y se delimita su contorno hasta alcanzar la línea de nacimiento de la lengüeta.
    
    .bg-full-width-2.bg-color-5.mb-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 39.
              span Diagrama de despiece de la capellada
            figure
              img(src="@/assets/curso/temas/tema5/19.png", alt="Diagrama técnico del despiece de la capellada sobre un eje de simetría, con el contorno delimitado hasta la línea de nacimiento de la lengüeta, como base para el corte de piezas individuales. ", data-aos="zoom-in")
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Despiece de la lengüeta
        
        p.mb-5 Para obtener el molde de la lengüeta, se ubica sobre el eje central de la horma y se traza su contorno. A este molde se le adicionan márgenes: 4 mm en la parte superior para permitir el cosido y volteado, y 10 mm en la parte inferior, destinados a facilitar la unión con la capellada.
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 40.
              span Despiece lengüeta
            figure
              img(src="@/assets/curso/temas/tema5/20.png", alt="Molde dibujado sobre eje central con márgenes técnicos: 4 mm en la parte superior para costura y volteado, y 10 mm en la base para su unión con la capellada. ", data-aos="zoom-in")

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Despiece de la cordonera
        
        p.mb-5 Para la cordonera, se inicia trazando su forma base. A partir de un punto medio entre el segundo y tercer ojalete, se delimita la zona de corte y se añaden 4 mm de margen en todo el contorno para el cosido y volteado. Además, se marca la ubicación del rayador, que indica la zona destinada a la costura de atraque o refuerzo, y se señalan los puntos donde irán ubicados los ojaletes.
        .row.justify-content-center.mb-5
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 41.
              span Despiece cordonera
            figure
              img(src="@/assets/curso/temas/tema5/21.png", alt="Molde de la cordonera con forma definida desde el segundo hasta el tercer ojalete, incluye margen de 4 mm en el contorno y puntos marcados para los ojaletes y el rayador. ", data-aos="zoom-in")
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Despiece del lateral
        
        p.mb-5 A continuación, se obtiene la pieza del lateral trasero, cuya función es ensamblar tanto la cordonera como el talón. Por este motivo, se agregan márgenes de 10 mm en la zona del talón y 8 mm en la cordonera, donde se unirán estas piezas. Asimismo, se adiciona una ventaja de 4 mm en la parte superior (zona de la boca del calzado) para permitir el cosido y volteado.
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 42.
              span Despiece lateral
            figure
              img(src="@/assets/curso/temas/tema5/22.png", alt="Molde de la pieza lateral posterior con aumentos de 10 mm en la zona del talón, 8 mm para la cordonera y 4 mm en la boca, pensados para uniones y costuras.  ", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Despiece del talón
    
    p.mb-5 Para obtener el molde de esta pieza, doble la cartulina sobre un eje de simetría. Coloque la parte superior del talón sobre dicho eje y dibuje la sección que lo toca, obteniendo así el primer punto de apoyo.

    .bg-full-width-2.bg-color-13.mb-3
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5.align-items-end
          .col-lg-6.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 43.
              span Despiece talón
            figure
              img(src="@/assets/curso/temas/tema5/23.png", alt="Inicio del trazado del molde del talón sobre eje de simetría, marcando la primera sección desde el punto de apoyo superior. ", data-aos="zoom-in")
          .col-lg-4
            figure.d-flex
              img(src="@/assets/curso/temas/tema5/24.png", alt="", data-aos="zoom-in")

        .row.justify-content-center.mb-3
          .col-lg-10
            div.bg-color-1.p-4
              p.mb-0 Utilice este primer punto para girar la pieza hasta que vuelva a coincidir con el eje central y dibuje esa parte, lo que permitirá identificar el segundo punto de giro.
            div.p-4.bg-color-7
              .row.justify-content-center
                .col-lg-5
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 44.
                    span Primer giro talón
                  figure
                    img(src="@/assets/curso/temas/tema5/25.png", alt="Segunda sección del talón obtenida tras girar la pieza desde el primer punto para continuar el trazo sobre el eje central.  ", data-aos="zoom-in")
        .row.justify-content-center.mb-3
          .col-lg-10
            div.bg-color-1.p-4
              p.mb-0 Luego, apoye en el segundo punto y gire la pieza hasta lograr nuevamente la coincidencia con el eje central; dibuje la línea del talón correspondiente y obtendrá el tercer punto de giro.
            div.p-4.bg-color-7
              .row.justify-content-center
                .col-lg-5
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 45.
                    span Segundo giro talón
                  figure
                    img(src="@/assets/curso/temas/tema5/26.png", alt="Segunda sección del talón obtenida tras girar la pieza desde el primer punto para continuar el trazo sobre el eje central. ", data-aos="zoom-in")
        .row.justify-content-center.mb-3
          .col-lg-10
            div.bg-color-1.p-4
              p.mb-0 Finalmente, apoye en el tercer punto y gire la pieza hasta que coincida completamente con el eje en la parte inferior.
            div.p-4.bg-color-7
              .row.justify-content-center
                .col-lg-5
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 46.
                    span Tercer giro talón
                  figure
                    img(src="@/assets/curso/temas/tema5/27.png", alt="Último giro del molde para completar el contorno del talón, asegurando la simetría con el eje central.  ", data-aos="zoom-in")
        .row.justify-content-center.mb-3
          .col-lg-10
            div.bg-color-1.p-4
              p.mb-0 Para concluir, suavice las líneas obtenidas y escuadre la línea inferior de la pieza para corregir el ángulo. Por último, realice la simetría para obtener el molde completo del talón.
            div.p-4.bg-color-7
              .row.justify-content-center
                .col-lg-10
                  .titulo-sexto.color-acento-contenido
                    h5 Figura 47.
                    span Ajuste talón
                  figure
                    img(src="@/assets/curso/temas/tema5/28.png", alt="Suavizado del trazo del molde del talón, escuadrando la base para garantizar simetría y buena unión con otras piezas. ", data-aos="zoom-in")
    
    separador

    #t_5_3.titulo-segundo.color-acento-contenido
      h2 5.3 Moldes del forro para el modelo deportivo tipo Court
    
    p.mb-5 A continuación, se describen los procedimientos para obtener los moldes del forro correspondientes a la lengüeta, la capellada y el talón en el modelo deportivo tipo Court:

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Forro de la lengüeta
      
    p.mb-5 Para obtener el forro de la lengüeta, se utiliza el mismo molde de la lengüeta, únicamente aumentando los 4 mm hasta la parte inferior.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 48.
          span Forro lengüeta
        figure
          img(src="@/assets/curso/temas/tema5/29.png", alt="Molde interno basado en el patrón de la lengüeta, con 4 mm de aumento en todo el contorno hasta la base inferior.  ", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Forro de la capellada
    
    p.mb-5 Para el forro de la capellada, se traza por la misma línea utilizada para obtener la capellada externa. A esta se le adicionan 6 mm en la parte superior, donde empalma con la lengüeta, y se prolonga esa línea 5 mm hacia fuera en la zona lateral. Luego, se suaviza la curva hasta unir con la línea de la capellada.

    .bg-full-width-2.bg-color-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 49.
              span Forro capellada
            figure
              img(src="@/assets/curso/temas/tema5/30.png", alt="Molde del forro trazado sobre el patrón externo, con aumentos de 6 mm en la parte superior y 5 mm en el lateral, suavizados para adaptarse al diseño.  ", data-aos="zoom-in")
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Forro del talón
        
        p.mb-5 Para obtener el forro de la cordonera, se toma el molde patrón, alineándolo sobre un eje de simetría que va desde el punto más alto del talón hasta el cruce con la línea de montaje. Luego, se aumentan 4 mm en la boca y en la zona de la cordonera. También se marca la línea de costura de atraque de la cordonera, a la cual se le añaden 5 mm adicionales para realizar el corte.

        .row.justify-content-center.mb-5
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Figura 50.
              span Forro talón
            figure
              img(src="@/assets/curso/temas/tema5/31.png", alt="Molde del forro interno del talón basado en el patrón de la cordonera, alineado sobre eje simétrico con aumentos de 4 mm en la boca y 5 mm para costura de atraque.  ", data-aos="zoom-in")
        
        separador

        #t_5_4.titulo-segundo.color-acento-contenido
          h2 5.4 Moldes de abullonado para el modelo deportivo tipo Court
    
    p Esta sección detalla el procedimiento para obtener los moldes del abullonado del cuello y de la lengüeta en calzado deportivo tipo Court.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Molde del abullonado del cuello
    
    p.mb-5 ara obtener este molde, se deben seguir los siguientes pasos:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema5/32.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-3.tarjeta.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Se marca un punto a 30 mm desde la altura máxima del talón, otro a 20 mm desde la línea de profundidad y un tercero a 15 mm del borde de la boca. Estos tres puntos se unen formando una curva continua.
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Una vez trazada la línea, se suavizan las uniones entre los puntos. Luego, se calan las líneas construidas y se dibuja en una cartulina un eje de simetría que va desde el punto más alto del talón hasta el cruce con la línea previamente trazada.
            li.mb-3.d-flex
              i.fas.fa-check-circle.bg-color-6
              p.mb-0 Por último, se dibuja el molde con la cartulina doblada, lo que permite obtener el patrón para el abullonado del cuello.
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 51.
          span Molde abullonado cuello
        figure
          img(src="@/assets/curso/temas/tema5/33.png", alt="Molde de espuma para el cuello, construido a partir de tres puntos clave conectados con curvas, doblado en eje simétrico para obtener forma acolchada precisa.  ", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Molde del abullonado de la lengüeta
    
    p.mb-5 Para construir este molde, se toma como base el molde principal de la lengüeta (sin aumentos) y se le descuenta 6 mm en todo el contorno.

    .bg-full-width-2.bg-color-14
      .px-4.px-md-5.py-4
        .row.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 52.
              span Molde abullonado lengüeta
            figure
              img(src="@/assets/curso/temas/tema5/34.png", alt="Molde de espuma derivado del patrón de la lengüeta, con recorte de 6 mm en todo el contorno para crear volumen interno sin excedente.  ", data-aos="zoom-in")

        .row.justify-content-center 
          .col-lg-10
            .row.align-items-center.px-4.px-md-5.py-4.bg-color-8.tarjeta
              .col-lg-auto
                img(src="@/assets/curso/temas/tema5/35.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Este modelo comparte similitudes con el tipo Court; sin embargo, su principal diferencia radica en que la capellada está seccionada en la zona de la puntera. Además, el diseño del talón puede variar según requerimientos estéticos y funcionales.
      
</template>

<script>
export default {
  name: 'Tema5',
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
