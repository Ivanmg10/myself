import "./projects.css";

import Link from "next/link";
import Image from "next/image";

import { hasProjects } from "@/constants/project";
import { projects } from "@/data/projects";
import clsx from "clsx";

export default function ProjectsPage() {
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
                    "xl:col-span-1": project.size === 1,
                    "xl:col-span-2": project.size === 2,
                    "xl:col-span-3": project.size === 3,
                    "xl:col-span-4": project.size === 4,
                  },
                )}
                data-testid={`project-card-${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className={`md:flex h-full ${
                    project.size === 3
                      ? "flex-row items-center"
                      : "flex-col items-center"
                  } `}
                >
                    <div className="md:shrink-0">
                    <Image
                      className="w-full object-cover md:w-200"
                      src={project.img}
                      alt={`${project.name} screenshot`}
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="sm:p-8 relative w-full h-full">
                    <p className="mt-2 text-white text-1xl sm:text-2xl font-semibold">
                      {project.name}
                    </p>
                    <p className="mt-2 text-white text-1xl hidden sm:block whitespace-pre-line">
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
                src="/images/flowey.webp"
                alt="Flowey"
                width={192}
                height={192}
                data-testid={`project-card-flowey`}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
