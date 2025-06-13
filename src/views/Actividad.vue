<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje y elaboración de moldes para calzado deportivo',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar los conceptos clave relacionados con la elaboración de moldes patrón, el diseño técnico y la tipología del calzado deportivo, aplicados al proceso de patronaje.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el primer paso en el proceso de patronaje del calzado deportivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preparación del talón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Enmascarado de la horma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Obtención de la lengüeta.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseño del contrafuerte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué función cumple la camisa (trepa) en el desarrollo del molde?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Dar color al calzado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Servir como base para el molde patrón.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Diseñar los ojaletes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar el tipo de suela.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué material se utiliza para elaborar la máscara compensada?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cartulina.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cuero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tela.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Caucho.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué indica la línea de entrada en el proceso de patronaje?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El acceso del pie al calzado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La costura final del zapato.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La línea de suela.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El borde superior del talón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es la finalidad principal del calzado deportivo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resistir al agua.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Optimizar el rendimiento y evitar lesiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Imitar el calzado urbano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplazar el calzado formal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué marca lanzó el modelo Royal como calzado urbano?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nike.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Adidas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reebok.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Cuál es el origen del calzado deportivo según el documento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Siglo XIX con la vulcanización del caucho.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Edad Media con el cuero curtido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Siglo XXI con la moda urbana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Grecia antigua con las sandalias atléticas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué representa el molde patrón?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un esquema digital del calzado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La plantilla base para corte y montaje.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El diseño de suela.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El logotipo de la marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es el punto de calzada?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El punto más alto del talón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El lugar donde se pegan los cordones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Intersección entre el eje del empeine y la línea metatarsiana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un punto decorativo del empeine.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es una característica clave del calzado tipo Court?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseño para campo abierto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseño sobrio y corte bajo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo en running.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capellada reforzada de acero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La línea metatarsiana se traza uniendo los puntos metatarsianos interno y externo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'Las zapatillas tipo Running surgieron en los años 2000.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'El molde patrón permite definir el estilo visual del calzado, pero no su funcionalidad.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El talón se construye mediante líneas paralelas y curvas suaves que definen el contrafuerte.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La máscara compensada se obtiene promediando las curvas de las máscaras interna y externa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
