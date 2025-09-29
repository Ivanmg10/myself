import "./projects.css";

import Link from "next/link";
import Image from "next/image";

import { hasProjects } from "@/constants/project";
import palmweather from "../../../../public/images/palmweather.png";
import flowey from "../../../../public/images/flowey.png";
import palmtify from "../../../../public/images/palmtify.png";
import clsx from "clsx";

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      name: "Aplicación del tiempo",
      description:
        "🌦️ PalmWeather es una aplicación web de pronóstico del tiempo desarrollada con React, Vite, TailwindCSS y WeatherAPI.\n\n Proporciona información meteorológica en tiempo real, pronóstico de 3 días y un desglose detallado de 24 horas para su ubicación.",
      gitHub: "https://github.com/Ivanmg10/palmweather",
      route: "https://palmweather.vercel.app/",
      img: palmweather,
      size: 1,
    },
    {
      id: "2",
      name: "Clon Spotify",
      description:
        "Clon de spotify creado con Next.js, React, TailwindCSS, TypeScript.\n\nCon las siguientes pantallas:\n- Vista de albumes\n- Vista de artistas\n- Vista de buscar (en desarrollo)",

      gitHub: "https://github.com/Ivanmg10/palmtify",
      route: "https://palmtify.vercel.app/",
      img: palmtify,
      isInProgress: true,
      size: 3,
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
        <div className="font-sans grid grid-cols-4 gap-5 w-[90%]">
          {hasProjects ? (
            projects.map((project) => (
              <Link
                key={project.id}
                href={project.route}
                className={clsx(
                  "mx-auto rounded-xl shadow-md overflow-hidden mb-4 col-span-4 w-full project-card",
                  {
                    "sm:col-span-1": project.size === 1,
                    "sm:col-span-2": project.size === 2,
                    "sm:col-span-3": project.size === 3,
                    "sm:col-span-4": project.size === 4,
                  }
                )}
                data-testid={`project-card-${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`md:flex h-full ${
                    project.size === 3 ? "flex-row items-center" : "flex-col"
                  } `}
                >
                  <div className="md:shrink-0">
                    <Image
                      className="w-full object-cover md:w-200"
                      src={project.img}
                      alt={project.img + "-" + project.id}
                      priority
                    />
                  </div>
                  <div className="sm:p-8 relative w-full h-full">
                    <p className="mt-2 text-white text-1xl sm:text-2xl font-semibold">
                      {project.name}
                    </p>
                    <p className="mt-2 text-white text-1xl hidden sm:block whitespace-pre-line">
                      {project.description}
                    </p>
                    {project.isInProgress && (
                      <div className=" text-red-400 w-full bottom-0 absolute left-0 ">
                        <p className="text-3xl p-10">Work in progress</p>
                      </div>
                    )}
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
