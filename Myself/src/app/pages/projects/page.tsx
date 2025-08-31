import Link from "next/link";
import "./projects.css";

export default function AboutPage() {
  return (
    <>
      <div className="w-auto p-7 text-center">
        <h1 className="font-bold text-5xl project-title">Mis Proyectos</h1>
      </div>

      <div className="font-sans grid grid-cols-3 grid-rows-4 gap-4 p-4">
        <Link
          href="/pages/projects/proyecto-1"
          className="row rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Ver Proyecto 1
        </Link>
        <Link
          href="/pages/projects/proyecto-2"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Ver Proyecto 2
        </Link>

        <Link
          href="/pages/projects/proyecto-2"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Ver Proyecto 3
        </Link>

        <Link
          href="/pages/projects/proyecto-2"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Ver Proyecto 4
        </Link>
      </div>
    </>
  );
}
