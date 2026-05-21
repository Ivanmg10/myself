export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  logo: string;
  align: "left" | "right";
}

export const experiences: Experience[] = [
  {
    role: "Desarrollador Frontend",
    company: "Capgemini",
    period: "2021 - 2026",
    description:
      "Participé en gran medida en el desarrollo, integración y pruebas (tanto unitarias como end-to-end y de aceptación) de diversas SPAs utilizadas en los procesos de simulación, contratación y consulta de seguros del entorno MyBox de CaixaBank. Incluyendo entre otros: MyBox Vida, MyBox Vida Negocios, MyBox VidaCare, MyBox Jubilación y otros proyectos en ciernes.",
    logo: "/capgemini_logo.webp",
    align: "left",
  },
  {
    role: "Desarrollador Frontend Senior",
    company: "Sngular",
    period: "2026 - Actualidad",
    description: "Desarrollo front end senior.",
    logo: "/sngular_logo.webp",
    align: "right",
  },
];
