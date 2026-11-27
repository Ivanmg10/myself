export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const SITE_URL = "https://ivanmg10.vercel.app";

export const links = {
  cv: "/cv.pdf",
  github: "https://github.com/Ivanmg10",
  linkedin: "https://www.linkedin.com/in/ivan-marquez-23b49b210/",
  sngular: "https://www.sngular.com",
  capgemini: "https://www.capgemini.com",
  cheevovault: "https://cheevovault.com",
  eden: "https://edenpsicologia.com",
} as const;

export type RichText = Array<string | { text: string; href: string }>;

export interface Project {
  name: string;
  href: string;
  banner: string;
  description: string;
  stack: string[];
}

export interface Job {
  company: string;
  logo: string;
  role: string;
  dates: string;
  paragraphs: string[];
}

export interface Content {
  meta: { title: string; description: string };
  photoAlt: string;
  role: string;
  langNav: string;
  place: string;
  localTime: string;
  statusAwake: string;
  statusAsleep: string;
  bio: RichText[];
  resume: string;
  call: string;
  callSoon: string;
  newTab: string;
  projectsLabel: string;
  experienceLabel: string;
  projects: Project[];
  jobs: Job[];
}

export const content: Record<Locale, Content> = {
  en: {
    meta: {
      title: "Iván Márquez García · Senior frontend developer",
      description:
        "Portfolio of Iván Márquez García, senior frontend developer at Sngular. Projects: CheevoVault and Eden Psicología.",
    },
    photoAlt: "Photo of Iván Márquez García",
    role: "Senior frontend developer at Sngular",
    langNav: "Language",
    place: "Oviedo, Spain",
    localTime: "Local time:",
    statusAwake: "Awake right now",
    statusAsleep: "Outside my hours right now",
    bio: [
      [
        "I’m a senior frontend developer at ",
        { text: "Sngular", href: links.sngular },
        ", building an internal people-management tool for a large international retailer. Before that I spent almost five years at ",
        { text: "Capgemini", href: links.capgemini },
        " on CaixaBank’s MyBox insurance apps. Beyond the code, I helped run the team and its projects, was tech lead on some of them, and kept clients, UX, QA and developers in sync so we shipped on time without cutting corners.",
      ],
      [
        "Outside work I build and maintain my own products, like ",
        { text: "CheevoVault", href: links.cheevovault },
        ", and websites for clients, like ",
        { text: "Eden Psicología", href: links.eden },
        ". I write code with generative AI every day and keep refining how I work with it, but I still love writing code by hand: some of my projects are 100% handwritten, purely because I enjoy it. I also like tinkering with the hardware and software of whatever device I get my hands on.",
      ],
    ],
    resume: "Resume",
    call: "Book a call",
    callSoon: "soon",
    newTab: "(opens in a new tab)",
    projectsLabel: "projects",
    experienceLabel: "experience",
    projects: [
      {
        name: "CheevoVault",
        href: links.cheevovault,
        banner: "/images/cheevovault-en.webp",
        description:
          "Achievement tracking and management for RetroAchievements, Steam and PlayStation.",
        stack: ["Next.js", "PostgreSQL", "NextAuth", "Own component library"],
      },
      {
        name: "Eden Psicología",
        href: links.eden,
        banner: "/images/eden.webp",
        description: "Website for a psychology practice in Murcia.",
        stack: ["React", "Vite", "Vercel Functions", "Resend"],
      },
    ],
    jobs: [
      {
        company: "Sngular",
        logo: "/sngular_logo.webp",
        role: "Senior frontend developer",
        dates: "2026–present",
        paragraphs: [
          "I work on an internal people-management tool for a large international retailer. With it, each manager can see their own team’s org chart and other teams’, and handle leave, career history, salaries and other sensitive data, start dates, and changes of level, position or role.",
          "Every day I work with AI agents on a very demanding delivery schedule, and when the project needs it I also take on UX, QA and code review.",
        ],
      },
      {
        company: "Capgemini",
        logo: "/capgemini_logo.webp",
        role: "Frontend developer",
        dates: "2021–2026",
        paragraphs: [
          "I developed, integrated and tested (unit, end-to-end and acceptance) the SPAs for quoting, buying and managing CaixaBank’s MyBox insurance: Vida, Vida Negocios, VidaCare and Jubilación. I also helped manage the team and its projects, and was tech lead on some of them.",
        ],
      },
    ],
  },
  es: {
    meta: {
      title: "Iván Márquez García · Desarrollador frontend senior",
      description:
        "Portfolio de Iván Márquez García, desarrollador frontend senior en Sngular. Proyectos: CheevoVault y Eden Psicología.",
    },
    photoAlt: "Foto de Iván Márquez García",
    role: "Desarrollador frontend senior en Sngular",
    langNav: "Idioma",
    place: "Oviedo, España",
    localTime: "Hora local:",
    statusAwake: "Ahora mismo despierto",
    statusAsleep: "Ahora mismo fuera de horario",
    bio: [
      [
        "Soy desarrollador frontend senior en ",
        { text: "Sngular", href: links.sngular },
        ", donde trabajo en una herramienta interna de gestión de personas para un gran grupo de retail internacional. Antes pasé casi cinco años en ",
        { text: "Capgemini", href: links.capgemini },
        " con las aplicaciones de seguros MyBox de CaixaBank. Además de programar, ayudé a llevar el equipo y sus proyectos, fui tech lead en algunos de ellos y hacía de enlace entre clientes, UX, QA y desarrollo para entregar a tiempo sin renunciar a la calidad.",
      ],
      [
        "Fuera del trabajo hago y mantengo mis propios productos, como ",
        { text: "CheevoVault", href: links.cheevovault },
        ", y webs para clientes, como la de ",
        { text: "Eden Psicología", href: links.eden },
        ". Programo con IA generativa a diario y sigo afinando cómo trabajo con ella, pero me sigue encantando programar a mano: algunos de mis proyectos están hechos 100% a mano, solo porque disfruto haciéndolo. También me gusta trastear con el hardware y el software de cualquier dispositivo que caiga en mis manos.",
      ],
    ],
    resume: "Currículum",
    call: "Reservar una llamada",
    callSoon: "pronto",
    newTab: "(se abre en una pestaña nueva)",
    projectsLabel: "proyectos",
    experienceLabel: "experiencia",
    projects: [
      {
        name: "CheevoVault",
        href: links.cheevovault,
        banner: "/images/cheevovault-es.webp",
        description:
          "Seguimiento y gestión de logros de RetroAchievements, Steam y PlayStation.",
        stack: ["Next.js", "PostgreSQL", "NextAuth", "Librería de componentes propia"],
      },
      {
        name: "Eden Psicología",
        href: links.eden,
        banner: "/images/eden.webp",
        description: "Web para una consulta de psicología en Murcia.",
        stack: ["React", "Vite", "Vercel Functions", "Resend"],
      },
    ],
    jobs: [
      {
        company: "Sngular",
        logo: "/sngular_logo.webp",
        role: "Desarrollador frontend senior",
        dates: "2026–actualidad",
        paragraphs: [
          "Trabajo en una herramienta interna de gestión de equipos para un gran grupo de retail internacional. Con ella, cada responsable ve el organigrama de su equipo y el de otros, y gestiona bajas, trayectorias, salarios y datos sensibles, fechas de incorporación y cambios de nivel, posición o rol.",
          "Cada día trabajo con agentes de IA en un flujo de entregas muy exigente y, cuando el proyecto lo necesita, también me encargo de UX, QA y code review.",
        ],
      },
      {
        company: "Capgemini",
        logo: "/capgemini_logo.webp",
        role: "Desarrollador frontend",
        dates: "2021–2026",
        paragraphs: [
          "Desarrollé, integré y probé (pruebas unitarias, end-to-end y de aceptación) las SPAs de simulación, contratación y consulta de los seguros MyBox de CaixaBank: Vida, Vida Negocios, VidaCare y Jubilación. También ayudé a gestionar el equipo y sus proyectos, y fui tech lead en algunos de ellos.",
        ],
      },
    ],
  },
};
