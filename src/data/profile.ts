
export type Lang = 'es' | 'en';
export type Localized = { es: string; en: string };

export const l = (text: Localized | string, lang: Lang) => (typeof text === 'string' ? text : text[lang]);

export type YearMonth = `${number}-${number}`;

export const person = {
  name: 'Ivan Rico G',
  role: { es: 'Desarrollador Backend Java', en: 'Backend Java Developer' },
  location: { es: 'Bogotá, Colombia', en: 'Bogotá, Colombia' },
  availability: {
    es: 'Remoto, o híbrido en Bogotá',
    en: 'Remote, or hybrid in Bogotá',
  },
  tagline: {
    es: 'Construyo soluciones con Java y Spring Boot para el sector financiero, y desarrollo un sistema que ayuda a hoteles pequeños y medianos en su día a día.',
    en: 'I build solutions with Java and Spring Boot for the financial sector. I also develop a system that helps small and medium hotels every day.',
  },
  careerStart: '2021-10' as YearMonth,
  email: 'ivanricog0@gmail.com',
  links: {
    github: 'https://github.com/ivanrico-g',
    linkedin: 'https://www.linkedin.com/in/ivanricog/',
    platzi: 'https://platzi.com/p/ivanricog/',
  },
  cvPath: '/cv/ivan-rico-g-cv.pdf',
};

export const about: Localized[] = [
  {
    es: 'Soy desarrollador de software con más de cuatro años de experiencia, la mayor parte en backend con Java y Spring Boot para clientes del sector financiero. Trabajo con arquitectura onion, principios SOLID y Clean Code. En pruebas trabajo con JUnit 5 y Mockito para unitarias, y TestNG para integración.',
    en: 'I am a software developer with more than four years of experience. Most of my work is backend development with Java and Spring Boot for clients in the financial sector. I use onion architecture, SOLID principles and Clean Code. For testing, I use JUnit 5 and Mockito for unit tests, and TestNG for integration tests.',
  },
  {
    es: 'Como proyecto propio, empecé en 2021 con un sistema para un hotel, y hoy desarrollo Softvibes junto con un colega desarrollador: un sistema de gestión hotelera. Ahí aprendo por cuenta propia a entender las necesidades reales de los clientes, y a desplegar y mantener algo que otros usan todos los días.',
    en: 'I also have my own project. In 2021, I started with a system for one hotel. Today I build Softvibes with a developer colleague: a hotel management system. There I learn on my own how to understand what clients really need, and how to deploy and maintain a system that people use every day.',
  },
  {
    es: 'Ahora mismo estoy profundizando en Java y buenas prácticas, y ampliando hacia Go, Svelte, arquitectura de software y DevOps.',
    en: 'Right now I am improving my Java and good practices, and I am also learning Go, Svelte, software architecture and DevOps.',
  },
];

export type Lane = 'work' | 'own';

export type Role = { title: Localized; from: YearMonth; to: YearMonth | null };

export type Job = {
  org: string;
  lane: Lane;
  kind: Localized;
  from: YearMonth;
  to: YearMonth | null;
  roles?: Role[];
  summary: Localized;
  points?: Localized[];
  stack: string[];
};

