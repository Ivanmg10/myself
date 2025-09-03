import Image from "next/image";
import picture from "../../../../public/yo.jpg";
import "./about.css";

export default function AboutPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-flow-col grid-rows-3 gap-4 p-8 main-body w-2/3 about-me">
        <div className="row-span-3 col-span-1 p-4 flex justify-around">
          <div>
            <div className=" max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">Sobre mi</h1>
              <p className="mb-4">
                Buenas! Mi nombre es Ivan, soy un desarrollador de aplicaciones
                web con una experiencia laboral de 4 años, actualmente dedicado
                al sector de la banca digital y abierto siempre a nuevos retos.
              </p>
              <p className="mb-4">
                Estudie la formacion profesional en desarrollo de aplicaciones
                web, donde adquiri habilidades en tecnologias basicas como HTML,
                CSS y JS para mas adelante, de manera autodidacta y dentro de mi
                entorno profesional, React entre otros frameworks y librerias,
                asi como Node.js para el desarrollo del lado del servidor.
              </p>
              <p className="mb-4">
                Me considero una navaja suiza, ya que fuera de mis habilidades
                como programador tambien tengo experiencia en tener trato
                directo con clientes, formar a otros desarrolladores y aprender
                nuevas tecnologias si es necesario.
              </p>
            </div>
          </div>
          <div>
            <Image
              className="h-48 w-full object-cover md:h-full md:w-90 mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-right rounded-r-lg"
              src={picture}
              alt="Ivan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
