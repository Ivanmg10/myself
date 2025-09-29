"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DefaultHeader() {
  const pathname = usePathname();

  return (
    <nav
      className="flex justify-around sm:px-20 py-10 items-center"
      data-testid="default-header"
    >
      <Link
        className={`sm:text-xl w-[50%] sm:w-auto text-center font-bold transition-colors delay-100 duration-150 hover:text-[#a29bfe] dark:hover:text-[#a29bfe] pl-[24px] ${
          pathname === "/pages/about" ? "text-[#a29bfe]" : ""
        }`}
        href="/pages/about"
      >
        Ivan Marquez Garcia
      </Link>
      <div className="flex items-center justify-center w-[50%] sm:w-auto">
        <ul className="flex items-center space-x-6">
          <Link
            className={`font-semibold transition-colors delay-100 duration-150 hover:text-[#a29bfe] dark:hover:text-[#a29bfe] ${
              pathname === "/" ? "text-[#a29bfe]" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`font-semibold transition-colors delay-100 duration-150 hover:text-[#a29bfe] dark:hover:text-[#a29bfe] ${
              pathname === "/pages/projects" ? "text-[#a29bfe]" : ""
            }`}
            href="/pages/projects"
          >
            Proyectos
          </Link>
          <li className="hidden sm:block">
            <Link
              className="flex items-center gap-2 hover:underline hover:underline-offset-4 "
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
            </Link>
          </li>
          <li className="hidden sm:block">
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
            </Link>
          </li>
          <li className="hidden sm:block">
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
            </Link>
          </li>

          <Image
            className="w-10 h-10 rounded-full"
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </ul>
      </div>
    </nav>
  );
}