export const experience: Job[] = [
  {
    org: 'Artifex Tech',
    lane: 'work',
    kind: { es: 'Jornada completa, remoto', en: 'Full-time, remote' },
    from: '2022-02',
    to: null,
    roles: [
      {
        title: { es: 'Desarrollador de Soluciones y Soporte', en: 'Solutions and Support Developer' },
        from: '2026-01',
        to: null,
      },
      { title: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' }, from: '2024-01', to: '2026-01' },
      { title: { es: 'Analista de Desarrollo', en: 'Development Analyst' }, from: '2022-02', to: '2024-01' },
    ],
    summary: {
      es: 'Desarrollo como proveedor para clientes importantes del sector financiero.',
      en: 'I build software for big clients in the financial sector. We work for them as an external company.',
    },
    points: [
      {
        es: 'Funcionalidades backend con Java y Spring Boot, cuidando calidad y rendimiento.',
        en: 'Backend features with Java and Spring Boot, with focus on quality and performance.',
      },
      {
        es: 'Acceso a datos con Spring Data JPA e Hibernate sobre SQL Server.',
        en: 'Data access with Spring Data JPA and Hibernate on SQL Server.',
      },
      {
        es: 'Pruebas unitarias con JUnit 5 y Mockito, e integración con TestNG.',
        en: 'Unit tests with JUnit 5 and Mockito, and integration tests with TestNG.',
      },
      {
        es: 'Migraciones de código hacia Java y arquitectura onion con SOLID.',
        en: 'Code migrations to Java, using onion architecture and SOLID.',
      },
      {
        es: 'Interfaces con Vaadin y LitElement.',
        en: 'User interfaces with Vaadin and LitElement.',
      },
      {
        es: 'Revisión de código, integración y despliegue en desarrollo con Jenkins, dentro de Scrum.',
        en: 'Code reviews, and deploys to the dev environment with Jenkins. We work with Scrum.',
      },
    ],
    stack: ['Java', 'Spring Boot', 'JPA / Hibernate', 'SQL Server', 'JUnit 5', 'Mockito', 'TestNG', 'Vaadin', 'Jenkins'],
  },
  {
    org: 'Softvibes',
    lane: 'own',
    kind: { es: 'Proyecto propio', en: 'Own product' },
    from: '2023-07',
    to: null,
    summary: {
      es: 'Sistema de gestión hotelera para hoteles pequeños y medianos, que junto a un colega diseño, programo y despliego.',
      en: 'A hotel management system for small and medium hotels. I design, build and deploy it with a colleague.',
    },
    stack: ['Go', 'Svelte', 'Tailwind CSS', 'PostgreSQL', 'Fly.io', 'Laravel', 'React', 'AWS EC2'],
  },
  {
    org: 'Hotel Colono Plaza',
    lane: 'own',
    kind: { es: 'Independiente, remoto', en: 'Freelance, remote' },
    from: '2021-10',
    to: '2022-01',
    summary: {
      es: 'Con un compañero construimos su sistema de gestión: habitaciones, reservas, estancias, huéspedes, pedidos a la habitación y parqueadero. Elegimos un stack que el hotel pudiera alojar con un hosting económico.',
      en: 'Together with a teammate, we built the hotel management system: rooms, bookings, stays, guests, room service and parking. We chose a stack that the hotel could run on cheap hosting.',
    },
    stack: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
  },
  {
    org: 'Backstore',
    lane: 'own',
    kind: { es: 'Emprendimiento propio', en: 'Own business' },
    from: '2021-07',
    to: '2022-10',
    summary: {
      es: 'Tienda de productos tecnológicos: página web, redes sociales, envíos a todo el país y varios medios de pago.',
      en: 'An online store for tech products. It had a website and social media, shipped to all of Colombia and took different payment methods.',
    },
    stack: [],
  },
];

export type Project = {
  name: Localized | string;
  status: 'live' | 'archived' | 'building';
  summary: Localized;
  decisions?: Localized[];
  stack: string[];
  note?: Localized;
  links?: { label: Localized; href: string }[];
};

export const showPlaceholders = true;

export const projects: Project[] = [
  {
    name: 'Softvibes',
    status: 'live',
    summary: {
      es: 'Sistema para hoteles pequeños y medianos de Colombia: reservas, habitaciones, huéspedes, caja y facturación, para varios hoteles desde una sola plataforma.',
      en: 'A system for small and medium hotels in Colombia: bookings, rooms, guests, cash register and invoices. Many hotels use it from one platform.',
    },
    decisions: [
      {
        es: 'Reescrito de Laravel y React sobre AWS EC2 a Go, Svelte y PostgreSQL sobre Fly.io, después de aprender qué necesitaban de verdad los hoteles.',
        en: 'We rewrote it from Laravel and React on AWS EC2 to Go, Svelte and PostgreSQL on Fly.io, after we learned what hotels really needed.',
      },
      {
        es: 'Cada hotel ve solo sus datos: todo se filtra por sitio en el backend.',
        en: 'Each hotel only sees its own data: the backend filters everything by hotel.',
      },
      {
        es: 'Reportes legales al Gobierno integrados: registro turístico (TRA) y reporte de extranjeros a Migración (SIRE).',
        en: 'It creates the legal reports that the Colombian government asks for: TRA for tourism and SIRE for foreign guests.',
      },
      {
        es: 'Asistente con IA que responde y genera informes sin ejecutar SQL escrito por el modelo: consulta un lenguaje propio con una lista de accesos permitidos.',
        en: 'An AI assistant answers questions and creates reports. It never runs SQL written by the model: it uses our own query language with a list of allowed access.',
      },
    ],
    stack: ['Go', 'Svelte', 'Tailwind CSS', 'PostgreSQL', 'Fly.io'],
    note: {
      es: 'Código privado: es un producto comercial con datos reales de hoteles.',
      en: 'The code is private: it is a commercial product with real hotel data.',
    },
  },
  {
    name: 'Hydronotis',
    status: 'archived',
    summary: {
      es: 'Herramienta que hice durante el racionamiento de agua en Bogotá. Hacía scraping a la página de la Alcaldía y me avisaba por WhatsApp cuándo tenía mi turno.',
      en: 'A tool I made during the water rationing in Bogotá. It scraped the city website and sent me a WhatsApp message when it was my turn.',
    },
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'BeautifulSoup', 'GitHub Actions'],
    note: {
      es: 'Archivado: dejó de ser útil cuando terminó el racionamiento.',
      en: 'Archived: it stopped being useful when the rationing ended.',
    },
    links: [{ label: { es: 'Ver código', en: 'See the code' }, href: 'https://github.com/ivanrico-g/Hydronotis' }],
  },
  {
    name: { es: 'Microservicios con Spring', en: 'Microservices with Spring' },
    status: 'building',
    summary: {
      es: 'Mi próximo proyecto para practicar nuevas tecnologías: una aplicación dividida en microservicios que se comunican entre sí, con seguridad OAuth2, mensajería por eventos y despliegue en contenedores. Código y demo muy pronto.',
      en: 'My next project to practice new technologies: an application split into microservices that talk to each other, with OAuth2 security, event messaging and deploys with containers. Code and demo coming soon.',
    },
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes', 'Kafka'],
  },
];

