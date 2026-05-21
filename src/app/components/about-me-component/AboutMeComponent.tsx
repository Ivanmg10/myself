import Image from "next/image";

const icons = [
  { src: "/icons/html5.svg", alt: "HTML5" },
  { src: "/icons/css3.svg", alt: "CSS3" },
  { src: "/icons/javascript.svg", alt: "JavaScript" },
  { src: "/icons/react.svg", alt: "React" },
  { src: "/icons/typescript.svg", alt: "TypeScript" },
  { src: "/icons/nextjs.svg", alt: "Next.js" },
  { src: "/icons/git.svg", alt: "Git" },
  { src: "/icons/sass.svg", alt: "Sass" },
];

function TechIcons() {
  return (
    <div className="mt-4 grid grid-row-3 sm:grid-rows-2 grid-cols-3 sm:grid-cols-4 gap-5">
      {icons.map((icon, index) => (
        <Image
          key={index}
          className="inline-block h-20 w-20 mx-2 transition-transform duration-300 hover:scale-110"
          src={icon.src}
          alt={icon.alt}
          width={80}
          height={80}
        />
      ))}
    </div>
  );
}

export default function AboutMeComponent() {
  return (
    <div
      className="row-span-3 col-span-1 p-4 flex justify-around about-me-left"
      data-testid="about-me-component"
    >
      <div>
        <div className="max-w-4xl">
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
          <TechIcons />
        </div>
      </div>
      <div className="hidden sm:block">
        <Image
          className="h-48 w-full object-cover md:h-full md:w-90 mask-radial-[100%_100%] mask-radial-from-75% mask-radial-at-right rounded-r-lg"
          src="/images/yo.webp"
          alt="Ivan"
          width={360}
          height={480}
        />
      </div>
    </div>
  );
}
