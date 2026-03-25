import type { Translations } from "./en";

export const es: Translations = {
  lang: "es",
  langLabel: "ES",
  switchLang: "EN",
  switchLangFull: "English",
  switchPath: (path: string) => path.replace(/^\/es/, "/en"),

  nav: {
    home: "Inicio",
    services: "Servicios",
    about: "Nosotros",
    reviews: "Reseñas",
    contact: "Contacto",
    book: "Citar Cita",
  },

  footer: {
    tagline: "Donde la Integridad Maneja",
    description: "Taller de autos de veterano en Colorado Springs. Trabajo honesto, precios justos, sin rodeos.",
    pages: "Páginas",
    contact: "Contacto",
    hours: "Lun – Sáb: 9:00 AM – 6:00 PM",
    address: "3826 E Pikes Peak Ave\nColorado Springs, CO 80909",
    copyright: "© 2025 TrueFix Auto — Colorado Springs, CO. Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
  },

  fab: {
    label: "Llamar o Texto",
    text: "Enviar Texto",
    call: "Llamar Ahora",
  },

  home: {
    meta: {
      title: "Inicio",
      description: "Taller de autos de veterano en Colorado Springs. Trabajo honesto, precios justos, sin rodeos.",
    },
    hero: {
      badge: "Colorado Springs, CO · De Veterano",
      headline1: "REPARACIÓN",
      headline2: "DE AUTOS EN LA QUE PUEDE",
      headline3: "CONFIAR.",
      tagline: "Donde la Integridad Maneja — Colorado Springs",
      desc: "Diagnósticos honestos, sin ventas adicionales y comunicación clara en todo momento. Tratamos su vehículo como si fuera el nuestro.",
      cta: "Solicitar Presupuesto",
      phone: "Llamar 720-812-6036 →",
      imgAlt: "Exterior del taller o equipo",
    },
    trust: [
      "✓ Sin Ventas Adicionales — Jamás",
      "✓ Garantía 12 Meses / 12,000 Millas",
      "✓ Citas Disponibles el Mismo Día",
      "✓ Se Aceptan Piezas del Cliente",
    ],
    quick: {
      services: {
        label: "Nuestro Trabajo",
        title1: "SERVICIO COMPLETO",
        title2: "REPARACIÓN Y MANTENIMIENTO",
        desc: "Desde cambios de aceite hasta reemplazos de motor todos los servicios bajo un mismo techo en Colorado Springs.",
        cta: "Ver Todos los Servicios",
      },
      about: {
        label: "Quiénes Somos",
        title1: "DE VETERANO.",
        title2: "COMUNIDAD PRIMERO.",
        desc: "Fundados en honestidad y precisión. Le explicamos qué necesita su auto y qué no.",
        cta: "Sobre Nosotros",
      },
      book: {
        label: "¿Listo?",
        title1: "AGENDE SU",
        title2: "CITA",
        desc: "Llame, escriba, venga o llene nuestro formulario. Lo atendemos rápido.",
        cta: "Contáctenos",
      },
    },
    reviews: {
      label: "Lo Que Dicen los Clientes de Colorado Springs",
      title1: "PERSONAS REALES.",
      title2: "RESULTADOS REALES.",
      cta: "Leer Todas las Reseñas",
    },
  },

  about: {
    meta: {
      title: "Sobre Nosotros",
      description: "TrueFix Auto es un taller de veterano en Colorado Springs. Trabajo honesto, precios justos y comunicación directa en cada trabajo.",
    },
    header: {
      label: "Nuestra Historia",
      title1: "DE VETERANO.",
      title2: "COMUNIDAD PRIMERO.",
    },
    main: {
      label: "Quiénes Somos",
      title1: "MUCHO MÁS QUE",
      title2: "UN TALLER MECÁNICO.",
      p1: "TrueFix Auto fue fundado con un principio simple: tratar a cada cliente como a uno le gustaría ser tratado. Como taller de veterano aquí mismo en Colorado Springs, aplicamos disciplina y precisión de nivel militar en cada reparación, ya sea un simple cambio de aceite o un reemplazo de motor completo.",
      p2: "Nunca hacemos ventas adicionales. Nunca le hablamos en jerga técnica. Le decimos exactamente qué necesita su vehículo, qué no necesita y cuánto costará antes de tocar nada. Ese es el estándar TrueFix.",
      p3: "Colorado Springs es nuestra comunidad. Sea usted un cliente habitual, nuevo o de paso — recibirá el mismo servicio honesto y de calidad en cada visita.",
      cta: "Obtener Presupuesto",
    },
    stats: {
      rating: { num: "5★", label: "Calificación Google" },
      hours: { num: "Lun–Sáb", label: "Abierto 9AM – 6PM" },
      owned: { num: "Veterano", label: "Dueño y Operador" },
      warranty: { num: "12Mo/12K", label: "Garantía Piezas y Mano de Obra" },
      discount: { num: "10% Off", label: "Militares y Primeros Respondedores" },
    },
    values: {
      label: "Por Qué Elegirnos",
      title: "EL ESTÁNDAR TRUEFIX",
      cards: [
        {
          title: "Sin Ventas Adicionales. Jamás.",
          desc: "Solo recomendamos lo que su vehículo realmente necesita. Si no lo necesita, no se lo venderemos. Punto.",
        },
        {
          title: "Comunicación Clara",
          desc: "Sin jerga, sin rodeos. Le explicamos qué está mal, qué vamos a hacer y cuánto cuesta.",
        },
        {
          title: "Entrega Rápida",
          desc: "Respetamos su tiempo. Hay citas disponibles el mismo día para la mayoría de trabajos y no nos demoramos.",
        },
        {
          title: "Precisión Militar",
          desc: "Ser de veterano significa que la atención al detalle no es opcional. Es nuestra forma de operar. Cada vehículo recibe nuestra atención total.",
        },
      ],
    },
    photos: {
      label: "El Taller — Colorado Springs",
      title: "VISÍTENOS",
    },
  },

  services: {
    meta: {
      title: "Servicios",
      description: "Servicio completo de reparación y mantenimiento en Colorado Springs. Frenos, diagnósticos de motor, cambios de aceite, servicio de AC y más.",
    },
    header: {
      label: "Lo Que Hacemos",
      title: "SERVICIOS DE REPARACIÓN Y MANTENIMIENTO",
      desc: "Cada trabajo hecho bien a la primera vez en Colorado Springs. Sin ventas adicionales. Sin sorpresas en su factura.",
    },
    warranty: {
      title: "Garantía de 12 Meses / 12,000 Millas",
      sub: "En todas las piezas y mano de obra suministradas por TrueFix Auto. Respaldamos nuestro trabajo en todo momento.",
    },
    military: {
      title: "Descuento para Militares y Primeros Respondedores",
      sub: "Militares activos, veteranos y primeros respondedores reciben descuento en todos los servicios. Solo menciónelo al llamar o al llegar.",
      cta: "Solicitar Presupuesto",
    },
    repair: {
      tag: "Servicios de Reparación",
      items: [
        { name: "Servicio de Frenos", desc: "Pastillas, discos, calibradores e inspecciones completas del sistema de frenos. No reemplazamos lo que no necesita reemplazo." },
        { name: "Diagnóstico de Motor", desc: "Luces de verificación del motor y problemas de rendimiento diagnosticados con precisión. Le explicamos los hallazgos en términos simples." },
        { name: "Cambio de Motor", desc: "Servicio completo de cambio de motor con precisión y cuidado. Consúltenos sobre los requisitos específicos de su vehículo." },
        { name: "Suspensión y Dirección", desc: "Amortiguadores, struts, componentes de dirección y alineación de ruedas. Mantiene su manejo seguro y cómodo en los caminos de Colorado." },
        { name: "Reparación del Sistema de Enfriamiento", desc: "Radiadores, termostatos, bombas de agua y mangueras. Prevenga el sobrecalentamiento antes de que se convierta en un problema costoso." },
        { name: "Reemplazo de Arranque y Alternador", desc: "Diagnóstico del sistema eléctrico y reemplazo de componentes para que su vehículo arranque y cargue de manera confiable." },
        { name: "Inspecciones Pre-Compra", desc: "Sepa lo que está comprando antes de firmar. Un informe de inspección completo y honesto sin relleno." },
        { name: "Alineación de Dirección y Ruedas", desc: "La alineación adecuada mejora el manejo, reduce el desgaste de los neumáticos y lo mantiene conduciendo recto. Entrega rápida." },
        { name: "Servicios para Flotas", desc: "Mantenimiento programado y reparaciones para pequeñas flotas empresariales. Programación prioritaria y servicio consistente disponible." },
      ],
    },
    maintenance: {
      tag: "Servicios de Mantenimiento",
      items: [
        { name: "Cambio de Aceite", desc: "Cambios de aceite rápidos y completos con el aceite adecuado para su vehículo. También revisamos los niveles de fluidos y la presión de los neumáticos." },
        { name: "Servicio y Reparación de AC", desc: "Recarga, detección de fugas y reparación completa del sistema de AC. No pase un verano en Colorado Springs sin AC funcionando." },
        { name: "Afinación y Mantenimiento", desc: "Bujías, filtros y revisiones completas de mantenimiento para mantener su vehículo funcionando al máximo rendimiento y eficiencia." },
        { name: "Servicio de Batería", desc: "Pruebas, reemplazo y limpieza de terminales. Tenemos stock confiable y lo instalamos mientras espera. No necesita cita." },
        { name: "Reemplazo de Correas", desc: "Correas de distribución, correas serpentinas y correas de transmisión inspeccionadas y reemplazadas antes de que lo dejen varado." },
        { name: "Relleno de Fluidos", desc: "Líquido de frenos, refrigerante, dirección asistida, transmisión. Rellenamos todos los fluidos e indicamos lo que necesita atención." },
        { name: "Revisiones de Preparación Estacional", desc: "Prepare su vehículo para el invierno o el verano con una inspección estacional completa. El clima de Colorado Springs no es broma." },
        { name: "Piezas Suministradas por el Cliente", desc: "Instalamos las piezas que usted trae. Sin problema, sin recargo. Solo nuestra tarifa de mano de obra honesta aplicada a su trabajo." },
      ],
    },
    comingSoon: {
      tag: "Próximamente",
      items: [
        { name: "Servicio Móvil TrueFix", desc: "¿No puede venir al taller? Le llevamos TrueFix Auto a usted. Servicio móvil de reparación y mantenimiento próximamente en Colorado Springs." },
      ],
    },
    cta: {
      title: "¿NO SABE QUÉ NECESITA SU AUTO?",
      desc: "Llámenos o tráigalo a nuestro taller en Colorado Springs. Lo diagnosticamos honestamente y le decimos exactamente qué pasa.",
      book: "Agendar una Cita",
      phone: "720-812-6036",
    },
    quoteLink: "Solicitar Presupuesto →",
    notifyLink: "Notifíqueme →",
  },

  reviews: {
    meta: {
      title: "Reseñas",
      description: "Vea lo que los clientes dicen sobre TrueFix Auto en Colorado Springs. Reseñas reales de Google de clientes reales.",
    },
    header: {
      label: "Reseñas de Clientes",
      title1: "NO NOS CREA",
      title2: "SOLO A NOSOTROS.",
      sub: "Reseñas reales de clientes reales en Colorado Springs.",
      ratingSource: "en Google Reviews",
    },
    seeAll: "Ver Todas las Reseñas de Google →",
    verified: "Reseña de Google · Cliente Verificado",
    items: [
      {
        text: "\"Era nueva en el área hace un año cuando me detuve, me tomaron el tiempo para explicar y fueron más allá con mi vehículo. Muy honestos y precios justos. Desde entonces siempre han sido amables. Si tengo un problema me detengo y Cowboy siempre se toma el tiempo para ayudar, quizás no se arregle ese día pero sé que lo harán y siempre de manera muy justa y honesta. ¡Muchas gracias por cuidar el vehículo de mi familia!\"",
        author: "Anahi Rodriguez",
      },
      {
        text: "\"Llevo unos 10 meses viniendo al Cowboy Mechanic Shop y cada visita ha sido excelente. Recientemente traje mi camioneta para una afinación y el servicio fue de primera, rápido, honesto y profesional. Estos chicos realmente saben lo que hacen y se nota que se enorgullecen de su trabajo. ¡Si busca un mecánico de confianza, Cowboy es el lugar!\"",
        author: "Moussa Diao",
      },
      {
        text: "\"Traje mi Buick LeSabre 2003 por frenos chirriantes y la luz de verificación del motor. Cowboy (el dueño) trabajó en el auto, me mantuvo informado todo el tiempo y encontró una fuga de refrigerante que yo no sabía 😅. Precios muy razonables, no intentó cobrar de más y mi auto estuvo listo el mismo día. ¡Lo recomiendo muchísimo!\"",
        author: "Eden Mae Yates",
      },
      {
        text: "\"¡Cowboy Mechanic Shop es fantástico! Me recibieron con una sonrisa, me dieron un presupuesto honesto dentro de mi presupuesto y no hubo cobros adicionales. Mi auto estuvo listo rápidamente. Honesto, rápido, asequible y de veterano. ¡Muy recomendado!\"",
        author: "Anthony Rivera",
      },
      {
        text: "\"Súper profesional y excelente comunicación. Hicieron todo lo que dijeron que harían. Su opinión honesta sobre ciertas piezas que yo creía que necesitaban reparación, dijeron que estarían bien, y señalaron las cosas de verdadera prioridad. Definitivamente los recomendaré a todos.\"",
        author: "Camden Burton",
      },
      {
        text: "\"Cowboy revisó mi vehículo. Realmente lo recomiendo mucho. Como mujer es difícil encontrar un mecánico honesto, también aprecio mucho su justicia en el precio y no se fueron hasta que mi vehículo estuviera arreglado aunque estaban muy ocupados cuando llegué. Me habló en términos que podía entender, hizo un día muy estresante fácil de manejar. ¡Ojalá los hubiera encontrado antes! Servicio fenomenal, ¡vuelvo en 2 semanas para la alineación y el servicio de transmisión!\"",
        author: "Rosheyly Martinez",
      },
    ],
  },

  contact: {
    meta: {
      title: "Contacto y Citas",
      description: "Reserve una cita o comuníquese con TrueFix Auto en Colorado Springs. Llame al 720-812-6036 o complete nuestro formulario.",
    },
    header: {
      label: "Contáctenos",
      title1: "¿LISTO PARA",
      title2: "ARREGLAR SU AUTO?",
      sub: "Llámenos, visítenos o llene el formulario. Lo atenderemos rápido y le mantendremos informado en cada paso.",
    },
    details: {
      phone: { label: "Teléfono", value: "720-812-6036" },
      email: { label: "Correo Electrónico", value: "info@truefixauto.com" },
      address: { label: "Dirección — Colorado Springs", value: "3826 E Pikes Peak Ave\nColorado Springs, CO 80909" },
      hours: { label: "Horario", value: "Lunes – Sábado\n9:00 AM – 6:00 PM" },
    },
    discount: {
      title: "Descuento para Militares y Primeros Respondedores",
      body: "Militares activos, veteranos y primeros respondedores reciben descuento en todos los servicios. Solo menciónelo al llamar o al llegar.",
    },
    warranty: {
      title: "Garantía de 12 Meses / 12,000 Millas",
      body: "Todas las piezas y mano de obra suministradas por TrueFix Auto están cubiertas. Respaldamos cada trabajo.",
    },
    social: {
      label: "Encuéntrenos en Línea",
    },
    form: {
      heading: "AGENDE SU CITA",
      sub: "Complete el formulario y lo llamaremos en pocas horas para confirmar.",
      firstName: "Nombre",
      lastName: "Apellido",
      firstNamePlaceholder: "Juan",
      lastNamePlaceholder: "García",
      phone: "Número de Teléfono",
      phonePlaceholder: "(719) 555-0000",
      email: "Correo Electrónico",
      emailPlaceholder: "juan@ejemplo.com",
      vehicle: "Su Vehículo",
      vehiclePlaceholder: "Año / Marca / Modelo (ej. 2018 Toyota Camry)",
      service: "Servicio Necesario",
      servicePlaceholder: "Seleccione un servicio...",
      services: [
        "Cambio de Aceite",
        "Servicio de Frenos",
        "Diagnóstico de Motor",
        "Cambio de Motor",
        "Suspensión / Dirección / Alineación",
        "Reparación del Sistema de Enfriamiento",
        "Servicio o Reparación de AC",
        "Servicio de Batería",
        "Afinación / Mantenimiento",
        "Reemplazo de Correas",
        "Arranque / Alternador",
        "Inspección Pre-Compra",
        "Servicio de Flota",
        "No Sé — Necesito Diagnóstico",
        "Otro",
      ],
      message: "Cuéntenos Qué Pasa",
      messagePlaceholder: "Describa lo que está experimentando con su vehículo — cualquier ruido, luz de advertencia o problema que haya notado...",
      military: "Soy militar / veterano / primer respondedor (aplica descuento)",
      submit: "Solicitar Presupuesto →",
      note: "Lo llamaremos en pocas horas para confirmar su hora de cita.",
    },
  },
};