export type SkillGroup = { name: Localized; items: (Localized | string)[] };

export const skills: SkillGroup[] = [
  {
    name: { es: 'Backend', en: 'backend' },
    items: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Lombok', { es: 'APIs REST', en: 'REST APIs' }],
  },
  {
    name: { es: 'Pruebas', en: 'Testing' },
    items: ['JUnit 5', 'Mockito', 'TestNG'],
  },
  {
    name: { es: 'Diseño de software', en: 'Software design' },
    items: [{ es: 'Arquitectura onion', en: 'Onion architecture' }, 'SOLID', 'Clean Code', 'Domain-Driven Design', 'Code review'],
  },
  {
    name: { es: 'Bases de datos', en: 'Databases' },
    items: ['SQL Server', 'PostgreSQL', 'MySQL'],
  },
  {
    name: { es: 'Frontend', en: 'Frontend' },
    items: ['Vaadin', 'LitElement', 'Svelte', 'Tailwind CSS', 'React', 'JavaScript', { es: 'HTML y CSS', en: 'HTML and CSS' }, 'Bootstrap'],
  },
  {
    name: { es: 'Nube y operación', en: 'Cloud and operations' },
    items: ['AWS EC2', 'Fly.io', 'Linux', 'Nginx', 'Jenkins', 'Git'],
  },
  {
    name: { es: 'Otros lenguajes', en: 'Other languages' },
    items: ['Go', 'PHP', 'Laravel'],
  },
];

export type Study = { org: string; title: Localized; from: YearMonth; to: YearMonth | null; note?: Localized };

