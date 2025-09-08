import Link from "next/link";
import "./projects.css";
import flowey from "../../../../public/images/flowey.png";
import Image from "next/image";
import { hasProjects } from "@/constants/project";

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      nombre: "Proyecto 1",
      ruta: "projects/project1",
      descripcion: "Descripción del Proyecto 1",
    },
    {
      id: "2",
      nombre: "Proyecto 2",
      ruta: "projects/project2",
      descripcion: "Descripción del Proyecto 2",
    },
    {
      id: "3",
      nombre: "Proyecto 3",
      ruta: "projects/project3",
      descripcion: "Descripción del Proyecto 3",
    },
    {
      id: "4",
      nombre: "Proyecto 4",
      ruta: "projects/project4",
      descripcion: "Descripción del Proyecto 4",
    },
  ];

  return (
    <div data-testid="projects-page">
      <header className="w-auto p-7 text-center">
        <h1 className="font-bold text-5xl project-title">Mis Proyectos</h1>
      </header>

      <main className="font-sans grid grid-cols-1 gap-6 p-4">
        {hasProjects ? (
          projects.map((project) => (
            <Link
              key={project.id}
              href={project.ruta}
              className="mx-auto rounded-xl shadow-md overflow-hidden w-14/15 project-card"
              data-testid={`project-card-${project.id}`}
            >
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={flowey}
                    alt="Flowey"
                    priority
                  />
                </div>
                <div className="p-8">
                  <p className="mt-2 text-white">{project.nombre}</p>
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
      </main>
    </div>
  );
}
