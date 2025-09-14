import cap from "../../../../public/capgemini_logo.png";
import Image from "next/image";

export default function AboutMeLine() {
  return (
    <div className="sm:m-20 about-me-right">
      <h1 className="text-4xl font-bold mb-4 block sm:hidden mt-10 max-w-4x p-4l">
        Experiencia laboral
      </h1>
      <div
        className="row-span-3 col-span-1 p-4 flex justify-around"
        data-testid="about-me-line"
      >
        <div className="relative sm:max-w-4xl mx-auto">
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2"></div>

          {/* ITEM */}
          <div className="mb-12 flex flex-col sm:flex-row items-center w-full">
            <div className="w-full sm:w-1/2 sm:pr-8 sm:text-right text-left">
              <h3 className="text-lg font-semibold">Desarrollador Frontend</h3>
              <p className="text-sm text-gray-500">
                Capgemini • 2021 - Actualidad
              </p>
              <p className="mt-2 text-white">
                Participo en gran medida en el desarrollo, integración y pruebas
                (tanto unitarias como end-to-end y de aceptación) de diversas
                SPAs utilizadas en los procesos de simulación, contratación y
                consulta de seguros del entorno MyBox de CaixaBank. Incluyendo
                entre otros: MyBox Vida, MyBox Vida Negocios, MyBox VidaCare,
                MyBox Jubilación y otros proyectos en ciernes.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white my-4 sm:my-0 sm:-ml-4 sm:-mr-4">
              <Image
                src={cap}
                alt="Capgemini"
                className="rounded-full"
                priority
              />
            </div>

            <div className="hidden sm:block w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
