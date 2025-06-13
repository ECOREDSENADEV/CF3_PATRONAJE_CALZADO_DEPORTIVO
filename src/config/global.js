export default {
  global: {
    Name: 'Elaboración y comprobación de los moldes para calzado deportivo.',
    Description:
      'Este componente formativo enseña a elaborar y comprobar moldes para calzado deportivo mediante técnicas manuales y diseño técnico. Incluye el enmascarado de la horma, trazado de líneas guía, creación de la camisa, desarrollo del molde patrón, análisis de modelos deportivos y sus variaciones, así como los tipos y funciones de moldes utilizados en su fabricación.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Líneas y puntos básicos para el desarrollo del patronaje',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Obtener camisa (trepa) de forma manual',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Tipología calzado deportivo y sus variaciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Reseña histórica del calzado deportivo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Variaciones del modelo deportivo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Modelos icónicos de zapatillas deportivas',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Moldes, conceptos y tipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Elaborar moldes para el modelo deportivo tipo court',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Elaborar molde patrón para el modelo deportivo tipo court',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Despiece de moldes para el modelo deportivo tipo court',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Moldes del forro para el modelo deportivo tipo Court',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Moldes de abullonado para el modelo deportivo tipo Court',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Elaborar moldes para el modelo tipo Royal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Elaborar molde patrón para el modelo tipo Royal',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Despiece de moldes para el modelo tipo Royal',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Moldes forro para el modelo tipo Royal',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Elaborar moldes para el modelo deportivo tipo Running',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Elaborar molde patrón para el modelo tipo Running',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Despiece de moldes para el modelo tipo Running',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Moldes forro para el modelo tipo Running',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Moldes de abullonado deportivo tipo Running',
            hash: 't_7_4',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Elaboración maqueta de comprobación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Funciones principales de la maqueta',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Materiales comunes para la elaboración de maquetas',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Importancia de la maqueta',
            hash: 't_8_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Diseño y modelaje de un zapato deportivo',
      referencia:
        'Capacitacion en calzado. Luis f Ruiz capacitacion (2024, 30 abril). Temáticas de diseño y modelaje de un zapato deportivo para dama YouTube. [Vídeo]. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=jKMSU5aB6RM ',
    },
    {
      tema: 'Patrón  deportivo ',
      referencia:
        'Enrique Quercia. (2019, 28 septiembre). Como hacer un patrón de un deportivo. YouTube. [Vídeo].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o2JoCSygI2k ',
    },
  ],
  glosario: [
    {
      termino: 'Cuero',
      significado:
        'material natural obtenido de la piel de animales, principalmente vacuno, que se somete a un proceso de curtido para hacerlo resistente y flexible. Se utiliza en la fabricación de calzado por su durabilidad, confort y capacidad de adaptarse a la forma del pie.',
    },
    {
      termino: 'Horma',
      significado:
        'molde con la forma del pie que se usa en la fabricación de calzado para darle estructura y garantizar un ajuste adecuado. Puede estar hecha de madera, plástico o metal y varía según el tipo de calzado y su finalidad.',
    },
    {
      termino: 'Patronaje',
      significado:
        'es el proceso de diseño y creación de patrones que sirven como base para cortar las piezas de un calzado. A través del patronaje, se definen las formas y dimensiones de los componentes que conformarán el zapato.',
    },
    {
      termino: 'Sintético',
      significado:
        'material artificial fabricado a partir de polímeros como el PVC o el poliuretano, diseñado para imitar características del cuero o de otros materiales naturales. Se usa en calzado por su costo accesible, variedad de diseños y facilidad de mantenimiento.',
    },
    {
      termino: 'Textil',
      significado:
        'material compuesto por fibras naturales (algodón, lino, lana) o sintéticas (poliéster, nylon) que se utiliza en la fabricación de calzado, especialmente en modelos deportivos y casuales, debido a su ligereza y transpirabilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias Navarro, A., & Acevedo Ramírez, G. (1998). Patronaje, modelado y escalado de calzado.',
      link: '',
    },
    {
      referencia:
        'Bossan, M. J. (2007). El arte del zapato (S. Caballero, Trad.). Edimat Libros.',
      link: '',
    },
    {
      referencia:
        'García Macias, A. (1957). Arte y técnica del patronaje y modelaje del calzado. Editorial Dossat.',
      link: '',
    },
    {
      referencia:
        'Motawi, W. M., & Motawi, A. M. (2021). Patronaje de calzado y diseño de hormas. Wade Motawi.',
      link: '',
    },
    {
      referencia:
        'Vass, L., & Molnár, M. (1999). Zapatos de caballero hechos a mano. Konemann.',
      link: '',
    },
    {
      referencia:
        'Zambrano, L. C. (1990). Bloque modular 1: Preparación de avíos para calzado. Módulo instruccional 1: Estructura del pie - Proporciones y medidas. CEFAD, Regional Bogotá.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
