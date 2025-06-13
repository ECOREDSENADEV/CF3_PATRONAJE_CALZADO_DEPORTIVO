<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Elaborar moldes para el modelo deportivo tipo Running
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este modelo presenta variaciones importantes respecto a los anteriores, especialmente en el diseño de la cordonera, que adopta una forma en “U” para ofrecer un mejor ajuste al empeine. Se mantiene la estructura de la puntera utilizada en el modelo anterior, mientras que el talón se rediseña con una forma curva para mejorar la ergonomía y el soporte en la zona posterior del pie. La bigotera también sufre una ligera modificación en su trazo, adaptándose al nuevo estilo del modelo. Además, el calzado tipo Running se caracteriza por incorporar líneas más dinámicas y piezas que brindan mayor soporte y flexibilidad.
    
    separador

    #t_7_1.titulo-segundo.color-acento-contenido
      h2 7.1 Elaborar molde patrón para el modelo tipo Running
    
    p.mb-5 Para el desarrollo de este molde se toma la máscara ajustada y con los aumentos de montaje.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción boca y cordonera
    
    p.mb-5 A continuación, se presenta la secuencia detallada para la construcción de la cordonera y la boca del calzado deportivo tipo Running. 

    .row.align-items-start.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 69.
          span Construcción boca y cordonera
        figure
          img(src="@/assets/curso/temas/tema7/2.png", alt="Trazado técnico de ejes y puntos para diseñar la boca y cordonera en forma de “U” del modelo Running, con líneas curvas que conectan tobillo, entrada y empeine", data-aos="zoom-in")
      .col-lg-6.order-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-1")
          div(titulo="Trazado inicial de ejes").justify-content-center
            p.mb-0.ms-5 Se trazan los ejes de la capellada y del empeine desde el punto de calzada.
          div(titulo="Construcción base de la cordonera").justify-content-center
            p.mb-0.ms-5 Se traza una línea perpendicular al eje de la capellada desde el punto de calzada, con una longitud de 15 mm (ajustable según el ancho de la boca).
          div(titulo="Definición del segundo punto de la cordonera").justify-content-center
            p.mb-0.ms-5 Desde el punto de entrada, se mide 15 mm hacia arriba y se escuadra con el eje del empeine. Desde esa intersección, se marca un punto a 7 mm hacia el interior. Se conecta este punto con el de los 15 mm iniciales.
          div(titulo="Construcción de la boca desde el talón").justify-content-center
            p.mb-0.ms-5 Se marca un punto a 15 mm sobre la altura del talón. Desde ahí, se traza una línea horizontal de 20 mm y se proyecta una curva hasta la línea de profundidad.
          div(titulo="Unión al contorno del tobillo").justify-content-center
            p.mb-0.ms-5 Se traza una curva desde la intersección anterior hasta la línea del tobillo y, desde esta, una línea recta al punto de 7 mm en la cordonera. Se suavizan las transiciones.
    
    p.mb-5 Para construir la cordonera se debe: 

    .row.align-items-center.mb-5
      .col-lg-6.mb-3.mb-lg-0.order-2
        .titulo-sexto.color-acento-contenido
          h5 Figura 70.
          span Construcción completa de la cordonera
        figure
          img(src="@/assets/curso/temas/tema7/3.png", alt="Molde de cordonera con forma en “U” definida mediante líneas paralelas, puntos de entrada y metatarsiana, y curva suavizada; incluye guía para ojaletes. ", data-aos="zoom-in")
      .col-lg-6.order-1
        .row.justify-content-center.align-items-stretch.mb-4
          .col-lg-12.mb-3
            .bg-color-16.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema7/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Trazado del contorno de la cordonera
                  p.mb-0 Se dibuja una línea paralela a la inicial (15 mm de distancia). Se marcan dos puntos: uno a 18 mm sobre la línea metatarsiana y otro a 22 mm sobre la línea de entrada. Se conectan con una línea recta.
          .col-lg-12.mb-3
            .bg-color-16.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema7/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Finalización de la forma de la cordonera
                  p.mb-0 Se unen las dos líneas mediante una curva suave, completando la forma de la cordonera.
          .col-lg-12.mb-3
            .bg-color-16.tarjeta.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/temas/tema7/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5.mb-2 Ubicación de ojaletes
                  p.mb-0 Se traza una línea paralela a 9 mm hacia el interior desde la línea del perfil. El primer ojalete se ubica en la intersección con la línea metatarsiana; el último, 12 mm bajo la línea superior. El espacio se divide en cinco partes iguales para los cuatro ojaletes restantes.
    
    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 71.
                span Construcción puntera
              figure
                img(src="@/assets/curso/temas/tema7/7.png", alt="Molde de la puntera trazado con el mismo método que en el modelo Royal, adaptado al diseño del modelo Running para mayor dinamismo y ergonomía. ")
            .col-lg-6.order-lg-1
              h5 Construcción puntera
              p Se realiza de la misma forma que el modelo anterior.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 72.
                span Construcción bigotera de talón
              figure
                img(src="@/assets/curso/temas/tema7/8.png", alt="Molde técnico de la bigotera con líneas de referencia desde la profundidad, el talón y la plantilla, unidas mediante curvas que forman el contorno característico. ")
            .col-lg-6.order-lg-1
              h5 Construcción bigotera de talón
              p Para iniciar la construcción de la bigotera, se traza una línea paralela a 10 mm por debajo de la línea de profundidad. Luego, sobre la línea de profundidad, se marca un punto a 60 mm, desde el cual se traza una línea perpendicular que conecta con la línea paralela previamente dibujada. A continuación, se localiza un punto a 10 mm de la línea del talón sobre la línea paralela, y desde este se traza una línea perpendicular descendente de 5 mm. Finalmente, se conectan todos los puntos utilizando líneas curvas suaves, siguiendo las referencias visuales establecidas en el diseño, para definir el contorno distintivo de la bigotera. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 73.
                span Construcción talón
              figure
                img(src="@/assets/curso/temas/tema7/9.png", alt="Molde del talón con trazo curvo continuo desde el extremo de la bigotera hasta la parte trasera, ajustado a la forma ergonómica del modelo Running.  ")
            .col-lg-6.order-lg-1
              h5 Construcción talón
              p La construcción del talón se inicia a partir de los 5 mm finales de la bigotera, escuadrando desde ese punto hacia la línea media del talón. Desde allí, se traza una curva descendente que se prolonga hasta aproximadamente 20 mm por detrás de la línea de entrada. Es importante tener en cuenta que tanto el diseño del talón como el de la bigotera pueden modificarse según las características estéticas y funcionales del modelo a desarrollar.
    
    separador

    .bg-full-width-2.bg-fondo-1.mb-3
      .p-4.p-md-5
        #t_7_2.titulo-segundo.color-acento-contenido
          h2 7.2 Despiece de moldes para el modelo tipo Running
        
        p.mb-5 A continuación, se detalla el procedimiento para el despiece de cada una de las piezas de este modelo.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Despiece puntera
        
        p.mb-5 Este proceso se realiza de la misma forma que el modelo anterior.

        .row.justify-content-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/temas/tema7/10.png", data-aos="zoom-in")
          .col-lg-7
            .titulo-sexto.color-acento-contenido
              h5 Figura 74.
              span Despiece puntera
            figure
              img(src="@/assets/curso/temas/tema7/11.png", alt="Molde simétrico de la puntera, recortado sobre eje central y ajustado en la unión de los perfiles para asegurar continuidad y ajuste preciso.  ", data-aos="zoom-in")
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center.px-4.px-md-5.py-4.bg-color-15.tarjeta
          .col-lg-auto
            img(src="@/assets/curso/temas/tema7/12.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 <b>Nota</b>: Es fundamental escuadrar correctamente el molde en la zona de unión entre la cara externa e interna, ya que esto permite obtener una mejor forma y continuidad en el diseño, asegurando un ajuste preciso y estético en la pieza final.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Despiece capellada
    
    p.mb-5 Esta pieza, además de cortarse en doble, cumple la función de recibir otras componentes estructurales del calzado, como la puntera, la cordonera, la bigotera y el talón. Por esta razón, se le asignan aumentos de 10 mm en las zonas de unión con dichas piezas, y se le otorga una ventaja de 4 mm en la línea de la boca para el proceso de cosido y vuelto. Para su elaboración, se dobla una cartulina por el eje central, se marca el molde y se corta en doble. Posteriormente, se realizan los calados correspondientes para facilitar el armado de las piezas y se registran los datos técnicos esenciales: nombre de la pieza, número de molde, sentido de estiramiento, entre otros. En algunos casos, debido a las condiciones de la horma, no es posible obtener esta pieza de forma completa. En tales situaciones, se recomienda dividirla estratégicamente en una zona que quede cubierta por otra pieza sobrepuesta, de modo que la unión o empalme no sea visible ni afecte la estética o funcionalidad del diseño.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 75.
          span Despiece capellada
        figure
          img(src="@/assets/curso/temas/tema7/13.png", alt="Molde doble de la capellada, con aumentos de 10 mm para uniones con puntera, cordonera, bigotera y talón; incluye margen superior y calados técnicos. ", data-aos="zoom-in")
  
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Despiece cordonera
    
    p.mb-5 Para la cordonera, es necesario realizar un ligero giro, ya que al trazarla inicialmente, parte de su contorno se desvía del eje central.

    .row.justify-content-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema7/14.png", data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 76.
          span Despiece cordonera
        figure
          img(src="@/assets/curso/temas/tema7/15.png", alt="Inicio del trazado de la cordonera desde la base, alineada al eje central de la capellada, enfocada en la parte inferior de la pieza. ", data-aos="zoom-in")
    
    .row.justify-content-center.mb-3
      .col-lg-10
        div.bg-color-1.p-4
          p.mb-0 Para efectuar este ajuste, se inicia ubicando la parte inferior de la cordonera sobre el eje central de la capellada, asegurando que coincida con el eje previamente trazado en la cartulina. Luego, se marca la forma de la pieza en ambos lados hasta llegar a la curva.
        div.p-4.bg-color-7
          .row.justify-content-center
            .col-lg-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 77.
                span Trazado líneas inferiores de la cordonera
              figure
                img(src="@/assets/curso/temas/tema7/16.png", alt="Segmento de la cordonera marcado hasta la curva, previo al giro del molde, con líneas guía que definen el contorno base.  ", data-aos="zoom-in")
    
    .row.justify-content-center.mb-3
      .col-lg-10
        div.bg-color-1.p-4
          p.mb-0 A continuación, se identifica un punto de apoyo en el centro de las líneas marcadas en la curva, desde donde se realiza el giro de la pieza. Se rota la cordonera hasta que su parte superior quede aproximadamente 5 mm hacia el interior del eje central. Finalmente, se agrega una ventaja de 4 mm para el cosido y vuelto, comenzando desde un punto medio entre el segundo y tercer ojalete.
        div.p-4.bg-color-7
          .row.justify-content-center
            .col-lg-5
              .titulo-sexto.color-acento-contenido
                h5 Figura 78.
                span Giro de cordonera
              figure
                img(src="@/assets/curso/temas/tema7/17.png", alt="Ajuste de la cordonera girada desde el punto medio de la curva, desplazada 5 mm hacia el interior del eje, con margen de 4 mm para costura.  ", data-aos="zoom-in")
            .col-lg-4
              figure
                img(src="@/assets/curso/temas/tema7/18.png", alt="Ajuste de la cordonera girada desde el punto medio de la curva, desplazada 5 mm hacia el interior del eje, con margen de 4 mm para costura.  ", data-aos="zoom-in")


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Despiece bigotera
      
    div.bg-color-17.p-4.mb-5
      p.mb-5 Se traza un eje central, se coloca el molde patrón sobre la línea del talón correspondiente y se marca. Luego, se aplican las ventajas correspondientes para cosido y vuelto en la parte superior y de armado en la parte inferior. Se corta en doble.
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 79.
            span Despiece bigotera
          figure
            img(src="@/assets/curso/temas/tema7/19.png", alt="Molde de bigotera simétrica colocado sobre eje central, con ventajas para costura en la parte superior y armado en la parte inferior.  ", data-aos="zoom-in")

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Despiece talón
    
    .row.mb-5
      .col-lg-6.order-2
        figure
          img(src="@/assets/curso/temas/tema7/20.png", data-aos="zoom-in")
      .col-lg-6.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Para elaborar el talón, se coloca el molde patrón sobre el eje central previamente trazado en la cartulina, alineándolo con los puntos de referencia correspondientes: la altura del talón y la línea de plantilla. Una vez correctamente ubicado, se procede a marcar el contorno de la pieza sobre la cartulina.
    
        .bg-color-18.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/temas/tema7/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Se realiza el ajuste en la intersección de los perfiles interno y externo, asegurando una correcta continuidad de la línea. Posteriormente, se añade un aumento de 2 mm en la zona en forma de "V" para permitir el margen de costura.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 80.
          span Despiece talón
        figure
          img(src="@/assets/curso/temas/tema7/22.png", alt="Molde de la lengüeta trazado desde la línea externa de la cordonera, con rotación del patrón hasta el eje del empeine, marcado con líneas rectas y curvas suaves; incluye ventajas para costura y simetría", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Construcción lengüeta
    
    p.mb-5 Para iniciar la construcción de la lengüeta, se posiciona el molde patrón en la cartulina, tal como si se fuera a trazar la cordonera. A continuación, se marca la línea externa de la cordonera hasta el punto donde finaliza la curva, sirviendo esta como base para definir el contorno inicial de la lengüeta. Luego, utilizando como apoyo el punto donde finaliza la curva previamente marcada, se gira el molde patrón hasta alinear la línea de empeine con el eje central trazado en la cartulina. A continuación, desde el borde superior de la cordonera se marca una ventaja de 15 mm hacia arriba sobre el eje de empeine. En ese punto, se escuadra y se traza una línea horizontal de 55 mm. Esta línea se conecta con la curva inferior previamente marcada de la cordonera. Finalmente, se redondea la parte superior con una curva suave para eliminar el ángulo, se suaviza la curva inferior y se une con la línea recta. Posteriormente, se da una ventaja de 4 mm para cosido y vuelto, iniciando desde la parte superior de la lengüeta hasta la mitad de su lateral. Por último, se realiza la simetría.

    .titulo-sexto.color-acento-contenido
      h5 Figura 81.
      span Construcción lengüeta
    figure
      img(src="@/assets/curso/temas/tema7/23.png", alt="Molde interno de la capellada alineado al eje central, con cortes técnicos y aumentos de 5 mm en boca y zona de empalme para unión con el forro trasero. ", data-aos="zoom-in")

    separador

    #t_7_3.titulo-segundo.color-acento-contenido
      h2 7.3 Moldes forro para el modelo tipo Running
    
    p.mb-5 A continuación, se procederá a desarrollar los moldes internos o de forro correspondientes al modelo deportivo tipo Running, los cuales deben ajustarse con precisión a las piezas externas para garantizar un buen armado, confort y funcionalidad del calzado.

    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 82.
                span Forro capellada
              figure
                img(src="@/assets/curso/temas/tema7/24.png", alt="Molde del forro del talón marcado desde la intersección de la línea del talón y plantilla, con aumentos de 5 mm en parte superior y empalme para costura interior.")
            .col-lg-6.order-lg-1
              h5 Forro capellada
              p Para elaborar el molde del forro de capellada, se posiciona el patrón alineando el eje de capellada con el eje central trazado en la cartulina. Luego, se dibuja una línea perpendicular al borde de la boca de la cordonera, aproximadamente a la altura del punto medio entre el primer y segundo ojalete, prolongándola hasta alcanzar la línea de montado. A continuación, se adicionan 5 mm de ventaja en la zona de la boca y sobre la línea de empalme con el forro del trasero, destinados al cosido y vuelto. Por último, se marca el eje central de la puntera, el cual servirá como referencia para realizar un corte que facilitará el ajuste durante el proceso de montado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 83.
                span Forro talón
              figure
                img(src="@/assets/curso/temas/tema7/25.png", alt="Molde derivado de la lengüeta externa, con ventaja de 4 mm en todo el contorno extendido hasta la base inferior, adaptado para costura interna. ")
            .col-lg-6.order-lg-1
              h5 Forro talón
              p Para elaborar el forro del talón, se ubica el patrón sobre el eje central de la cartulina, alineando el punto máximo del talón con la intersección entre la línea de talón y la línea de plantilla. A partir de esta posición, se marca el contorno desde la boca hasta la línea de empalme del forro de capellada, finalizando en la línea de montado.
              p Posteriormente, se adicionan 5 mm de ventaja en la parte superior para cosido y vuelto, y otros 5 mm sobre la línea de empalme para su correcta unión con el forro de la capellada.
 
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.mb-3.mb-lg-0.order-lg-2
              .titulo-sexto.color-acento-contenido
                h5 Figura 84.
                span Forro lengüeta
              figure
                img(src="@/assets/curso/temas/tema7/26.png", alt="Molde de espuma para el cuello trazado desde el contorno de la bigotera y cordonera, con línea paralela a 15 mm del perfil y curvas redondeadas para confort anatómico.  ")
            .col-lg-6.order-lg-1
              h5 Forro lengüeta
              p Se utiliza el mismo molde de la lengüeta externa como base. A este se le completa la ventaja de 4 mm en todo el contorno, extendiéndola hasta la parte inferior del molde para permitir el cosido y vuelto.
    
    separador

    #t_7_4.titulo-segundo.color-acento-contenido
      h2 7.4 Moldes de abullonado deportivo tipo Running
    
    p.mb-5 En esta sección se describe el procedimiento para elaborar los moldes de espuma (abullonado) correspondientes al cuello y a la lengüeta, fundamentales para aportar comodidad y estructura al calzado.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Molde abullonado cuello
    
    .row.justify-content-center.mb-5
      .col-lg-12
        .row.align-items-center.px-4.px-md-5.py-4.bg-color-16.tarjeta
          .col-lg-auto.order-2
            img(src="@/assets/curso/temas/tema7/27.svg", style="max-width: 90px").mx-auto
          .col-lg.order-1.mb-3.mb-lg-0
            p.mb-0 Para elaborar el molde de la espuma del cuello, se posiciona el patrón como si se fuera a extraer la bigotera, y se marca todo el contorno de la boca hasta llegar a la línea de la cordonera. Luego, se ubica un punto 5 mm por encima del inicio de la talonera, se escuadra desde ese punto y se traza una línea recta. A continuación, se dibuja una línea paralela a 15 mm de la línea diagonal del perfil, conectando la cordonera con la talonera. Finalmente, se suavizan los ángulos con curvas para definir el contorno final de la espuma.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 85.
          span Abullonado cuello
        figure
          img(src="@/assets/curso/temas/tema7/28.png", alt="Molde acolchado ajustado desde el patrón de la lengüeta externa, con recorte de 20 mm en la parte inferior y 5 mm en los laterales, formando una silueta más contenida. ", data-aos="zoom-in")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Molde abullonado lengüeta
    
    .row.justify-content-center.mb-5
      .col-lg-12
        .row.align-items-center.px-4.px-md-5.py-4.bg-color-16.tarjeta
          .col-lg-auto.order-2
            img(src="@/assets/curso/temas/tema7/30.svg", style="max-width: 90px").mx-auto
          .col-lg.order-1.mb-3.mb-lg-0
            p.mb-0 Para elaborar el molde de la espuma de la lengüeta, se parte del molde de la lengüeta externa y se realizan los siguientes ajustes: se rebajan 20 mm en la parte inferior y 5 mm en la parte lateral inferior. Luego, se traza una línea que conecte suavemente estos puntos con la curva superior, obteniendo así el contorno definitivo de la espuma.
    
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          h5 Figura 85.
          span Abullonado lengüeta
        figure
          img(src="@/assets/curso/temas/tema7/29.png", alt="Molde que reúne los ajustes finales de las espumas del cuello y la lengüeta del modelo Running, listos para ser incorporados en el forro del calzado. ", data-aos="zoom-in")



</template>

<script>
export default {
  name: 'Tema7',
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
