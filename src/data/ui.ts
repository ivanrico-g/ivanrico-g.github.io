import type { Lang, YearMonth } from './profile';

export const ui = {
  es: {
    metaTitle: 'Ivan Rico G · Desarrollador Backend Java',
    metaDescription:
      'Desarrollador backend Java y Spring Boot en Bogotá. Experiencia en el sector financiero y cocreador de Softvibes, sistema de gestión hotelera.',
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Stack',
      education: 'Formación',
      contact: 'Contacto',
    },
    skipLink: 'Saltar al contenido',
    langSwitch: 'English',
    langSwitchLabel: 'Read in English',
    themeLabel: 'Cambiar entre tema claro y oscuro',
    cv: 'Descargar CV',
    present: 'hoy',
    laneWork: 'Empleo',
    laneOwn: 'Proyecto propio',
    status: { live: 'En producción', archived: 'Archivado', building: 'En construcción' },
    decisions: 'Decisiones técnicas',
    courses: 'Cursos',
    moreCourses: (n: number) => `Ver los ${n} cursos restantes`,
    lessCourses: 'Ver menos',
    allCerts: 'Mi perfil en Platzi',
    writeMe: 'Escríbeme un correo',
    months: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
    boot: {
      starting: 'Iniciando IvanRicoApplication en Bogotá, Colombia',
      colono: 'Colono Plaza: mi primer sistema para un hotel',
      artifex: 'Artifex Tech: Analista de Desarrollo, sector financiero',
      softvibes: 'Softvibes: inicia el sistema para hoteles',
      fullstack: 'Artifex Tech: nuevo rol, Desarrollador Full Stack',
      hydronotis: 'Hydronotis: alertas de cortes de agua por WhatsApp',
      solutions: 'Artifex Tech: Desarrollador de Soluciones y Soporte',
      profiles: 'Perfiles activos: "backend", "java", "spring-boot"',
      open: 'Disponible para: remoto, o híbrido en Bogotá',
      started: (years: string) => `IvanRicoApplication iniciada en ${years} años`,
    },
  },
  en: {
    metaTitle: 'Ivan Rico G · Backend Java Developer',
    metaDescription:
      'Backend developer with Java and Spring Boot, based in Bogotá. I work in the financial sector and I am co-creator of Softvibes, a system for hotels.',
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Stack',
      education: 'Education',
      contact: 'Contact',
    },
    skipLink: 'Skip to content',
    langSwitch: 'Español',
    langSwitchLabel: 'Leer en español',
    themeLabel: 'Toggle light and dark theme',
    cv: 'Download CV',
    present: 'now',
    laneWork: 'Employment',
    laneOwn: 'Own product',
    status: { live: 'In production', archived: 'Archived', building: 'In progress' },
    decisions: 'Technical decisions',
    courses: 'Courses',
    moreCourses: (n: number) => `Show the other ${n} courses`,
    lessCourses: 'Show less',
    allCerts: 'My Platzi profile',
    writeMe: 'Send me an email',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    boot: {
      starting: 'Starting IvanRicoApplication in Bogotá, Colombia',
      colono: 'Colono Plaza: my first system for a hotel',
      artifex: 'Artifex Tech: Development Analyst, financial sector',
      softvibes: 'Softvibes: started the system for hotels',
      fullstack: 'Artifex Tech: new role, Full Stack Developer',
      hydronotis: 'Hydronotis: WhatsApp alerts for water cuts',
      solutions: 'Artifex Tech: Solutions and Support Developer',
      profiles: 'Active profiles: "backend", "java", "spring-boot"',
      open: 'Open to: remote, or hybrid in Bogotá',
      started: (years: string) => `Started IvanRicoApplication in ${years} years`,
    },
  },
} as const;

export const formatYM = (ym: YearMonth | null, lang: Lang) => {
  if (!ym) return ui[lang].present;
  const [y, m] = ym.split('-').map(Number);
  return `${ui[lang].months[m - 1]} ${y}`;
};

export const formatRange = (from: YearMonth, to: YearMonth | null, lang: Lang) =>
  `${formatYM(from, lang)} – ${formatYM(to, lang)}`;

export const formatDuration = (from: YearMonth, to: YearMonth | null, lang: Lang, now = new Date()) => {
  const [fy, fm] = from.split('-').map(Number);
  const [ty, tm] = to ? to.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1];
  const total = (ty - fy) * 12 + (tm - fm) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const unit = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
  const parts = [
    years && unit(years, lang === 'es' ? 'año' : 'year', lang === 'es' ? 'años' : 'years'),
    months && unit(months, lang === 'es' ? 'mes' : 'month', lang === 'es' ? 'meses' : 'months'),
  ].filter(Boolean);
  return parts.join(lang === 'es' ? ' y ' : ' and ');
};

export const yearsSince = (from: YearMonth, now = new Date()) => {
  const [y, m] = from.split('-').map(Number);
  const months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - m);
  return (months / 12).toFixed(1);
};

export const localePath = (lang: Lang) => (lang === 'es' ? '/' : '/en/');
