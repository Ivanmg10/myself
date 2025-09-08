import cap from "../../../../public/capgemini_logo.png";
import Image from "next/image";

export default function AboutMeLine() {
  return (
    <div
      className="row-span-3 col-span-1 p-4 flex justify-around m-20 about-me-right"
      data-testid="about-me-line"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 -translate-x-1/2"></div>

        <div className="mb-12 flex items-center w-full">
          <div className="w-1/2 pr-8 text-right">
            <h3 className="text-lg font-semibold">Desarrollador Frontend</h3>
            <p className="text-sm text-gray-500">
              Capgemini • 2021 - Actualidad
            </p>
            <p className="mt-2 text-gray-600">
              Participo en gran medida en el desarrollo, integración y pruebas
              (tanto unitarias como end-to-end y de aceptación) de diversas SPAs
              utilizadas en los procesos de simulación, contratación y consulta
              de seguros del entorno MyBox de CaixaBank. Incluyendo entre otros:
              MyBox Vida, MyBox Vida Negocios, MyBox VidaCare, MyBox Jubilación
              y otros proyectos en ciernes.
            </p>
          </div>
          <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white -ml-4 -mr-4">
            <Image
              src={cap}
              alt="Capgemini"
              className="rounded-full"
              priority
            />
          </div>
          <div className="w-1/2"></div>
        </div>

        {/* TO CREATE MORE */}
        {/* <div className="mb-12 flex items-center w-full">
          <div className="w-1/2"></div>
          <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-green-600 rounded-full text-white -ml-4 -mr-4">
            B
          </div>
          <div className="w-1/2 pl-8 text-left">
            <h3 className="text-lg font-semibold">?</h3>
            <p className="text-sm text-gray-500">Empresa B • 2018 - 2020</p>
            <p className="mt-2 text-gray-600">
              API REST con Node.js, bases de datos SQL/NoSQL, despliegues en la
              nube.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
