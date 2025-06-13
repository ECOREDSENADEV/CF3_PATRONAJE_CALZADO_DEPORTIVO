<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Síntesis  sobre el patronaje de calzado deportivo con elementos relacionados a líneas y puntos básicos como punto metatarsiano, línea metatarsiana, punto de calzada, punto de atraque, altura de talón, línea de profundidad y punto de entrada; obtención de la camisa o trepa incluyendo enmascarado de la horma, promedio de curvas, adaptación sobre la horma y verificación del ajuste; modelos de calzado deportivo tipo Court, Royal y Running; moldes específicos para cada modelo con construcción de piezas, despiece, forros y abullonado; y maqueta de comprobación con verificación del ajuste, evaluación del diseño, corrección de errores y optimización de materiales.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
