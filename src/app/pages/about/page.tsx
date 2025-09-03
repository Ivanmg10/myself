import "./about.css";
import AboutMeComponent from "@/app/components/about-me-component/AboutMeComponent";

import AboutMeLine from "@/app/components/about-me-line/AboutMeLine";

export default function AboutPage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-col-1 grid-rows-3 gap-4 p-8 main-body w-2/3 ">
        <AboutMeComponent />

        <AboutMeLine />
      </div>
    </div>
  );
}
