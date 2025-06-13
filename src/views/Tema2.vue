<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Obtener camisa (trepa) de forma manual
    
    .bg-full-width.bg-fondo-slider.mb-5.tarjeta
      .p-4.p-md-5
        PasosB.color-acento-contenido.bg-white.tarjeta.p-4
          div(titulo="Paso 1")
            p.mb-5 Durante el proceso de elaboración de la camisa, es fundamental realizar el enmascarado en ambas caras de la horma, tanto interna como externa, con el objetivo de obtener un perfil preciso que garantice la correcta construcción del molde.
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 13.
                  span Máscara obtenida
                figure
                  img(src="@/assets/curso/temas/tema2/1.png", alt="Imagen de la máscara obtenida mediante el enmascarado completo de ambas caras de la horma, utilizada para capturar la forma y proporciones del modelo deportivo. ") 
          div(titulo="Paso 2")
            p.mb-5 Una vez se han obtenido ambas máscaras, estas se superponen procurando que coincidan la altura del talón y la línea de profundidad, lo que permite asegurar la simetría y precisión del molde.   
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 14.
                  span Máscaras superpuestas
                figure
                  img(src="@/assets/curso/temas/tema2/2.png", alt="Representación de las dos máscaras (interna y externa) superpuestas sobre una superficie plana, alineadas por altura de talón y línea de profundidad, para facilitar la obtención de una curva promedio precisa. ") 
          div(titulo="Paso 3")
            p.mb-5 Se realiza un promedio entre las curvas obtenidas de ambas máscaras para generar una nueva curva más precisa y equilibrada, que servirá como base para el desarrollo de la camisa.
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 15.
                  span Promediar máscara
                figure
                  img(src="@/assets/curso/temas/tema2/3.png", alt="Ilustración del procedimiento para promediar las curvas de ambas máscaras, trazando una nueva línea media que refleje un perfil simétrico entre los lados interno y externo. ") 
          div(titulo="Paso 4")
            p.mb-5 De esta manera se obtiene la máscara compensada, producto del ajuste y promediado de ambas curvas, la cual proporciona una base simétrica y precisa para el trazado del molde patrón. Para este procedimiento, se tomarán como referencia las líneas y puntos guías correspondientes a cada una de las caras de la horma.
            .row.justify-content-center
              .col-lg-6
                .titulo-sexto.color-acento-contenido
                  h5 Figura 16.
                  span Máscara promediada
                figure
                  img(src="@/assets/curso/temas/tema2/4.png", alt="Imagen que muestra la máscara promediada, resultado del ajuste entre curvas internas y externas, utilizada como base equilibrada para construir la camisa del molde patrón.  ") 
    
    p.mb-5 Antes de elaborar el molde patrón, se realiza la construcción de la camisa de la horma mediante los siguientes pasos:

    .bg-full-width-2.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        TabsC.color-acento-botones.mb-5
          .py-3.py-md-4(titulo="Corte de piezas")
            .row.justify-content-center.align-items-center
              .col-md-5.order-2
                h4 Corte de piezas
                p A partir de la máscara compensada, se recortan dos piezas simétricas que se ensamblarán para formar la camisa de la horma. Se utiliza papel para facilitar el trazado y los ajustes.
            
              .col-md-5.order-1.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 17.
                  span Corte de piezas
                figure
                  img(src="@/assets/curso/temas/tema2/5.png", alt="Imagen de dos piezas simétricas recortadas sobre papel, colocadas sobre superficie azul, que servirán para formar la camisa de la horma en el proceso de patronaje. ") 
          .py-3.py-md-4(titulo="Unión de piezas")
            .row.justify-content-center.align-items-center
              .col-md-5.order-2
                h4 Unión de piezas
                p Las piezas se ensamblan en el empeine y el talón con cinta de enmascarar, asegurando un ajuste firme sobre la horma.
            
              .col-md-5.order-1.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 18.
                  span Unión de piezas
                figure
                  img(src="@/assets/curso/temas/tema2/6.png", alt="Fotografía de las dos piezas ensambladas en el empeine y el talón mediante cinta de enmascarar, conformando la camisa ajustada alrededor de la horma. ") 
          .py-3.py-md-4(titulo="Adaptación sobre la horma")
            .row.justify-content-center.align-items-center
              .col-md-5.order-2
                h4 Adaptación sobre la horma
                p Se arruga ligeramente la camisa para facilitar su colocación y permitir que se ajuste a la forma de la horma.
            
              .col-md-5.order-1.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 19.
                  span Adaptación sobre la horma
                figure
                  img(src="@/assets/curso/temas/tema2/7.png", alt="Dos imágenes: una muestra la camisa arrugada antes de ser colocada, y la otra muestra la camisa adaptada a la forma de la horma para facilitar su ajuste. ") 
          .py-3.py-md-4(titulo="Verificación del ajuste")
            .row.justify-content-center.align-items-center
              .col-md-5.order-2
                h4 Verificación del ajuste
                p Se comprueba que la camisa se ajuste adecuadamente, haciendo las correcciones necesarias para que siga con precisión el contorno de la horma.
            
              .col-md-5.order-1.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 20.
                  span Verificación del ajuste
                figure
                  img(src="@/assets/curso/temas/tema2/8.png", alt="Vista lateral de una horma con la camisa colocada, donde se comprueba que sigue con precisión el contorno del modelo, permitiendo detectar y corregir imperfecciones. ") 
          .py-3.py-md-4(titulo="Obtención del perfil")
            .row.justify-content-center.align-items-center
              .col-md-5.order-2
                h4 Obtención del perfil
                p Una vez ajustada, se obtiene el perfil de la horma, que servirá como base para elaborar el molde patrón.
            
              .col-md-5.order-1.mb-4.mb-md-0
                .titulo-sexto.color-acento-contenido
                  h5 Figura 21.
                  span Obtención del perfil
                figure
                  img(src="@/assets/curso/temas/tema2/9.png", alt="Imagen de la camisa ya ajustada extendida sobre una superficie, mostrando el perfil plano obtenido que servirá como base para el trazado del molde patrón.  ") 
    
        p.mb-5 Una vez compensada la máscara la dibujamos sobre una cartulina con los puntos y líneas guía, como se muestra en la imagen.

        .row.justify-content-center.align-items-center
          .col-lg-10
            .row.justify-content-center.align-items-center.bg-color-8.p-4.tarjeta
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-2
                .titulo-sexto.color-acento-contenido
                  h5 Figura 22.
                  span Mascara compensada
                figure
                  img(src="@/assets/curso/temas/tema2/11.png", alt="Dibujo técnico de la máscara compensada trasladada a cartulina, con la incorporación de los puntos y líneas guía necesarios para continuar con el desarrollo del patrón base. ") 

              .col-lg-4(data-aos="zoom-in").order-1
                img.img-fluid(src='@/assets/curso/temas/tema2/10.png', alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

</template>

<script>
export default {
  name: 'Tema2',
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
