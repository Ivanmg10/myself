import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/data/social";

interface SocialLinksProps {
  showLabels?: boolean;
  className?: string;
}

export default function SocialLinks({
  showLabels = true,
  className = "",
}: SocialLinksProps) {
  return (
    <div className={`flex gap-[24px] flex-wrap items-center justify-center ${className}`}>
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={link.icon}
            alt={link.alt}
            width={16}
            height={16}
          />
          {showLabels && link.label}
        </Link>
      ))}
    </div>
  );
}
