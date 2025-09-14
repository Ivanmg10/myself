import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 main-page-body">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="typewriter">
          <h1 className="text-2xl sm:text-5xl">Iván Márquez García.</h1>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row w-full">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#a29bfe] text-background gap-2 hover:bg-[#6c5ce7] dark:hover:bg-[#6c5ce7] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[160px]"
            href="/pages/projects"
          >
            Mis proyectos
          </Link>

          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[160px]"
            href="/pages/about"
          >
            Sobre mi
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            priority
          />
          CV
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Ivanmg10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Window icon"
            width={16}
            height={16}
            priority
          />
          Git
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/ivan-marquez-23b49b210/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
            priority
          />
          Linkedin
        </Link>
      </footer>
    </div>
  );
}
