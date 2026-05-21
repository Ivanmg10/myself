export interface Project {
  id: string;
  name: string;
  description: string;
  gitHub: string;
  route: string;
  img: string;
  isInProgress?: boolean;
  size: number;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Aplicación del tiempo",
    description:
      "🌦️ PalmWeather es una aplicación web de pronóstico del tiempo desarrollada con React, Vite, TailwindCSS y WeatherAPI.\n\n Proporciona información meteorológica en tiempo real, pronóstico de 3 días y un desglose detallado de 24 horas para su ubicación.",
    gitHub: "https://github.com/Ivanmg10/palmweather",
    route: "https://palmweather.vercel.app/",
    img: "/images/palmweather.webp",
    size: 1,
  },
  {
    id: "2",
    name: "Clon Spotify",
    description:
      "Clon de spotify creado con Next.js, React, TailwindCSS, TypeScript.\n\nCon las siguientes pantallas:\n- Vista de albumes\n- Vista de artistas\n- Vista de buscar (en desarrollo)",
    gitHub: "https://github.com/Ivanmg10/palmtify",
    route: "https://palmtify.vercel.app/",
    img: "/images/palmtify.webp",
    isInProgress: true,
    size: 3,
  },
];
