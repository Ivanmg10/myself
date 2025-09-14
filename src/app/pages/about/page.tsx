import "./about.css";
import AboutMeComponent from "@/app/components/about-me-component/AboutMeComponent";

import AboutMeLine from "@/app/components/about-me-line/AboutMeLine";

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