export const education: Study[] = [
  {
    org: 'SENA',
    title: {
      es: 'Tecnólogo en Análisis y Desarrollo de Sistemas de Información',
      en: 'Technologist in Information Systems Analysis and Development',
    },
    from: '2020-09',
    to: '2022-12',
    note: { es: 'Exaltación por rendimiento académico, 2022', en: 'Award for academic performance, 2022' },
  },
  {
    org: 'Universidad Sergio Arboleda',
    title: { es: 'Diplomado en Scrum y Agilismo en Proyectos TI', en: 'Diploma in Scrum and Agile for IT Projects' },
    from: '2025-07',
    to: '2025-08',
  },
  {
    org: 'Academia CECONTEC',
    title: { es: 'Técnico en Sistemas y Mantenimiento de Equipos', en: 'Technician in Systems and Computer Maintenance' },
    from: '2019-01',
    to: '2019-12',
  },
  {
    org: 'Smart Academia de Idiomas',
    title: { es: 'Inglés ( B1 )', en: 'English  ( B1 )' },
    from: '2025-06',
    to: null,
  },
];

export type Course = { name: string; issuer: 'Platzi' | 'SENA' | 'Cymetria'; date: YearMonth; featured?: boolean; url?: string };

const platzi = (slug: string) => `https://platzi.com/p/ivanricog/curso/${slug}/diploma/detalle/`;

export const courses: Course[] = [
  { name: 'Curso de Java Spring', issuer: 'Platzi', date: '2024-08', featured: true, url: platzi('1996-course') },
  { name: 'Curso Avanzado de Java SE', issuer: 'Platzi', date: '2024-08', featured: true, url: platzi('1236-course') },
  { name: 'Fundamentos de Arquitectura de Software', issuer: 'Platzi', date: '2024-09', featured: true, url: platzi('1247-course') },
  { name: 'Arquitectura de Soluciones AWS', issuer: 'Cymetria', date: '2024-08', featured: true },
  { name: 'Curso Profesional de Git y GitHub', issuer: 'Platzi', date: '2023-08', featured: true, url: platzi('1557-course') },
  { name: 'Herramientas de AI para Developers', issuer: 'Platzi', date: '2026-09', featured: true, url: platzi('12852-course') },
  { name: 'Pensamiento Lógico', issuer: 'Platzi', date: '2026-03', url: platzi('12116-course') },
  { name: 'Fundamentos de Pruebas de Software', issuer: 'Platzi', date: '2026-02', url: platzi('1421-course') },
  { name: 'Comportamiento Emprendedor', issuer: 'SENA', date: '2022-07' },
  { name: 'Emprendimiento Digital', issuer: 'SENA', date: '2022-05' },
  { name: 'Inglés Básico, Nivel 1', issuer: 'SENA', date: '2021-12' },
  { name: 'Programación Orientada a Objetos: POO', issuer: 'Platzi', date: '2021-10', url: platzi('1474-course') },
  { name: 'Inglés Intermedio: Conversación 2020', issuer: 'Platzi', date: '2021-10', url: platzi('2029-course') },
  { name: 'Pensamiento Lógico 2018', issuer: 'Platzi', date: '2021-02', url: platzi('1444-course') },
  { name: 'Diseño para Developers', issuer: 'Platzi', date: '2021-02', url: platzi('1906-course') },
  { name: 'Control de Flujo en C', issuer: 'Platzi', date: '2021-02', url: platzi('1957-course') },
  { name: 'Funciones en C', issuer: 'Platzi', date: '2021-02', url: platzi('1968-course') },
  { name: 'Introducción a los Algoritmos de Ordenamiento', issuer: 'Platzi', date: '2021-02', url: platzi('1832-course') },
  { name: 'Redes Informáticas de Internet', issuer: 'Platzi', date: '2021-02', url: platzi('2225-course') },
  { name: 'Manejo de Nuevas Tecnologías TIC', issuer: 'SENA', date: '2021-02' },
  { name: 'Fundamentos de Ingeniería de Software', issuer: 'Platzi', date: '2021-01', url: platzi('1098-ingenieria') },
  { name: 'Auditoría Informática: Conceptualización', issuer: 'SENA', date: '2020-12' },
  { name: 'Fundamentos de Microsoft Word', issuer: 'SENA', date: '2018-12' },
  { name: 'Desarrollo de Habilidades Cognitivas para el Pensamiento Lógico-Matemático', issuer: 'SENA', date: '2018-10' },
];
