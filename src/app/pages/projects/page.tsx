import "./projects.css";

import Link from "next/link";
import Image from "next/image";

import { hasProjects } from "@/constants/project";
import palmweather from "../../../../public/images/palmweather.png";
import flowey from "../../../../public/images/flowey.png";

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      name: "Aplicación del tiempo",
      description:
        "🌦️ PalmWeather es una aplicación web de pronóstico del tiempo construida con React, Vite, TailwindCSS y WeatherAPI. Ofrece información meteorológica en tiempo real y pronósticos a 7 días, con una interfaz moderna y completamente responsiva. Los usuarios pueden buscar ciudades por nombre y obtener datos como temperatura, humedad, velocidad del viento y más, todo con un diseño optimizado para dispositivos móviles y de escritorio.",
      gitHub: "https://github.com/Ivanmg10/palmweather",
      route: "https://palmweather.vercel.app/",
      img: palmweather,
    },
  ];

  return (
    <div data-testid="projects-page">
      <header className="w-auto p-7 text-center">
        <h1 className="font-bold text-4xl sm:text-5xl project-title mb-5">
          Mis Proyectos
        </h1>
      </header>

      <main className="flex justify-center">
        <div className="font-sans grid grid-cols-3 gap-2 w-[90%]">
          {hasProjects ? (
            projects.map((project) => (
              <Link
                key={project.id}
                href={project.route}
                className="mx-auto rounded-xl shadow-md overflow-hidden mb-4 project-card col-span-3 sm:col-span-1"
                data-testid={`project-card-${project.id}`}
              >
                <div className="md:flex flex-col">
                  <div className="md:shrink-0">
                    <Image
                      className="w-full object-cover md:h-full md:w-fit"
                      src={project.img}
                      alt={project.img + "-" + project.id}
                      priority
                    />
                  </div>
                  <div className="sm:p-8">
                    <p className="mt-2 text-white text-1xl sm:text-2xl font-semibold">
                      {project.name}
                    </p>
                    <p className="mt-2 text-white text-1xl hidden sm:block">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center mt-20">
              <h2 className="text-2xl mb-10 text-white">
                There&apos;s no project, huh??
              </h2>
              <Image
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={flowey}
                alt="Flowey"
                data-testid={`project-card-flowey`}
                priority
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
