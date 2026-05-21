export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  alt: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: "CV",
    url: "/cv.pdf",
    icon: "/file.svg",
    alt: "File icon",
  },
  {
    label: "Git",
    url: "https://github.com/Ivanmg10",
    icon: "/github.svg",
    alt: "GitHub icon",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/ivan-marquez-23b49b210/",
    icon: "/linkedin.svg",
    alt: "LinkedIn icon",
  },
];
