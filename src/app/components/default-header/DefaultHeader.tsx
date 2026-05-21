"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "../social-links/SocialLinks";

export default function DefaultHeader() {
  const pathname = usePathname();

  return (
    <nav
      className="flex justify-around sm:px-20 py-10 items-center"
      data-testid="default-header"
    >
      <Link
        className={`sm:text-xl w-[50%] sm:w-auto text-center font-bold transition-colors delay-100 duration-150 hover:text-primary dark:hover:text-primary pl-[24px] ${
          pathname === "/about" ? "text-primary" : ""
        }`}
        href="/about"
      >
        Ivan Marquez Garcia
      </Link>
      <div className="flex items-center justify-center w-[50%] sm:w-auto">
        <ul className="flex items-center space-x-6">
          <Link
            className={`font-semibold transition-colors delay-100 duration-150 hover:text-primary dark:hover:text-primary ${
              pathname === "/" ? "text-primary" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`font-semibold transition-colors delay-100 duration-150 hover:text-primary dark:hover:text-primary ${
              pathname === "/projects" ? "text-primary" : ""
            }`}
            href="/projects"
          >
            Proyectos
          </Link>
          <li className="hidden sm:flex items-center space-x-6">
            <SocialLinks showLabels={false} />
          </li>

          <Image
            className="w-10 h-10 rounded-full"
            src="/logo.webp"
            alt="Logo"
            width={40}
            height={40}
          />
        </ul>
      </div>
    </nav>
  );
}
