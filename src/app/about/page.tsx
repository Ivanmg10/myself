import "./about.css";
import type { Metadata } from "next";
import AboutMeComponent from "@/app/components/about-me-component/AboutMeComponent";
import AboutMeLine from "@/app/components/about-me-line/AboutMeLine";

export const metadata: Metadata = {
  title: "Sobre mí — Ivan Marquez",
  description:
    "Conoce más sobre Iván Márquez García — desarrollador Frontend con 4 años de experiencia",
};

export default function AboutPage() {
  return (
    <div className="flex justify-center" data-testid="about-page">
      <div className="grid grid-col-1 grid-rows-3 gap-4 sm:p-8 p-5 sm:w-2/3">
        <AboutMeComponent />

        <AboutMeLine />
      </div>
    </div>
  );
}
