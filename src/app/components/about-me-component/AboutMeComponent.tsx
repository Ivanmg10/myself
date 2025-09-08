import Image from "next/image";
import picture from "../../../../public/images/yo.jpg";

import html from "../../../../public/icons/html5.svg";
import css from "../../../../public/icons/css3.svg";
import js from "../../../../public/icons/javascript.svg";
import react from "../../../../public/icons/react.svg";
import ts from "../../../../public/icons/typescript.svg";
import next from "../../../../public/icons/nextjs.svg";
import sass from "../../../../public/icons/sass.svg";
import git from "../../../../public/icons/git.svg";

const ReturnIcons = () => {
  const icons = [html, css, js, react, ts, next, git, sass];

  return (
    <div className="mt-4 grid grid-rows-2 grid-cols-4 gap-5">
      {icons.map((icon, index) => {
        return (
          <Image
            key={index}
            className="inline-block h-20 w-20 mx-2 transition-transform duration-300 hover:scale-110"
            src={icon}
            alt="Icon"
          />
        );
      })}
    </div>
  );
};

export default function AboutMeComponent() {
  return (
    <div
      className="row-span-3 col-span-1 p-4 flex justify-around about-me-left"
      data-testid="about-me-component"
    >
      <div>
        <div className=" max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">Sobre mí</h1>
          <p className="mb-4">
            Buenas! mi nombre es Iván. Soy desarrollador de aplicaciones web con
            una experiencia laboral de 4 años, actualmente dedicado al sector de
            la banca digital y siempre abierto a nuevos retos.
          </p>
          <p className="mb-4">
            Estudié la Formación Profesional en Desarrollo de Aplicaciones Web,
            donde adquirí habilidades en tecnologías básicas como HTML, CSS y
            JavaScript. Más adelante, de manera autodidacta y dentro de mi
            entorno profesional, aprendí React, entre otros frameworks y
            librerías, así como Node.js para el desarrollo del lado del
            servidor.
          </p>
          <p className="mb-4">
            Me considero una navaja multiusos, ya que, además de mis habilidades
            como programador, también tengo experiencia en el trato directo con
            clientes, la formación de otros desarrolladores y la adaptación a
            nuevas tecnologías cuando es necesario.
          </p>
        </div>

        <div className="mt-8 max-w-4xl">
          <h1 className="text-xl font-bold">Tecnologías</h1>
          <ReturnIcons />
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
  );
}
